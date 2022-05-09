async function loginFormHandler(event) { 
  event.preventDefault(); 

  const email = document.querySelector('#email-login').value.trim(); // trim() removes whitespace
  const password = document.querySelector('#password-login').value.trim(); // trim() removes whitespace

  if (email && password) { // if email and password are not empty
    const response = await fetch('/api/users/login', { // fetch the login route
      method: 'post', // post the data
      body: JSON.stringify({ // send the data as JSON
        email, // email
        password // password
      }), // end the JSON
      headers: { 'Content-Type': 'application/json' } // set the headers
    }); // end the fetch

    if (response.ok) { // if the response is ok
      document.location.replace('/'); // redirect to the home page
    } else { // if the response is not ok
      alert(response.statusText); // alert the error
    } // end the if/else
  } // end the if
} // end the function

async function signupFormHandler(event) { // event handler for the signup form
  event.preventDefault(); // prevent the default behavior of the form

  const username = document.querySelector('#username-signup').value.trim(); // trim() removes whitespace
  const email = document.querySelector('#email-signup').value.trim(); // trim() removes whitespace
  const password = document.querySelector('#password-signup').value.trim();  // trim() removes whitespace

  if (username && email && password) { // if username, email, and password are not empty
    const response = await fetch('/api/users', { // fetch the signup route
      method: 'post', // post the data
      body: JSON.stringify({ // send the data as JSON
        username, //  username
        email, // email
        password // password
      }), // end the JSON
      headers: { 'Content-Type': 'application/json' } // set the headers
    }); // end the fetch

    if (response.ok) { // if the response is ok
      document.location.replace('/'); // redirect to the home page
    } else { // if the response is not ok
      alert(response.statusText); // alert the error
    } // end the if/else
  } //  end the if
} // end the function

document.querySelector('.login-form').addEventListener('submit', loginFormHandler); // add the event listener to the login form

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler); // add the event listener to the signup form
