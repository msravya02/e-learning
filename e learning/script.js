document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        {
            title: 'Web Development',
            description: 'Learn HTML, CSS, and JavaScript.',
            instructor: 'John Doe'
        },
        {
            title: 'Data Science',
            description: 'Learn Python, R, and Data Analysis.',
            instructor: 'Jane Smith'
        },
        // Add more courses here
    ];

    const courseList = document.getElementById('course-list');
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');
        courseElement.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
        `;
        courseList.appendChild(courseElement);
    });
});
