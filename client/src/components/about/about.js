import { Container, Row, Image } from 'react-bootstrap'
import './about.css'
import { Fade } from 'react-reveal';
import { CenterFocusStrong } from '@material-ui/icons'

const About = () => {
    return (
        <div className="bg2 textCenter" > <Fade right><h1 className="title">A propos </h1></Fade>
            
        <div className="about" style={{ marginRight: "100px" }}>
   
        <Fade left>
            <div className="inner">

                <p >
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt.
                </p>

            </div>
        </Fade>
    </div>

    <hr style={{ width: "50%", margin: "auto auto" }} />
</div>

    )
}

export default About
