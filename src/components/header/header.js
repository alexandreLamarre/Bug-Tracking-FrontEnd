import React from "react";
import "../../darkmode.css";
import "./moonColor.css";
import { IonToolbar, IonTitle, IonButtons, IonIcon, IonMenuButton, IonToggle, IonItem, IonHeader } from '@ionic/react';
import { moon } from 'ionicons/icons';


export default function Header(){
    return (
                <IonToolbar style = {{outline: "1px solid black"}}>

                    <IonButtons slot="start">
                        <IonMenuButton autoHide={false} menu = "menu" />
                    </IonButtons>

                    <IonItem slot = "end" lines = "none">
                        <IonToggle
                            onIonChange = {
                                (e) => {document.body.classList.toggle("dark", e.detail.checked)}
                            }
                            slot = "start"/>
                        <IonIcon slot = "end" icon = {moon} color = "moon"/>
                    </IonItem>

                    <IonTitle> Bug Tracking Software </IonTitle>
                </IonToolbar>
    );
}



