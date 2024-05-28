"use client";

import { useState } from "react"

export default function DashboardPage(){
    console.log("Client component initiated.")
    const [name, setName] = useState("")
    return (
        <div>
            <h1>Dashboard Page </h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} />
            <p>Hii {name}!!</p>
        </div>
    )

}