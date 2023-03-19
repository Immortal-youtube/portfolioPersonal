import {Link} from "react-router-dom"


export default function Navbar(){
    return(
        <div>
        <nav className='navbar text-purple-400 font-high bg-black '>
            <ul>
                <li>
                    <Link className="mx-4 text-center px-4 py-4 rounded-xl hover:bg-emerald-400 duration-300 hover:text-black" to="/">Home</Link>
                </li >
                <li>
                    <Link className="mx-4 text-center px-4 py-4 rounded-xl hover:bg-emerald-400 duration-300 hover:text-black " to="/about">About me</Link>
                </li>
                
            </ul>
        </nav>
        </div>
    );
}