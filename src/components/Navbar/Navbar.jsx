import { useState } from "react";
import Link from "../Link/Link";
import { RiMenuFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/products', name: 'Products' }
    ];

    return (
        <div className="m-4">
            <div className="text-xl md:hidden" onClick={ () => setOpen(!open) }>
                {
                    open===true ? <IoCloseSharp />:<RiMenuFill />
                }
            
            </div>
            <ul className={ `md:flex duration-1000 absolute md:static
            ${open ?'top-12':'-top-80'}
            bg-purple-200`}>
            {
                routes.map(route=><Link key={route.id} route={route}></Link>)
           }
            </ul> 
        </div>
    );
};

export default Navbar;