import React from "react";
import { motion } from "framer-motion";
import nekoneedlework from '../assets/logo2.png';
import NFL_Prototype from '../assets/logo.png';
import SWECClogo from '../assets/SWECClogo.png';
import contentlogo from '../assets/contentmoderation.png';
import GitHub from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Projects(props) {
    const projectVariants = {
        offscreen: {
            opacity: 0,
            translateX: -160
        },
        onscreen: {
            opacity: 1,
            translateX: 0,
            transition: {
                type: 'spring',
                ease: 'easeIn',
                duration: 1
            }
        }
    }

    return (

            <section id='projects' className='bg-faf-white mt-56 relative z-0 text-center'>
            <motion.div variants={projectVariants} initial='offscreen' whileInView='onscreen' viewport={{once: true}}>
                <p className="text-5xl underline">Projects & Experience</p>
                <p className='text-xl pt-5'>Get a quick look into some of my most favorite projects and things I worked on throughout my journey! 😀</p>
                <div className="w-full flex flex-col md:block">
                    <div className='flex flex-col md:flex-row justify-between w-4/5 mx-auto'>
                        <div className="card-container mt-20 mb-20 w-full md:w-[45%] h-[450px] lg:w-2/5 lg:h-96">
                            <div className='card h-full bg-site-blue'>
                                <div className='card-content h-full'>
                                    <p className='pt-5 text-xl font-bold'>Neko Needlework</p>
                                    <img className='w-full lg:w-1/2 h-[55%] mx-auto' alt="Neko Needlework Logo" src={nekoneedlework} />
                                    <div className="flex justify-center pt-5">
                                        <div className='projecttag text-xl'>React</div>
                                        <div className='projecttag text-xl'>Bootstrap</div>
                                    </div>
                                </div>
                                <div className='hover-content'>
                                    <p className='pt-5 text-xl font-bold'>Neko Needlework</p>
                                    <p className='text-left m-5'>Neko Needlework is a new startup focused on delivering handcrafted custom embroidered clothing. My role within the startup was a lead web developer, where I led a coding team and held weekly meetings with people across different teams to ensure that we can build a website that fits the company brand, can handle online payments, and provide for content management. </p>
                                    <a href='https://github.com/ryanngu023/embroiderme' target='_blank' rel='noreferrer'>
                                    <div className="rounded bg-faf-white w-40 mx-auto py-2 link">Github <GitHub /></div>
                                    </a>
                                </div>  
                            
                            </div>
                        </div>

                        <div className="card-container mt-20 mb-20 w-full md:w-[45%] h-[450px] lg:w-2/5 lg:h-96">
                            <div className='card h-full bg-site-blue'>
                                <div className='card-content h-full'>
                                    <p className='pt-5 text-xl font-bold'>NFL Prototype</p>
                                    <img className='w-1/2 h-[55%] mx-auto' alt='Logo of NFL Prototype Website' src={NFL_Prototype} />
                                    <div className="flex justify-center pt-5">
                                        <div className='projecttag text-xl'>React</div>
                                        <div className='projecttag text-xl'>Firebase</div>
                                    </div>
                                </div>
                                <div className='hover-content'>
                                    <p className='pt-5 text-xl font-bold'>NFL Prototype</p>
                                    <p className='text-left m-5'>NFL Prototype is a web project dedicated to fostering confidence and ambition in young atheletes by being able to compare themselves with Pro atheletes and progressing towards the professional world. As an academic project, I worked as part of a diverse team building the website from scratch utilizing React, Firebase, Bootstrap and datasets from kaggle.</p>
                                    <a href='https://nfl-prototype.firebaseapp.com' target='_blank' rel='noreferrer'>
                                    <div className="rounded bg-faf-white w-40 mx-auto py-2 link">Demo <OpenInNewIcon /></div>
                                    </a>
                                </div>  
                            
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-col md:flex-row justify-between w-4/5 mx-auto'>
                        <div className="card-container mt-20 mb-20 w-full md:w-[45%] h-[450px] lg:w-2/5 lg:h-96">
                            <div className='card h-full bg-site-blue'>
                                <div className='card-content h-full'>
                                    <p className='pt-5 text-xl font-bold'>SWECC Website</p>
                                    <img className='w-full lg:w-1/2 h-[55%] mx-auto' alt='Logo of student organization SWECC' src={SWECClogo} />
                                    <div className="flex justify-center pb-5">
                                        <div className='projecttag text-xl'>React</div>
                                        <div className='projecttag text-xl'>Bootstrap</div>
                                    </div>
                                </div>
                                <div className='hover-content'>
                                    <p className='pt-5 text-xl font-bold'>SWECC Website</p>
                                    <p className='text-left m-5'>As part of Web Impact UW, I led a team of designers to design out a website for another Student-led Organization at the University of Washington. After some complications in the coding team, I took upon the role of a Coding Lead, delegating tasks to members and defining deadlines to ensure that the project will be completed. </p>
                                    <a href='https://github.com/webimpactuw/swecc' target='_blank' rel='noreferrer'>
                                    <div className="rounded bg-faf-white w-40 mx-auto py-2 link">Github <GitHub /></div>
                                    </a>
                                </div>  
                            
                            </div>
                        </div>
                        <div className="card-container mt-20 mb-20 w-full md:w-[45%] h-[450px] lg:w-2/5 lg:h-96">
                            <div className='card h-full bg-site-blue'>
                                <div className='card-content h-full'>
                                    <p className='pt-5 text-xl font-bold'>Content Moderation</p>
                                    <img className='w-1/2 h-[55%] mx-auto' alt='Content Moderation Logo' src={contentlogo} />
                                    <div className="flex justify-center pb-5">
                                        <div className='projecttag text-xl'>Java</div>
                                        <div className='projecttag text-xl'>Queues</div>
                                    </div>
                                </div>
                                <div className='hover-content'>
                                    <p className='pt-5 text-xl font-bold'>Content Moderation</p>
                                    <p className='text-left m-5'>
                                    As part of the Data Structures & Algorithms course at the University of Washington, I implemented three different variations of priority queues to moderate content. The content was given a toxicity value by a machine learning algorithm, where I then moderated the content depending on the priority of that toxicity. Through these 3 different variations, I worked to analyze the runtime and the potential real-world impacts and biases the algorithms may cause.
                                    </p>
                                </div>  
                            
                            </div>
                        </div>

                    </div>
                    
                </div>
                
                </motion.div>
            </section>
            

    )
}