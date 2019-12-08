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


const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}


console.log(findNotes(notes, 'next'))