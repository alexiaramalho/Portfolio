import imagemHome from '../images/Codando.png'
import imagemGirl from '../images/Girl.png'
import "../index.css";
import {
    FaReact,
    FaCss3Alt,
    FaHtml5,
} from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";


const AboutMe = () => {
    return(
       <>
            <div className='grid md:grid-cols-2 text-center md:text-left mx-10 sm:mx-20 justify-between items-center'>
                <div className='w-full '>
                    <img src= {imagemHome} 
                    alt="" />
                </div>

                <div className="grid w-full gap-y-6 md:ml-10">
                    <h1 className='font-extrabold  text-5xl uppercase text-pink-600 '>Oii, eu sou a Alexia!</h1>
                    <p className='text-2xl'>Estudante de Engenharia de Software 🤓</p>
                </div>
            </div>
            <div className='m-10 border-2 border-pink-600 rounded-3xl'>
                <div className='grid p-2 sm:p-12 lg: py-8 md:grid-cols-2 justify-between items-center'>
                    <div className="grid w-full text-center gap-y-6 ">
                        <h1 className='font-extrabold text-3xl uppercase md:text-5xl '>Um pouco mais sobre mim 😊</h1>
                        <p>Olá, meu nome é Alexia, tenho 20 anos e sou estudante de Engenharia de Software. Tenho uma paixão por tecnologia e estou sempre buscando novas formas de aprender e me aprimorar. Minha jornada começou no front-end, onde adoro trabalhar com design e interfaces, mas atualmente estou expandindo meus conhecimentos no back-end, com foco em Python. Além disso, sou entusiasta de ferramentas de design, como Figma, Photoshop, Clip Studio Paint e Canvas, que me ajudam a explorar minha criatividade e aplicar minhas habilidades em projetos diversos.</p>
                        <div className= 'flex items-center justify-center gap-2 mt-4'>
                            <div className="grid grid-cols-2 sm:grid-cols-5">
                            <FaReact size={50}/>
                            <FaCss3Alt size={50}/>
                            <FaHtml5 size={50}/>
                            <IoLogoJavascript size={50}/>
                            <SiAdobephotoshop size={50} className='ml-1'/>
                            </div>
                        </div>
                    </div>
                    <div className='w-full '>
                        <img src= {imagemGirl} 
                        alt="" />
                    </div>
                </div>
            </div>
       </>
    );


}

export default AboutMe;