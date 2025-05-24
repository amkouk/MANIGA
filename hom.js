import { renderHeader } from "../components/header.js";
import { renderSidebar } from "../components/sidebar.js";
import { renderStory } from "../components/story.js";
import { renderPost } from "../components/post.js";

export function renderHomePage() {
  const app = document.getElementById("app");

  const storiesHTML = renderStory("amine", "assets/images/user1.jpg") +
                      renderStory("sara", "assets/images/user2.jpg");

  const postsHTML = renderPost("amine", "assets/images/post1.jpg", 120, "نهار زوين!") +
                    renderPost("sara", "assets/images/post2.jpg", 89, "أول صورة ليا هنا!");

  app.innerHTML = `
    ${renderHeader()}
    <div class="main-container">
      ${renderSidebar()}
      <div class="feed">
        <div class="stories">${storiesHTML}</div>
        <div class="posts">${postsHTML}</div>
      </div>
    </div>
  `;
}
