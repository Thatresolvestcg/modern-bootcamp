const notes = ['Note 1', 'Note 2', 'Note 3']
console.log(notes.indexOf('Note 2'))

const noteObjects = [{
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

console.log(noteObjects.indexOf({}))

const index = noteObjects.findIndex(function (note, index) {
    console.log(note)
    return note.title === 'Things to work on'
})

console.log(index)