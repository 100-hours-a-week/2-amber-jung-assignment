import { emailRegex, passwordRegex } from '../libs/regex.js'

document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.querySelector('.login-btn')
  const emailInput = document.querySelector('.login-input-container .input-container:nth-child(1) input')
  const emailHelper = document.querySelector('.login-input-container .input-container:nth-child(1) .helper-text')
  const passwordInput = document.querySelector('.login-input-container .input-container:nth-child(2) input')
  const passwordHelper = document.querySelector('.login-input-container .input-container:nth-child(2) .helper-text')

  let emailTouched = false
  let passwordTouched = false

  function validateEmail() {
    const value = emailInput.value.trim()
    if (!value) {
      if (emailTouched) emailHelper.textContent = '*이메일을 입력해주세요.'
      else emailHelper.textContent = ''
      return false
    } else if (!emailRegex.test(value)) {
      if (emailTouched) emailHelper.textContent = '*올바른 이메일 주소 형식을 입력해주세요.'
      else emailHelper.textContent = ''
      return false
    } else {
      emailHelper.textContent = ''
      return true
    }
  }

  function validatePassword() {
    const value = passwordInput.value
    if (!value) {
      if (passwordTouched) passwordHelper.textContent = '* 비밀번호를 입력해주세요'
      else passwordHelper.textContent = ''
      return false
    } else if (!passwordRegex.test(value)) {
      if (passwordTouched)
        passwordHelper.textContent =
          '비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 특수문자를 각각 최소 1개 포함해야 합니다.'
      else passwordHelper.textContent = ''
      return false
    } else {
      passwordHelper.textContent = ''
      return true
    }
  }

  function validateForm() {
    const isEmailValid = validateEmail()
    const isPasswordValid = validatePassword()
    if (isEmailValid && isPasswordValid) {
      loginBtn.disabled = false
    } else {
      loginBtn.disabled = true
    }
    return isEmailValid && isPasswordValid
  }

  emailInput.addEventListener('input', () => {
    emailTouched = true
    validateEmail()
    validateForm()
  })

  passwordInput.addEventListener('input', () => {
    passwordTouched = true
    validatePassword()
    validateForm()
  })

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (validateForm()) window.location.href = '../pages/post.html'
  })
})
