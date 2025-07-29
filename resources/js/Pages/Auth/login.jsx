import React from 'react';
import { useForm } from '@inertiajs/react';

function Login() {
  const { data, setData, errors, processing, post } = useForm({
    email: '',
    password: '',
  });

  function submit(e) {
    e.preventDefault();
    post('/login');
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover z-0"
      >
        <source src="/assets/water.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
             
      {/* Glassmorphic Form Container */}
      <div
        className="
          relative
          z-20
          w-full
          max-w-sm sm:max-w-md
          bg-white bg-opacity-10
          backdrop-blur-xl
          border border-white border-opacity-10
          ring-1 ring-white ring-opacity-10
          rounded-3xl
          shadow-[0_4px_30px_rgba(0,0,0,0.2)]
          p-6 sm:p-8
          text-white
          mx-auto
        "
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 select-none">
          🗳️ Login to Vote
        </h2>

        <form onSubmit={submit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. yourname@ucstgi.edu.mm"
              className={`w-full mt-1 px-4 py-2 rounded-lg bg-white bg-opacity-20 placeholder-white placeholder-opacity-70 border ${
                errors.email ? 'border-red-400' : 'border-white border-opacity-40'
              } text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              className={`w-full mt-1 px-4 py-2 rounded-lg bg-white bg-opacity-20 placeholder-white placeholder-opacity-70 border ${
                errors.password ? 'border-red-400' : 'border-white border-opacity-40'
              } text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            disabled={processing}
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md disabled:opacity-50 transition"
          >
            {processing ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
