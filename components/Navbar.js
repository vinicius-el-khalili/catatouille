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
                <Link href={"/categories/main-dish"} className={style.link} onClick={()=>{setToggle(false)}}>Main dishes</Link>
                <Link href={"/categories/side-dish"} className={style.link} onClick={()=>{setToggle(false)}}>Side dishes</Link>
                <Link href={"/categories/dissert"} className={style.link} onClick={()=>{setToggle(false)}}>Disserts</Link>            
            
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