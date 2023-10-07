import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";


export default function About(){
    let str = ""
    const inputRef = useRef(0);
    let [x_html,setX_html] = useState(0) 
    let [x_screen,setX_screen] = useState(0) 

    useEffect(() => {
        setX_html(inputRef.current.getBoundingClientRect().height)
        setX_screen(window.screen.availHeight)
        
    }, [])

    

    // const height = _ => {
    //     console.log(inputRef.current.getBoundingClientRect().height);
    // };
    // useEffect(() => {
    //     window.addEventListener("resize", height);
    //     return () => {
    //         window.removeEventListener("resize", height);
    //     };
    // })

    
    // console.log(document.getElementById("main").getBoundingClientRect().height)
    // console.log(window.screen.availHeight)
    // if (document.getElementById("main").getBoundingClientRect().height < window.screen.availHeight){
    //     str="bg-noob w-screen h-screen bg-cover"
    // }else{
    //     str="bg-noob w-full h-full bg-cover"
    // }
    if (x_html < x_screen){
        str="bg-[#050E1F]  w-screen h-screen selection:bg-slate-700 bg-cover bg-fixed"
    }else{
        str="bg-[#050E1F] w-full h-full selection:bg-slate-700 bg-cover bg-fixed"
    }
    
    return (
        
        <div className={str} ref = {inputRef}>
            <div class="h-screen scrollbar-thin scrollbar-thumb-custom scrollbar-track-custom-light overflow-y-scroll">
                <Helmet>
                    <title className="">About me!</title>
                </Helmet>
                <Navbar/>
                
                <h1 className="text-center text-purple-300 text-6xl font-suk animate pb-10">About me!</h1>
                
                <div className="pb-10">
                    <div className="duration-300 pb-10">
                        <h2 className = "text-purple-400 border-l-4 border-dashed border-purple-500 px-5 py-2 font-bold font-high">My Experience :</h2>
                        
                        <p className = "px-5 pt-3 pb-12 font-par text-white">I learned how to programme on my own. The Internet has taught me a lot. To reach my ability level, I have accumulated knowledge from every possible source. I have assisted numerous individuals and advised numerous more. The programming taught in school never interested me. I didn't realise how interesting this genre is until I started exploring it on my own. Now, I look for solutions to challenges in real life using my abilities and knowledge.</p>
                    </div>
                    <div className="duration-300">
                        <h2 className = "text-purple-400 px-5 py-2 border-l-4 border-dashed border-purple-500 font-bold font-high">My Intrests and Hobbies :</h2>
                        <p className="px-5 pt-3 pb-12 font-par text-white"><p className="text-purple-400 font-high inline">Basketball</p> and <p className="text-purple-400 font-high inline">Football</p> are my favourite sports. I am also an <p className="text-purple-400 font-high inline">Amateur Cuber</p> with the fastest time of 19.56s. I like programming and rap music, of course. <p className="text-purple-400 font-high inline">Eminem</p> is my favourite rapper, and <p className="text-purple-400 font-high inline">Arsenal</p> is my favourite soccer team. I recently developed an interest in <p className="text-purple-400 font-high inline">Formula 1</p>.</p>
                    </div>
                    <h2 className="text-white font-high px-5">Football : 80%</h2>
                    <div className="bg-blue-500 mx-5 h-3 w-72 mb-3"></div>
                    <h2 className="text-white font-high px-5">Cubing : 100%</h2>
                    <div className="bg-red-500 mx-5 h-3 w-80 mb-3"></div>
                    <h2 className="text-white font-high px-5">Eminem : 50%</h2>
                    <div className="bg-yellow-500 mx-5 h-3 w-40 mb-3"></div>
                    <h2 className="text-white font-high px-5">Formula 1: 60%</h2>
                    <div className="bg-orange-500 mx-5 h-3 w-44 mb-3"></div>
                </div> 
                
                
                <h2 className="text-purple-400 px-5 py-2 border-l-4 border-dashed border-purple-500 font-bold font-high ">My Programming Path : </h2>
                <ul className="text-white font-par px-5 py-2">
                    <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/> I started with a Python Udemy Course</li>
                    <li className="border-l-4 ml-2 border-dashed border-blue-600 py-2 ">&#8192;</li>
                    <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/>Then learnt Java so that I could code Minecraft Plugins.</li>
                    <li className="border-l-4 ml-2 border-dashed border-blue-600 py-2">‎‎‎‎‎‎</li>
                    <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/> I then moved on to coding tougher programs to push my skills to the limit.</li>
                    <li className="border-l-4 ml-2 border-dashed border-blue-600 py-2">‎‎‎‎‎‎</li>
                    <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/> From there I was intrested in web developement so started learning JavaScript.</li>
                    <li className="border-l-4 ml-2 border-dashed border-blue-600 py-2">‎‎‎‎‎‎</li>
                    <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/> I initally started making websites with vanilla JavaScript, HTML and CSS.</li>
                    <li className="border-l-4 ml-2 border-dashed border-blue-600 py-2">‎‎‎‎‎‎</li>
                    <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/> I then moved on to ExpressJS which had made my life easier.</li>
                    <li className="border-l-4 ml-2 border-dashed border-blue-600 py-2">‎‎‎‎‎‎</li>
                    <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/> I then got into Arduinos and learnt C++ for a Project</li>
                    <li className="border-l-4 ml-2 border-dashed border-blue-600 py-2">‎‎‎‎‎‎</li>
                    <li className="py-2"> <FontAwesomeIcon icon={faCode} className= "text-emerald-300"/> I then learnt ReactJS. It was hard but it saved me a lot of time now</li>
                    <li className="border-l-4 ml-2 border-dashed border-blue-600 py-2">‎‎‎‎‎‎</li>
                    <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/> I am now currently learning golang and improving my skills in other languages as well</li>
                </ul>
                
            </div>
            
        </div>
            
        
        
        
    );
    
}