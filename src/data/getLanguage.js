import specialsData from './specials.json'
import featureData from './features.json'
import documentariesData from './documentaries.json'
import { colors } from './colors'

export function getLanguage() {
	const languageData = {}

	function countLanguage(addCount) {
		addCount.forEach((item) => {
			if (item.Language in languageData) {
				// Add plus one to key
				languageData[item.Language]++
			} else {
				// Add new key with value 1
				languageData[item.Language] = 1
			}
		})
	}

	countLanguage(specialsData)
	countLanguage(featureData)
	countLanguage(documentariesData)

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
			}
		]
	}

	return pieChartData
}