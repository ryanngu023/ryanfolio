import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer(props) {
    return (
        <footer className="flex justify-between relative pt-10 pb-5 bg-[#3F608F]">
            <p className="ml-5 text-white text-xl">Copyright &copy; 2023. All rights are reserved</p>
            <div className="mr-7">
                <a href='https://github.com/ryanngu023' target='_blank' rel='noreferrer'>
                    <GitHubIcon className='mr-3' sx={{ '&:hover':{ color: '#3A4856'}, color: '#FAF7F7', fontSize: 40}} />
                </a>
                <a href='https://linkedin.com/in/ryanng20/' target='_blank' rel='noreferrer'>
                <LinkedInIcon className='mx-3' sx={{ '&:hover':{ color: '#3A4856'}, color: '#FAF7F7', fontSize: 40}} />
                </a>

                <a href='mailto:ryannguyen10023@gmail.com'>
                    <EmailIcon className='ml-3' sx={{ '&:hover':{ color: '#3A4856'}, color: '#FAF7F7', fontSize: 40}} />
                </a>

            </div>
        </footer>
    )
}