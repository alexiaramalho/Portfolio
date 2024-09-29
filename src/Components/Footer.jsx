
import {
    FiGithub,
    FiLinkedin,
    FiGlobe,
    FiYoutube,
    FiInstagram,
} from 'react-icons/fi';

const socialLinks = [
    {
        id: 1,
        icon: <FiGithub />,
        url: 'https://github.com/alexiaramalho',
    },
    {
        id: 2,
        icon: <FiInstagram />,
        url: 'https://www.instagram.com/alecsssya/',
    },
    {
        id: 3,
        icon: <FiLinkedin />,
        url: 'https://www.linkedin.com/in/alexia-ramalho/',
    },
    {
        id: 4,
        icon: <FiYoutube />,
        url: 'https://www.youtube.com/@alecssya',
    },
];

function Footer() {
    return (
        <>
            <footer>
                <div className="pt-20  mt-20 border-t-2 border-pink-600">
                    <div className="flex flex-col justify-center items-center mb-10">
                        <ul className="flex flex-wrap gap-4 justify-center ">
                            {socialLinks.map((link) => (
                                <a
                                    href={link.url}
                                    target="__blank"
                                    key={link.id}
                                    className="hover:text-pink-600 cursor-pointer rounded-full bg-pink-600 hover:bg-gray-100  p-4 duration-300"
                                >
                                    <i className="text-xl md:text-3xl">
                                        {link.icon}
                                    </i>
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center items-center text-center mb-10'>
                    <h1>Copyright © 2024</h1>
                </div>
            </footer>

        </>
    );
}

export default Footer;