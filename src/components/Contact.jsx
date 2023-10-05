import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact(props) {
    const [formStatus, setFormStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState({
        fname: '',
        lname: '',
        email: '',
        message: ''
    })

    const FORM_ENDPOINT = process.env.REACT_APP_GETFORMS_ENDPOINT;

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(loading) return;
        setLoading(true);
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
            formData.append(key, value);
        })

        fetch(FORM_ENDPOINT, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(function (response) {
            setFormStatus(true);
            setQuery({
              fname: "",
              lname: "",
              email: "",
              message: ""
            });
            setLoading(false);
          })
          .catch(function (error) {
            setLoading(false);
          });
    }

    const contactVariants = {
        offscreen: {
            opacity: 0,
            translateY: -300,
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
        <section id='contact' className="pt-24 pb-32">
            <motion.div variants={contactVariants} initial='offscreen' whileInView='onscreen' viewport={{once: true, amount: 0.8}}>
            <div className='text-center mx-auto w-5/6 md:w-1/2 text-faf-white'>
                <p className="text-3xl md:text-5xl">Contact Me!</p>
                <p className='text-base md:text-xl pt-5'>Whether you have a project that you would like to work on together, an inspiring opportunity, or just want to talk, feel free to contact me!</p>
            </div>
            <div className="contactform mt-10 w-5/6 lg:w-1/2 mx-auto text-center bg-faf-white">
                <form className='flex flex-col p-10' encType="multipart/form-data" onSubmit={handleSubmit}>
                    <p className="text-left pb-3"><span className="text-red-600">*</span> are required</p>
                    <div className='flex justify-between'>
                        <div className='flex flex-col w-[45%]'>
                            <label>First Name:</label>
                            <input type='text' name='fname' value={query.fname} onChange={handleChange}  />
                        </div>
                        <div className='flex flex-col w-[45%]'>
                            <label>Last Name:</label>
                            <input type='text' name='lname' value={query.lname} onChange={handleChange} />
                        </div>
                    </div>
                    <label className='pt-10'>Email<span className="text-red-600">*</span>:</label>
                    <input type='text' name='email' value={query.email} onChange={handleChange}/>
                    <label className='pt-10'>Content<span className="text-red-600">*</span>:</label>
                    <textarea className='p-2' placeholder="Enter your message..." name='message' value={query.message} onChange={handleChange}/>
                    <button className='bg-faf-white rounded' type='submit'>Send</button>
                    {formStatus && <p>Form has been Submitted!</p>}
                </form>
            </div>
            </motion.div>
        </section>
    )
}