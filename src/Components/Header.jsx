import { NavLink } from "react-router-dom";

function Header() {
    return ( 
        <>
            <header className="flex w-full h-24 justify-around items-center">
                <nav>
                    <ul className="flex gap-10 font-semibold text-xl md:text-2xl">
                        <li className="hover:text-pink-600 transition duration-300"><NavLink to ="/">Sobre mim</NavLink></li>
                        <li className="hover:text-pink-600 transition duration-300"><NavLink to ="/Projects">Projetos</NavLink></li>
                        <li className="hover:text-pink-600 transition duration-300"><NavLink to ="/Contact">Contatos</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
     );
}

export default Header;