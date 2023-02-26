import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function About(){
    let str=""
    // console.log(window.innerHeight)
    // if(window.innerHeight < 900){
    //     if(window.innerWidth < 600){
    //         str = " w-full h-full bg-cover bg-no-repeat"
    //     }else{
    //         str=" w-screen h-screen bg-cover"
    //     }    
        
    // }else{
    //     str=" w-screen h-screen bg-cover"
    // }
    if (window.innerHeight < 670 && window.outerWidth < 1000) {
        str = "bg-noob w-full h-full bg-cover"
    } else {
        str = "bg-noob w-screen h-screen bg-cover"
    }
    return (
        <html className={str} data-theme="night">
        <Navbar/>
        <h1 className="text-center text-emerald-300 text-6xl font-suk">About me!</h1>
        <h2 className = "text-emerald-300 px-5 py-2 font-bold font-par">My Experience :</h2>
        
        <p className = "px-5 py-2 font-par text-white">I am a self-taught Programmer. I have learnt from the Internet. I have gathered
        knowledge from everywhere I can to achieve my skill level. I have helped many people and given advice to many others. </p>

        <h2 className = "text-emerald-300 px-5 py-2 font-bold font-par">My Intrests and Hobbies :</h2>
        <p className="px-5 py-2 font-par text-white">I enjoy playing football and basketball. I am also an Amateur cuber with the fastest time of 19.56s. I enjoy
        rap music and of course, programming</p>
        
        
        <h2 className="text-emerald-300 px-5 py-2 font-bold font-par">My Programming Path : </h2>
        <ul className="text-white font-par px-5 py-2">
        <li> <FontAwesomeIcon icon={faCode} /> I started with a Python Udemy Course</li>
        <li> <FontAwesomeIcon icon={faCode} /> Then learnt Java so that I could code Minecraft Plugins.</li>
        <li> <FontAwesomeIcon icon={faCode} /> I then moved on to coding tougher programs to push my skills to the limit.</li>
        <li> <FontAwesomeIcon icon={faCode} /> From there I was intrested in web developement so started learning JavaScript.</li>
        <li> <FontAwesomeIcon icon={faCode} /> I initally started making websites with vanilla JavaScript, HTML and CSS.</li>
        <li> <FontAwesomeIcon icon={faCode} /> I then moved on to ExpressJS which had made my life easier.</li>
        <li> <FontAwesomeIcon icon={faCode} /> I then got into Arduinos and learnt C++ for a Project</li>
        <li> <FontAwesomeIcon icon={faCode} /> I then learnt ReactJS.</li>
        <li> <FontAwesomeIcon icon={faCode} /> I am now currently learning golang and improving my skills in other languages as well</li>
        </ul>
            
        </html> 
    );
}