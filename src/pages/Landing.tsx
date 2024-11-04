import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Landing: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Landing Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Welcome to the Landing Page!</h1>
      </IonContent>
    </IonPage>
  );
};

export default Landing;