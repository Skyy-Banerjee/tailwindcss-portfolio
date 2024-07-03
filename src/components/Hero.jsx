import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Hero() {
    return (
        <div className='bg-emerald-100 py-24'>
            <div className="align-element grid md:grid-cols-2 items-center gap-8">
                <article>
                    <h1 className="text-7xl font-bold tracking-wider">I'm Soumadip</h1>
                    <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
                        Front-End Developer
                    </p>
                    <p className="text-slate-700 capitalize mt-2 text-lg tracking-wide">
                        Turning ideas into interactive reality
                    </p>
                    <div className="gap-x-4 flex">
                        <a href="#" target='_blank'>
                            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                        <a href="#" target='_blank'>
                            <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                        <a href="https://www.instagram.com/skyy_banerjee/" target='_blank'>
                            <FaInstagram className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                    </div>
                </article>
                <article className='hidden md:block'>
                    <img src={heroImg} alt="hero-img" className="h-80 lg:h-96"/>
                </article>
            </div>
        </div>
    )
}

export default Hero
