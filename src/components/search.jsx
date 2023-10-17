import '../style/search.css'
import specialsData from '../data/specials.json'
import featuresData from '../data/features.json'
import documentariesData from '../data/documentaries.json'
import { useRecoilState } from 'recoil'
import { genreState, languageState, lengthState, premiereState, searchState } from './state'
import { useEffect, useRef } from 'react'

const data = [...specialsData, ...featuresData, ...documentariesData]
function Search() {
	const [isSearch, setIsSearch] = useRecoilState(searchState)
	const [isLanguageClicked, setIsLanguageClicked] = useRecoilState(languageState)
	const [isPremiereClicked, setIsPremiereClicked] = useRecoilState(premiereState)
	const [isLengthClicked, setIsLengthClicked] = useRecoilState(lengthState)
	const [isGenreClicked, setIsGenreClicked] = useRecoilState(genreState)
	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	},[])

	function handleSearch(event) {
		const query = (event.target.value.toLowerCase())

		const results = data.filter((item) => item.Title.toLowerCase().includes(query))
		query === '' ? setIsSearch([]) : setIsSearch(results)

		if (query === '') {
			setIsSearch([]);
		  } else {
			setIsSearch(results);
			setIsGenreClicked(false);
			setIsLengthClicked(false);
			setIsPremiereClicked(false);
			setIsLanguageClicked(false);
		  }
		
	}

	return (
		<section className="search-container">
			<nav className='search-container-position'>
				<img className='magnifying' src='../images/magnifying.png' />
				<input
					type="text"
					className="search-input"
					placeholder="Filmtitel"
					onChange={handleSearch}
					ref={inputRef}
				></input>
			</nav>
		</section>
	)
}

export default Search