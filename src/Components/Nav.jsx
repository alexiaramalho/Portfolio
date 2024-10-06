import { useState } from "react";
import { Link } from "react-router-dom";
import {FaTimes} from "react-icons/fa";
import { HiMenu } from "react-icons/hi";


const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const content = <>
        <div className="md:hidden block absolute top-20 w-full left-0 right-0 transition bg-gradient-to-bl from-pink-900/70 to-slate-900/90 to-30%">
            <ul className="text-center text-xl pb-16 px-20">
                <Link spy={true} smooth={true} to="/">
                    <li className="my-4 py-4 border-b border-pink-700 hover:bg-pink-700 hover:rounded">Sobre mim</li>
                </Link>
                <Link spy={true} smooth={true}  to="Projects">
                    <li className="my-4 py-4 border-b border-pink-700 hover:bg-pink-700 hover:rounded">Projetos</li>
                </Link>
                <Link spy={true} smooth={true}  to="Contact">
                    <li className="my-4 py-4 border-b border-pink-700 hover:bg-pink-700 hover:rounded">Contato</li>
                </Link>
            </ul>
        </div>
    </>

    return (
        <nav>
            <div className="h-10vg flex justify-between z-50 lg:py-12 px-10 py-6 md:py-12 lg:py-12">
                <div className="flex items-center">
                   <img src="face.svg" className="h-14 w-14" alt="" /> 
                </div>
                <div className="lg:flex md:flex lg: flex-1 items-center justify-center hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 text-[18px]">
                            <Link spy={true} smooth={true}  to="/">
                                <li className="font-semibold text-2xl hover:text-pink-600 border-b-2 border-transparent hover:border-pink-600 transition cursor-pinter">Sobre mim</li>
                            </Link>
                            <Link spy={true} smooth={true}  to="Projects">
                                <li className="font-semibold text-2xl hover:text-pink-600 transition border-b-2 border-transparent hover:border-pink-600 cursor-pinter">Projetos</li>
                            </Link>
                            <Link spy={true} smooth={true}  to="Contact">
                                <li className="font-semibold text-2xl hover:text-pink-600 transition border-b-2 border-transparent hover:border-pink-600 cursor-pinter">Contato</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block md:hidden transition " onClick={handleClick}>
                    {click ? <FaTimes size={50}/> : <HiMenu size={50}/>}
                </button>
            </div>
        </nav>
    )
}

export default Nav;