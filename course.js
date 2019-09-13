document.addEventListener('DOMContentLoaded', () => {

    const holesURL = 'http://localhost:3000/api/v1/holes/'

    fetch(holesURL)
    .then(response => response.json())
    .then(response => {
        showHoles(response)
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
            noteForm.id="note_form"
            noteForm.method="POST"
            formInput.type="text"
            formInput.name="note_input"
            formInput.placeholder="Add N"
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
            holeCard.append(tee, par, yards, handicap, noteForm)
            document.body.appendChild(holeCard)
        })
    }
})