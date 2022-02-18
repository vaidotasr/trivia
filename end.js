const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

 
const MAX_HIGH_SCORES = 10;

finalScore.innerText = mostRecentScore;

