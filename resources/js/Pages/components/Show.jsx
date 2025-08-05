import React from 'react';
import { usePage } from '@inertiajs/react';

const Show = () => {
  const { candidate } = usePage().props;

  return (
    <div className="p-6 text-black bg-white rounded shadow-md">
        
      <h1 className="text-3xl font-bold mb-2">{candidate.name}</h1>
      <p className="text-lg">{candidate.bio}</p>
    </div>
  );
};

export default Show;
