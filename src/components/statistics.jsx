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

export const MovieLanguage = () => {
	const [isLanguageClicked, setIsLanguageClicked] = useRecoilState(languageState)
	const [isPremiereClicked, setIsPremiereClicked] = useRecoilState(premiereState)
	const [isLengthClicked, setIsLengthClicked] = useRecoilState(lengthState)
	const [isGenreClicked, setIsGenreClicked] = useRecoilState(genreState)

	const optionsPremiereDuration = {
		plugins: {
			title: {
				display: true,
				text: isPremiereClicked ? 'Release month' : 'Runtime',
				color: '#f0f0f0',
				font: {
					size: 22,
				},
			},
			legend: {
				display: isPremiereClicked === true ? true : false,
				onHover: (event) => {
					event.native.target.style.cursor = 'Pointer'
				},
				onLeave: (event) => {
					event.native.target.style.cursor = 'default'
				},
				labels: {
					color: '#f0f0f0',
					font: {
						size: 16,
					}
				}
			},
		},
		layout: {
			padding: 20
		},
		scales: {
			y: {
				ticks: {
					color: "#f0f0f0",
					font: {
						size: 16,
					},
					stepSize: 1,
					beginAtZero: true
				},
				grid: {
					color: '#757575'
				},
			},
			x: {
				ticks: {
					color: "#f0f0f0",
					font: {
						size: 16
					},
					stepSize: 1,
					beginAtZero: true
				},
				grid: {
					color: '#757575'
				}
			},
		},
		animation: {
			delay: 5000
		},
	}

	const optionsGenreLanguage = {
		plugins: {
			title: {
				display: true,
				text: isGenreClicked ? 'Movie genre' : 'Popular language',
				color: '#f0f0f0',
				font: {
					size: 22,
				},
				align: 'end',
			},
			legend: {
				display: true,
				position: 'left',
				onHover: (event) => {
					event.native.target.style.cursor = 'Pointer'
				},
				onLeave: (event) => {
					event.native.target.style.cursor = 'default'
				},
				labels: {
					color: '#f0f0f0',
					font: {
						size: 14,
					},
				},
			},
		},
		animation: {
			delay: 1500
		},
		responsive: true,
		maintainAspectRatio: false
	}

	return (
		<>
			<section className='chart-container'>
				{isLanguageClicked ?
					<span className='language-container'>
						<Pie data={pieLanguage} options={optionsGenreLanguage} className='chart' />
					</span>
					: null
				}
				{isPremiereClicked ?
					<div className='premiere-contianer'>
						<Bar data={barPremiere} options={optionsPremiereDuration} className='chart' />
					</div>
					: null
				}
				{isLengthClicked ?
					<div className='runtime-container'>
						<Line data={lineLength} options={optionsPremiereDuration} className='chart' />
					</div>
					: null
				}
				{isGenreClicked ?
					<div className='genre-container'>
						<Pie data={pieGenre} options={optionsGenreLanguage} className='chart' />
					</div>
					: null
				}
			</section>
			<SearchResult />
		</>
	)
}
