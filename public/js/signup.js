async function signupFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#name-signup')
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
        const response = await fetch('controllers/api/users', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');


            document.location.replace('/dashboard');

        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);