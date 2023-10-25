import ExpandedProjectCard from "../../../components/ExpandedProjectCard";
import getProjects from "../../../util/getProjects"

export default async function ProjectPage({ params: { slug } }) {
    const [project] = await getProjects(slug);

    return <>
        <ExpandedProjectCard project={project} />
    </>
}