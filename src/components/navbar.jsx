import {Link} from "react-router-dom"
export default function Navbar(){
    return(
        <nav className='navbar text-emerald-500 font-par flex-auto bg-black'>
            <ul>
                <li>
                    <Link className="mx-4 px-4 py-4 rounded-xl hover:bg-emerald-200 hover:text-black" to="/">Home</Link>
                </li >
                <li>
                    <Link className="mx-4 px-4 py-4 rounded-xl hover:bg-emerald-200 hover:text-black" to="/about">About me</Link>
                </li>
            </ul>
        </nav>
    );
}