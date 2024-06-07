let arr1 = ["rgb(0,174,255)","rgb(245,74,74)"];
let list = document.createElement('ul'); 
for (let i=0; i<arr6.length; i++) {
    console.log("arr1[i]: " + arr1[i]);

    let item = document.createElement('li');
    item.innerText = arr1[i];
    item.style.color = arr1[i];
    list.appendChild(item);
    document.body.appendChild(list);
}        
