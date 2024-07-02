document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('username').textContent = user.username;

    const enrolledCourses = [
        {
            title: 'Web Development',
            progress: '50%'
        },
        {
            title: 'Data Science',
            progress: '30%'
        },
        // Add more enrolled courses here
    ];

    const enrolledCoursesElement = document.getElementById('enrolled-courses');
    enrolledCourses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');
        courseElement.innerHTML = `
            <h4>${course.title}</h4>
            <p>Progress: ${course.progress}</p>
        `;
        enrolledCoursesElement.appendChild(courseElement);
    });
});
