import './App.css'
import './style/header.css'
import Menu from './components/menu'
import { Search } from './components/search'
import { MovieLanguage } from './components/statistics.jsx'

function App() {

  return (
    <div className='page'>
      <header className='header-container'>
        <img className="logotype" src='./images/logo-2.png'/>
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
