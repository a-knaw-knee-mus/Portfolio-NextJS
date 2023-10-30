import ExpandedProjectCard from "../../../components/ClientSlugPage";
import getProjects from "../../../util/getProjects"

export default async function ProjectPage({ params: { slug } }) {
    const [project] = await getProjects(slug);

    return <>
        <ExpandedProjectCard project={project} />
    </>
}