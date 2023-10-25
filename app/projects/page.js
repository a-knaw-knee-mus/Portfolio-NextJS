import getProjects from "../../util/getProjects";
import ProjectCard from "../../components/ProjectCard";

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <>
            <div className="grid lg:grid-cols-2 max-w-7xl mx-auto gap-5 items-start px-5">
                {projects
                    .sort((a, b) => {
                        if (a.indexNumber > b.indexNumber) return 1;
                        if (a.indexNumber < b.indexNumber) return -1;
                        return 0;
                    })
                    .map((post) => {
                        return <ProjectCard key={post._id} post={post} />;
                    })}
            </div>
        </>
    );
}
