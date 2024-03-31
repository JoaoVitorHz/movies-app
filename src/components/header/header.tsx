'use client'

import { useContext } from 'react';
import { MovieContext } from '@/context/movieContext';

import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { HiDesktopComputer } from 'react-icons/hi';
import { gitHubUrl, linkedinUrl, porfolioUrl } from '@/utils/socialMedia';

export function Header(){
    const apiMovieUrlCtx = useContext(MovieContext)

    function HandleChangeApiUrl(apiUrl: string){
        apiMovieUrlCtx?.setMovie(apiUrl)
    }

    return(
        <header className="w-screen bg-[#1c1c1c] h-16 flex justify-center">
            <div className="flex justify-between items-center w-4/5">
                <div>
                    <span className="text-[#f5690c] font-DacingScript font-bold text-3xl">CineVista</span>
                </div>
                <div className="flex gap-5">
                    <span 
                        className='text-white hover:text-[#f5690c] cursor-pointer'
                        onClick={() => HandleChangeApiUrl("movie/now_playing")}
                    >
                        Em Estreia
                    </span>
                    <span
                        className='text-white hover:text-[#f5690c] cursor-pointer'
                        onClick={() => HandleChangeApiUrl("movie/popular")}
                        >Mais Populares
                    </span>
                    <span 
                        className='text-white hover:text-[#f5690c] cursor-pointer'
                        onClick={() => HandleChangeApiUrl("movie/top_rated")}
                    >
                        Maiores Notas
                    </span>
                </div>

                <div className="flex gap-4 text-xl text-[#f5690c]">
                    <a href={gitHubUrl} target='_blank'><AiFillGithub /></a>
                    <a href={linkedinUrl} target='_blank'><FaLinkedin /></a>
                    <a href={porfolioUrl} target='_blank'><HiDesktopComputer /></a>
                </div>
            </div>
        </header>   
    )
}
