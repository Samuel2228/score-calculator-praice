let inputNumbers = document.getElementsByClassName('input-number');
let checkScore = document.getElementById('check-score');
let h4 = document.getElementById('h4');

checkScore.addEventListener('click', ()=> {
    let eng = inputNumbers[0].value;
    let math = inputNumbers[1].value;
    let phy = inputNumbers[2].value;
    let bio = inputNumbers[3].value;
    let chem = inputNumbers[4].value;
    let totalScore = (eng) + (math) + (phy) + (bio) + (chem);
    console.log(totalScore)
    h4.textContent = 'Your score is ' + totalScore;

})