import specialsData from './specials.json'
import featuresData from './features.json'
import documentariesData from './documentaries.json'

import { colors } from './colors'

const data = [...specialsData, ...featuresData, ...documentariesData]
const color = colors

export function getLength() {
	data.forEach((item) => {
		let totalMinutes = 0;
		const separate = item.Runtime.match(/\d+\s*h|\d+\s*min/g)

		if (separate) {
			separate.forEach((part) => {
				if (part.includes('h')) {
					const hours = parseInt(part)
					totalMinutes += hours * 60
				} else if (part.includes('min')) {
					const minutes = parseInt(part)
					totalMinutes += minutes
				}
			})

			item.durationMin = totalMinutes
		}
	})

	data.sort((a, b) => a.durationMin - b.durationMin)

	const durationData = {}
	data.forEach((item) => {
		const durationInMinutes = item.durationMin
		if (durationData[durationInMinutes]) {
			durationData[durationInMinutes]++
		} else {
			durationData[durationInMinutes] = 1
		}
	})

	const dataKey = Object.keys(durationData)
	const dataArray = dataKey.map((duration) => durationData[duration])

	const labels = dataKey.map((duration) => {
		const hours = Math.floor(duration / 60)
		const minutes = duration % 60
		if (hours === 0) {
			return `${minutes}min`
		} else {
			return `${hours}h ${minutes}min`
		}
	})

	return {
		labels,
		datasets: [
			{
				label: '',
				data: dataArray,
				backgroundColor: color,
				borderColor: '#9264ff'
			},
		],
	}
}






