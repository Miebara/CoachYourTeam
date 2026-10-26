"use client";
import { useState } from "react";

export default function Home() {
  const [score, setScore] = useState("1 - 0");
  return (
    <div style={{backgroundColor: "black", color: "white", minHeight: "100vh", padding: "20px", fontFamily: "Arial"}}>
      <div style={{maxWidth: "400px", margin: "0 auto"}}>
        <h1 style={{textAlign: "center", fontSize: "24px"}}>CoachYourTeam</h1>
        <p style={{textAlign: "center", color: "#22c55e"}}>Arsenal vs Chelsea - You Beat Arteta!</p>
        
        <div style={{backgroundColor: "#1e293b", padding: "20px", borderRadius: "10px", marginTop: "20px"}}>
          <h2>Live Match</h2>
          <p style={{fontSize: "30px", textAlign: "center"}}>{score}</p>
          <p>65' Saka Goal! You chose to attack!</p>
          <button 
            onClick={()=> setScore("2 - 0")}
            style={{width: "100%", backgroundColor: "#22c55e", color: "black", padding: "15px", border: "none", borderRadius: "5px", fontWeight: "bold", marginTop: "10px"}}>
            ATTACK AGAIN
          </button>
        </div>

        <div style={{backgroundColor: "#334155", padding: "15px", marginTop: "15px", borderRadius: "10px"}}>
          <p>Next: Press Conference</p>
          <p style={{fontSize: "12px", color: "#94a3b8"}}>Your team loves your tactics!</p>
        </div>
      </div>
    </div>
  );
}