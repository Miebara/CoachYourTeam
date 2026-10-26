export default function Home(){
  return (
    <div className="max-w-md mx-auto bg-black min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold text-center">CoachYourTeam</h1>
      <p className="text-center text-xs mt-2">Arsenal vs Chelsea - BEAT ARTETA!</p>
      <div className="mt-8 space-y-4">
        <div className="bg-slate-800 p-4 rounded">LINEUP vs LINEUP - 4-3-3 Attack</div>
        <div className="bg-slate-800 p-4 rounded">TACTICS - High Press Wide</div>
        <div className="bg-yellow-400 text-black p-4 rounded font-bold text-center">LIVE: Arsenal 2-0 Chelsea - YOU BEAT ARTETA!</div>
      </div>
      <button className="w-full bg-green-500 p-3 mt-6 rounded font-bold">Game Ready - Push to GitHub</button>
    </div>
  )
}
