"use strict";
const p = document.getElementById('pElement');
console.log(p);
let clicks = 0;
p === null || p === void 0 ? void 0 : p.addEventListener('click', (event) => {
    console.log(`Click #${++clicks}`);
});
