import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/about/about'
import Acceuil from '../Acceuil/Acceuil'
import Footer from '../../components/Footer/Footer'
const Home = () => {
    let [screen, setScreen] = useState()
    const [y, setY] = useState('')
    let [scale, setScale] = useState()
    let [open, setOpen] = useState(false)
    window.onresize = function () {
        if (window.innerWidth > 1200) {
            setScreen(true)
        }
        else {
            setScreen(false)
        }
        if (window.innerWidth < 450) {
            setScale(100)

        }
        else {
            setScale(40)
        }
    }

    useEffect(() => {


        if (window.innerWidth > 1200) {
            setScreen(true)

        }
        else {
            setScreen(false)
        }
        if (window.innerWidth < 450) {
            setScale(100)

        }
        else {
            setScale(40)
        }

    })

    
    window.addEventListener('scroll', function (e) {
        if (window.scrollY > 0) {
            setY('rgba(0,0,0,0)')
        }
        else {
            setY('rgba(0,0,0,0)')
        }

    })
    return (
    
        <div className='home'>
            <Fragment>
         <Navbar y={y} screen={screen} scale={scale} />
        <div id="acceuil">
          <Acceuil/>
        </div>
        <div id="apropos">
          <About/>
        </div>
        <div id="contact">
        <Footer />
        </div>
        </Fragment>

        </div>
    )
}

export default Home
