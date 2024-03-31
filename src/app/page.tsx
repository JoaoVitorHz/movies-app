import { Header } from "@/components/header/header"
import { Main } from "@/components/main/main"
import { MovieProvider } from "@/context/movieContext";

export default function Home() {
  return (
    <MovieProvider>
      <Header/>
      <Main />
    </MovieProvider>
  ) 
}
