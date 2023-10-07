

import { useEffect, useRef, useState } from "react";
import { faListUl} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
var clicked = false;
async function makeVisible(){
  var list = document.querySelectorAll(".list")
  list.forEach(listItem => {
    listItem.classList.remove("invisible")
    listItem.classList.add("visible")
  })
}

async function makeInvisible(){
  var list = document.querySelectorAll(".list")
  list.forEach(listItem => {
    listItem.classList.remove("visible")
    listItem.classList.add("invisible")

  })
}

async function dropdown(){
  if(clicked === false){
    makeVisible()
    // setnavtext("inline-grid space-x-5")
    var nav = document.querySelector("#nav")
    nav.style.display = "inline-grid"
    
    
    clicked = true
    console.log(document.querySelector("#nav"))
  }
  else{
    makeInvisible()
    // setnavtext("flex space-x-5")
    var nav = document.querySelector("#nav")
    nav.style.display = "flex"
    
    
    clicked = false
    
    
    console.log(document.querySelector("#nav"))
  }
}

export default function Navbar(){
    
  
    var inputRef = useRef(0);
    let [x_screen,setX_screen] = useState(0) ;
    // let [navtext,setnavtext] = useState("flex space-x-5");
    useEffect(() => {
      setX_screen(window.screen.availWidth);
    },[])
    
    if(x_screen <= 600) {
      makeInvisible()
    }else{
      makeVisible()
      document.querySelector("#minmax").style.visibility = "hidden"
    }
    
    
      
    return(

        <nav className="w-full bg-black">
        <ul className="space-x-5 flex text-purple-400 duration-300 overflow-x-hidden" ref={inputRef} id="nav">
        <button id="minmax" onClick={dropdown} className="font-high px-4 py-4 text-left" ><FontAwesomeIcon icon={faListUl} /></button>
        <a href="/" id="a" className="list"><li className="font-high px-4 py-4 rounded-xl hover:bg-emerald-400 duration-300 hover:text-black" >Home</li></a>
        <a href="/about" id="b" className="list"><li className="font-high px-4 py-4 rounded-xl hover:bg-emerald-400 duration-300 hover:text-black">About</li></a>
        <a href="/myprojects" id="c" className="list"> <li className="font-high px-4 py-4 rounded-xl hover:bg-emerald-400 duration-300 hover:text-black">My Projects</li></a>
          <a href="/blogs" id="d" className="list">  <li className="font-high px-4 py-4 rounded-xl hover:bg-emerald-400 duration-300 hover:text-black">Blogs</li></a>
        </ul>
      </nav>
        
    );
}