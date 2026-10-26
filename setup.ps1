mkdir src\engine -Force
mkdir src\screens -Force
mkdir src\app -Force
mkdir app -Force

@'
{
  "name": "coachyourteam",
  "version": "1.0.0",
  "private": true,
  "scripts": { "dev": "next dev", "build": "next build", "start": "next start" },
  "dependencies": { "next": "14.2.0", "react": "18.3.0", "react-dom": "18.3.0", "autoprefixer": "10.4.19", "postcss": "8.4.38", "tailwindcss": "3.4.1" }
}
'@ | Set-Content package.json -Encoding utf8

npm install

@'
export const CoachBattleEngine = {
  compare: (myScore, realScore) => {
    const [myF, myA] = myScore.split("-").map(Number);
    const [realF, realA] = realScore.split("-").map(Number);
    if((myF-myA) > (realF-realA)) return {result:"BEAT_COACH", message:`YOU BEAT ARTETA! You: ${myScore} vs Arteta: ${realScore}!`, points:3};
    if((myF-myA) === (realF-realA)) return {result:"DREW_COACH", message:"You matched Arteta!", points:1};
    return {result:"LOST_TO_COACH", message:`Arteta did better: ${realScore}`, points:0};
  }
};
'@ | Set-Content src\engine\CoachBattle.js -Encoding utf8

@'
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
'@ | Set-Content app\page.js -Encoding utf8

@'
@tailwind base;
@tailwind components;
@tailwind utilities;
'@ | Set-Content app\globals.css -Encoding utf8

@'
/** @type {import('tailwindcss').Config} */
module.exports = { content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"], theme: { extend: {} }, plugins: [] }
'@ | Set-Content tailwind.config.js -Encoding utf8

@'
/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = nextConfig
'@ | Set-Content next.config.js -Encoding utf8

Write-Host "DONE! Now type npm run dev"