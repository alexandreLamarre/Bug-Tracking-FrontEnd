import './App.css';
import { IonApp, IonPage, IonMenu, IonItem, IonLabel, IonList, IonContent} from "@ionic/react";
import {Route} from "react-router"
import Header from "./components/header";
import Register from "./components/register";
import Authentication from "./components/authentication/authentication";

function App() {


  return (
      <div>
        <Route path = "/">

        </Route>
        <IonApp>
            <IonPage>
                <Header/>

                <IonMenu side = "start" ionContentId = "menu" menuId = "start">
                    <IonContent>
                        <IonList>
                            <IonItem>
                                <IonLabel>
                                    Dashboard
                                </IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    Projects
                                </IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel> Assigned bugs </IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    Chat
                                </IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    Settings
                                </IonLabel>
                            </IonItem>
                        </IonList>
                    </IonContent>
                </IonMenu>
                <Authentication/>
                <Route path = "/register">

                    <Register/>
                </Route>
                <Route path = "/signin">

                </Route>
            </IonPage>
        </IonApp>
    </div>
  );
}

export default App;
