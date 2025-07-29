import { useForm } from '@inertiajs/react';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

function Signup() {
  const { data, setData, errors, processing, post } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  function submit(e) {
    e.preventDefault();
    post('/signup');
  }
  useGSAP(() => {
   
    const bubbles = gsap.utils.toArray(".bubble");

    bubbles.forEach((bubble) => {
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 2,
        defaults: {
          duration: 2 + Math.random(),
          ease: "power1.inOut",
        },
      });

      tl.to(bubble, {
        x: Math.random() * 800 - 400,
        y: Math.random() * 800 - 400,
        scale: 0.8 + Math.random() * 0.4,
        rotate: Math.random() > 0.5 ? 360 : -360,
      });
    });

    
    gsap.from(".text", {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });

    gsap.to(".text h1", {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });

    gsap.to(".text h3", {
      opacity: 0.7,
      repeat: -1,
      yoyo: true,
      duration: 2,
      delay: 1,
      ease: "sine.inOut",
    });

  // const heroSplit= new SplitText('.title',{type:'chars,words'});
    

  
  //      gsap.from(heroSplit.chars,{
  //       yPercent:300,
  //       duration:1.8,
  //       ease:'expo.out',
  //       stagger:0.06,
  //      })

  }, []);
   

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side Background Image */}
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

      
        


      <div
          className="hidden md:block md:w-1/2 bg-cover bg-center z-10  " >

           

         <div className="  text absolute top-1/3 left-1/4 transform -translate-x-2/3 -translate-y-1/3 text-white text-center space-y-2">
     
          <div className='mb-10'>
        <h1 className="    text-4xl font-extrabold tracking-wide text-blue-100 drop-shadow-lg">
        Your Choice, Their Crown
      </h1>
      <h3 className="text-xl font-semibold text-blue-200 italic">
        Vote for the Most Regal Beauty!
      </h3>
     </div> 

<div>
      <video autoPlay loop muted className="  w-full max-w-xl mx-auto rounded-2xl shadow">
  <source src="/assets/voting-video(4).webm" type="video/webm" />
  Your browser does not support the video tag.
</video>
</div>
    </div>



         
      
       <div className="relative w-full h-screen overflow-hidden bg-transparent">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="bubble w-10 h-10 rounded-full absolute bg-gradient-to-tr from-blue-300 to-cyan-500/10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}
    </div> 
      </div>


      {/* Right Side Sign-up Box */}
      <div className="flex items-center justify-center w-full md:w-1/2 z-10 bg-gradient-to-tr from-blue-300 to-cyan-500/5 p-6">
        <div className="bg-transparent bg-opacity-90 backdrop-blur-md rounded-3xl  max-w-md w-full p-8 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
          <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8 select-none">Create Your Account</h1>

          <form onSubmit={submit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your full name"
                className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-4 transition ${
                  errors.name ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
                }`}
                value={data.name}
                onChange={e => setData("name", e.target.value)}
                autoComplete="name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-4 transition ${
                  errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
                }`}
                value={data.email}
                onChange={e => setData("email", e.target.value)}
                autoComplete="email"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 font-semibold text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="At least 8 characters"
                className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-4 transition ${
                  errors.password ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
                }`}
                value={data.password}
                onChange={e => setData("password", e.target.value)}
                autoComplete="new-password"
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="password_confirmation" className="block mb-1 font-semibold text-gray-700">Confirm Password</label>
              <input
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                placeholder="Confirm your password"
                className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-4 transition ${
                  errors.password_confirmation ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
                }`}
                value={data.password_confirmation}
                onChange={e => setData("password_confirmation", e.target.value)}
                autoComplete="new-password"
              />
              {errors.password_confirmation && <p className="mt-1 text-sm text-red-600">{errors.password_confirmation}</p>}
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {processing ? 'Signing up...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
