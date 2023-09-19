import React from "react";
import aboutback from "../assets/aboutback.png";
import viewresume from "../assets/ViewResumeButton.png";
import profile from "../assets/brightideacut.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function About(props) {

    return (
        <section id='about' className='w-screen h-screen'>
            <img className='w-screen h-screen absolute z-0' alt='' src={aboutback} />
            <section className='relative z-40 mx-5 flex pt-40 justify-between'>
                <div className="pl-10 w-[50%] text-[#FAF7F7]">
                    <h1 className="text-5xl pb-10">Hi, I'm Ryan Nguyen!👋</h1>
                    <p className=" text-xl">I’m a passionate Full Stack Developer who is currently in my third year studying Informatics at the University of Washington. I have worked in a diverse range of projects focused on front-end/back-end and software development.
                    Check out my resume 🙂</p>
                    <div className="flex justify-between mt-10">
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
                        <a href='https://drive.google.com/file/d/1z5JzG-gR1J3301zM_n1LUuaAUEF4jQzs/view?usp=sharing' rel='noreferrer' target='_blank'>
                            <img className='viewresume w-36 h-10' alt='' src={viewresume} />
                        </a>
                    </div>
                </div>
                
                <img className='profile m-auto w-1/3 max-h-[50%]' alt='Profile Shot of Ryan Nguyen' src={profile} />
            </section>
        </section>
    )
}