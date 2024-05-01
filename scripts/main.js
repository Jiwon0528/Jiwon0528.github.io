console.log("Task 1");
for (let i = 1; i < 11; i++) {
    console.log(i * i);
}
console.log("Task 2")
for (let i = 5; 0 < i ; i--) {
    console.log (i)
    if (i == 1){
        console.log("Blastoff!");
    }
}
console.log("Task 3")
for (let i = 2; i < 51; i = i + 2) {
    console.log (i)
}
console.log("Task 4")
let sum = 0;
for (let i = 0; i < 101; i++) {
    sum=i+sum;
}
console.log(sum);

console.log("Task 5")
let iFactorial = 1;
for (let i = 1; i < 11; i++) {
    iFactorial = i * iFactorial;
    console.log(iFactorial);
}

console.log("Task 6")
let arr = [3,1,4,1,5]
for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
}
    
console.log("Task 7")
for (let i = 0; i <arr.length; i++) {
    console.log(arr.at(-i-1))    
}
console.log("Task 8")
let arr2 = [];
for (let i=0;i<11; i++) {
    
    arr2.push(i**3);
}
console.log(arr2)
console.log("Task 9")
let arr3 = [0,1]
for (let i=1; i<11; i++) {
   let Fibonacci = arr[i]+arr[i-1];
    arr3.push(Fibonacci)

}
   console.log(arr3)

console.log("Task 10")
let arr4 = [];
for (let i = 0; i <arr.length; i++) {
    arr4.push(arr.at(-i-1));
}

let arr5 = [];
while(arr.length > 0) {
    arr5.push(arr.pop());
}