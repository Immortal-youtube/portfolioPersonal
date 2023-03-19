import Navbar from "./navbar";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";


    

export default function MyProject(){

    let str = ""
    const inputRef = useRef(0);
    let [x_html,setX_html] = useState(0) ;
    let [x_screen,setX_screen] = useState(0) ;
    useEffect(() => {
        setX_html(inputRef.current.getBoundingClientRect().height)
        setX_screen(window.screen.availHeight)
        
    }, [])

    if (x_html < x_screen){
        console.log("shit")
        str="bg-noob w-screen h-screen selection:bg-slate-700 bg-cover bg-fixed"
    }else{
        console.log("wtf")
        str="bg-noob w-full h-full selection:bg-slate-700 bg-cover bg-fixed"
    }
    return(
        <div className={str} ref={inputRef}>
            <Helmet>
                <title>My Projects</title>
            </Helmet>
            <Navbar />
            <h2 className="font-suk text-purple-300 text-6xl text-center">Work In Progress</h2>
        </div>
    );
}