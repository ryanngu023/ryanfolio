import React from "react";

export default function Contact(props) {
    return (
        <div className="flex pt-32 pb-32 bg-[#6AC1FF]">
            <div className='text-center mx-auto w-1/2 text-[#FAF7F7]'>
                <p className="text-3xl">Contact Me!</p>
                <p className='pt-5'>Whether you have a project that you would like to work on together, an inspiring opportunity, or just want to talk, feel free to contact me!</p>
                <p>Image Here</p>
            </div>
            <div className="contactform w-1/3 mx-auto text-center bg-[#9DADBC]">
                <form className='flex flex-col p-10'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col w-[45%]'>
                            <label>First Name:</label>
                            <input type='text'></input>
                        </div>
                        <div className='flex flex-col w-[45%]'>
                            <label>Last Name:</label>
                            <input type='text'></input>
                        </div>
                    </div>
                    <label className='pt-10'>*Email:</label>
                    <input type='text'></input>
                    <label className='pt-10'>Message:</label>
                    <input type='textarea'></input>
                    <button className='bg-[#FAF7F7] rounded' type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}