export function renderRegisterPage() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="register-container">
      <h2>إنشاء حساب جديد</h2>
      <input type="text" placeholder="اسم المستخدم" />
      <input type="email" placeholder="البريد الإلكتروني" />
      <input type="password" placeholder="كلمة السر" />
      <button onclick="register()">تسجيل</button>
      <p>عندك حساب؟ <a href="#" onclick="goToLogin()">دخول</a></p>
    </div>
  `;
}
