import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Adjust the path as necessary

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      // Redirect to landing page if needed
    } catch (error) {
      console.error('Error during email login:', error);
    }
  };



  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User:', result.user);
      // Redirect to landing page if needed
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  const handleGitHubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User:', result.user);
      // Redirect to landing page if needed
    } catch (error) {
      console.error('Error during GitHub login:', error);
    }
  };

  return (
   <>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} required />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} required />
        </IonItem>
        <IonButton expand="full" onClick={handleEmailLogin}>
          Sign In with Email
        </IonButton>
    
        <IonButton expand="full" onClick={handleGoogleLogin}>
          Sign In with Google
        </IonButton>
        <IonButton expand="full" onClick={handleGitHubLogin}>
          Sign In with GitHub
        </IonButton>
        </>
  );
}

export default Login;