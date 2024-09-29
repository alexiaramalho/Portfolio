import ProjectsData from "../data/ProjectsData.json"
import CardContainer from "../Components/CardContainer";
import ProjectsCards from "../Components/ProjectsCards";

function Projects() {
    return (
        <>
            <div className="flex justify-center sm:justify-left sm:ml-12 align-center pt-5">
                <h1 className="text-2xl sm:text-4xl font-bold uppercase "> Meus projetos</h1>
            </div>
            <div className="border-b-2 border-pink-600 mt-5"></div>
            <div className="m-10">
                <CardContainer>
                    {ProjectsData
                        .map(ProjectsData => (<ProjectsCards key={ProjectsData.id} {...ProjectsData} />))
                    }
                </CardContainer>
            </div>
        </>
    );
}

export default Projects;