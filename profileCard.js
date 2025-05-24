export function renderProfileCard(username, avatar, bio) {
  return `
    <div class="profile-card">
      <img src="${avatar}" class="profile-avatar" />
      <h2>${username}</h2>
      <p>${bio}</p>
    </div>
  `;
}
