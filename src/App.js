import './App.css';
import {IonApp, IonPage} from "@ionic/react";
import Header from "./components/header";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <IonApp>
        <IonPage>
            <Header/>

            <Dashboard/>
        </IonPage>




    </IonApp>
  );
}

export default App;
