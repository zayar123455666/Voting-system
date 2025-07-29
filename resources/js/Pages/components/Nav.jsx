import { Link, usePage, router } from "@inertiajs/react";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
function Nav() {
  const { auth } = usePage().props;

  function handleLogout(e) {
    e.preventDefault();
    router.post("/logout");
  }

  return (
    <>
      <header className=" sticky  top-0 left-0 w-full z-50">
        
       <nav className="relative flex items-center justify-between px-4 py-1 bg-black/10 text-white font-semibold">
  
  <div className="w-20 h-20">
    <a href="/"  className="w-full h-full ">
       <img src="/assets/logo.webp" alt="Logo" className="rounded-md"  />
    </a>
   
  </div>

  {/* Centered search */}
  <div className="absolute left-1/2 transform -translate-x-1/2 w-80">
    <form className="flex w-full items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-1 focus:outline-none"
      />
      <button type="submit" className="p-2 text-gray-600 hover:text-black">
        <AiOutlineSearch size={20} />
      </button>
    </form>
  </div>

  <div className="flex items-center w-1/4 justify-between">
    <Link href="#Home">Home</Link>
    <Link href="#About">About</Link>
    <Link href="#Contact">Contact</Link>

    {!auth.user && (
      <>
        <Link href="/login">Login</Link>
        <Link href="/signup">Sign Up</Link>
      </>
    )}

    {auth.user && (
      <div className="flex items-center gap-3">
        <FaUserCircle className="w-8 h-8 text-white" />
        <button onClick={handleLogout} className="nav-link">Logout</button>
      </div>
    )}
  </div>
</nav>

      </header>
      
    </>
  );
}

export default Nav;

