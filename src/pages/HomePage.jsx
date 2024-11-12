import React from 'react'

import LeftSidebar from '../components/LeftSidebar'
import HomeSection from '../components/HomeSection'
import SkillsToolsSection from '../components/SkillsToolsSection'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'

export default function HomePage() {
    return (
        <>
            <div className='bg-white dark:bg-black dark:text-white'>
                <div className='lg:w-5/6 mx-auto'>
                    <div className="grid max-w-screen-xl mb-0 px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

                        <div className="order-first lg:mt-0 lg:col-span-3 lg:flex">
                            <div className='flex items-center flex-col'>
                                <LeftSidebar></LeftSidebar>
                            </div>

                        </div>
                        <div className="lg:col-span-1">
                           

                        </div>
                        <div className="lg:col-span-8">
                            <HomeSection></HomeSection>
                            <SkillsToolsSection></SkillsToolsSection>
                            <ExperienceSection></ExperienceSection>
                            <ProjectsSection></ProjectsSection>
                            <AboutSection></AboutSection>
                            <ContactSection></ContactSection>

                        </div>
                    </div>
                </div>
            </div >


        </>
    )
}
