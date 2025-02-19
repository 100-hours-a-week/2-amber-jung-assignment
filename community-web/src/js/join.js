import { emailRegex, passwordRegex } from '../libs/regex'

document.addEventListener('DOMContentLoaded', () => {
  /* 프로필 설정 */
  const profileButton = document.querySelector('.join-add-profile-btn')
  const profileHelperText = document.querySelector('.join-profile-container .helper-text')
  let profileImageSelected = false
  let profileImageURL = ''

  const fileInput = document.createElement('input')
  fileInput.type = 'file'
  fileInput.accept = 'image/*'
  fileInput.style.display = 'none'
  document.body.appendChild(fileInput)

  function validateProfileImage() {
    if (!profileImageSelected) {
      profileHelperText.textContent = '*프로필 사진을 추가해주세요'
      return false
    } else {
      profileHelperText.textContent = ''
      return true
    }
  }

  profileButton.addEventListener('click', () => fileInput.click())

  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0]
    if (file) {
      profileImageSelected = true
      profileImageURL = URL.createObjectURL(file)
      const imgElement = profileButton.querySelector('img')
      if (imgElement) {
        imgElement.src = profileImageURL
        imgElement.classList.add('profile-img')
      } else {
        profileButton.style.backgroundImage = `url(${profileImageURL})`
      }
      profileHelperText.textContent = ''
    } else {
      profileImageSelected = false
      profileHelperText.textContent = '*프로필 사진을 추가해주세요'
    }
    validateForm()
  })

  const inputContainers = document.querySelectorAll('.join-input-container .input-container')
  /* 이메일 유효성 검사 */
  const emailInput = inputContainers[0].querySelector('input')
  const emailHelper = inputContainers[0].querySelector('.helper-text')

  let emailTouched = false
  function validateEmail() {
    const value = emailInput.value.trim()
    if (!value) {
      if (emailTouched) emailHelper.textContent = '*이메일을 입력해주세요.'
      return false
    } else if (!emailRegex.test(value)) {
      if (emailTouched) emailHelper.textContent = '*올바른 이메일 주소 형식을 입력해주세요.'
      return false
    } else {
      emailHelper.textContent = ''
      return true
    }
  }

  /* 비밀번호 유효성 검사 */
  const passwordInput = inputContainers[1].querySelector('input')
  const passwordHelper = inputContainers[1].querySelector('.helper-text')
  let passwordTouched = false
  function validatePassword() {
    const value = passwordInput.value
    if (!value) {
      if (passwordTouched) passwordHelper.textContent = '*비밀번호를 입력해주세요.'
      return false
    } else if (!passwordRegex.test(value)) {
      if (passwordTouched) passwordHelper.textContent = '*올바른 비밀번호 형식을 입력해주세요.'
      return false
    } else {
      passwordHelper.textContent = ''
      return true
    }
  }

  /* 비밀번호 확인 유효성 검사 */
  const confirmInput = inputContainers[2].querySelector('input')
  const confirmHelper = inputContainers[2].querySelector('.helper-text')
  let confirmTouched = false
  function validatePasswordConfirm() {
    if (!confirmTouched) return confirmInput.value === passwordInput.value
    if (confirmInput.value !== passwordInput.value) {
      confirmHelper.textContent = '* 비밀번호가 다릅니다.'
      return false
    } else {
      confirmHelper.textContent = ''
      return true
    }
  }

  /* 닉네임 유효성 검사 */
  const nicknameInput = inputContainers[3].querySelector('input')
  const nicknameHelper = inputContainers[3].querySelector('.helper-text')
  let nicknameTouched = false
  function validateNickname() {
    const value = nicknameInput.value.trim()
    if (!value) {
      if (nicknameTouched) nicknameHelper.textContent = '*닉네임을 입력해주세요.'
      return false
    } else if (/\s/.test(value)) {
      if (nicknameTouched) nicknameHelper.textContent = '*띄어쓰기 없애주세요.'
      return false
    } else if (value.length > 10) {
      if (nicknameTouched) nicknameHelper.textContent = '*닉네임은 최대 10자까지만 작성 가능합니다.'
      return false
    } else {
      nicknameHelper.textContent = ''
      return true
    }
  }

  const joinBtn = document.querySelector('.join-btn')
  function validateForm() {
    const isEmailValid = validateEmail()
    const isPasswordValid = validatePassword()
    const isConfirmValid = validatePasswordConfirm()
    const isNicknameValid = validateNickname()
    const isProfileValid = validateProfileImage()

    if (isEmailValid && isPasswordValid && isConfirmValid && isNicknameValid && isProfileValid) {
      joinBtn.disabled = false
      return true
    } else {
      joinBtn.disabled = true
      return false
    }
  }

  emailInput.addEventListener('input', () => {
    emailTouched = true
    validateEmail()
    validateForm()
  })
  passwordInput.addEventListener('input', () => {
    passwordTouched = true
    validatePassword()
    validatePasswordConfirm()
    validateForm()
  })
  confirmInput.addEventListener('input', () => {
    confirmTouched = true
    validatePasswordConfirm()
    validateForm()
  })
  nicknameInput.addEventListener('input', () => {
    nicknameTouched = true
    validateNickname()
    validateForm()
  })

  joinBtn.addEventListener('click', () => {
    if (validateForm()) {
      alert('성공적으로 회원가입이 처리되었습니다.')
      window.location.href = '../pages/login.html'
    }
  })
})
