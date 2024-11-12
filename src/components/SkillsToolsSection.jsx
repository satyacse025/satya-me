import React from 'react'
import toolsImg from '../assets/tools.png';

export default function SkillsToolsSection() {
  return (
    <div id='skills-and-tools' className='pt-2'>
      <div className="divider divider-success">Skills and Tools</div>
      <h1 className='text-lg'><span className='font-semibold'> Front End:</span> React, Redux, HTML5, CSS3, 
      JavaScript (ES6+), Tailwind CSS, Material UI</h1>
      <h1 className='text-lg'><span className='font-semibold'> Back End:</span> Node.js, Express, MongoDB, MySQL </h1>
      <h1 className='text-lg'><span className='font-semibold'> Tools & Platforms:</span> Git, Docker, Vercel, Netlify, Firebase</h1>
      <h1 className='text-lg'><span className='font-semibold'> Other:</span> RESTful APIs, GraphQL, JWT Authentication, 
      Responsive Web Design </h1>

      <img src={toolsImg} alt="" className='' />
     
    </div>
  )
}
