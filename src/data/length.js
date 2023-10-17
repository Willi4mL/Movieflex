import specialsData from './specials.json'
import featuresData from './features.json'
import documentariesData from './documentaries.json'

import { colors } from './colors'

const data = [...specialsData, ...featuresData, ...documentariesData]
const color = colors

export function getLength() {
	const time = {}
	data.forEach((film) => {
		const duration = film.Runtime

		if(time[duration]) {
			time[duration]++
		}
		else {
			time[duration] = 1
		}
	})

	const sortData = Object.keys(time)
	const dataArray = sortData.map((duration) => time[duration])

	return {
		labels: sortData,
		datasets: [
			{
				label: 'Längd på film',
				data: dataArray,
				backgroundColor: color
			}
		]
	}
	
}



