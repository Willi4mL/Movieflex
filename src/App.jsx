import './App.css'
import Menu from './components/menu'
import { Search } from './components/search'
import { MovieLanguage } from './components/statistics.jsx'

function App() {

  return (
    <>
      <header className='header-container'>
        <h1 className='heading'>MovieFlex</h1>
        <Search />
      </header>
      <main>
        <Menu />
        <MovieLanguage />
      </main>
    </>
  )
}

export default App
