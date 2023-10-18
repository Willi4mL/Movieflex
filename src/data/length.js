import specialsData from './specials.json'
import featuresData from './features.json'
import documentariesData from './documentaries.json'

import { colors } from './colors'

const data = [...specialsData, ...featuresData, ...documentariesData]
const color = colors

export function getLength() {

	const timeMin = {};

	data.forEach((item) => {
		// Remove whitespace, h and min
	  const separate = item.Runtime.match(/\d+\s*h|\d+\s*min/g)
	  if (separate) {
		let totalMin = 0
	
		separate.forEach((part) => {
		  if (part.includes('h')) {
			const hours = parseInt(part)
			totalMin += hours * 60
		  } else if (part.includes('min')) {
			const minutes = parseInt(part)
			totalMin += minutes
		  }
		})
	
		// Add total min to timeMin with runtime as key
		timeMin[item.Runtime] = totalMin
	  }
	})	

	// Sort. Check if 'a' is greater, less than or egual to 'b'. Reduce create a new object witch sorted keys.
	const sortData = Object.keys(timeMin).sort((a, b) => timeMin[a] - timeMin[b]).reduce((result, key) => {
		result[key] = timeMin[key]
		return result
	  }, {})

	const dataKey = Object.keys(sortData)
	const dataArray = dataKey.map((duration) => sortData[duration])

	return {
		labels: dataKey,
		datasets: [
			{
				label: 'Antal filmer',
				data: dataArray,
				backgroundColor: color
			}
		]
	}
}



