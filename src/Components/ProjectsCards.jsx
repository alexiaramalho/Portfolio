import { Link } from "react-router-dom";

function ProjectsCards({titulo, imagem, id}) {
    return ( 
        <>
            <div className="">
                <img src={imagem}/>
                <h4>{titulo}</h4>
                <Link to= {`projects/${id}`}>Saiba mais</Link>
            </div>
        </>
     );
}

export default ProjectsCards;
