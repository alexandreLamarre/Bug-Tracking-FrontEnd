import React from "react";
import "./darkmode.css";
import "./moonColor.css";
import { IonToolbar, IonTitle, IonButtons, IonIcon, IonMenuButton, IonToggle, IonItem, IonHeader } from '@ionic/react';
import { moon } from 'ionicons/icons';


export default function Header(){

    return (

            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton autoHide={false} />
                    </IonButtons>

                    <IonItem slot = "end" lines = "none">
                        <IonToggle
                            onIonChange = {
                                (e) => {document.body.classList.toggle("dark", e.detail.checked)}
                            }
                            slot = "start"/>
                        <IonIcon slot = "end" icon = {moon} color = "moon"/>
                    </IonItem>

                    <IonTitle>Bug Tracking Software</IonTitle>
                </IonToolbar>
            </IonHeader>

    )
}



