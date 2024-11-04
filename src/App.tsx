// src/App.tsx
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login';
import Landing from './pages/Landing'; // Import the Landing page

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login" component={Login} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;