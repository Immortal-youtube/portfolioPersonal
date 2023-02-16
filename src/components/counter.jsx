import React, { Component } from 'react';
import { useState } from 'react';
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
            <div className='bg-noob bg-no-repeat w-screen h-screen bg-cover'>
                <Helmet>
                    <title>Immortal</title>
                </Helmet>
                
                <h1 className='font-suk text-emerald-300 text-6xl text-center'>Hey there I'm Ansh</h1>
                <p className= 'font-par text-center'>I am a full stack developer.I have made many minecraft plugins,Discord Bots, Arduino Projects,Websites,etc.
                    <br/>My main languages are Python,Java and I have worked with MongoDB,SQL,etc.
                </p>
                
            </div>
        );
    }
    
}
 
export default Counter;