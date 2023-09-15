import React from "react";

export default function Navbar(props) {
    function onClick(e) {
        e.preventDefault();
        window.scrollTo({
            top: document.querySelector(e.target.dataset.target).offsetTop,
            behavior: 'smooth'
        });
    }

    return (
        <nav className="flex justify-between px-11 py-3 bg-transparent fixed w-screen z-50 text-[#FAF7F7]">
            <p className="font-bold">Ryanfolio</p>
            <ul>
                <li className="inline">Home</li>
                <li data-target='#projects' onClick={onClick} className="inline ml-6">Projects</li>
                <li className="inline ml-6">Contact</li>
            </ul>
        </nav>
    )
}