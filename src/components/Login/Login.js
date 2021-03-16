import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config'
import { useContext, useState } from 'react';
import { UserContext } from "../../App";


// if(firebase.app.length === 0){
//   firebase.initializeLogin(firebaseConfig);
// }
if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

function Login() {
  const [user,setUser] = useState({
    isSignedIn:false,
    email:'',
    photo:'',
  });

const [loggedInUser,setLoggedInUser] = useContext(UserContext);

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider =  new firebase.auth.FacebookAuthProvider();
  const handleGoogleSignIn = () =>{
    firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    const {dispalyName,email,photoURL} = result.user;
    const newUser={
    isSignedIn:true,
    email:email,
    photo:photoURL,
    }
    setUser(newUser);
    setLoggedInUser(newUser);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    console.log(email,errorMessage,errorCode);
  });
  }
  const handleFbSignIn =() =>{
    firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    const {email,displayName,photoURL} = result.user;
    const newUser={
      isSignedIn:true,
      email:email,
      photo:photoURL,
      }
    setUser(newUser);
    setLoggedInUser(newUser);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    console.log("error",errorMessage,errorCode,email,credential)
  });
  }
  return (
    <div style={{textAlign:"center"}}>
      <button onClick={handleFbSignIn}>Login with Facebook</button><br/>
      <button onClick={handleGoogleSignIn}>Login with Google</button>
      {
        user.isSignedIn && <div>
        <p>Email: {user.email}</p>
        <img src={user.photo} alt="" srcSet=""/>
        </div>
      }
    </div>
  );
}

export default Login;

