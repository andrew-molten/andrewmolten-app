import { ProjectData } from '../../../models/models'

interface Props {
  data: ProjectData
}

function ProjectDescription({ data }: Props) {
  return (
    <div>
      <h2>{data.heading}</h2>
      <p>{data.intro}</p>
      <p>{data.paragraph}</p>
      <p>{data.conclusion}</p>
    </div>
  )
}
export default ProjectDescription
