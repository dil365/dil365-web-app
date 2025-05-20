import '../styles/layouts/auth.css';

function AuthLayout({ children }) {
  return (
    <div id="auth-layout">
      <div className="auth-layout__left">
        <div className="auth-layout__logo-area">
          Logo
        </div>
      </div>
      <div className="auth-layout__right">
        <main className="auth-layout__main-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AuthLayout;
