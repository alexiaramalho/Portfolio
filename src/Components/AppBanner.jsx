import imagemHome from '../images/Codando.png'
import imagemGirl from '../images/Girl.png'
import "../index.css";

const AppBanner = () => {
    return(
       <>
            <div className='grid md:grid-cols-2 text-center md:text-left mx-10 sm:mx-20 justify-between items-center'>
                <div className='w-full '>
                    <img src= {imagemHome} 
                    alt="" />
                </div>

                <div className="grid w-full gap-y-6 md:ml-10">
                    <h1 className='font-extrabold  text-5xl uppercase '>Oii, eu sou a Alexia!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur maxime magnam autem. Perferendis odit aliquam quidem in? Amet, eum.</p>
                </div>
            </div>
            <div className='m-10 border-2 border-pink-600 rounded-3xl'>
                <div className='grid p-12 md:grid-cols-2 justify-between items-center'>
                    <div className="grid w-full text-center gap-y-6 ">
                        <h1 className='font-extrabold text-3xl uppercase md:text-5xl '>Um pouco mais sobre mim</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dignissimos ducimus, vitae sed harum corporis dolorum aspernatur asperiores quas adipisci veniam, alias sapiente eaque explicabo velit similique reprehenderit laudantium soluta ab! Aut commodi sunt soluta, eligendi consectetur officia in. Doloribus?</p>
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

export default AppBanner;