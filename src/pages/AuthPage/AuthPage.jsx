import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

function AuthPage({ setUser }) {
  return (
    <main className="container">
      <h1 className="title is-1">AuthPage</h1>
      <div className= 'columns'>
        <SignUpForm setUser={setUser} />
        <LoginForm setUser={setUser} />
      </div>
    </main>
  );
}

export default AuthPage;
