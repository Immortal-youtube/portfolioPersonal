import {Link} from "react-router-dom"
// const icon = require("./icons/channel.jpg")

export default function Navbar(){
    return(
        <div className="scrollbar scrollbar-thumb-cyan-800 scrollbar-track-sky-500 overflow-x-scroll">
        <nav className='navbar text-purple-400 font-high bg-black sticky top-0 w-full'>
            <ul>
                
                <li>
                    <Link className="mx-4 text-center px-4 py-4 rounded-xl hover:bg-emerald-400 duration-300 hover:text-black flex" to="/">Home</Link>
                </li >
                <li>
                    <Link className="mx-4 text-center px-4 py-4 rounded-xl hover:bg-emerald-400 duration-300 hover:text-black flex" to="/about">About</Link>
                </li>
                <li>
                    <Link className="mx-4 text-center px-4 py-4 rounded-xl hover:bg-emerald-400 duration-300 hover:text-black flex" to="/myprojects">My Projects</Link>
                </li>
                
            </ul>
        </nav>
        </div>
        
    );
}