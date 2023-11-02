import getProjects from "../../util/getProjects";
import ClientProjectsPage from "../../components/ClientProjectsPage";

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <>
            <ClientProjectsPage projects={projects} />
        </>
    );
}
