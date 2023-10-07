
import { useEffect, useState } from "react";
import { useRef } from "react";
import Navbar from './navbar';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Counter() { 
    let str = ""
    const inputRef = useRef(0);
    let [x_html,setX_html] = useState(0) ;
    let [x_html_width,setX_html_width] = useState(0);
    let [x_screen,setX_screen] = useState(0) ;
    useEffect(() => {
        setX_html(inputRef.current.getBoundingClientRect().height)
        setX_screen(window.screen.availHeight)
        setX_html_width(window.screen.availWidth)
    }, [])
    
    
    // console.log(window.outerHeight)
    // console.log(window.innerWidth)
    // if(window.innerHeight < 670){
    //     str=" w-full h-full bg-cover"
    //     if(window.innerWidth < 300){
    //         str=" w-screen h-screen bg-cover"
    //     }else{
    //         str=" w-full h-full bg-cover"
    //     }
    // }else{
    //     str=" w-screen h-screen bg-cover"
    // }
        
    if (x_html < x_screen){
        console.log("shit")
        str="bg-[#050E1F] w-screen h-screen selection:bg-slate-700 bg-cover bg-fixed "
    }else{
        console.log("wtf")
        str="bg-[#050E1F] w-full h-full selection:bg-slate-700 bg-cover bg-fixed "
    }

    
    if(x_html_width < 672){
        console.log("short")
    }
    console.log(x_html)
    console.log(x_screen)
    
    return (
        
        <div className={str} ref={inputRef}>
            <div class="h-screen scrollbar-thin scrollbar-thumb-custom scrollbar-track-custom-light overflow-y-scroll">
                
            
            <Helmet>
                <title>Immortal</title>
            </Helmet>
            <Navbar />
            
            <h1 className='font-suk text-purple-300 text-6xl text-center'>Hey there, I'm Ansh !</h1>
            
            <p className= 'font-par text-center text-white py-5 pb-14 px-5'>I am a <p className='inline font-high text-purple-400'>full stack developer</p>.I have made many minecraft plugins, Discord Bots, Arduino Projects, Websites, etc.
                <br/>My main languages are Python, Java and I have worked with MongoDB,SQL,etc. If you would like to collaborate with me on any project,
                <br />You can connect with me on <p className='inline font-high text-purple-400'><a href='https://discord.gg/gyfCYxxQep' target='_blank' rel="noreferrer" >Discord</a></p> or on <p className='inline font-high text-purple-400'><a href='https://github.com/Immortal-youtube' target='_blank' rel="noreferrer" >Github</a></p> Make 
                sure to check my <p className='inline font-high text-purple-400'><a href='https://www.youtube.com/channel/UCgppWM8JtpTfEYp8sa8XHEw' target='_blank' rel="noreferrer" >Youtube</a></p> channel as well.
            </p>
            
                        
            <h2 className=' font-high text-purple-400 px-5'>On going Projects:</h2>
            <ul className="pb-14">
                <li className="font-par text-white  px-5 py-1">
                <FontAwesomeIcon icon={faCode} className="text-emerald-400"/> Computer Vision based Cube Solver(Kociemba's Algorithm)
                </li>
                <li className="font-par text-white px-5 py-1">
                <FontAwesomeIcon icon={faCode} className="text-emerald-400"/> Updating Discord bot
                </li>
                <li className="font-par text-white px-5 py-1">
                <FontAwesomeIcon icon={faCode} className="text-emerald-400"/> Voice Assistant using ChatGPT
                </li>
                <li className="font-par text-white px-5 py-1">
                <FontAwesomeIcon icon={faCode} className="text-emerald-400"/> Project CLI (To setup different kinds of Projects)
                </li>
                <li className="font-par text-white px-5 py-1">
                <FontAwesomeIcon icon={faCode} className="text-emerald-400"/> Personal Firewall
                </li>
            </ul>
            <h2 className=' font-high text-purple-400 px-5'>My thoughts about Programming :</h2>
            <p className="font-par text-white pb-14 px-5">Indeed, programming is the industry of the future. First off, programming is not something that is taught in schools. You learn to memorise syntax in school in order to correctly answer questions and gain points. Learning if and else loops will never be able to teach programming's actual enjoyment. Although the initial stages of the Process will be tedious, they will be worthwhile. Just one piece of information can enable you to achieve so much more.
            </p>
            
            </div>
        </div> 
    ); 
}
 
