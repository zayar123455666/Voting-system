import React from 'react';
import { usePage, Link } from '@inertiajs/react';

const Vote = () => {
  const { candidates } = usePage().props;

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Male Candidates</h1>
      <ul className="space-y-2">
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            <Link 
              href={`/show/${candidate.id}`} 
              className="block p-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              {candidate.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vote;
