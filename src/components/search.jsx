import '../style/search.css'
import '../style/searchContent.css'
import magnifying from '../../images/magnifying.png'
import specialsData from '../data/specials.json'
import featuresData from '../data/features.json'
import documentariesData from '../data/documentaries.json'
import { useRecoilState } from 'recoil'
import { genreState, languageState, lengthState, premiereState, searchState } from './state'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';

const data = [...specialsData, ...featuresData, ...documentariesData]

// Search input
export function Search() {
	const [isSearch, setIsSearch] = useRecoilState(searchState)
	const [isLanguageClicked, setIsLanguageClicked] = useRecoilState(languageState)
	const [isPremiereClicked, setIsPremiereClicked] = useRecoilState(premiereState)
	const [isLengthClicked, setIsLengthClicked] = useRecoilState(lengthState)
	const [isGenreClicked, setIsGenreClicked] = useRecoilState(genreState)
	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	useEffect(() => {
		if(isSearch === '') {
			inputRef.current.value = ''
		}
	},[isSearch])

	function handleSearch(event) {
		const query = (event.target.value.toLowerCase())

		const results = data.filter((item) => item.Title.toLowerCase().includes(query))
		query === '' ? setIsSearch([]) : setIsSearch(results)

		if (results.length === 1) {
			setIsSearch(results[0])
		}

		if (query === '') {
			setIsSearch([])
		} else {
			setIsSearch(results)
			setIsGenreClicked(false)
			setIsLengthClicked(false)
			setIsPremiereClicked(false)
			setIsLanguageClicked(false)
		}
	}

	return (
		<section className="search-container">
			<nav className='search-container-position'>
				<img className='magnifying' src={magnifying} alt='Magnifying' />
				<input
					type="text"
					className="search-input"
					placeholder="Movie title"
					onChange={handleSearch}
					ref={inputRef}
				></input>
			</nav>
		</section>
	)
}

// Search result
const searchedTitle = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 150, damping: 10 }
	},
	closed: {
		opacity: 0,
		y: -20,
		transition: { duration: 0.2 }
	}
}

const ulInitial = {
	borderRadius: '1em',
}

const liInitial = {
	backgroundColor: '#060644',
	color: '#dad9d9',
	fontFamily: 'arial'
}

export function SearchResult() {
	const [isSearch, setIsSearch] = useRecoilState(searchState)

	return (
		<>
			{isSearch.length >= 1 ? (

				<section className='search-result-container'>
					<motion.div
						initial='closed'
						animate={isSearch.length > 0 ? 'open' : 'closed'}
						className='search-motion-div'
						variants={{
							open: {
								clipPath: "inset(0% 0% 0% 0% round 10px)",
								transition: {
									type: "spring",
									bounce: 0.7,
									duration: 0.9,
								},
							},
							closed: {
								clipPath: "inset(10% 50% 90% 50% round 10px)",
								transition: {
									type: "spring",
									duration: 0.3
								}
							}
						}}
						style={{
							border: "25px double #1ffda8",
						}}
					>
						{isSearch.length === 1 ? (
							<motion.ul
								initial={{ ...ulInitial }}
								style={{
									border: "5px solid #9264FF",
								}}
							>
								{isSearch.map((result, index) => (
									<motion.li key={index}
										item={searchedTitle}
										initial={{ ...liInitial }}
										variants={searchedTitle}
										className='singel-title-li'
									>
										<p><strong>{result.Title}</strong></p>
										<p><strong>Genre:</strong> {result.Genre || 'Documentaries'}</p>
										<p><strong>Premiere:</strong> {result.Premiere}</p>
										<p><strong>Runtime:</strong> {result.Runtime}</p>
										<p><strong>Language</strong> {result.Language}</p>
									</motion.li>
								))}

							</motion.ul>
						) : (
							<>
								<motion.ul
									initial={{ ...ulInitial }}
									style={{
										border: "5px solid #9264FF",
									}}
								>
									<h2>Title</h2>
									{isSearch.map((result, index) => (
										<motion.li key={index}
											item={searchedTitle}
											initial={{ ...liInitial }}
											variants={searchedTitle}
											className='multi-title-li'
										><p>{result.Title}</p>
										</motion.li>
									))}
								</motion.ul>
							</>
						)}
						<div className='border-jelly-top'></div>
						<div className='border-jelly-top-hang'></div>
						<div className='border-jelly-left'></div>
						<div className='border-jelly-left-second'></div>
						<div className='border-jelly-left-third'></div>
						<div className='border-jelly-right'></div>
						<div className='border-jelly-right-second'></div>
						<div className='border-jelly-right-third'></div>
					</motion.div>
				</section>
			) : (
				null
			)}
		</>
	)
}