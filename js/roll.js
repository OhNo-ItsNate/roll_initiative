const dieRoll = (die) => {
    const rando = Math.floor(Math.random() * die) + 1;
    return rando;
}



document.querySelector('#saveNum').addEventListener("click", function() {
    // num1 = document.querySelector('#number').value;
    localStorage.setItem('num1', document.querySelector('#number').value);

    let num1 = localStorage.num1;

    console.log(num1);

    num1 = parseInt(num1);

    document.querySelector('#number').value = num1;
});

document.querySelector('#initMod').addEventListener("focusout", function() {
    let initMod = document.getElementById('initMod').value;
    // console.log(initMod, typeof initMod);
    initMod = parseInt(initMod);
    // console.log(initMod, typeof initMod);
    document.querySelector('#rollInit').addEventListener("click", function() {
        document.querySelector('#showNum').innerHTML = `${dieRoll(20) + initMod}`;
    });
});

document.querySelector('#roll').addEventListener("click", function() {
    let chooseDie = document.querySelector('#chooseDie').value;
    console.log(chooseDie);
    document.querySelector('#showNum').innerHTML = `${dieRoll(chooseDie)}`;
});