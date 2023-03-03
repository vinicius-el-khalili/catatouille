import Link from "next/link"
import style from "@/styles/Layout.module.css"
import Image from "next/image";
import Navbar from "./Navbar";
const Layout = ({children}) => {
    return (
        <div className={style.layout}>
            <Navbar></Navbar>
            <header>
                <Link href={"/"} className={style.pageHeader}>
                    <div className={style.pageTitle}>
                        <h1>THE</h1>
                        <h1>CATATOUILLE</h1>
                        <h1>routine cousine</h1>
                    </div>
                    <div className={style.catatouille}>
                        <Image src={"/cat.svg"} fill alt="logo" priority={true} style={{objectFit:"cover"}} />
                    </div>
                </Link>     
            </header>

            <div className={style.pageContent}>
                {children}
            </div>
            <footer className={style.pageFooter}>
                <p>Footer</p>

            </footer>
        </div>
    );
}
 
export default Layout;