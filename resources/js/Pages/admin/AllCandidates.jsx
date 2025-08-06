import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';
import { Link, router } from '@inertiajs/react';

const AllCandidates = () => {
  const { candidates, maleCount, femaleCount, userCount } = usePage().props;
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8 flex justify-between items-center flex-col md:flex-row gap-4">
        <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard - Candidates</h1>
        <Link
          href="/addCandidates"
          className="inline-block bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition"
        >
          + Add New Candidate
        </Link>
      </header>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
          <p className="text-3xl font-bold text-purple-600">{userCount}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-semibold text-gray-700">Male Candidates</h2>
          <p className="text-3xl font-bold text-blue-600">{maleCount}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-semibold text-gray-700">Female Candidates</h2>
          <p className="text-3xl font-bold text-pink-600">{femaleCount}</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search candidates by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Table Section */}
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
            {filteredCandidates.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  No candidates match your search.
                </td>
              </tr>
            ) : (
              filteredCandidates.map((candidate) => (
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
                          router.delete(`/admin/candidates/${candidate.id}`);
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
