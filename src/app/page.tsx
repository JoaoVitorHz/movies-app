'use client'

import { Header } from "@/components/header/header"
import { Main } from "@/components/main/main"
import { useState } from "react"

export default function Home() {

  const [ApiUrl, setApiUrl] = useState<string>('movie/now_playing');

  function HandleClick(Text: string){
    setApiUrl(Text)
  }

  return (
    <>
      <Header Clicked={HandleClick}/>
      <Main ApiUrl={ApiUrl}/>
    </>
  ) 
}
