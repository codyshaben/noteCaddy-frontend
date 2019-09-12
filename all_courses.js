document.addEventListener('DOMContentLoaded', () => {

    const courseURL = 'http://localhost:3000/api/v1/courses'
    const playerURL = 'http://localhost:3000/api/v1/players'
    const addCourseURL = 'http://localhost:3000/api/v1/addCourse'


    fetch(courseURL)
    .then(response => response.json())
    .then(response => {
        showCourses(response)
    })

    fetch(playerURL)
    .then(response => response.json())
    .then(response => console.log(response[0].courses))
       
    

    function showCourses(courses) {
    courses.forEach(course => {
        const courseCard = document.createElement('div')
        const courseName = document.createElement('p')
        const courseLocation = document.createElement('p')
        const addCourseButton = document.createElement("button")
        const image = document.createElement("img")
        courseName.innerText = "Course: " + course.name
        courseName.value = course.id
        courseLocation.innerText = "Location: " + course.location
        courseLocation.value = course.id
        addCourseButton.setAttribute("id", "addCourseButton")
        addCourseButton.innerText = "Add Course"
        image.src = course.image
        courseCard.appendChild(image)
        courseCard.appendChild(addCourseButton)
        courseCard.append(courseName, courseLocation, addCourseButton)
        addCourseButton.addEventListener('click', event => {
            const courseToRemove = event.target.parentNode
            fetch(addCourseURL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {
                    player: {
                        player_id: 1,
                        course_id: course.id
                    }
                }) 
            })
            .then(courseToRemove.remove())
            //where you want to put logic for adding course to player
        })
        document.body.appendChild(courseCard)
    })

   




    
        
    }


})