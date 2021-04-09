import React from "react";

export default function Authentication(){
    return (
        <div>
            {!localStorage.token? <p> Not authenticated</p>: <p> Authenticated </p>}
        </div>
    )
}