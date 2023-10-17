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
		labels: sortDataSpecials.map(item => item.Premiere),
		datasets: [
			{
				// Use the value from Data as data
				label: 'Specialer',
				data: sortDataSpecials.map(item => item.count),
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