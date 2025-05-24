import { renderHeader } from "../components/header.js";
import { renderSidebar } from "../components/sidebar.js";
import { renderMessageItem } from "../components/messageItem.js";

export function renderMessagesPage() {
  const app = document.getElementById("app");

  const messagesHTML = renderMessageItem("sara", "السلام! شنو جديدك؟") +
                       renderMessageItem("amine", "كلشي مزيان الحمد لله.");

  app.innerHTML = `
    ${renderHeader()}
    <div class="main-container">
      ${renderSidebar()}
      <div class="messages-page">
        <h2>📩 الرسائل</h2>
        <div class="messages-list">
          ${messagesHTML}
        </div>
      </div>
    </div>
  `;
}
