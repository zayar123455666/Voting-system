

// ✅ FIXED IMPORT PATHS
import Nav from "./components/Nav";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import { usePage } from '@inertiajs/react';

const Home = () => {
  
  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-blue-400 to-purple-800 text-white'>
        <Nav/>
       
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    </>
  )
}

export default Home;
