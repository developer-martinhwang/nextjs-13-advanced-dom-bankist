/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: Header.js
 * Key Options:
 * -
 * Revision History:
 * -
 */
import {makeStyles} from '@material-ui/styles'
const useStyles = makeStyles({
    header:{
        fontSize: "15px",
        paddingBottom: "10px",
        display: "flex",
        justifyContent:"center",
        // flexDirection:"column",
        flexWrap:"wrap",
        width: "100%"
    },
    header_title:{
        display: "block",
        padding: "1.5rem 1rem 5rem 1rem",
        margin: "0",
    },
    header_img: {
        padding: "1rem 0.5rem 5rem 0.5rem",
        '& img': {
            width: "22rem"
        }
    },
    highlight: {
        color: "#000000",
        position: "relative",
        "&::after": {
            display: "block",
            content: "''",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            width: "100%",
            zIndex: "1",
            opacity: "0.5",
            transform: "scale(1.07, 1.05) skewX(-15deg)",
            backgroundImage: "var(--gradient-primary)"
        }
    },
    btn_text: {
        display: "inline-block",
        fontSize: "1.2rem",
        fontFamily: "inherit",
        fontWeight: "500",
        color: "var(--color-primary)",
        border: "none",
        borderBottom: "1px solid currentColor",
        paddingBottom: "1px",
        cursor: "pointer",
        transition: "all 0.3s",
    },
    '@media screen and (min-width: 768px)': {
        header:{
            fontSize: "15px",
            paddingTop: "5rem",
            justifyContent:"space-evenly",
            flexWrap:"wrap",
        },
        header_img: {
            '& img': {
                width: "24rem"
            }
        },
    }
})
function Header() {
    const classes = useStyles()
    return (
        <header className={classes.header}>
            <div className={classes.header_title}>
                <h1>
                    When
                    <span className={classes.highlight}> banking </span>
                    meets<br/>
                    <span className={classes.highlight}>minimalist</span>
                </h1>
                <h4>A simpler banking experience for a simpler life.</h4>
                <a className={classes.btn_text}>Learn more</a>
            </div>
            <div href="#" className={classes.header_img}>
                <img src="/img/hero.png"/>
            </div>
        </header>
    );
}

export default Header;