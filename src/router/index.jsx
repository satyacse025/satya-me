import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import HomePage from "../pages/HomePage";
import SkillsToolsSection from "../components/SkillsToolsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/skills-and-tools",
        element: <SkillsToolsSection />,
      },
      {
        path: "/experience",
        element: <ExperienceSection />,
      },
      {
        path: "/projects",
        element: <ProjectsSection />,
      },
      {
        path: "/about",
        element: <AboutSection />,
      },
      {
        path: "/contact",
        element: <ContactSection />,
      },
    ],
  },

]);

export default router;