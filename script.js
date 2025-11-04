document.getElementById('job-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const resume = document.getElementById('resume').value;
    const coverLetter = document.getElementById('cover-letter').value;

    if (name === '' || email === '' || phone === '' || resume === '' || coverLetter === '') {
        alert('Please fill out all fields.');
        return;
    }

    alert('Application submitted successfully!');
});