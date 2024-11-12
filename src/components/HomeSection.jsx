import React from 'react'


export default function HomeSection() {
    return (

        <div>
            <h1 className='text-xl font-semibold'>Welcome to my site,</h1><br/>
            <p className='text-base text-justify'>Hi, this is Satyajit Adhikary, a passionate Full Stack Developer 
                with a focus on building dynamic, responsive web applications using React on the front end and Node.js 
                on the back end. With a strong foundation in both front-end and back-end development, 
                I bring a versatile skill set that enables me to handle complex projects from start to finish, 
                transforming ideas into scalable, user-friendly applications.</p>
                <br/>
            <p className='text-base text-justify'>
            My experience includes developing robust APIs, integrating with various databases (such as MongoDB and MySQL), 
            and building seamless user interfaces with React, ensuring a clean and responsive experience across devices. 
            I excel in working with RESTful APIs, GraphQL, and Express, and I prioritize performance, scalability, 
            and maintainability in all of my projects.
            </p><br/>
            <div className='flex gap-4'>
            <a href="https://linkedin.com/in/satyajit-adhikary" target="_blank">
            <button className="btn btn-primary bg-[#1877F2] w-32">Hire Now!</button>
            </a>
            <a href="https://drive.google.com/file/d/1bqLlYFgEP2bVWj9pjnv2Q8QdinA6-zZz/view" target="_blank">
            <button className="btn btn-primary bg-[#1877F2] w-32">Download CV</button>
            </a>
            </div>
           
        </div>
        
       
    )
}
