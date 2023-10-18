'use client'

import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { BsFillFileEarmarkArrowDownFill } from 'react-icons/bs';
import { HiDesktopComputer } from 'react-icons/hi';

type props = {
    Clicked: (ApiUrl: string) => void;
}

export function Header({Clicked}:props){
    const linkedinUrl = "https://www.linkedin.com/in/jo%C3%A3o-vitor-araujo-96a78522b/";
    const gitHubUrl = "https://github.com/JoaoVitorHz";
    const porfolioUrl = "https://statuesque-crepe-cd6310.netlify.app/";

    return(
        <header className="w-screen bg-[#1c1c1c] h-16 flex justify-center">
            <div className="flex justify-between items-center w-4/5">
                <div>
                    <span className="text-[#f5690c] font-DacingScript font-bold text-3xl">CineVista</span>
                </div>
                <div className="flex gap-5">
                    <span 
                        className='text-white hover:text-[#f5690c] cursor-pointer'
                        onClick={() => Clicked("movie/now_playing")}
                    >
                        Em Estreia
                    </span>
                    <span
                        className='text-white hover:text-[#f5690c] cursor-pointer'
                        onClick={() => Clicked("movie/popular")}
                        >Mais Populares
                    </span>
                    <span 
                        className='text-white hover:text-[#f5690c] cursor-pointer'
                        onClick={() => Clicked("movie/top_rated")}
                    >
                        Maiores Notas
                    </span>
                </div>
                <div className="flex gap-4 text-xl text-[#f5690c]">
                    <a href={gitHubUrl} target='_blank'><AiFillGithub /></a>
                    <a href={linkedinUrl} target='_blank'><FaLinkedin /></a>
                    <a href="" target='_blank'><BsFillFileEarmarkArrowDownFill /></a>
                    <a href={porfolioUrl} target='_blank'><HiDesktopComputer /></a>
          
               
                  
                </div>
            </div>
        </header>   
    )
}