import specialsData from './specials.json'
import featuresData from './features.json'
import documentariesData from './documentaries.json'

import { colors } from './colors'

const color = colors

export function getPremiere() {
	const months = [
	  "January",
	  "February",
	  "March",
	  "April",
	  "May",
	  "June",
	  "July",
	  "August",
	  "September",
	  "October",
	  "November",
	  "December"
	];
  
	const premiereDataSpecials = {}
	const premiereDataFeatures = {}
	const premiereDatadocumentaries = {}
  
	function addItem(dataFrom, newObject) {
		// Set month as key with value 0
		months.forEach((month) => {
			newObject[month] = 0
		  })
		
		  dataFrom.forEach((item) => {
			const premiereMonth = item.Premiere.split(' ')[0]
			if (months.includes(premiereMonth)) {
			  // Increment the count for existing months
			  newObject[premiereMonth]++
			}
		  })
		}
	  
	addItem(specialsData, premiereDataSpecials)
	addItem(featuresData, premiereDataFeatures)
	addItem(documentariesData, premiereDatadocumentaries)
  
	function sortData(data) {
		return Object.keys(data).map((Premiere) => ({
			Premiere,
			count: data[Premiere]
		}))
	}

	const sortDataSpecials = sortData(premiereDataSpecials)
	const sortDataFeatures = sortData(premiereDataFeatures)
	const sortDataDucumentaries = sortData(premiereDatadocumentaries)

	const pieChartData = {
		// Use the object key from Data as label
		labels: months.map(item => item),
		datasets: [
			{
				// Use the value from Data as data
				label: 'Specials',
				data: sortDataSpecials.map(item => item.count),
				backgroundColor: color[1],
			},
			{
				label: 'Feature',
				data: sortDataFeatures.map(item => item.count),
				backgroundColor: color[3],
			},
			{
				label: 'Documentaries',
				data: sortDataDucumentaries.map(item => item.count),
				backgroundColor: color[4],
			}
		]
	}

	return pieChartData
}