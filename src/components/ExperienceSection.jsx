import React from 'react'

export default function ExperienceSection() {
    return (
        <div id='experience' className='pt-2 dark:text-white'>
            <div className="divider divider-success">Experience</div>

            <ul className="timeline timeline-vertical text-lg">
                <li>
                    <div className="timeline-start timeline-box dark:bg-black">
                        <h1 className='text-xl font-semibold'>Full Stack Developer</h1>
                        <p className='text-base text-justify'>Codeman BD</p>
                        <p className='text-base text-justify'>Technologies: React, Node.js, Express</p>
                        <p className='text-base text-justify'>Job Type: Freelance (Remote) </p>
                        <p className='text-base text-justify'>Duration :January, 2022 – Present </p>
                    </div>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="text-primary h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <hr className="bg-primary" />
                </li>
                <li>
                    <hr className="bg-primary" />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="text-primary h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end timeline-box dark:bg-black">
                    <h1 className='text-xl font-semibold'>Web Developer</h1>
                        <p className='text-base text-justify'>Web Battalion</p>
                        <p className='text-base text-justify'>Technologies: React, Node.js, Express</p>
                        <p className='text-base text-justify'>Job Type: Freelance (Remote) </p>
                        <p className='text-base text-justify'>Duration :December, 2020 – October, 2021</p>
                    </div>
                    <hr className="bg-primary" />
                </li>
                <li>
                    <hr className="bg-primary" />
                    <div className="timeline-start timeline-box dark:bg-black">
                    <h1 className='text-xl font-semibold'>Full Stack Developer</h1>
                        <p className='text-base text-justify'>Sonali Information Technology</p>
                        <p className='text-base text-justify'>Technologies: React, Node.js, Express</p>
                        <p className='text-base text-justify'>Job Type: Full Time</p>
                        <p className='text-base text-justify'>Duration :3rd February, 2016 – 18th June, 2019</p>
                    </div>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="text-primary h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <hr />
                </li>
                
               
            </ul>
           
        </div>
    )
}
