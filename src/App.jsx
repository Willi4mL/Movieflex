import './App.css'
import './style/header.css'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import Menu from './components/menu'
import { Search } from './components/search'
import { MovieLanguage } from './components/statistics.jsx'
import { genreState, languageState, lengthState, premiereState, searchState } from "./components/state"

function App() {
  const [isOpen, setIsOpen] = useState(false)
	const [isLanguageClicked, setIsLanguageClicked] = useRecoilState(languageState)
	const [isPremiereClicked, setIsPremiereClicked] = useRecoilState(premiereState)
	const [isLengthClicked, setIsLengthClicked] = useRecoilState(lengthState)
	const [isGenreClicked, setIsGenreClicked] = useRecoilState(genreState)
	const [isSearch, setIsSearch] = useRecoilState(searchState)

  function clearContent() {
    setIsOpen(false)
    setIsLanguageClicked(false)
    setIsPremiereClicked(false)
    setIsLengthClicked(false)
    setIsGenreClicked(false)
    setIsSearch('')
  }

  return (
    <div className='page'>
      <header className='header-container'>
        <img className="logotype" src='./images/logo-2.png' onClick={clearContent}/>
        <Menu />
        <Search />
      </header>
      <main>
        <MovieLanguage />
      </main>
    </div>
  )
}

export default App
