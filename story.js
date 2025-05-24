export function renderStory(username, avatar) {
  return `
    <div class="story">
      <img src="${avatar}" class="story-avatar" />
      <span>${username}</span>
    </div>
  `;
}
