import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import satyaImg from '../assets/satyajit.png';

import reactImg from '../assets/react.png';
import nodeImg from '../assets/nodejs.png';
import nextImg from '../assets/nextjs.png';
import expressImg from '../assets/expressjs.png';
import mongoImg from '../assets/mongodb.png';
import tailwindImg from '../assets/tailwindcss.png';
import daisyImg from '../assets/daisyui.png';

import firebaseImg from '../assets/firebase.png';
import githubImg from '../assets/github.png';

import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa6";

export default function LeftSidebar() {
    return (
        <div className="card glass w-auto">
            <figure>
                <img src={satyaImg} alt="" className='w-3/4 rounded-full' />
            </figure>

            <div className="card-body">
                <div className="divider divider-success">Info</div>
                <h2 className="card-title">Satyajit Adhikary</h2>
                <p className='text-[#1877F2]'>Full Stack Developer | React & Node.js Expert</p>

                <a href="https://linkedin.com/in/satyajit-adhikary" target="_blank">
                    <span className='tracking-tight text-lg flex'><FaLinkedin className='mt-1 mr-1' />satyajit-adhikary</span>
                </a>
                <a href="https://github.com/satyacse025" target="_blank">
                    <span className='tracking-tight text-lg flex'><FaGithubAlt className='mt-1 mr-1' />satyacse025</span>
                </a>
                <a href="https://wa.me/8801749090971" target="_blank">
                    <span className='tracking-tight text-lg flex'><FaWhatsapp className='mt-1 mr-1' />+88 017 49 090 971</span>
                </a>
                <a href="mailto:satyacse025@gmail.com" target="_blank">
                    <span className='tracking-tight text-lg flex'><IoMailUnreadOutline className='mt-2 mr-1' />satyacse025@gmail.com</span>
                </a>
                <span className='tracking-tight text-lg flex'><IoLocation className='mt-2 mr-1' />Bagerhat-9300, Khulna, Bangladesh</span>

                <div className="divider divider-success">Skills and Tools</div>
                <div className='flex'>
                    <img src={reactImg} alt="" className='' />
                    <img src={nodeImg} alt="" className='ml-3' />
                    <img src={nextImg} alt="" className='ml-3 h-2/3 w-1/3' />
                </div>
                <div className='flex'>
                    <img src={mongoImg} alt="" className='w-2/4' />
                    <img src={expressImg} alt="" className='w-1/3 ml-3' />

                </div>
                <div className='flex'>
                    <img src={tailwindImg} alt="" className='w-2/4' />
                    <img src={daisyImg} alt="" className='w-1/3 ml-3' />
                </div>
                <div className='flex'>
                    <img src={githubImg} alt="" className='w-1/3' />
                    <img src={firebaseImg} alt="" className='w-2/4 ml-3' />
                </div>

                <div className="card-actions justify-end mt-3">
                    <button className="btn btn-primary bg-[#1877F2] w-full "><a href="https://drive.google.com/file/d/1bqLlYFgEP2bVWj9pjnv2Q8QdinA6-zZz/view" target="_blank">Download CV</a></button>
                </div>
            </div>
        </div>
    )
}
