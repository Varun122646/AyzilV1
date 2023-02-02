"use client"
import Link from "next/link"
import styles from './page.module.css'
import localFont from '@next/font/local'
import { Icon } from '@iconify/react';
const madetommy = localFont({ src: '../../../public/font/madetommy.otf' })

export default function Navbar() {
    function showNav(){
        console.log("click")
    }
    return (
        <>
            <div className={styles.navWrapper + " d-flex justify-content-between align-items-center container py-3"}>
                <div className={styles.navBrand + " "}>
                    <p className={styles.navName + " mb-0"} >
                        AYZILL WATERrrrr
                    </p>
                </div>
                <div className={styles.navLinksWrapper + " "}>
                    <Link className={styles.navLink + " mx-3 "} href={"/"}>Home</Link>
                    <Link className={styles.navLink + " mx-3 "} href={"/Products"}>Products</Link>
                    <Link className={styles.navLink + " mx-3 "} href={"/Blogs"}>Blogs</Link>
                    <Link className={styles.navLink + " mx-3 "} href={"/Aboutus"}>About Us</Link>
                    <Icon className={styles.menu + " "} icon="material-symbols:menu" onClick={showNav} />
                </div>
                <div className={styles.phoneNavLinksWrapper + " flex-column "}>
                    <Link className={styles.phoneNavLink + " mx-3 my-2 "} href={"/"}>Home</Link>
                    <Link className={styles.phoneNavLink + " mx-3 my-2 "} href={"/Products"}>Products</Link>
                    <Link className={styles.phoneNavLink + " mx-3 my-2 "} href={"/Blogs"}>Blogs</Link>
                    <Link className={styles.phoneNavLink + " mx-3 my-2 "} href={"/Aboutus"}>About Us</Link>
                </div>
            </div>
        </>
        
    )
}