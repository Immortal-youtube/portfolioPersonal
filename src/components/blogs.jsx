import { useEffect, useState } from "react";
import { useRef } from "react";
import Navbar from './navbar';
import { Helmet } from 'react-helmet';



export default function Blogs(){
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
        str="bg-noob  w-screen h-screen selection:bg-slate-700 bg-cover bg-fixed"
    }else{
        str="bg-noob w-full h-full selection:bg-slate-700 bg-cover bg-fixed"
    }

    return(
        <div className={str} ref={inputRef}>
            <div class="h-screen scrollbar-thin scrollbar-thumb-custom scrollbar-track-custom-light overflow-y-scroll">
            <Navbar/>
            <Helmet>
                <title>Blogs</title>
            </Helmet>
                <h2 className="font-suk text-purple-300 text-6xl text-center pb-14">Blogs</h2>

                <div className="border-purple-400 border-4 mx-8 w-auto h-fit bg-black duration-300 mb-5">
                        <h2 className="font-high text-purple-300 px-5 pt-3">Are we the problem ?</h2>
                        <h2 className="font-high text-right text-white pt-3 px-5">27/06/2023</h2>
                        <p className="font-par text-white px-5 py-5">We, as humans have been considered superior to other organisms due to our ability to solve problems using our intellect and skills. Although nowdays, we are prone to creating our own problems rather than solving the
                        already exsiting problems rather than solving the already exsiting problems. These problems have now gone overlooked for so long 
                        that it imapacts our own developement. An example could be Microsoft Tay, this would have been a big step in the Tech Industry if not 
                        for the human behaviour coming in the way. Another example could be the hiring AI created by amazon, revealing the gender bias among us humans.
                        From being the problem solvers to becoming problem creators, this is not the kind of developement which we as a community aim for. This raises the question of whether or not instead of searching
                        for problems to solve, we ourselves have become the problem. </p>
                </div>

                <div className="border-purple-400 border-4 mx-8 w-auto h-fit bg-black duration-300 mb-5">
                        <h2 className="font-high text-purple-300 px-5 pt-3">Rapid changes</h2>
                        <h2 className="font-high text-right text-white pt-3 px-5">23/06/2023</h2>
                        <p className="font-par text-white px-5 py-5">We all don't need to be reminded that technology advances quickly, just a blink and a new kind of chipset or processor might come out. One example could be how before you would have a 24-pin connector for your motherboard. Well, now that is replaced by 2 x 6-pin connectors. These rapid changes can also be seen in prices. We all remember the good old days when buying a graphic card did not make an irreparable hole in your wallet. Before, the rule was that the more money you are willing to spend, the more performance you get. Well, we now see that rule being broken as you no longer get the same kind of increment in performance no matter how much money you are willing to throw in. </p>
                </div>
                <div className="border-purple-400 border-4 mx-8 w-auto h-fit bg-black duration-300 mb-5">
                        <h2 className="font-high text-purple-300 px-5 pt-3">Perfection in the Tech Industry</h2>
                        <h2 className="font-high text-right text-white pt-3 px-5">21/06/2023</h2>
                        <p className="font-par text-white px-5 py-5">In the tech industry, perfection is essential.The number of people who are familiar 
                        with Steve Jobs is one example. There is a chance that if you ask the same folks who Andy Rubin is, they won't know. As a community of 
                        people who use and appreciate technology, we all tend to be so preoccupied with the greatest that we never consider the runners up. 
                        Human nature is what it is, and it cannot be changed. Because all you want is the newest iPhone, why should you be concerned about 
                        Andy Rubin, the man who built Android. Because Apple produces some of the best goods, we all covet Apple stuff. Although they are 
                        pricey, the idea that Apple is the finest has already been ingrained in our minds.The key takeaway is that only the person who placed first is ever remembered. </p>
                </div>
            
                
                
            </div>
        </div>
    );
}