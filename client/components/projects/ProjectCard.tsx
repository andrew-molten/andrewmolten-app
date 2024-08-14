import { ProjectCardData } from '../../../models/models'

interface Props {
  data: ProjectCardData
}

function ProjectCard({ data }: Props) {
  return (
    <div>
      <img src={data.main} alt="language buddy home page" />
    </div>
  )
}
export default ProjectCard
