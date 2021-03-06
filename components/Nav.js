/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: Nav.js
 * Key Options:
 * -
 * Revision History:
 * -
 */
import {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/styles'
const useStyles = makeStyles({
    navbar:{
        fontSize: "18px",
        paddingBottom: "10px",
        width: "100%"
    },
    bar:{
        width: "30px",
        height: "3px",
        backgroundColor:"#333",
        margin: "6px 0",
        transition:"0.4s"
    },
    navbar_toggle: {
        position: 'absolute',
        top: "40px",
        right: "20px",
        cursor: "pointer"
    },
    main_nav:{
        listStyleType: "none",
        position: "fixed",
        zIndex: "2",
        width: "100%",
        height: "0px",
        padding: "0",
        margin: "0",
        color: "#333",
        backgroundColor: "#f3f3f3d1",
        overflow: "hidden",
        opacity: 0,
        // transform: "translateY(-200%)",
       
        '& li': {
            textAlign: "center",
            margin: "15px auto",
        }
    },
    nav_link:{
        textDecoration: "none",
    },
    inactive_main_nav:{
        animation: "$inactivMainNav 1000ms",
    },
    active_main_nav: {
        position: "fixed",
        zIndex: "2",
        width: "100%",
        display: "block",
        height: "300px",
        animation: "$activMainNav 1000ms",
        opacity: 1,
        // transform: "translateY(0%)",
        '& li': {
        }
    },
    logo: {
        '& img': {
            width: "8rem",
            padding: "0.5rem 0 0 0.5rem"
        }
    },
    '@keyframes activMainNav': {
        "0%": {
            opacity: 0,
            // transform: "translateY(-40%)"
            height: "0px"
        },
        "100%": {
            opacity: 1,
            // transform: "translateY(0)"
            height: "300px",
        }
    },
    '@keyframes inactivMainNav': {
        "0%": {
            opacity: 1,
            // transform: "translateY(0)"
            height:"300px"
        },
        "100%": {
            opacity: 0,
            // transform: "translateY(-40%)",
            height:"0px",
            // display: "none",
        }
    },
    '@media screen and (min-width: 768px)': {
        navbar: {
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "0",
            height: "70px",
            alignItems: "center",
            width: "100%",
        },
        main_nav: {
            opacity: 1,
            overflow: "visible",
            // transform: "translateY(0%)",
            position: "inherit",
            height: "0",
            display: "flex",
            paddingRight: "50px",
            flexDirection: "row",
            justifyContent: "flex-end",
            '& li': {
                margin: 0
            }
        },
        nav_links: {
            marginLeft: "40px"
        },
        navbar_toggle: {
            display: "none",
        }
    },
})
function Nav() {
    const classes = useStyles();
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    }
    return (
        <nav className={classes.navbar}>
            <div onClick={toggleMenu} className={classes.navbar_toggle} id="js_navbar_toggle">
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>
            </div>
            <a href="#" className={classes.logo}>
                <img src="/img/logo.png"/>
            </a>
            <ul className={`${classes.main_nav} ${menu?classes.active_main_nav:classes.inactive_main_nav}`}>
                <li>
                    <a href="https://www.google.com/" className={classes.nav_links}>Features</a>
                </li>
                <li>
                    <a href="#" className={classes.nav_links}>Operations</a>
                </li>
                <li>
                    <a href="#" className={classes.nav_links}>Testimonials</a>
                </li>
                <li>
                    <a href="#" className={classes.nav_links}>Open account</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
