import { ProjectCardData, ProjectData } from '../../../models/models'

interface Props {
  images: ProjectCardData
  data: ProjectData
}

function ProjectCard({ images, data }: Props) {
  return (
    <button className="project-card">
      <div className="project-card-description">
        <h2>{data.heading}</h2>
        <p>{data.intro}</p>
      </div>

      <img
        src={images.main}
        alt="language buddy home page"
        className="project-card-img"
      />
    </button>
  )
}
export default ProjectCard
