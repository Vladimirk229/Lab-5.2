# Lab-5.2
1. Using event.preventDefault() in the form's submit event listener prevented the browser from performing its default behavior of sending a request and reloading the page.
2. HTML5 validation attributes (like required, type="email", pattern, minlength) provide built-in validation at the browser level and improve accessibility. They are easy to implement and work without any JavaScript.
JavaScript-based validation provides more flexibility and allows real-time validation, dynamic error messages, and custom validation logic (like matching passwords).
Using both ensures a better user experience: HTML5 ensures basic structure and fallback, while JavaScript allows for enhanced, customized behavior.
3. On page load, the script checks if a username is saved in localStorage and pre-fills the username input. Upon successful registration, the username is saved back to localStorage.
4. A challenge was validating the "Confirm Password" field in real-time, since it depends on another field’s value, password.
To solve this, I added an input event listener to both the Password and Confirm Password fields, so that any change in the Password would also re-trigger validation of Confirm Password. This ensured that the fields stayed in sync and errors were updated immediately.
5. Each input field had a corresponding <span> for showing error messages. On each input event,
I validated the field and displayed a clear, user-friendly error message if the input was invalid. Messages were removed as soon as the input became valid.
