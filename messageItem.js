export function renderMessageItem(username, lastMsg) {
  return `
    <div class="message-item">
      <strong>${username}</strong>
      <p>${lastMsg}</p>
    </div>
  `;
}
