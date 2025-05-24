export function renderPost(username, image, likes, description) {
  return `
    <div class="post">
      <div class="post-header">${username}</div>
      <img src="${image}" class="post-image" />
      <div class="post-actions">❤️ 💬 📤</div>
      <div class="post-likes">${likes} إعجابات</div>
      <div class="post-description">${description}</div>
    </div>
  `;
}
