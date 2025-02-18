import { passwordRegex } from '../libs/regex.js'

document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.querySelectorAll('.input-container input[type="password"]')[0]
  const confirmInput = document.querySelectorAll('.input-container input[type="password"]')[1]
  const passwordHelper = document.querySelectorAll('.input-container .helper-text')[0]
  const confirmHelper = document.querySelectorAll('.input-container .helper-text')[1]
  const btn = document.querySelector('.btn')

  let pwdTouched = false
  let confirmTouched = false

  function validatePasswordField() {
    const pwd = passwordInput.value.trim()
    if (!pwd && pwdTouched) {
      passwordHelper.textContent = '*비밀번호를 입력하세요.'
      return false
    } else if (pwd && !passwordRegex.test(pwd)) {
      passwordHelper.textContent =
        '*비밀번호는 최소 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.'
      return false
    } else {
      passwordHelper.textContent = ''
      return true
    }
  }

  function validateConfirmField() {
    const pwd = passwordInput.value.trim()
    const confirmPwd = confirmInput.value.trim()
    if (!confirmPwd && confirmTouched) {
      confirmHelper.textContent = '*비밀번호 확인을 입력하세요.'
      return false
    } else if (confirmPwd && pwd !== confirmPwd) {
      confirmHelper.textContent = '*비밀번호가 일치하지 않습니다.'
      return false
    } else {
      confirmHelper.textContent = ''
      return true
    }
  }

  function validateForm() {
    const isPasswordValid = validatePasswordField()
    const isConfirmValid = validateConfirmField()
    if (isPasswordValid && isConfirmValid) btn.disabled = false
    else btn.disabled = true

    return isPasswordValid && isConfirmValid
  }

  passwordInput.addEventListener('input', () => {
    pwdTouched = true
    validatePasswordField()
    validateForm()
  })

  confirmInput.addEventListener('input', () => {
    confirmTouched = true
    validateConfirmField()
    validateForm()
  })

  btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (validateForm()) {
      alert('비밀번호가 수정되었습니다.')
      passwordInput.value = ''
      confirmInput.value = ''
      passwordHelper.textContent = ''
      confirmHelper.textContent = ''
      pwdTouched = false
      confirmTouched = false
      btn.disabled = true
    }
  })
})
