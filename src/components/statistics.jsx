import { Chart as chartjs, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineController, LineElement, Title } from 'chart.js'
chartjs.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineController, LineElement, Title)
import { Pie, Bar, Line } from 'react-chartjs-2'
import '../style/chart.css'
import { useRecoilState } from "recoil";
import { languageState, premiereState, lengthState } from './state'

import { getLanguage } from '../data/getLanguage.js'
import { getPremiere } from '../data/getPremiere'
import { getLength } from '../data/length';

const pieLanguage = getLanguage()
const barPremiere = getPremiere()
const lineLength = getLength()


export const MovieLanguage = () => {
	const [isLanguageClicked, setIsLanguageClicked] = useRecoilState(languageState)
	const [isPremiereClicked, setIsPremiereClicked] = useRecoilState(premiereState)
	const [isLengthClicked, setIsLengthClicked] = useRecoilState(lengthState)

	return (
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
				<Line data={lineLength} className='chart'/>
				: null
			}
		</section>
	)
}
