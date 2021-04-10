import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles({
    section: {
        padding: prop => prop.style.padding,
        backgroundColor: prop => prop.style.backgroundColor
    },
    title: {
        color: prop => prop.sectionTitleColor
    },
    header: {
        fontSize: prop => prop.header.style.fontSize,
        color: prop => prop.header.style.color,
        textTransform: prop => prop.header.style.textTransform,

    },
    description: {
        color: prop => prop.description.style.color
    },
    '@media screen and (min-width: 768px)': {
        title: {
            margin: "0 8rem 4rem 8rem",
        },
    }
})
function Section_Btype(prop) {
    const classes = useStyles(prop)
    return (
        <section className={classes.section}>
            <div className={classes.title}>
                <h2 className={classes.header}>{prop.header.text}</h2>
                <h3 className={classes.description} dangerouslySetInnerHTML={{__html: prop.description.text}} />            
            </div>
        </section>
    );
}

export default Section_Btype;