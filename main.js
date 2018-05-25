// this is exercise 1 for scope

let cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 0

for (let y = 0; y < cookies.length; y++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}




// this is exercise 2 for scope

const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    console.log(conjoinedWord)
}

conjunction("Master", "Card")


const sentence = ['This', 'is', 'so', 'fun', 'learning', 'scope'];

const printWords = () => {
    let printWords = '';
    for (let i = 0; i < sentence.length; i++) {
        printWords += sentence[i] + ' ';
        console.log(printWords)
    }
}


// this is the code from session with Kyle Fri AM

const ModSquad = {
    "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    "series": {
        "start": "1968",
        "end": "1973"
    }
}

let HTMLRepresentation = `<h1>The Mod Squad</h1>`

ModSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${member}</div>`
})

console.log(HTMLRepresentation)
