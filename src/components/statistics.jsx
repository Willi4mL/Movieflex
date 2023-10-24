import { Chart as chartjs, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineController, LineElement, Title } from 'chart.js'
chartjs.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineController, LineElement, Title)
import { Pie, Bar, Line } from 'react-chartjs-2'
import '../style/chart.css'
import { useRecoilState } from "recoil";

import { languageState, premiereState, lengthState, genreState } from './state'

import { getLanguage } from '../data/getLanguage.js'
import { getPremiere } from '../data/getPremiere'
import { getLength } from '../data/length';
import { getGenre } from '../data/getGenre';
import { SearchResult } from './search';

const pieLanguage = getLanguage()
const barPremiere = getPremiere()
const lineLength = getLength()
const pieGenre = getGenre()


const options = {
	plugins: {
		legend: {
			labels: {
				color: 'lime'
			}
		}
	}
}

export const MovieLanguage = () => {
	const [isLanguageClicked, setIsLanguageClicked] = useRecoilState(languageState)
	const [isPremiereClicked, setIsPremiereClicked] = useRecoilState(premiereState)
	const [isLengthClicked, setIsLengthClicked] = useRecoilState(lengthState)
	const [isGenreClicked, setIsGenreClicked] = useRecoilState(genreState)




	return (
		<>
			<section className='chart-container'>
				{isLanguageClicked ?
					<>
						<h2>Popular language</h2>
						<Pie data={pieLanguage} className='chart' />
					</>
					: null
				}
				{isPremiereClicked ?
				<>
				<h2>Premiere by month</h2>
					<Bar data={barPremiere} options={options} className='chart' />
				</>
					: null
				}
				{isLengthClicked ?
				<>
				<h2>Runtime</h2>
					<Line data={lineLength} options={options} className='chart' />
				</>
					: null
				}
				{isGenreClicked ?
				<>
				<h2>Genre</h2>
					<Pie data={pieGenre} className='chart' />
				</>
					: null
				}
			</section>
			<SearchResult />
		</>
	)
}
