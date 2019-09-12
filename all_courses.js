document.addEventListener('DOMContentLoaded', () => {

    const courseURL = 'http://localhost:3000/api/v1/courses'


    fetch(courseURL)
    .then(response => response.json())
    .then(response => {
        showCourses(response)
    })

    function showCourses(courses) {
    courses.forEach(course => {
        const courseCard = document.createElement('div')
        const courseName = document.createElement('p')
        const courseLocation = document.createElement('p')
        const addCourseButton = document.createElement("button")
        const image = document.createElement("img")
        const allCourses = document.createElement('div')
        courseName.innerText = "Course: " + course.name
        courseName.value = course.id
        courseLocation.innerText = "Course Location: " + course.location
        courseLocation.value = course.id
        addCourseButton.setAttribute("id", "addCourseButton")
        addCourseButton.innerText = "Add Course"
        image.src = course.image
        courseCard.appendChild(image)
        courseCard.appendChild(addCourseButton)
        courseCard.append(courseName, courseLocation, addCourseButton)
        addCourseButton.addEventListener('click', event => {
            fetch()
        })
       
        document.body.appendChild(courseCard)




   

        


    })
}
})