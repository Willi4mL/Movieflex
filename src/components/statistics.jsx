import { Chart as chartjs, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineController, LineElement, Title } from 'chart.js'
chartjs.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineController, LineElement, Title)
import { Pie, Bar, Line } from 'react-chartjs-2'
import '../style/chart.css'
import { useRecoilState } from "recoil";
import { languageState, premiereState, lengthState, genreState, searchState } from './state'

import { getLanguage } from '../data/getLanguage.js'
import { getPremiere } from '../data/getPremiere'
import { getLength } from '../data/length';
import { getGenre } from '../data/getGenre';

const pieLanguage = getLanguage()
const barPremiere = getPremiere()
const lineLength = getLength()
const pieGenre = getGenre()


export const MovieLanguage = () => {
	const [isLanguageClicked, setIsLanguageClicked] = useRecoilState(languageState)
	const [isPremiereClicked, setIsPremiereClicked] = useRecoilState(premiereState)
	const [isLengthClicked, setIsLengthClicked] = useRecoilState(lengthState)
	const [isGenreClicked, setIsGenreClicked] = useRecoilState(genreState)
	const [isSearch, setIsSearch] = useRecoilState(searchState)

	return (
		<>
			<section className='chart-container'>
				{isLanguageClicked ?
					<Pie data={pieLanguage} className='chart' />
					: null
				}
				{isPremiereClicked ?
					<Bar data={barPremiere} className='chart' />
					: null
				}
				{isLengthClicked ?
					<Line data={lineLength} className='chart' />
					: null
				}
				{isGenreClicked ?
					<Pie data={pieGenre} className='chart' />
					: null
				}
				
					<ul>
						{isSearch.map((result, index) => (
							<li key={index}>{result.Title}</li>
						))}
					</ul>
				

			</section>
		</>
	)
}
