//import React, { Component } from 'react';
//import { useState } from 'react';
import Navbar from './navbar';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons";
const discord = require('./icons/discord.png')
const youtube = require('./icons/youtube.png')
const github = require('./icons/github.png')




function Counter() { 
    let str=""
    console.log(window.innerHeight)
    if(window.innerHeight < 820){   
        str="bg-noob w-full h-full bg-cover"
    }else{
        str="bg-noob w-screen h-screen bg-cover"
    }

        return (
            
            <html className={str} id="main">
                <Helmet>
                    <title>Immortal</title>
                </Helmet>
                <Navbar />
                <h1 className='font-suk text-emerald-300 text-6xl text-center'>Hey there!, I'm Ansh</h1>
                <p className= 'font-par text-center text-white py-5'>I am a <h3 className='inline text-emerald-600'>full stack developer</h3>.I have made many minecraft plugins, Discord Bots, Arduino Projects, Websites, etc.
                    <br/>My main languages are Python, Java and I have worked with MongoDB,SQL,etc.
                </p>
                <div className='text-center my-9'>
                    <a className = 'tooltip tooltip-bottom' data-tip='Join my server!' href='https://discord.gg/gqp5nMzwTY' target='_blank' rel="noreferrer"><img src={discord} alt='discord' className=' hover:animate-bounce w-20 h-20 mx-4'/></a>
                    <a className = 'tooltip tooltip-bottom' data-tip='Check out my channel!' href='https://www.youtube.com/channel/UCgppWM8JtpTfEYp8sa8XHEw' target='_blank' rel="noreferrer"><img src={youtube} alt='discord' className='hover:animate-bounce w-20 h-20 mx-4'/></a>
                    <a className = 'tooltip tooltip-bottom' data-tip='See my projects!' href='https://github.com/Immortal-youtube' target='_blank' rel="noreferrer"><img src={github} alt='discord' className='hover:animate-bounce w-20 h-20 mx-4'/></a>
                </div>
                <h2 className=' font-par text-white flex-auto px-5 '>On going Projects:
                    <br/> <FontAwesomeIcon icon={faCode} /> Computer Vision based Cube Solver(Kociemba's Algorithm)
                    <br/> <FontAwesomeIcon icon={faCode} /> Updating Discord bot  
                    <br/> <FontAwesomeIcon icon={faCode} /> Voice Assistant using ChatGPT
                </h2>
                <h2 className=' text-white font-par flex-auto pt-5 px-5'>
                    Connect with me on Discord or mail me at:<br/> <h2 className='text-emerald-300'>immortal.gaming0808@gmail.com</h2>
                </h2>
            </html>
            
        );
        
    
}
 
export default Counter;