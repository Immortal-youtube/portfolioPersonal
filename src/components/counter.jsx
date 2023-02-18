//import React, { Component } from 'react';
//import { useState } from 'react';

import { Helmet } from 'react-helmet';
const discord = require('./icons/discord.png')
const youtube = require('./icons/youtube.png')
const github = require('./icons/github.png')
const python = require('./icons/python.png')
const java = require('./icons/java.png')
const c = require('./icons/c.png')
const mongodb = require('./icons/mongodb.png')
const sql = require('./icons/sql.png')


function Counter() { 
        let question = "skill issue"
        function update(){
            question = document.getElementById('questions').value
            
        }
        function enter(){
            document.getElementById('questions').value = ""      
            console.log(question)
            
            
        }
        return (
            <div className='bg-noob bg-no-repeat w-screen h-screen bg-cover'>
                <Helmet>
                    <title>Immortal</title>
                </Helmet>
                
                <h1 className='font-suk text-emerald-300 text-6xl text-center'>Hey there, I'm Ansh!</h1>
                <p className= 'font-par text-center py-3'>I am a full stack developer.I have made many minecraft plugins,Discord Bots, Arduino Projects,Websites,etc.
                    <br/>My main languages are Python, Java and I have worked with MongoDB,SQL,etc.
                </p>
                <div className='text-center'>
                    <a className = 'tooltip tooltip-bottom' data-tip='Join my server!' href='https://discord.gg/gqp5nMzwTY' target='_blank' rel="noreferrer"><img src={discord} alt='discord' className='w-20 h-20 m-3'/></a>
                    <a className = 'tooltip tooltip-bottom' data-tip='Check out my channel!' href='https://www.youtube.com/channel/UCgppWM8JtpTfEYp8sa8XHEw' target='_blank' rel="noreferrer"><img src={youtube} alt='discord' className='w-20 h-20 m-3'/></a>
                    <a className = 'tooltip tooltip-bottom' data-tip='See my projects!' href='https://github.com/Immortal-youtube' target='_blank' rel="noreferrer"><img src={github} alt='discord' className='w-20 h-20 m-3'/></a>
                    <a className = 'tooltip tooltip-bottom' data-tip='Download Python!' href='https://www.python.org' target='_blank' rel="noreferrer"><img src={python} alt='discord' className='w-20 h-20 m-3'/></a>
                    <a className = 'tooltip tooltip-bottom' data-tip='Download Java!' href='https://www.java.com/en/' target='_blank' rel="noreferrer"><img src={java} alt='discord' className='w-20 h-20 m-3'/></a>
                    <a className = 'tooltip tooltip-bottom' data-tip='Checkout C++!' href='https://en.wikipedia.org/wiki/C%2B%2B' target='_blank' rel="noreferrer"><img src={c} alt='discord' className='w-20 h-20 m-3'/></a>
                    <a className = 'tooltip tooltip-bottom' data-tip='Download MySQl!' href='https://www.mysql.com' target='_blank' rel="noreferrer"><img src={sql} alt='discord' className='w-20 h-20 m-3'/></a>
                    <a className = 'tooltip tooltip-bottom' data-tip='Checkout MongoDB!' href='https://www.mongodb.com' target='_blank' rel="noreferrer"><img src={mongodb} alt='discord' className='w-20 h-20 m-3'/></a>
                </div>
                <h2 className='font-par flex-auto px-5'>On going Projects:
                    <br/> - Computer Vision based Cube Solver(Kociemba's Algorithm)
                    <br/> - Updating Discord bot  
                    <br/> - Voice Assistant using ChatGPT
                </h2>
                <div className="text-center">
                    <input id='questions' type = "text" className='bg-transparent border-2 rounded-xl border-emerald-300 text-emerald-300 text-center w-1/2 mx-auto mt-6' onChange={update} placeholder='Ask me any question you want to ask'/>
                    <button onClick={enter} className='bg-emerald-300 text-black font-bold py-2 px-4 rounded-full mx-auto my-2 block hover:bg-emerald-700'>Send</button>
                </div>
                
            </div>
        );
        
    
}
 
export default Counter;