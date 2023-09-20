import React, {useState} from "react";

export default function Navbar(props) {
    const [colorChange, setColorChange] = useState(false);
    function changeNavbarColor() {
        if (window.scrollY >= 80) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    }

    window.addEventListener('scroll', changeNavbarColor);

    function onClick(e) {
        e.preventDefault();
        window.scrollTo({
            top: document.querySelector(e.target.dataset.target).offsetTop,
            behavior: 'smooth'
        });
    }

    return (
        <nav className={`${colorChange ? 'midscroll' : 'topscroll'} flex text-faf-white justify-between px-11 py-3 fixed w-screen z-50`}>
            <p className="font-bold hidden md:block">Ryanfolio</p>
            <ul className='w-full text-center md:text-right'>
                <li data-target='#about' onClick={onClick} className="inline">Home</li>
                <li data-target='#projects' onClick={onClick} className="inline ml-6">Projects</li>
                <li data-target='#contact' onClick={onClick} className="inline ml-6">Contact</li>
            </ul>
        </nav>
    )
}