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
                <a 
                href="https://github.com/vinicius-el-khalili/catatouille"
                className={style.footerLink}
                rel="noopener noreferrer"
                target="_blank"
                >
                    <Image src={"/githubLogo.svg"} width={30} height={30}/>
                    <p>github</p>
                </a>
            </footer>
        </div>
    );
}
 
export default Layout;