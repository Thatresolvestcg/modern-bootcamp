const notes = [{
    title: 'My next trip',
    body: 'I would like to go to barcelona'
}, {
    title: 'Things to work on',
    body: 'spend more time on JS'
}, {
    title: 'Office mods',
    body: 'get a third monitor'
}]

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}
const note = findNote(notes, 'Things to work on')

const filteredNotes = notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes('hi')
    const isBodyMatch = note.body.toLowerCase().includes('it')
    return isTitleMatch || isBodyMatch
})
console.log(filteredNotes)