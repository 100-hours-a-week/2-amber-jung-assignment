document.addEventListener('DOMContentLoaded', () => {
  // 닉네임 수정
  const nicknameInput = document.querySelector('.input-container input')
  const nicknameHelper = document.querySelector('.input-container .helper-text')

  function validateNickname() {
    const value = nicknameInput.value.trim()
    if (value.length < 1) {
      nicknameHelper.textContent = '*닉네임을 입력해주세요.'
      return false
    } else if (value.length > 10) {
      nicknameHelper.textContent = '*닉네임은 최대 10자까지만 입력 가능합니다.'
      return false
    } else {
      nicknameHelper.textContent = ''
      return true
    }
  }

  nicknameInput.addEventListener('input', () => {
    if (validateNickname()) {
      editBtn.disabled = false
      editBtn.classList.add('active')
    } else {
      editBtn.disabled = true
      editBtn.classList.remove('active')
    }
  })

  const editBtn = document.querySelector('.btn')
  const toast = document.querySelector('.toast')
  editBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (validateNickname()) {
      toast.textContent = '수정 완료'
      toast.classList.add('show')
      setTimeout(() => toast.classList.remove('show'), 2000)
    }
  })

  // 탈퇴하기
  const quitBtn = document.querySelector('.quit-btn')
  const modalContainer = document.querySelector('.modal-container')
  const modalTitle = document.querySelector('.modal .modal-title')
  const modalDescription = document.querySelector('.modal .modal-description')
  const modalCancelBtn = document.querySelector('.modal-cancel-btn')
  const modalConfirmBtn = document.querySelector('.modal-confirm-btn')

  quitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    modalTitle.textContent = '회원탈퇴 하시겠습니까?'
    modalDescription.textContent = '작성된 게시글과 댓글은 삭제됩니다.'
    modalContainer.style.display = 'block'
  })

  modalCancelBtn.addEventListener('click', () => (modalContainer.style.display = 'none'))

  modalConfirmBtn.addEventListener('click', () => {
    window.alert('회원 탈퇴가 완료되었습니다.')
    window.location.replace('login.html')
  })

  // 프로필 클릭시 usermodal 토글
  const headerProfile = document.querySelector('.header-profile')
  const userModal = document.querySelector('.user-modal')
  headerProfile.addEventListener('click', () => {
    userModal.style.visibility = userModal.style.visibility === 'visible' ? 'hidden' : 'visible'
  })

  // usermodal 내부 클릭시 페이지 이동
  const userModalButtons = userModal.querySelectorAll('button')
  userModalButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const btnText = btn.textContent.trim()
      if (btnText === '회원정보수정') window.location.replace('edit-user-info.html')
      else if (btnText === '비밀번호수정') window.location.href = 'edit-password.html'
      else if (btnText === '로그아웃') {
        window.alert('로그아웃되셨습니다.')
        window.location.replace('login.html')
      }
    })
  })
})
