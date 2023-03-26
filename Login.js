import './Login.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function Login()
{
    const handleGoogleLogin = () =>
    {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => { })
            .catch((error) => { });
    }

    return (
        <div className="container">
            <h1 className="title">Welcome</h1>
            <form className="form">
                <button className="btn btn-google" type="button" onClick={handleGoogleLogin}>Log in with Google</button>
                <div className="separator"><hr /><span>or</span><hr /></div>
                <input className="input" type="email" placeholder="E-mail" />
                <input className="input" type="password" placeholder="Password" />
                <button className="btn btn-login" type="submit">Log in</button>
            </form>
        </div>
    );
}

export default Login;