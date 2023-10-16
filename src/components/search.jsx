import '../style/search.css'
function Search() {

	return (
		<section className="search-container">
			<nav className='search-container-position'>
				<img className='magnifying' src='../images/magnifying.png' />
				<input type="text" className="search-input" placeholder="Filmtitel"></input>
			</nav>
		</section>
	)
}

export default Search