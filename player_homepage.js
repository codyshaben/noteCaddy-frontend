document.addEventListener('DOMContentLoaded', () => {

    const playerURL = `http://localhost:3000/api/v1/players/`
    const deleteCourseURL = `http://localhost:3000/api/v1/removeCourse/`

    fetch(playerURL)
    .then(response => response.json())
    .then(response => {
        response.forEach(response => {             
            showCourses(response.courses)
            // console.log(response.id)
        })
    })

    function showCourses(courses) {
        courses.forEach(course => {
            const courseCard = document.createElement('div')
            const courseName = document.createElement('p')
            const courseLocation = document.createElement('p')
            const removeCourseButton = document.createElement("button")
            const seeCourseButton = document.createElement("button")
            const image = document.createElement("img")
            courseName.innerText = "Course: " + course.name
            courseName.value = course.id
            courseLocation.innerText = "Location: " + course.location
            courseLocation.value = course.id
            // removeCourseButton.setAttribute("id", "removeCourseButton")
            removeCourseButton.innerText = "Remove Course"
            // seeCourseButton.setAttribute("id", "seeCourseButton")
            seeCourseButton.innerText = "See Course"
            seeCourseButton.setAttribute("onclick", "location.href = 'course.html'")
            image.src = course.image
            courseCard.prepend(image)
            courseCard.append(courseName, courseLocation, removeCourseButton, seeCourseButton)
            removeCourseButton.addEventListener('click', event => {
                const courseToRemove = event.target.parentNode
                fetch(deleteCourseURL + course.id, {
                    method: "DELETE",
                    // headers: {
                    //     'Accept': 'application/json',
                    //     'Content-Type': 'application/json'
                    // },
                    // body: JSON.stringify( {
                    //     player: {
                    //         player_id: 1,
                    //         course_id: course.id
                    //     }
                    // })
                })  
                .then(courseToRemove.remove())
            })
            document.body.appendChild(courseCard)
    })

}
})


