import {useState, useEffect} from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import './styles/main.css'

import logoImg from './assets/logo-nlw-esports.svg'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { CreateAdModal } from './components/CreateAdModal'
import axios from 'axios'
interface Game{
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}


function App() {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
        setGames(response.data)
      })
  },[]);
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "free-snap",
    slides: {
      perView: 5,
      spacing: 20,
    },
  })
  let countItem = 0
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt=""/>
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>
      <div ref={ref} className="w-full mt-16 keen-slider">
        {games.map(game =>{
          countItem = countItem + 1
          return(
            < GameBanner 
              key={game.id}
              title={game.title} 
              bannerUrl={game.bannerUrl} 
              adsCount={game._count.ads} 
              bannerNumber={countItem}
            />
            )
          })
        }
      </div>
      <Dialog.Root>
        <CreateAdBanner/>
        <CreateAdModal/>
      </Dialog.Root>
    </div>
      
  )
}

export default App
