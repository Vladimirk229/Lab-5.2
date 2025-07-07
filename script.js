// Get references to form and input fields
const registrationForm = document.getElementById('registrationForm')
const usernameInput = document.getElementById('username')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const confirmPasswordInput = document.getElementById('confirmPassword')
const statusMessage = document.getElementById('statusMessage')

// Get references to error message spans
const usernameError = document.getElementById('usernameError')
const emailError = document.getElementById('emailError')
const passwordError = document.getElementById('passwordError')
const confirmPasswordError = document.getElementById('confirmPasswordError')

// On page load, pre-fill username from localStorage if it exists
window.addEventListener('DOMContentLoaded', function () {
  const savedUsername = localStorage.getItem('username')
  if (savedUsername) {
    usernameInput.value = savedUsername
  }
})

// Display an error message in a span
function showError(errorSpan, message) {
  errorSpan.textContent = message
}

// Clear the error message in a span
function clearError(errorSpan) {
  errorSpan.textContent = ''
}

// Validate username using built-in browser rules
function validateUsername() {
  if (!usernameInput.validity.valid) {
    showError(usernameError, 'Username is required.')
    return false
  }
  clearError(usernameError)
  return true
}

// Validate email using browser validation
function validateEmail() {
  if (!emailInput.validity.valid) {
    showError(emailError, 'Please enter a valid email address.')
    return false
  }
  clearError(emailError)
  return true
}

// Validate password using custom pattern (uppercase, lowercase, digit, 8+ chars)
function validatePassword() {
  const value = passwordInput.value
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  if (!regex.test(value)) {
    showError(passwordError, 'Password must be at least 8 characters, include uppercase, lowercase, and a number.')
    return false
  }
  clearError(passwordError)
  return true
}

// Check if confirm password matches the password
function validateConfirmPassword() {
  if (confirmPasswordInput.value !== passwordInput.value) {
    showError(confirmPasswordError, 'Passwords do not match.')
    return false
  }
  clearError(confirmPasswordError)
  return true
}

// Add real-time validation for each field
usernameInput.addEventListener('input', validateUsername)
emailInput.addEventListener('input', validateEmail)
passwordInput.addEventListener('input', validatePassword)
confirmPasswordInput.addEventListener('input', validateConfirmPassword)

// Handle form submission
registrationForm.addEventListener('submit', function (event) {
  event.preventDefault() // Prevent default form submission

  const validUsername = validateUsername()
  const validEmail = validateEmail()
  const validPassword = validatePassword()
  const validConfirm = validateConfirmPassword()

  // If all fields are valid, save username and show success
  if (validUsername && validEmail && validPassword && validConfirm) {
    localStorage.setItem('username', usernameInput.value)
    statusMessage.textContent = 'Registration successful!'
    registrationForm.reset()
  } else {
    statusMessage.textContent = ''

    // Focus the first invalid field
    const fields = [
      [usernameInput, usernameError],
      [emailInput, emailError],
      [passwordInput, passwordError],
      [confirmPasswordInput, confirmPasswordError]
    ]
    
    for (let i = 0; i < fields.length; i++) {
      if (!fields[i][0].validity.valid) {
        fields[i][0].focus()
        break
      }
    }
  }
})
