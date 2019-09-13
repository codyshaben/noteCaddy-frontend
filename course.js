document.addEventListener('DOMContentLoaded', () => {

    const holesURL = 'http://localhost:3000/api/v1/holes/'
    const notesURL = 'http://localhost:3000/api/v1/notes/'
    const deleteNoteURL = `http://localhost:3000/api/v1/removeNote/`
    const noteList = document.createElement("ol")


    fetch(holesURL)
    .then(response => response.json())
    .then(response => {
        showHoles(response)

    })  

    fetch(notesURL)
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })  
    
    function showHoles(holes) {
        holes.forEach(hole => {
            const holeCard = document.createElement('div')
            const tee = document.createElement('p')
            const par = document.createElement('p')
            const yards = document.createElement('p')
            const handicap = document.createElement('p')
            const noteForm = document.createElement('form')
            const formInput = document.createElement('input')
            const submitInput = document.createElement('input')
            const image = document.createElement("img")
            image.src = hole.image
            holeCard.appendChild(image)
            noteForm.id="note_form"
            noteForm.method="POST"
            formInput.type="text"
            formInput.name="note_input"
            formInput.placeholder="Add Note"
            submitInput.type="submit"
            submitInput.value="submit"
            noteForm.append(formInput, submitInput)
            tee.innerText = "Hole: " + hole.tee
            tee.value = hole.id
            par.innerText = "Par: " + hole.par
            par.value = hole.id
            yards.innerText = "Yards: " + hole.yards
            yards.value = hole.id
            handicap.innerText = "Handicap: " + hole.handicap
            handicap.value = hole.id
            holeCard.append(tee, par, yards, handicap, noteForm, noteList)
            document.body.appendChild(holeCard)
        
        })
    }

    // function showNotes(notes) {
    //         notes.forEach(note => {
    //         console.log(note)
    //         const li = document.createElement("li")
    //         li.innerText = note.content
    //         li.value = note.id
    //         const deleteButton = document.createElement("button")
    //         deleteButton.innerText = "Delete"
    //         li.appendChild(deleteButton)
    //         deleteButton.addEventListener('click', event => {
    //             const noteToRemove = event.target.parentNode
    //             fetch(deleteNoteURL + note.id, {
    //                 method: "DELETE",
    //             })
    //             .then(noteToRemove.remove())
    //         })
    //         noteList.appendChild(li)  
    //     })
    // }

})