
import { useEffect, useState } from "react";
import { useRef } from "react";
import Navbar from './navbar';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons";
// const discord = require('./icons/discord.png')
// const youtube = require('./icons/youtube.png')
// const github = require('./icons/github.png')
// const css1 = require('./icons/csspics/css1.png')
// const css2 = require('./icons/csspics/css2.png')
// const css3 = require('./icons/csspics/css3.png')
// const css4 = require('./icons/csspics/css4.png')
// const css5 = require('./icons/csspics/css5.png')
// const css6 = require('./icons/csspics/css6.png')
// const css7 = require('./icons/csspics/css7.png')
// const css8 = require('./icons/csspics/css8.png')
// const css9 = require('./icons/csspics/css9.png')
// const css10 = require('./icons/csspics/css10.png')
// const css11 = require('./icons/csspics/css11.png')
// const css12 = require('./icons/csspics/css12.png')
// const css13 = require('./icons/csspics/css13.png')
// const css14 = require('./icons/csspics/css14.png')





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
        console.log("shit")
        str="bg-noob  w-screen h-screen bg-cover bg-fixed"
    }else{
        console.log("wtf")
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
            <p className= 'font-par text-center text-white py-5'>I am a <p className='inline font-high text-purple-400'>full stack developer</p>.I have made many minecraft plugins, Discord Bots, Arduino Projects, Websites, etc.
                <br/>My main languages are Python, Java and I have worked with MongoDB,SQL,etc.
            </p>
            
            {/* <h2 className=' font-par text-white flex-auto px-5 '>On going Projects:
                <br/> <FontAwesomeIcon icon={faCode} /> Computer Vision based Cube Solver(Kociemba's Algorithm)
                <br/> <FontAwesomeIcon icon={faCode} /> Updating Discord bot  
                <br/> <FontAwesomeIcon icon={faCode} /> Voice Assistant using ChatGPT
            </h2> */}
            <h2 className=' font-high text-purple-400 flex-auto px-5'>On going Projects:</h2>
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
                <li className="font-par text-white flex-auto px-5 py-1">
                <FontAwesomeIcon icon={faCode} className="text-emerald-400"/> Project CLI (To setup different kinds of Projects)
                </li>
                <li className="font-par text-white flex-auto px-5 py-1">
                <FontAwesomeIcon icon={faCode} className="text-emerald-400"/> Personal Firewall
                </li>
            </ul>
            <h2 className="font-high text-purple-400 flex-auto px-5 py-2">Why do I code ?</h2>
            <p className="font-par text-white flex-auto px-5 py-1">Coding or Programming is considered as just memorising syntax and using it to build Applications 
            which is not true at all. Such stereotypes have forced many to switch gears and go away from code.</p>
            

            {/* <div className='flex justify-center space-x-4'>
                <a className = 'tooltip tooltip-bottom ' data-tip='Join my server!' href='https://discord.gg/gqp5nMzwTY' target='_blank' rel="noreferrer"><img src={discord} alt='discord' className='hover:scale-110 duration-300 rounded-full w-20 h-20 mx-4 hover:shadow-2xl hover:shadow-lime-300'/></a>
                <a className = 'tooltip tooltip-bottom ' data-tip='Check out my channel!' href='https://www.youtube.com/channel/UCgppWM8JtpTfEYp8sa8XHEw' target='_blank' rel="noreferrer"><img src={youtube} alt='discord' className='hover:scale-110 rounded-full duration-300 w-20 h-20 mx-4 hover:shadow-2xl hover:shadow-lime-300'/></a> 
                <a className = 'tooltip tooltip-bottom ' data-tip='See my projects!' href='https://github.com/Immortal-youtube' target='_blank' rel="noreferrer"><img src={github} alt='discord' className='hover:scale-110 duration-300 w-20 h-20 mx-4 bg-white rounded-full hover:shadow-2xl hover:shadow-lime-300'/></a>
            </div> */}

        </div>
        
    );
        
    
}
 