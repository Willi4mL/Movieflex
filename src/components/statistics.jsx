import { Chart as chartjs, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js'
chartjs.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)
import { Pie, Bar } from 'react-chartjs-2'
import '../style/chart.css'
import { useRecoilState } from "recoil";
import { languageState, premiereState } from './state'

import { getLanguage } from '../data/getLanguage.js'
import { getPremiere } from '../data/getPremiere'

const pieLanguage = getLanguage()
const barPremiere = getPremiere()


export const MovieLanguage = () => {
	const [isLanguageClicked, setIsLanguageClicked] = useRecoilState(languageState)
	const [isPremiereClicked, setIsPremiereClicked] = useRecoilState(premiereState)

	return (
		<section className='chart-container'>
			{isLanguageClicked ?
				<Pie data={pieLanguage} className='language-chart' />
				: null
			}
			{isPremiereClicked ?
				<Bar data={barPremiere} className='language-chart' />
				: null
			}
		</section>
	)
}
