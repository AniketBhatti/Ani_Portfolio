import React from 'react'
import './navbar.scss'
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* SideBar */}

        <Sidebar />

        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}}  
                        animate={{opacity:1, scale:1}}  
                        transition={{duration:0.5}}>
                            
                            React Developer

            </motion.span>

            <div className="socialMedia">  
                <a href="https://www.linkedin.com/in/aniket-bhatti-871825267/"><img src="/linkedin.webp" alt="" /></a>
                <a href="https://www.instagram.com/theaniketbhatti/"><img src="/instagram.png" alt="" /></a>
                <a href="https://www.facebook.com/aniket.bhatti.31/"><img src="/facebook.png" alt="" /></a>
                <a href="https://x.com/AniketBhatti8?t=8qwmlBsNmTIqoF6jYgZc2w&s=09"><img src="/x.webp" alt="" /></a>
            </div>
            
        </div>

    </div>
  )
}

export default Navbar
