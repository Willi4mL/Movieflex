import './App.css'
import './style/header.css'
import Menu from './components/menu'
import { Search } from './components/search'
import { MovieLanguage } from './components/statistics.jsx'

function App() {

  return (
    <div className='page'>
      <header className='header-container'>
        <h1 className='heading'>MovieFlex</h1>
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
