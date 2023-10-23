import specialsData from './specials.json'
import featuresData from './features.json'
import documentariesData from './documentaries.json'
import { colors } from './colors'


const data = [...specialsData, ...featuresData, ...documentariesData]

export function getLanguage() {
	const languageData = {}

	data.forEach((item) => {
		if (item.Language in languageData) {
			// Add plus one to key
			languageData[item.Language]++
		} else {
			// Add new key with value 1
			languageData[item.Language] = 1
		}
	})

	// Convert all keys from languageData to an array
	const sortData = Object.keys(languageData).map((language) => ({
		language,
		// count every language
		count: languageData[language],
	}))

	// Sort
	sortData.sort((a, b) => b.count - a.count)

	const pieChartData = {
		// Use the object key from languageData as label
		labels: sortData.map(item => item.language),
		datasets: [
			{
				// Use the value from languageData as data
				data: sortData.map(item => item.count),
				backgroundColor: colors,
			},
		],
	}

	return pieChartData
}