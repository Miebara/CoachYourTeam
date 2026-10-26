"use client";
export default function Home() {
  return (
    <div style={{maxWidth: "400px", margin: "0 auto", backgroundColor: "black", minHeight: "100vh", color: "white", padding: "20px", fontFamily: "sans-serif"}}>
      <h1 style={{fontSize: "28px", fontWeight: "bold", textAlign: "center"}}>CoachYourTeam</h1>
      <p style={{textAlign: "center", fontSize: "12px", marginTop: "10px"}}>Arsenal vs Chelsea - BEAT ARTETA!</p>
      
      <div style={{marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px"}}>
        <div style={{backgroundColor: "#1e293b", padding: "15px", borderRadius: "10px", border: "1px solid #334155"}}>⚽ LINEUP vs LINEUP - 4-3-3 Attack</div>
        <div style={{backgroundColor: "#1e293b", padding: "15px", borderRadius: "10px", border: "1px solid #334155"}}>🧠 TACTICS - High Press Activated</div>
        <div style={{backgroundColor: "#facc15", color: "black", padding: "15px", borderRadius: "10px", fontWeight: "bold", textAlign: "center"}}>LIVE: Arsenal 2-0 Chelsea - YOU BEAT ARTETA!</div>
        <button style={{width: "100%", backgroundColor: "#22c55e", padding: "15px", marginTop: "20px", borderRadius: "10px", fontWeight: "bold", border: "none", color: "white", fontSize: "16px"}}>🔥 Game Ready!</button>
      </div>
    </div>
  );
}