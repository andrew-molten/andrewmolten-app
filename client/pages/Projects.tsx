import ProjectCard from '../components/projects/ProjectCard'
// import ProjectDescription from '../components/projects/ProjectDescription'
import {
  languageBuddyDescription,
  languageBuddyImages,
} from '../data/projectData/languageBuddy'
// import { lbStory } from '../../public/images/images.ts'

function Projects() {
  // I need a projects card link which conveys what the app is and links to it.

  // WHAT DO I WANT TO CONVEY?
  // Name
  // Images - rotating..
  // What it does? perhaps through the images?
  // techstack?
  return (
    <div className="projects-container">
      {/* <ProjectDescription data={languageBuddyDescription} /> */}
      <ProjectCard
        images={languageBuddyImages}
        data={languageBuddyDescription}
      />
      <ProjectCard
        images={languageBuddyImages}
        data={languageBuddyDescription}
      />
      {/* <img src={lbStory} alt="language buddy home page" /> */}
    </div>
  )
}

export default Projects
