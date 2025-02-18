import { postDetailDummy } from '../libs/dummy.js'

document.addEventListener('DOMContentLoaded', () => {
  // postId에 맞는 데이터 불러오기
  const params = new URLSearchParams(window.location.search)
  const postId = params.get('postId')
  const postData = postDetailDummy[postId]
  document.querySelector('.post-infos .post-title').textContent = postData.title
  document.querySelector('.post-infos-bottom-left .post-author').textContent = postData.author
  document.querySelector('.post-infos-bottom-left .post-time').textContent = postData.createdAt
  document.querySelector('.post-article').textContent = postData.content
  document.querySelector('.like-btn').innerHTML = `${postData.like}<br />좋아요수`
  document.querySelector('.view-btn').innerHTML = `${postData.view}<br />조회수`
  document.querySelector('.add-comme-btn').innerHTML = `${postData.comment}<br />댓글`
  const postThumbnail = document.querySelector('.post-thumbnail')
  if (postData.image) {
    postThumbnail.src = postData.image
    postThumbnail.style.display = 'block'
  } else postThumbnail.style.display = 'none'

  // Header 뒤로 가기
  const backArrowBtn = document.querySelector('.back-arrow')
  backArrowBtn.addEventListener('click', () => {
    window.history.back()
  })

  // 글 수정 버튼
  const editBtn = document.querySelector('.edit-btn')
  editBtn.addEventListener('click', () => {
    window.location.href = `/src/pages/write.html?type=edit&postId=${postId}`
  })

  // 글 삭제 버튼
  const deleteBtn = document.querySelector('.delete-btn')
  const modalContainer = document.querySelector('.modal-container')
  const modalTitle = document.querySelector('.modal-title')
  const modalDescription = document.querySelector('.modal-description')
  const modalCancelBtn = document.querySelector('.modal-cancel-btn')
  const modalConfirmBtn = document.querySelector('.modal-confirm-btn')

  deleteBtn.addEventListener('click', () => {
    modalTitle.textContent = '게시글을 삭제하시겠습니까?'
    modalDescription.textContent = '삭제한 내용은 복구할 수 없습니다.'
    modalContainer.style.display = 'block'
  })

  modalCancelBtn.addEventListener('click', () => (modalContainer.style.display = 'none'))

  modalConfirmBtn.addEventListener('click', () => {
    alert('글이 삭제되었습니다.')
    modalContainer.style.display = 'none'
    window.location.href = '/src/pages/post.html'
  })
})
