"use strict";
// QUESTION 73:
function assignAndUpdateVaraible() {
    let z = "hooriya";
    console.log(`Initial value: ${z}`);
    z = "Mahnoor";
    console.log(`Updated Value: ${z} `);
}
assignAndUpdateVaraible();
// QUESTION 74:
function swapVaraible() {
    let a = 5;
    let b = 10;
    console.log("Before Swap: a =", a, "b =", b);
    let temp = a;
    a = b;
    b = temp;
    console.log("After swap: a =", a, "b =", b);
}
swapVaraible();
// QUESTION 75:
function assignmentOperators() {
    let x = 4;
    console.log(`Initial x Value: ${x}`);
    x += 2;
    console.log(`After Addition: ${x}`);
    x -= 3;
    console.log(`After Subraction: ${x}`);
    x *= 2;
    console.log(`After Multiplication: ${x}`);
    x /= 1;
    console.log(`After Division: ${x}`);
}
assignmentOperators();
