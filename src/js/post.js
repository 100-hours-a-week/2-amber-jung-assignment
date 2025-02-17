import { postDummy } from '../libs/dummy.js'

function formatCount(num) {
  if (num < 1000) return num
  return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
}

document.addEventListener('DOMContentLoaded', () => {
  const postList = document.querySelector('.post-list')
  postList.innerHTML = ''

  postDummy.forEach((post) => {
    const btn = document.createElement('button')
    btn.className = 'post-article'
    btn.addEventListener('click', () => {
      window.location.href = `/src/pages/post-detail.html?postId=${post.postId}`
    })

    btn.innerHTML = `
      <div class="post-top">
        <div class="post-detail-title">${post.title}</div>
        <div class="post-detail">
          <div class="post-detail-group">
            <div class="post-detail-like">좋아요 <span>${formatCount(post.like)}</span></div>
            <div class="post-detail-comment">댓글 <span>${formatCount(post.comment)}</span></div>
            <div class="post-detail-view">조회수 <span>${formatCount(post.view)}</span></div>
          </div>
          <div class="post-time">${post.createdAt}</div>
        </div>
      </div>
      <div class="post-bottom">
        <div class="post-profile"></div>
        <div class="post-author">${post.author}</div>
      </div>
    `

    postList.appendChild(btn)
  })
})
