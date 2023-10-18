import React from "react";
import aboutback from "../assets/aboutback.png";
import viewresume from "../assets/ViewResumeButton.png";
import profile from "../assets/brightideacut.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from "framer-motion";

export default function About(props) {
    const aboutVariants = {
        offscreen: {
            opacity: 0,
            translateY: -500,
        },
        onscreen: {
            opacity: 1,
            translateY: 0,
            transition: {
                type: 'spring',
                ease: 'easeIn',
                duration: 1
            }
        }
    }

    return (
        <section id='about' className='w-screen h-screen'>
            <img className='w-screen h-screen absolute z-0' alt='' src={aboutback} />
            <motion.div variants={aboutVariants} initial='offscreen' whileInView='onscreen' viewport={{once: true}}>
            <section className='relative z-40 mx-5 flex flex-col md:flex-row pt-16 md:pt-40 justify-between'>
                <div className="lg:pl-10 w-full md:w-1/2 text-faf-white">
                    <h1 className="text-center text-2xl md:text-left lg:text-5xl pt-10 md:pt-0 pb-10">Hi, I'm Ryan Nguyen!👋</h1>
                    <p className="text-base lg:text-xl">I’m a passionate Full Stack Developer who is currently in my third year studying Informatics at the University of Washington. I have worked in a diverse range of projects focused on front-end/back-end and software development.
                    Reach out and check out my resume 🙂</p>
                    <div className="flex flex-col md:flex-row text-center justify-between mt-10">
                    <div>
                        <a href='https://github.com/ryanngu023' target='_blank' rel='noreferrer'>
                            <GitHubIcon className='mr-3' sx={{ '&:hover':{ color: '#3A4856'}, fontSize: 40}} />
                        </a>
                        <a href='https://linkedin.com/in/ryanng20/' target='_blank' rel='noreferrer'>
                            <LinkedInIcon className='mx-3' sx={{ '&:hover':{ color: '#3A4856'}, fontSize: 40}} />
                        </a>
                        <a href='mailto:ryannguyen10023@gmail.com'>
                        <EmailIcon className='ml-3' sx={{ '&:hover':{ color: '#3A4856'}, fontSize: 40}} />
                        </a>
                    </div>
                        <a href='https://drive.google.com/file/d/16apHjowZ4iK1D3n2KtJ2JCu4oNjrzbjw/view?usp=sharing' rel='noreferrer' target='_blank'>
                            <img className='mx-auto mt-3 md:mt-0 viewresume w-36 h-10' alt='' src={viewresume} />
                        </a>
                    </div>
                </div>
                
                <img className='profile m-auto w-4/6 md:w-[45%] lg:w-1/3 max-h-[50%] -order-last md:order-1' alt='Profile Shot of Ryan Nguyen' src={profile} />
            </section>
            </motion.div>
        </section>
    )
}