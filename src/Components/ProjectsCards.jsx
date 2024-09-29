import { Link } from "react-router-dom";

function ProjectsCards({ titulo, imagem, descricao, ferramentas, saibamais, id }) {
    return (
        <>
            <div className="rounded-xl shadow-lg hover:shadow-xl mb-10 sm:mb-0 bg-slate-800/60">
                <div className="p-2 ">
                    <img src={imagem} className="w-full h-96 rounded-xl border-none" />
                </div>
                <div className="text-center px-4 py-6 text-black ">
                    <h4 className="text-2xl uppercase font-bold text-pink-600">{titulo}</h4>
                    <div className="my-5 text-gray-200">
                        <h6>{descricao}</h6>
                    </div>
                    <div className="flex justify-center align-center ">
                        <span className="truncate my-3 mx-3 rounded-full bg-slate-400 px-6 py-1 text-slate-700">{ferramentas}</span>
                    </div>
                    <Link to={`projects/${id}`}></Link>

                    <div className="relative">
                        <div className="absolute inset-0 blur bg-pink-700 rounded-full mx-10 md:mx-5"></div>
                        <div className="relative text-l text-white md:text-lg mt-5 mx-10 md:mx-5 bg-slate-800 px-7 py-2 rounded-full leading-none hover:bg-pink-600/50 cursor-pointer ">
                            <a href={saibamais} target="_blank" className="flex justify-center w-full">Saiba mais</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectsCards;
