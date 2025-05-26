import VectorComponent from '../components/Vector';
import colors from '../constants/colors';
import '../styles/layouts/auth.css';
function AuthLayout({ children }) {

  return (
    <div id="auth-layout">
      <div className="auth-layout__left">
        <main className="auth-layout__main-content">
          {children}
        </main>
      </div>
      <div className="auth-layout__right">
          <VectorComponent vector="team" color={colors['color-primary']}/>
      </div>
    </div>
  );
}

export default AuthLayout;
