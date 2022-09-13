import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
const discord = require('./icons/discord.png')
const youtube = require('./icons/youtube.png')
const github = require('./icons/github.png')
const python = require('./icons/python.png')
const java = require('./icons/java.png')
const c = require('./icons/c.png')
const mongodb = require('./icons/mongodb.png')
const sql = require('./icons/sql.png')
class Counter extends Component { 

    state={
        style:{
            

        }
    }
    render() { 

        return (
            <div className='bg-[url(./components/icons/background.png)] bg-no-repeat w-screen h-screen bg-cover'>
                <Helmet>
                    <title>Immortal's Website</title>
                </Helmet>
                
                <h1 className='font-sans lg:text-4xl sm:text-red-600 sm:text-xs text-red-600 md:text-4xl text-center underline md:text-red-600 lg:text-red-600 font-bold mb-4'>Immortal's Website</h1>
                <p className='md:text-2xl font-bold lg:text-2xl  sm:text-xs text-center'>Hello, I am immortal. I am an aspiring coder who programs in Python, Java, C++, and works with databases such as MongoDB and SQL. I love helping other people with their programs
                    and even teach them coding. I will be happy to help you with your code too. Just reach out to me on any of my social media accounts.
                </p>
                <ul className=' justify-center align-middle lg:flex sm:flex-wrap flex-wrap md:flex space-x-8 mt-4 mb-4 xl:flex 2xl:flex'>
                    <a class = "tooltip tooltip-bottom" data-tip="Join the discord server" href="https://discord.gg/gqp5nMzwTY" target="__blank" ><img src={discord} alt="notLoading"></img></a>
                    <a class = "tooltip tooltip-bottom" data-tip="Subscribe!" href="https://www.youtube.com/channel/UCgppWM8JtpTfEYp8sa8XHEw" target="__blank" ><img src={youtube} alt="notLoading"></img></a>
                    <a class = "tooltip tooltip-bottom" data-tip="Follow me and my projects" href="https://github.com/Immortal-youtube" target="__blank" ><img src={github} alt="notLoading"></img></a>
                    <a class = "tooltip tooltip-bottom" data-tip="Download Python" href="https://www.python.org/" target="__blank" ><img src={python} alt="notLoading"></img></a>
                    <a class = "tooltip tooltip-bottom" data-tip="Download Java" href="https://www.java.com/en/" target="__blank" ><img src={java} alt="notLoading"></img></a>
                    <a class = "tooltip tooltip-bottom" data-tip="Checkout C++" href="https://isocpp.org" target="__blank" ><img src={c} alt="notLoading"></img></a>
                    <a class = "tooltip tooltip-bottom" data-tip="Checkout MongoDB" href="https://www.mongodb.com" target="__blank" ><img src={mongodb} alt="notLoading"></img></a>
                    <a class = "tooltip tooltip-bottom" data-tip="Checkout MySQL" href="https://www.mysql.com" target="__blank" ><img src={sql} alt="notLoading"></img></a> 
                </ul>
                <h2 className='text-red-600  lg:text-3xl md:text-1xl font-bold sm:text-xs'>My Achievements: </h2>
                <ol className='ml-3'>
                    <li className='lg:text-2xl font-bold text-green-400 sm:text-xs md:text-1xl'>I have worked on patented technology.</li>
                    <li className='lg:text-2xl font-bold text-green-400 sm:text-xs md:text-1xl'>My discord server has 10+ members.</li>
                    <li className='lg:text-2xl font-bold text-green-400 sm:text-xs md:text-1xl'>I excel in Minecraft Spigot Developement.</li>
                    <li className='lg:text-2xl font-bold text-green-400 sm:text-xs md:text-1xl'>I have learnt Web Developement.</li>
                    <li className='lg:text-2xl font-bold text-green-400 sm:text-xs md:text-1xl'>I know about 6 programming languages at this point of time and am learning more.</li>
                    <li className='lg:text-2xl font-bold text-green-400 sm:text-xs md:text-1xl'>I have good knowledge about databases.</li>
                </ol>
            </div>
        );
    }
    
}
 
export default Counter;