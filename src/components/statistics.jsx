import { Chart as chartjs, ArcElement, Tooltip, Legend } from 'chart.js'
chartjs.register(ArcElement, Tooltip, Legend)
import { Pie } from 'react-chartjs-2'
import '../style/chart.css'

import { getLanguage } from '../data/getSpecials.js'

const pieLanguage = getLanguage()


export const MovieLanguage = () => {

	return (
		<section className='chart-container'>
			<Pie data={pieLanguage} className='language-chart' />
		</section>
	)
}
