
const data = {
    name: 'Mozzammel', age: 20, study: 'collage', id: 1
}
console.log(data)

function stringified() {
    const convertToStringify = JSON.stringify(data)
    console.log(convertToStringify)
}

function convertParse() {
    const convertToStringify = JSON.stringify(data)
    const converStringifyToParse = JSON.parse(convertToStringify)
    console.log(converStringifyToParse)
}