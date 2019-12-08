const notes = [{
    title: 'My next trip',
    body: 'I would like to go to barcelona'
}, {
    title: 'Things to work on',
    body: 'spend more time on JS'
}, {
    title: 'Office mods',
    body: 'get a third monitor'
},
{}]

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const findNote = function (notes, noteTitle) {
    const note = notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return note
}



const note = findNote(notes, 'Things to work on')
console.log(note)




