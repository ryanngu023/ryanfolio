import React from "react";
import { motion } from "framer-motion";
import nekoneedlework from '../assets/logo2.png';

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
        <div>
            <div id='projects' className='mt-56 relative z-0 text-center'>
            <motion.div variants={projectVariants} initial='offscreen' whileInView='onscreen' viewport={{once: true}}>
                <p className="text-5xl underline">Projects & Experience</p>
                <p className='text-xl pt-5'>Get a quick look into some of my most favorite projects and things I worked on throughout my journey! 😀</p>
                <div className="w-full">
                    <div className='flex justify-between w-4/5 mx-auto'>
                        <div className="card-container mt-20 mb-20 w-2/5 h-96">
                            <div className='card h-[22rem] bg-[#6AC1FF]'>
                                <div className='card-content h-full'>
                                    <p className='pt-5 text-xl font-bold'>Neko Needlework</p>
                                    <img className='w-1/2 mx-auto' src={nekoneedlework} />
                                    <div className="flex justify-center pb-5">
                                        <div className='projecttag text-xl'>React</div>
                                        <div className='projecttag text-xl'>Bootstrap</div>
                                    </div>
                                </div>
                                <div className='hover-content'>
                                    <p className='pt-5 text-xl font-bold'>Neko Needlework</p>
                                </div>  
                            
                            </div>
                        </div>
                        <div className="card-container mt-20 mb-20 w-2/5 h-96">
                            <div className='card h-[22rem] bg-[#6AC1FF]'>
                                <div className='card-content h-full'>
                                    <p className='pt-5 text-xl font-bold'>Neko Needlework</p>
                                    <img className='w-1/2 mx-auto' src={nekoneedlework} />
                                    <div className="flex justify-center pb-5">
                                        <div className='projecttag text-xl'>React</div>
                                        <div className='projecttag text-xl'>Bootstrap</div>
                                    </div>
                                </div>
                                <div className='hover-content'>
                                    <p className='pt-5 text-xl font-bold'>Neko Needlework</p>
                                </div>  
                            
                            </div>
                        </div>



                    </div>


                    <div className='flex justify-between w-4/5 mx-auto'>
                        <div className="card-container mt-20 mb-20 w-2/5 h-96">
                            <div className='card h-[22rem] bg-[#6AC1FF]'>
                                <div className='card-content h-full'>
                                    <p className='pt-5 text-xl font-bold'>Neko Needlework</p>
                                    <img className='w-1/2 mx-auto' src={nekoneedlework} />
                                    <div className="flex justify-center pb-5">
                                        <div className='projecttag text-xl'>React</div>
                                        <div className='projecttag text-xl'>Bootstrap</div>
                                    </div>
                                </div>
                                <div className='hover-content'>
                                    <p className='pt-5 text-xl font-bold'>Neko Needlework</p>
                                </div>  
                            
                            </div>
                        </div>
                        <div className="card-container mt-20 mb-20 w-2/5 h-96">
                            <div className='card h-[22rem] bg-[#6AC1FF]'>
                                <div className='card-content h-full'>
                                    <p className='pt-5 text-xl font-bold'>Neko Needlework</p>
                                    <img className='w-1/2 mx-auto' src={nekoneedlework} />
                                    <div className="flex justify-center pb-5">
                                        <div className='projecttag text-xl'>React</div>
                                        <div className='projecttag text-xl'>Bootstrap</div>
                                    </div>
                                </div>
                                <div className='hover-content'>
                                    <p className='pt-5 text-xl font-bold'>Neko Needlework</p>
                                </div>  
                            
                            </div>
                        </div>



                    </div>
                    

                </div>
                
                </motion.div>
            </div>
            
        </div>
    )
}