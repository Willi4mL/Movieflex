import specialsData from './specials.json'
import featureData from './features.json'
import documentariesData from './documentaries.json'

export const colors = ['#85E6FF', '#FFAC5E', '#FFFDDE', '#FF6B9D', '#6BFF79', '#77B1BF', '##FF9178', '#78A0AA', '#BEFF5E', '#FF4A4A', '#2D4CFF', '#B8A3FF', '#FFF6A3', '#A3FFDC', '#FFA28F', '#6751AD', '#AD485C', '#FFA3B6', '#DFE9FF', '#AD9540', '#AD5D40']

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