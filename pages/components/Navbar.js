import Link from "next/link"
import style from "@/styles/Navbar.module.css"
import { useState } from "react"
export default function Navbar(){
    const [toggle,setToggle] = useState(false)
    return(
        <div className={style.Navbar}>
            <div className={
                toggle?
                `${style.menu} ${style.menuOn}`:
                `${style.menu} ${style.menuOff}`
            
            }>
                <Link href={"/"} className={style.link}>Main dishes</Link>
                <Link href={"/"} className={style.link}>Side dishes</Link>
                <Link href={"/"} className={style.link}>Desserts</Link>            
            </div>
            <div
                className={toggle?
                    `${style.button} ${style.navOn}`:
                    `${style.button} ${style.navOff}`
                }
                onClick={()=>{toggle?setToggle(false):setToggle(true)}}
                ></div>
        </div>
    )
}