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
            <div class="h-screen scrollbar-thin scrollbar-thumb-custom scrollbar-track-custom-light overflow-y-scroll">
            <Helmet>
                <title>My Projects</title>
            </Helmet>
            <Navbar />
            <h2 className="font-suk text-purple-300 text-6xl text-center pb-14">My Projects</h2>
            <h2 className="font-high text-purple-300 text-2xl pb-5 px-5 pt-3">My Minecraft Projects :</h2>
                <div className="border-purple-400 border-4 mx-8 w-auto h-fit bg-black duration-300 mb-5">
                    <h2 className="font-high text-purple-300 px-5 pt-3">Custom Enchant :</h2>
                    <p className="font-par text-white px-5 py-5">
                    When I initially started learning how to code Minecraft plugins, I created this one. The formula for a unique enchantment 
                    called <p className="text-purple-300 font-high inline"> Cut Clean </p> is 
                    contained in this plugin. Ores and Ancient Debris are automatically smelted by this plugin. 
                    However, since this plugin was created in version 1.17, it is now quite dated.
                        <br/>
                        <a href="https://www.spigotmc.org/resources/customenchants.93535/" rel="noreferrer" target="_blank" className="text-purple-400">Download Link</a>
                    </p>
                </div>
                <div className="border-purple-400 border-4 mx-8 w-auto h-fit bg-black duration-300 mb-5">
                    <h2 className="font-high text-purple-300 px-5 pt-3">OpRandomizer :</h2>
                    <p className="font-par text-white px-5 py-5">
                    I've wanted to create this plugin for a very long time, and I finally did. With the help of this order, you can obtain any kind of wealth you choose. Although it may seem intriguing at first, never judge a book by its cover. Do you want to use my plugin to attempt to win the game?
                        <br/>
                        <p className="font-high text-purple-400 py-3">Commands :</p>
                        /EnableOpRandomizer - starts the plugin
                        <br/>
                        /disableOpRandomizer - disables the plugin
                        <br/>
                        <a href="https://www.spigotmc.org/resources/oprandomizer.93462/" rel="noreferrer" target="_blank" className="text-purple-400">Download Link</a>
                    </p>
                </div>
                <div className="border-purple-400 border-4 mx-8 w-auto h-fit bg-black duration-300 mb-5">
                    <h2 className="font-high text-purple-300 px-5 pt-3">Private Vault :</h2>
                    <p className="font-par text-white px-5 py-5">
                    The bullying I experienced from my friends while playing SMPs with them served as the inspiration for this plugin. They continued stealing my belongings, so I used my expertise to create a plugin that stores everything in a secure vault.
                    <br/>
                    <p className="font-high text-purple-400 py-3">Commands :</p>
                        /pv: Opens up the Players PrivateVault and makes sure no one can steal your riches
                        <br/>
                        <a href="https://www.spigotmc.org/resources/privatevault.93501/" rel="noreferrer" target="_blank" className="text-purple-400">Download Link</a>
                    </p>
                </div>
            <h2 className="font-high text-purple-300 text-2xl pb-5 px-5 pt-3">My Python Projects :</h2>
                <div className="border-purple-400 border-4 mx-8 w-auto h-fit bg-black duration-300 mb-5">
                    <h2 className="font-high text-purple-300 px-5 pt-3">Phone number Database :</h2>
                    <p className="font-par text-white px-5 py-5">
                    This programme was made by me so that I could store my contacts in a MySQL database and retrieve them at any time.
                    It wasn't a challenging application, but it whetted my appetite for databases.
                    Following the first connection to a local MySQl database, commands to add, remove, browse the complete list, or get details about a specific number are available.
                    That used to appear professional to me, but it doesn't have a graphical user interface.
                    <br/>
                    
                        <a href="https://github.com/Immortal-youtube/phone-number-database" rel="noreferrer" target="_blank" className="text-purple-400">See the code</a>
                    </p>
                </div>
                <div className="border-purple-400 border-4 mx-8 w-auto h-fit bg-black duration-300 mb-5">
                    <h2 className="font-high text-purple-300 px-5 pt-3">Password Encrypter :</h2>
                    <p className="font-par text-white px-5 py-5">
                    I developed this programme since I frequently forget my passwords and did not have faith in browsers to protect them.
I thus developed this programme to ensure that my passwords are totally secure. I encrypted the password and saved it because I still did not trust Mongodb (The Database). I still use this programme to store my passwords.
                    <br/>
                    
                        <a href="https://github.com/Immortal-youtube/Password-Encrypter" rel="noreferrer" target="_blank" className="text-purple-400">See the code</a>
                    </p>
                </div>
                <div className="border-purple-400 border-4 mx-8 w-auto h-fit bg-black duration-300 mb-5">
                    <h2 className="font-high text-purple-300 px-5 pt-3">Voice Assistant :</h2>
                    <p className="font-par text-white px-5 py-5">
                    Cortana is occasionally helpful but not particularly personalised. Hence, I entirely customised one for myself using commands that I usually use.
I've developed the programme such that it opens the various IDEs and websites I use, and it also turns off my laptop because, well, why not. Although it may not seem like it, I have found this application to be incredibly helpful.
                    <br/>
                    
                        <a href="https://github.com/Immortal-youtube/VoiceAssistant" rel="noreferrer" target="_blank" className="text-purple-400">See the code</a>
                    </p>
                </div>
            <h2 className="font-high text-purple-300 text-2xl pb-5 px-5 pt-3">My Java Projects :</h2>
                <div className="border-purple-400 border-4 mx-8 w-auto h-fit bg-black duration-300 mb-5">
                    <h2 className="font-high text-purple-300 px-5 pt-3">Nexus :</h2>
                    <p className="font-par text-white px-5 py-5">
                    This is a Discord bot I had created for my previous server. I wont go too much in detail cause If I did this webpage would look boring.
                    <br/>
                    
                        <a href="https://github.com/Immortal-youtube/Nexus" rel="noreferrer" target="_blank" className="text-purple-400">See the code</a>
                    </p>
                </div>
                <div className="border-purple-400 border-4 mx-8 w-auto h-fit bg-black duration-300 mb-5">
                    <h2 className="font-high text-purple-300 px-5 pt-3">NexusV2 :</h2>
                    <p className="font-par text-white px-5 py-5">
                    This is Nexus, but a lot of changes have been made to its basic structure to make it much simpler for me to add commands and listeners.
To really get what I mean, you must see the code for yourself.
Currently, the bot is not functioning due to some technical issues.
                    <br/>
                    
                        <a href="https://github.com/Immortal-youtube/NexusV2" rel="noreferrer" target="_blank" className="text-purple-400">See the code</a>
                    </p>
                </div>
            <h2 className="font-high text-purple-300 text-2xl pb-5 px-5 pt-3">My JavaScript Projects :</h2>
            <div className="border-purple-400 border-4 mx-8 w-auto h-fit bg-black duration-300 mb-5">
                    <h2 className="font-high text-purple-300 px-5 pt-3">Literally the Code for this website :</h2>
                    <p className="font-par text-white px-5 py-5">
                    This is the website's source code. ReactJS was used to develop this website. The ReactJS framework is fantastic. Although there is a small learning curve, once you master it, you won't regret it. 
                    <br/>
                    
                        <a href="https://github.com/Immortal-youtube/NexusV2" rel="noreferrer" target="_blank" className="text-purple-400">See the code</a>
                    </p>
                </div>
            </div>
        </div>
        
    );
}