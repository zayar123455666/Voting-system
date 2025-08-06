import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';

const EditCandidate = () => {
  const { candidate } = usePage().props;
  const { data, setData, put, processing, errors } = useForm({
    name: candidate.name || '',
    gender: candidate.gender || '',
    bio: candidate.bio || '',
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(`/admin/candidates/${candidate.id}`);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Edit Candidate</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
          />
          {errors.name && <div className="text-red-500">{errors.name}</div>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Gender</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={data.gender}
            onChange={(e) => setData('gender', e.target.value)}
          >
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <div className="text-red-500">{errors.gender}</div>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Bio</label>
          <textarea
            className="w-full border px-3 py-2 rounded"
            value={data.bio}
            onChange={(e) => setData('bio', e.target.value)}
          />
          {errors.bio && <div className="text-red-500">{errors.bio}</div>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Photo</label>
          <input
            type="file"
            className="w-full"
            onChange={(e) => setData('image', e.target.files[0])}
          />
          {errors.image && <div className="text-red-500">{errors.image}</div>}
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700"
          disabled={processing}
        >
          Update Candidate
        </button>
      </form>
    </div>
  );
};

export default EditCandidate;
