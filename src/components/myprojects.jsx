import { Helmet } from "react-helmet";
import Navbar from "./navbar";


export default function MyProject(){
    return(
        <div className="bg-noob w-screen h-screen bg-cover">
            <Helmet>
                <title>My Projects</title>
            </Helmet>
            <Navbar/>
            <h1 className="font-suk text-emerald-300 text-6xl text-center">Work In Progress</h1>
        </div>
    );
}