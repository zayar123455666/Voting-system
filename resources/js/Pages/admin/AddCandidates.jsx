import React from 'react';
import { useForm } from '@inertiajs/react';

const AddCandidates = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    gender: '',
    image: null,
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setData(name, files[0]);
    } else {
      setData(name, value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/candidates'); // adjust route if needed
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg space-y-6"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Add New Candidate</h2>

        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-lg border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } shadow-sm focus:ring-purple-500 focus:border-purple-500`}
            placeholder="Enter candidate name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Gender Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            value={data.gender}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-lg border ${
              errors.gender ? 'border-red-500' : 'border-gray-300'
            } shadow-sm focus:ring-purple-500 focus:border-purple-500`}
          >
            <option value="" disabled>
              Select gender
            </option>
            <option value="male">👑 Male</option>
            <option value="female">👑 Female</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className={`mt-1 block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-purple-100 file:text-purple-700
                        hover:file:bg-purple-200`}
          />
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
        </div>

        {/* Bio Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={data.bio}
            onChange={handleChange}
            rows="4"
            placeholder="Write a short biography..."
            className={`mt-1 block w-full rounded-lg border ${
              errors.bio ? 'border-red-500' : 'border-gray-300'
            } shadow-sm focus:ring-purple-500 focus:border-purple-500`}
          ></textarea>
          {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={processing}
            className="px-6 py-2 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition duration-200 shadow-lg disabled:opacity-50"
          >
            {processing ? 'Submitting...' : 'Add Candidate'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCandidates;
