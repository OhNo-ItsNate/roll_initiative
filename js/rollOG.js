const dieRoll = (die) => {
    const rando = Math.floor(Math.random() * die) + 1;
    return rando;
}

// let initModNum;

function storageNum(keyName, elementId, storeNum) {
    localStorage.setItem(keyName, document.querySelector(elementId).value);

    storeNum = localStorage.keyName;

    console.log(storeNum);
}

document.querySelector('#initMod').addEventListener("focusout", function() {
    storageNum('initModNum', '#initMod', 'let storeInit');
});

document.querySelector('#attackMod').addEventListener("focusout", function() {
    storageNum('attackModNum', '#attackMod', 'let storeAttack');
});


// document.querySelector('#initMod').addEventListener("focusout", function() {
//     localStorage.setItem('initModNum', document.querySelector('#initMod').value);

//     initModNum = localStorage.initModNum;

//     console.log(initModNum);
// });

document.querySelector('#initMod').value = localStorage.initModNum;

// document.querySelector('#initMod').addEventListener("focusout", function() {
//     let initMod = document.getElementById('initMod').value;
//     // console.log(initMod, typeof initMod);
//     initMod = parseInt(initMod);
//     // console.log(initMod, typeof initMod);
//     document.querySelector('#rollInit').addEventListener("click", function() {
//         document.querySelector('#showNum').innerHTML = `${dieRoll(20) + initMod}`;
//     });
// });

document.querySelector('#rollInit').addEventListener("click", function() {
    // let initMod = document.getElementById('initMod').value;

    // initMod = parseInt(initMod);

    // document.querySelector('#rollInit').addEventListener("click", function() {
    //     document.querySelector('#showNum').innerHTML = `${dieRoll(20) + initMod}`;
    // });

    let initMod = parseInt(localStorage.initModNum);

    document.querySelector('#showNum').innerHTML = `${dieRoll(20) + initMod}`;
});

document.querySelector('#roll').addEventListener("click", function() {
    let chooseDie = document.querySelector('#chooseDie').value;
    console.log(chooseDie);
    document.querySelector('#showNum').innerHTML = `${dieRoll(chooseDie)}`;
});