import React from 'react';
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

const AllCandidates = () => {
  const { candidates } = usePage().props;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard - Candidates</h1>
       <Link
  href="/addCandidates"
  className="inline-block bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition"
>
  + Add New Candidate
</Link>
      </header>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full table-auto">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="p-4 text-left">Photo</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Gender</th>
              <th className="p-4 text-left">Bio</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  No candidates found.
                </td>
              </tr>
            ) : (
              candidates.map((candidate) => (
                <tr
                  key={candidate.id}
                  className="border-b hover:bg-purple-50 transition"
                >
                  <td className="p-3">
                    <img
                      src={
                        candidate.image_path
                          ? `/storage/${candidate.image_path}`
                          : '/assets/placeholder.png'
                      }
                      alt={candidate.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-3 text-gray-800 font-semibold">{candidate.name}</td>
                  <td className="p-3 capitalize text-gray-600">{candidate.gender}</td>
                  <td className="p-3 text-gray-700 max-w-xs truncate">{candidate.bio || 'No bio provided.'}</td>
                  <td className="p-3 text-center space-x-3">
                    <button
                      onClick={() => window.location.href = `/admin/candidates/${candidate.id}/edit`}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit Candidate"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        if (confirm('Are you sure you want to delete this candidate?')) {
                          // You can add deletion logic here (like calling an API or submitting a form)
                          alert('Delete action triggered for candidate ID: ' + candidate.id);
                        }
                      }}
                      className="text-red-600 hover:text-red-800"
                      title="Delete Candidate"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCandidates;
