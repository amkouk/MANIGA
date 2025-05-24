import { renderHeader } from "../components/header.js";
import { renderSidebar } from "../components/sidebar.js";
import { renderProfileCard } from "../components/profileCard.js";

export function renderProfilePage() {
  const app = document.getElementById("app");

  const profileHTML = renderProfileCard("amine_dev", "assets/images/user1.jpg", "مبرمج ومحب للتصميم");

  app.innerHTML = `
    ${renderHeader()}
    <div class="main-container">
      ${renderSidebar()}
      <div class="profile-page">
        ${profileHTML}
        <p>🔧 تحت التطوير: المنشورات، المتابعين، الإعدادات</p>
      </div>
    </div>
  `;
}
