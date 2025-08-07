import React, { use, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { usePage } from '@inertiajs/react';
import CountUp from 'react-countup';

gsap.registerPlugin(SplitText);

const FirstSection = () => {
  const{maleCount,femaleCount,userCount} = usePage().props;
  const titleRef = useRef();
   const subtitleRef = useRef();
   const btn=useRef();
   const count=useRef();

  useGSAP(() => {
    const splittitle = new SplitText(titleRef.current, { type: "words" });
    const splitpara=new SplitText(subtitleRef.current, { type: "lines" });
  

    gsap.from(splittitle.words, {
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(splitpara.lines, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      delay:1,
      ease: "power4.out",
    });
gsap.fromTo(btn.current, {
  opacity: 0,
  y: 50,
}, {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power4.out",
  delay: 1.5, // optional, to stagger after previous animations
});

gsap.fromTo(count.current, {
  opacity: 0,
  y: 50,
}, {
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power4.out",
  delay: 2, // optional, to stagger after previous animations
});





  }, []);

  return (



        


      <div className='flex flex-col items-center w-full h-screen justify-between px-4 py-24'>

       




        <div className="w-full h-2/3 bg-transparent flex gap-y-16 flex-col items-center  justify-start text-center relative ">
     
        <div
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-white mt-10"
        >
          Vote for your King & Queen
        </div>

        <div
          ref={subtitleRef}
          className="text-lg max-w-2xl mx-auto "
        >
          Make your voice heard! Support your favorite male and female candidates
          by casting your vote. You can vote only once, so choose wisely!
        </div>
        

       <a href="/vote" className="w-full flex justify-center">
        <button ref={btn}>
          <span className="text-lg font-semibold text-white bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
            Vote Now
          </span>
        </button>
       </a>
    </div> 

     
     <div className='grid grid-cols-3 gap-4 w-full max-w-4xl mx-auto  h-1/4    ' ref={count}>
        <div className="bg-white p-6 rounded shadow text-center  flex items-center flex-col justify-center">
          <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
          <p className="text-3xl font-bold text-purple-600"> 
            <CountUp
              start={0}
              end={userCount}
              duration={8}
              separator=','
              useEasing={true}  
              redraw={false}
              delay={3}
            
            />
          </p>
        </div>

         <div className="bg-white p-6 rounded shadow text-center flex items-center flex-col justify-center">
          <h2 className="text-xl font-semibold text-gray-700">Total Male Candidates</h2>
          <p className="text-3xl font-bold text-purple-600"> 
            <CountUp
              start={0}
              end={maleCount}
              duration={6}
              separator=','
              useEasing={true}  
              redraw={false}
               delay={3}
            
            
            />
          </p>
        </div>
         <div className="bg-white p-6 rounded shadow text-center flex items-center flex-col justify-center">
          <h2 className="text-xl font-semibold text-gray-700">Total Female Candidates</h2>
          <p className="text-3xl font-bold text-purple-600"> 
            <CountUp
              start={0}
              end={femaleCount}
              duration={6}
              separator=','
              useEasing={true}  
              redraw={false}
               delay={3}
            
            
            />
          </p>
        </div>
    

     </div>


          
        

     
      </div>
        
        
        
   
  );
};

export default FirstSection;
