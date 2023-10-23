import specialsData from './specials.json'
import featuresData from './features.json'
import documentariesData from './documentaries.json'

import { colors } from './colors'

const data = [...specialsData, ...featuresData]
const dataDocumentaries = [...documentariesData]

export function getGenre() {
	const newObjectgenre = {}

	data.forEach((item) => {
		const genre = item.Genre

		if (newObjectgenre[genre]) {
			newObjectgenre[genre]++
		}
		else {
			newObjectgenre[genre] = 1
		}
	})

	dataDocumentaries.forEach(() => {
		const genreDocumentaries = 'Documentaries'

		if (newObjectgenre[genreDocumentaries]) {
			newObjectgenre[genreDocumentaries]++
		}
		else {
			newObjectgenre[genreDocumentaries] = 1
		}
	})

	const sortData = Object.keys(newObjectgenre)
	const dataArray = sortData.map((genre) => newObjectgenre[genre])

	return {
		labels: sortData,
		datasets: [
			{
				data: dataArray,
				backgroundColor: colors,
				fill: false,
			}
		]
	}

}