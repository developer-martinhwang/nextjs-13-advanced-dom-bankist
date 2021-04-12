/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: Section_Btype.js
 * Key Options:
 * -
 * Revision History:
 * -
 */
import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles({
    section_Btype: {
        padding: prop => prop.style.padding,
        backgroundColor: prop => prop.style.backgroundColor
    },
    section_Btype_title: {
        color: prop => prop.sectionTitleColor
    },
    section_Btype_header: {
        fontSize: "1rem",
        color: prop => prop.header.style.color,
        textTransform: prop => prop.header.style.textTransform,

    },
    section_Btype_description: {
        color: prop => prop.description.style.color
    },
    '@media screen and (min-width: 768px)': {
        section_Btype_title: {
            margin: "0 8rem 4rem 8rem",
        },
        section_Btype_header: {
            fontSize: "2rem"
        }
    }
})
function Section_Btype(prop) {
    const classes = useStyles(prop)
    return (
        <section className={classes.section_Btype}>
            <div className={classes.section_Btype_title}>
                <h2 className={classes.section_Btype_header}>{prop.header.text}</h2>
                <h3 className={classes.section_Btype_description} dangerouslySetInnerHTML={{__html: prop.description.text}} />            
            </div>
        </section>
    );
}

export default Section_Btype;