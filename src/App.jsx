import './App.css'
import Menu from './components/menu'
import Search from './components/search'
import { MovieLanguage } from './components/statistics.jsx'

function App() {

  return (
    <main>
      <h1 className='heading'>MovieFlex</h1>
      <Search />
      <Menu />
      <MovieLanguage />
    </main>
  )
}

export default App
