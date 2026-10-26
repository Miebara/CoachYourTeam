export const CoachBattleEngine = {
  compare: (myScore, realScore) => {
    const [myF, myA] = myScore.split("-").map(Number);
    const [realF, realA] = realScore.split("-").map(Number);
    if((myF-myA) > (realF-realA)) return {result:"BEAT_COACH", message:`YOU BEAT ARTETA! You: ${myScore} vs Arteta: ${realScore}!`, points:3};
    if((myF-myA) === (realF-realA)) return {result:"DREW_COACH", message:"You matched Arteta!", points:1};
    return {result:"LOST_TO_COACH", message:`Arteta did better: ${realScore}`, points:0};
  }
};
