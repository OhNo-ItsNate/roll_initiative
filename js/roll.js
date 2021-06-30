//FUNCTION FOR DICE ROLLING
const dieRoll = (die) => {
    const rando = Math.floor(Math.random() * die) + 1;
    return rando;
}

//FUNCTION FOR NUMBER STORAGE
function storageNum(keyName, elementId, storeNum) {
    localStorage.setItem(keyName, document.querySelector(elementId).value);
}

//EVENT LISTENER TO RUN NUMBER STORAGE FUNCTION AND STORE INITIATIVE INPUT VALUE
document.querySelector('#initMod').addEventListener("focusout", function() {
    storageNum('initModNum', '#initMod');

    console.log(localStorage.initModNum);
});

//DISPLAYS INITIATIVE VALUE
document.querySelector('#initMod').value = localStorage.initModNum;

//EVENT LISTENER TO TAKE INITIATIVE VALUE, TURN IT INTO AM INTEGER, AND ADD IT TO A D20 DICE ROLL
document.querySelector('#rollInit').addEventListener("click", function() {
    let initMod = parseInt(localStorage.initModNum);

    document.querySelector('#showNum').innerHTML = `${dieRoll(20) + initMod}`;
});

//EVENT LISTENER TO RUN NUMBER STORAGE FUNCTION AND STORE HIT/DC INPUT VALUE
document.querySelector('#hitDC').addEventListener("focusout", function() {
    storageNum('hitDCNum', '#hitDC');
    console.log(localStorage.hitDCNum);
});

//DISPLAYS INITIATIVE VALUE
document.querySelector('#hitDC').value = localStorage.hitDCNum;

//EVENT LISTENER TO TAKE HIT/DC VALUE, TURN IT INTO AM INTEGER, AND ADD IT TO A D20 DICE ROLL
document.querySelector('#rollHit').addEventListener("click", function() {
    let hitDC = parseInt(localStorage.hitDCNum);

    document.querySelector('#showNum').innerHTML = `${dieRoll(20) + hitDC}`;
});

//EVENT LISTENER TO RUN NUMBER STORAGE FUNCTION AND STORE ATTACK INPUT VALUE
document.querySelector('#attack').addEventListener("focusout", function() {
    storageNum('attNum', '#attack');
    console.log(localStorage.attNum);
});

//DISPLAYS ATTACK VALUE
document.querySelector('#attack').value = localStorage.attNum;

//REMEMBER DIE CHOSEN BY USER
document.querySelector('#chooseDie').addEventListener("focusout", function() {
    localStorage.setItem('chosenDie', document.querySelector('#chooseDie').value);
    console.log(localStorage.chosenDie);
});

//DISPLAY STORED DIE CHOICE
document.querySelector("#chooseDie").value = localStorage.chosenDie;

//EVENT LISTENER TO TAKE ATTACK VALUE, TURN IT INTO AM INTEGER, AND ADD IT TO A DIE CHOSEN AND ROLLED BY USER
document.querySelector('#rollAtt').addEventListener("click", function() {
    let attack = parseInt(localStorage.attNum);

    let chooseDie = document.querySelector('#chooseDie').value;

    document.querySelector('#showNum').innerHTML = `${dieRoll(chooseDie) + attack}`;
});