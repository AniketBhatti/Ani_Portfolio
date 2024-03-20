import React, { useRef } from 'react'
import './services.scss'
import {color, motion, useInView} from "framer-motion"
import Portfolio from '../portfolio/Portfolio';

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity: 0
    },
    animate:{
        x:0,
        y:0,
        opacity:1,

        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};

const Services = () => {

    const ref = useRef()

    const inView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div className='services' 
                    variants={variants} 
                    initial="initial" 
                    // animate="animate"
                    whileInView="animate"
                    ref={ref}
                    animate={inView && "animate"}
                    >
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on developing for your brand or company 
                <br/>
            to grow and move forward</p>
            <hr/>
        </motion.div>


        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/developer.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas</h1>
            </div>

            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>Which I'm </motion.b>Creating.</h1>
                <button>WHAT I DID! </button>
            </div>

            
        </motion.div>


        <motion.div className="listContainer" variants={variants}>
            
                <motion.div className="box" whileHover={{background: "lightgrey", color: "black" }}>
                    <h2>Hinge App</h2>
                    <p> Hinge App, where meaningful connections thrive. Powered by React Native, MongoDB, and Socket.IO,our app delivers a seamless experience on iOS and Android. 
                        As lead developer, I crafted a sleek UI/UX and integrated features 
                        like real-time messaging and location-based matching. MongoDB ensures 
                        secure data management, letting users explore profiles and interact with confidence.
                    </p>
                    <button>Working on it...</button>
                </motion.div>

            <motion.div className="box" whileHover={{background: "lightgrey", color: "black" }}>
                <h2>INA: Indian NGOs Alliance</h2>
                <p> the platform for Indian NGOs, donors, and beneficiaries to connect and make a difference. 
                    Built with React Native, MongoDB, NodeJs, and other cutting-edge technologies, 
                    INA ensures a seamless experience for all users.
                    We orchestrated the development process, prioritizing user-friendly design and essential features. 
                    INA allows donors to contribute directly to verified NGOs, empowering them to support causes confidently. 
                    Beneficiaries can seek assistance within the app, knowing they're connecting with credible organizations.
</p>
                <button>Working on it...</button>
            </motion.div>

            <motion.div className="box" whileHover={{background: "lightgrey", color: "black" }}>
                <h2>Fashion with Morgan</h2>
                <p>Introducing my most recent project: a cutting-edge 3D website driven by AI that was created with 
                    Tailwind CSS, ThreeJS, React Three Fiber, React JS, and Framer Motion. 
                    Discover fashion like never before by interacting with 
                    3D clothing models, changing colors with ease, and applying designs 
                    using state-of-the-art artificial intelligence technology.
                     I led the charge to seamlessly integrate cutting-edge technology to produce an enjoyable user experience. 
                     With the help of our AI-driven design customization feature, customers can experiment with various styles, 
                     see clothing in real time, and express their creativity.


                </p>
                <button>Working on it...</button>
            </motion.div>
            
            
        </motion.div>
    </motion.div>
  )
}

export default Services
