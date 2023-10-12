// function isSimple(x) {
//     if (Math.abs(x) <= 1) return false;
    
//     for(let i=2; i<x; i++) {
//         if(x % i === 0) return false
//     }
//     return true
// }
// console.log(
//     isSimple(8)
// )

function mulTab(x) {
    let i =2;
    while (i <= 9) {
        console.log(`${x} * ${i} = ${x*i}`);
        i++
    }
}
console.log(
    mulTab(2)
)