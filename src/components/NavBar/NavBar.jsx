import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";



const NavBar = () => {
     const [open, setOpen] = useState(false);
     const routes = [
          { path: '/', name: 'Home', id: 1 },
          { path: '/about', name: 'About', id: 2 },
          { path: '/services', name: 'Services', id: 3 },
          { path: '/contact', name: 'Contact', id: 4 },
          { path: '/dashboard', name: 'Dashboard', id: 5 }
     ];

     return (
          <nav className="bg-red-500 text-black p-4">
               <div onClick={() => setOpen(!open)} className="text-2xl md:hidden " >
                    {
                         open === true ? <MdOutlineClose /> : <RiMenu2Fill></RiMenu2Fill>
                    }

               </div>
               <ul className={`md:flex duration-1000 md:justify-between lg:justify-between absolute md:static bg-white md:bg-red-500 mt-6 md:mt-0 p-4 md:p-0 rounded-xl
               ${open ? 'top-10' : '-top-72'}
               `}>
                    {
                         routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
               </ul>

          </nav >
     );
};

export default NavBar;