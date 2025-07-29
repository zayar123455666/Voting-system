function CandidateCard({ name, role }) {
  return (
    <div className="bg-white text-black rounded-xl shadow-md p-4 hover:scale-105 transition-transform duration-300">
      <div className="w-full h-48 bg-gray-200 rounded-lg mb-4" />
      <h5 className="text-lg font-semibold">{name}</h5>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}