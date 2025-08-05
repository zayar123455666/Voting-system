import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const FirstSection = () => {
  const titleRef = useRef();
   const subtitleRef = useRef();
   const btn=useRef();

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
  duration: 1.5,
  ease: "power4.out",
  delay: 2, // optional, to stagger after previous animations
});


  }, []);

  return (



        


      <div className='flex items-center w-full h-screen justify-between px-4 py-8'>

       




        <div className="w-full h-screen bg-transparent flex gap-y-16 flex-col items-center  justify-start text-center relative ">
     
        <div
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-white mt-20"
        >
          Vote for your King & Queen
        </div>

        <div
          ref={subtitleRef}
          className="text-lg max-w-2xl mx-auto mb-10"
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
          
          <div>
            
          </div>

     
      </div>
        
        
        
   
  );
};

export default FirstSection;
