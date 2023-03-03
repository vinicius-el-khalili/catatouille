import Link from "next/link"
import style from "@/styles/Navbar.module.css"
import { useState } from "react"
export default function Navbar(){
    const [toggle,setToggle] = useState(false)
    return(
        <div className={style.Navbar}>
            {/* ---- MENU ----*/}
            <div className={
                toggle?
                `${style.menu} ${style.menuOn}`:
                `${style.menu} ${style.menuOff}`
            
            }>
                
                {/* ---- LINKS ----*/}
                <Link href={"/"} className={style.link} onClick={()=>{setToggle(false)}}>Main dishes</Link>
                <Link href={"/"} className={style.link} onClick={()=>{setToggle(false)}}>Side dishes</Link>
                <Link href={"/"} className={style.link} onClick={()=>{setToggle(false)}}>Desserts</Link>            
            
            </div>

            {/* ---- BURGER BUTTON ----*/}
            <div
                className={toggle?
                    `${style.button} ${style.buttonOn}`:
                    `${style.button} ${style.buttonOff}`
                }
                onClick={()=>{toggle?setToggle(false):setToggle(true)}}
            >
                <div className={style.burger}/>
                <div className={style.burger}/>
                <div className={style.burger}/>
            </div>
        </div>
    )
}