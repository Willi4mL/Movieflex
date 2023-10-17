import specialsData from './specials.json'
import featuresData from './features.json'
import documentariesData from './documentaries.json'

import { colors } from './getLanguage'

const color = colors

export function getPremiere() {
	const premiereDataSpecials = {}
	const premiereDataFeatures = {}
	const premiereDatadocumentaries = {}

	function addItem(dataFrom, newObject) {
		dataFrom.forEach((item) => {
			if (item.Premiere.split(' ')[0] in newObject) {
				// Add plus one to key
				newObject[item.Premiere.split(' ')[0]]++
			} else {
				// Add new key with value 1
				newObject[item.Premiere.split(' ')[0]] = 1
			}
		})
	}

	addItem(specialsData, premiereDataSpecials)
	addItem(featuresData, premiereDataFeatures)
	addItem(documentariesData, premiereDatadocumentaries)



		// Convert all keys from Data to an array
		const sortData = Object.keys(premiereDataSpecials).map((Premiere) => ({
			Premiere,
			// count 
			count: premiereDataSpecials[Premiere],
		}))

		const sortDataFeatures = Object.keys(premiereDataFeatures).map((Premiere) => ({
			Premiere,
			// count
			count: premiereDataFeatures[Premiere],
		}))

		const sortDataDucumentaries = Object.keys(premiereDatadocumentaries).map((Premiere) => ({
			Premiere,
			// count 
			count: premiereDatadocumentaries[Premiere],
		}))
	
		const pieChartData = {
			// Use the object key from Data as label
			labels: sortData.map(item => item.Premiere),
			datasets: [
				{
					// Use the value from Data as data
					label: 'Specialer',
					data: sortData.map(item => item.count),
					backgroundColor: color[1],
				},
				{
					label: 'Feature',
					data: sortDataFeatures.map(item => item.count),
					backgroundColor: color[3],
				},
				{
					label: 'Dokumentär',
					data: sortDataDucumentaries.map(item => item.count),
					backgroundColor: color[4],
				}
			]
		}
	
		return pieChartData
}