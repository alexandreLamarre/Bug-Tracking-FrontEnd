import React from "react";
import {useState} from "react";

import {IonList, IonItem, IonItemDivider, IonInput,
    IonButton, IonLabel, IonCheckbox} from "@ionic/react";
import "./register.css";

export default function Register(props){

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("")

    const validate = () => {
        
    }

    return (
        <div>
            <br/>
            <IonList color = "primary" className = "registerContent">
                <IonItem lines = "none">
                    <IonLabel style = {{marginLeft: "46%"}} size = "large"> Register </IonLabel>
                </IonItem>
                <IonItemDivider>
                    <IonLabel color = "light"> Email: </IonLabel>
                </IonItemDivider>
                <IonItem>
                    <IonInput value = {email}
                    onIonChange = {(e) => setEmail(e.detail.value)}/>
                </IonItem>

                <IonItemDivider>
                    <IonLabel> Username: </IonLabel>
                </IonItemDivider>
                <IonItem>
                    <IonInput value = {username} type = "text"
                     maxlength = "26"
                    onIonChange = {(e) => setUsername(e.detail.value)}/>
                </IonItem>

                <IonItemDivider>
                    <IonLabel> Password: </IonLabel>
                </IonItemDivider>
                <IonItem>
                    <IonInput type = "password" value = {password}
                              maxlength = "26"
                    onIonChange = {(e) => {setPassword(e.detail.value)}}/>

                </IonItem>

                <IonItemDivider>
                    <IonLabel>Re-enter password: </IonLabel>

                </IonItemDivider>

                <IonItem>
                    <IonInput type = "password" value = {password2}
                              maxlength = "26"
                     onIonChange = {(e) => {setPassword2(e.detail.value)}} />
                </IonItem>

                <IonItem lines = "full">
                    <IonLabel>  Send me email notifications for bug tracking updates </IonLabel>
                    <IonCheckbox slot = "start" />
                </IonItem>

                <IonItem lines = "none">
                    <IonButton expand = "full" onIonClick = {() => validate()}> Register </IonButton>
                </IonItem>
            </IonList>

        </div>
    )
}