
import { useEffect, useState } from "react";
import { useRef } from "react";
import Navbar from './navbar';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons";
const discord = require('./icons/discord.png')
const youtube = require('./icons/youtube.png')
const github = require('./icons/github.png')





export default function Counter() { 
    let str = ""
    const inputRef = useRef(0);
    let [x_html,setX_html] = useState(0) ;
    let [x_screen,setX_screen] = useState(0) ;
    useEffect(() => {
        setX_html(inputRef.current.getBoundingClientRect().height)
        setX_screen(window.screen.availHeight)
        
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
        str="bg-noob w-screen h-screen bg-cover bg-fixed"
    }else{
        str="bg-noob w-full h-full bg-cover bg-fixed"
    }
    console.log(x_html)
    console.log(x_screen)

    return (
        
        <div className={str} ref={inputRef}>
        
            <Helmet>
                <title>Immortal</title>
            </Helmet>
            <Navbar />
            <h1 className='font-suk text-purple-300 text-6xl text-center'>Hey there!, I'm Ansh</h1>
            <p className= 'font-par text-center text-white py-5'>I am a <p className='inline text-purple-400'>full stack developer</p>.I have made many minecraft plugins, Discord Bots, Arduino Projects, Websites, etc.
                <br/>My main languages are Python, Java and I have worked with MongoDB,SQL,etc.
            </p>
            <div className='text-center my-9'>
                <a className = 'tooltip tooltip-bottom' data-tip='Join my server!' href='https://discord.gg/gqp5nMzwTY' target='_blank' rel="noreferrer"><img src={discord} alt='discord' className=' hover:animate-bounce w-20 h-20 mx-4'/></a>
                <a className = 'tooltip tooltip-bottom' data-tip='Check out my channel!' href='https://www.youtube.com/channel/UCgppWM8JtpTfEYp8sa8XHEw' target='_blank' rel="noreferrer"><img src={youtube} alt='discord' className='hover:animate-bounce w-20 h-20 mx-4'/></a>
                <a className = 'tooltip tooltip-bottom' data-tip='See my projects!' href='https://github.com/Immortal-youtube' target='_blank' rel="noreferrer"><img src={github} alt='discord' className='hover:animate-bounce w-20 h-20 mx-4 bg-white rounded-full'/></a>
            </div>
            {/* <h2 className=' font-par text-white flex-auto px-5 '>On going Projects:
                <br/> <FontAwesomeIcon icon={faCode} /> Computer Vision based Cube Solver(Kociemba's Algorithm)
                <br/> <FontAwesomeIcon icon={faCode} /> Updating Discord bot  
                <br/> <FontAwesomeIcon icon={faCode} /> Voice Assistant using ChatGPT
            </h2> */}
            <h2 className=' font-par text-white flex-auto px-5'>On going Projects:</h2>
            <ul>
                <li className="font-par text-white flex-auto px-5 py-1">
                <FontAwesomeIcon icon={faCode} className="text-emerald-400"/> Computer Vision based Cube Solver(Kociemba's Algorithm)
                </li>
                <li className="font-par text-white flex-auto px-5 py-1">
                <FontAwesomeIcon icon={faCode} className="text-emerald-400"/> Updating Discord bot
                </li>
                <li className="font-par text-white flex-auto px-5 py-1">
                <FontAwesomeIcon icon={faCode} className="text-emerald-400"/> Voice Assistant using ChatGPT
                </li>
            </ul>
            <h2 className=' text-purple-400 font-par flex-auto pt-5 px-5'>
                Connect with me on Discord or mail me at: 
            </h2>
            <h2 className='text-purple-300 font-par flex-auto px-5'>immortal.gaming0808@gmail.com</h2>
        </div>
        
    );
        
    
}
 