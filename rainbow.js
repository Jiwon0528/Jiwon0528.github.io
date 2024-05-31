console.log("Task 1");
let arr6 = ["red", "blue", "yellow", "green", "purple", "orange", "black", "midnightblue", "cyan", "magenta", "pink"];
let list = document.createElement('ul'); 
for (let i=0; i<arr6.length; i++) {
    console.log("Start loop iteration");
    console.log("arr6[i]: " + arr6[i]);

    let item = document.createElement('li');
    item.innerText = arr6[i];
    item.style.color = arr6[i];
    list.appendChild(item);
    document.body.appendChild(list);
    console.log("End loop iteration");
}        

