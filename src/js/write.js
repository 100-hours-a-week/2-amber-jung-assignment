import { postDetailDummy } from '../libs/dummy.js'

document.addEventListener('DOMContentLoaded', () => {
  // Header 뒤로 가기
  const backArrowBtn = document.querySelector('.back-arrow')
  backArrowBtn.addEventListener('click', () => {
    window.history.back()
  })

  const urlParams = new URLSearchParams(window.location.search)
  const type = urlParams.get('type')
  const postId = urlParams.get('postId')

  const header = document.querySelector('.write-title')
  const titleInput = document.getElementById('post-title')
  const titleHelper = document.querySelector('#post-title + .helper-text')
  const contentTextarea = document.querySelector('.post-article')
  const contentHelper = document.querySelector('.post-article + .helper-text')
  const fileInput = document.querySelector('.post-img')
  const writeBtn = document.querySelector('.write-btn')

  let currentImageURL = ''

  // type에 따라 버튼 text 변경
  if (type === 'edit' && postId) {
    header.textContent = '게시글 수정'
    writeBtn.textContent = '수정하기'

    // 수정인 경우 기존 글 데이터 보여주기
    const postData = postDetailDummy[postId]
    titleInput.value = postData.title
    contentTextarea.value = postData.content
    currentImageURL = postData.image || ''
  } else {
    header.textContent = '게시글 작성'
    writeBtn.textContent = '등록하기'
  }

  function validateTitle() {
    const value = titleInput.value.trim()
    console.log(1111)
    if (value.length === 0) {
      titleHelper.textContent = '*제목을 입력해주세요.'
      return false
    } else if (value.length > 26) {
      titleHelper.textContent = '*제목은 최대 26글자까지만 입력 가능합니다.'
      return false
    } else {
      titleHelper.textContent = ''
      return true
    }
  }

  function validateContent() {
    const value = contentTextarea.value.trim()
    if (value.length === 0) {
      contentHelper.textContent = '*내용을 입력해주세요.'
      return false
    } else {
      contentHelper.textContent = ''
      return true
    }
  }

  function validateForm() {
    const isTitleValid = validateTitle()
    const isContentValid = validateContent()
    if (isTitleValid && isContentValid) writeBtn.disabled = false
    else writeBtn.disabled = true

    return isTitleValid && isContentValid
  }

  titleInput.addEventListener('input', validateForm)
  contentTextarea.addEventListener('input', validateForm)

  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0]
    if (file) currentImageURL = URL.createObjectURL(file)
  })

  validateForm()

  writeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (validateForm()) {
      if (type === 'edit') {
        window.alert('글이 성공적으로 수정되었습니다.')
        window.location.href = `/src/pages/post-detail.html?postId=${postId}`
      } else {
        window.alert('글이 성공적으로 등록되었습니다.')
        window.location.href = `./post.html`
      }
    }
  })
})
