import React from "react";
import aboutback from "../assets/aboutback.png";
import viewresume from "../assets/ViewResumeButton.png";
import profile from "../assets/brightideacut.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Home(props) {


    return (
        <div className='w-screen h-screen'>
            <img className='w-screen h-screen absolute -z-50' src={aboutback} />
            <div className='mb-[14.9rem] mx-5 flex pt-40 justify-between'>
                <div className="pl-10 w-[50%] text-[#FAF7F7]">
                    <h1 className="text-5xl pb-10">Hi, I'm Ryan Nguyen!</h1>
                    <p className=" text-xl">I’m a passionate Full Stack Developer who is currently in my third year studying Informatics at the University of Washington. I have worked in a diverse range of projects focused on front-end/back-end and software development.</p>
                    <div className="flex justify-between mt-10">
                    <div>
                        <GitHubIcon className='mr-3' sx={{ '&:hover':{ color: '#3A4856'}, fontSize: 40}} />
                        <LinkedInIcon className='mx-3' sx={{ '&:hover':{ color: '#3A4856'}, fontSize: 40}} />
                        <EmailIcon className='ml-3' sx={{ '&:hover':{ color: '#3A4856'}, fontSize: 40}} />
                    </div>
                    <img className='viewresume w-36 h-10' src={viewresume} />
                    </div>
                </div>

                <img className='profile m-auto w-1/3 max-h-[50%]' src={profile} />
            </div>

            <div id='projects' className='text-center'>
                <p className="text-5xl">Projects</p>
                <div>
                    
                </div>
            </div>
            
        </div>
    )
}