'use client'
import { useEffect, useState } from "react";
import { LuCalendarCheck } from 'react-icons/lu';
import { MdOutlineClose } from 'react-icons/md';
import { RiFileList3Line } from 'react-icons/ri';

type MoviesType = {
    backdrop_path: string;
    title: string;
    release_date: string;
    vote_average: number;
    overview: string;
}

type Props = {
    ApiUrl: string;
}

export function Main({ApiUrl}: Props){
    const [movie, setMovie] = useState<MoviesType[]>([]);

    async function GetData(){
        const response = await fetch('https://api.themoviedb.org/3/'+ ApiUrl +'?api_key=8cdeb4dea31d00d9f79772db9c9fa4a2&language=pt-br&page=1')
        const json = await response.json();
        setMovie(json.results)
    }
    
    useEffect(() => {
        GetData();
    }, [])

    useEffect(() => {
        GetData();
    }, [ApiUrl])

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState<MoviesType>();

    function ShowModal(item: MoviesType){
        setShow(!show)
        setModalData(item)
    }

    return(
        <main className="w-screen h-16 flex justify-center mt-7">
            <div className="w-4/5 grid grid-cols-4 gap-5">
                {movie.map((item) => {
                    return(
                        <div className="bg-[#202024] px-5 py-4 rounded-md transition-[200ms] cursor-pointer hover:scale-105"
                            onClick={ () => ShowModal(item)}
                        >
                            <img src={'https://image.tmdb.org/t/p/original' + item.backdrop_path} alt="" />
                            <span className="text-white font-bold">{item.title}</span>
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <LuCalendarCheck className="text-[#f5690c]"/>
                                    <span className="text-gray-500 text-xs">Lançamento: {item.release_date}</span>
                                </div>
                                <div className="flex gap-2"> 
                                    <LuCalendarCheck className="text-[#f5690c]"/>
                                    <span className="text-gray-500 text-xs">Nota: {item.vote_average}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
 
            <div className={`fixed top-0 w-screen h-screen bg-black/50 ${ show ? 'flex ' : 'hidden ' }justify-center items-center`}>
                <div className="w-1/4 p-3 pb-5 bg-[#202024] rounded-lg">
                    <div className="w-full flex justify-end mb-3">
                        <i className="text-2xl cursor-pointer text-white hover:text-red-500 transition-[200ms]"
                            onClick={ () => setShow(!show)}>
                            <MdOutlineClose/>
                        </i>
                    </div>
                    <div className="w-full">
                        <div className="w-full mb-5">
                            <img src={'https://image.tmdb.org/t/p/original' + modalData?.backdrop_path} 
                                className="rounded-md border-2 border-[#f5690c]"/>
                        </div>
                        <span className="text-white font-bold">{modalData?.title}</span>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <LuCalendarCheck className="text-[#f5690c]"/>
                                <span className="text-gray-500 text-xs">Lançamento: {modalData?.release_date}</span>
                            </div>
                            <div className="flex gap-2"> 
                                <LuCalendarCheck className="text-[#f5690c]"/>
                                <span className="text-gray-500 text-xs">Nota: {modalData?.vote_average}</span>
                            </div>
                        </div>
                        <div className="flex flex-col mt-5">
                            <span className="text-white flex items-center gap-2"><RiFileList3Line className="text-[#f5690c]"/>Overview: </span>
                            <span className="text-gray-400">{modalData?.overview}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}