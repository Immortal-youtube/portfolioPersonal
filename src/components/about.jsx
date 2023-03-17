import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode,faArrowDown } from "@fortawesome/free-solid-svg-icons";
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
        str="bg-noob  w-screen h-screen bg-cover bg-fixed"
    }else{
        str="bg-noob w-screen h-full bg-cover bg-fixed"
    }
    
    return (
        
        <div className={str} ref = {inputRef}>
            <Helmet>
            <title>About me!</title>
        </Helmet>
        <Navbar/>
        <h1 className="text-center text-purple-300 text-6xl font-suk animate">About me!</h1>
        <h2 className = "text-purple-400 border-l-4 border-dashed border-purple-500 px-5 py-2 font-bold font-par">My Experience :</h2>
        
        <p className = "px-5 pt-3 pb-12 font-par text-white">I am a self-taught Programmer. I have learnt from the Internet. I have gathered
        knowledge from everywhere I can to achieve my skill level. I have helped many people and given advice to many others. </p>

        <h2 className = "text-purple-400 px-5 py-2 border-l-4 border-dashed border-purple-500 font-bold font-par">My Intrests and Hobbies :</h2>
        <p className="px-5 pt-3 pb-12 font-par text-white">I enjoy playing football and basketball. I am also an Amateur cuber with the fastest time of 19.56s. I enjoy
        rap music and of course, programming</p>
        
        
        <h2 className="text-purple-400 px-5 py-2 border-l-4 border-dashed border-purple-500 font-bold font-par ">My Programming Path : </h2>
        <ul className="text-white font-par px-5 py-2 text-center">
        <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/> I started with a Python Udemy Course</li>
        <li className="py-2 animate-bounce"><FontAwesomeIcon icon = {faArrowDown} className="text-yellow-300 text-3xl -translate-x-40 -rotate-45"/></li>
        <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/> Then learnt Java so that I could code Minecraft Plugins.</li>
        <li className="py-2 animate-bounce"><FontAwesomeIcon icon = {faArrowDown} className="text-yellow-300 text-3xl translate-x-40 rotate-45"/></li>
        <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/> I then moved on to coding tougher programs to push my skills to the limit.</li>
        <li className="py-2 animate-bounce"><FontAwesomeIcon icon = {faArrowDown} className="text-yellow-300 text-3xl -translate-x-40 -rotate-45"/></li>
        <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/> From there I was intrested in web developement so started learning JavaScript.</li>
        <li className="py-2 animate-bounce"><FontAwesomeIcon icon = {faArrowDown} className="text-yellow-300 text-3xl translate-x-40 rotate-45"/></li>
        <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/> I initally started making websites with vanilla JavaScript, HTML and CSS.</li>
        <li className="py-2 animate-bounce"><FontAwesomeIcon icon = {faArrowDown} className="text-yellow-300 text-3xl -translate-x-40 -rotate-45"/></li>
        <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/> I then moved on to ExpressJS which had made my life easier.</li>
        <li className="py-2 animate-bounce"><FontAwesomeIcon icon = {faArrowDown} className="text-yellow-300 text-3xl translate-x-40 rotate-45"/></li>
        <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/> I then got into Arduinos and learnt C++ for a Project</li>
        <li className="py-2 animate-bounce"><FontAwesomeIcon icon = {faArrowDown} className="text-yellow-300 text-3xl -translate-x-40 -rotate-45"/></li>
        <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/> I then learnt ReactJS. It was hard but it saved me a lot of time now</li>
        <li className="py-2 animate-bounce"><FontAwesomeIcon icon = {faArrowDown} className="text-yellow-300 text-3xl translate-x-40 rotate-45"/></li>
        <li className="py-2"> <FontAwesomeIcon icon={faCode} className="text-emerald-300"/> I am now currently learning golang and improving my skills in other languages as well</li>
        </ul>
        </div> 
    );
    
}