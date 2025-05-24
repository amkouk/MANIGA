export function renderLoginPage() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="login-container">
      <h2>تسجيل الدخول</h2>
      <input type="text" placeholder="اسم المستخدم" />
      <input type="password" placeholder="كلمة السر" />
      <button onclick="login()">دخول</button>
      <p>ماعندكش حساب؟ <a href="#" onclick="goToRegister()">إنشاء حساب</a></p>
    </div>
  `;
}
