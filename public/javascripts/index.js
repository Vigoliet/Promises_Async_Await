'use strict'



console.log('Hello from index!');

// task 4 & 5

const fetchData = async() => {
    const response = await fetch('/data')
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    const data = await response.json();
    return data;
}

fetchData().then(data =>{
    funcLoad(data);
});

const funcLoad = (data) => {
    console.log(data);
    data.forEach((element => {
        const li = document.createElement('li');
        li.textContent = element;
        document.getElementById('list').appendChild(li);
    }))
}

//task 2

// const fetchNames = fetch('/data')
//     .then((response) => response.json()
//     .then(res => Load(res)));

// const Load = (res) => {
//     res.forEach((element => {
// const li = document.createElement('li');
// li.textContent = element;
// document.getElementById('list').appendChild(li);
//     }));
// }

// task 1

// let dataURL = '/javascripts/data.json';
// let req = new XMLHttpRequest();
// req.open('GET', dataURL); //preppa för att gå och  hämta data
// req.responseType='json'; //preppa för att ta emot json
// req.send(); //go fetch!

// console.log('data received');

// //preppa vad som ska hända, när hämtningen är klar
// //dvs när all data har hämtats, då triggas onload eventet
// //och här skriver vi vad som ska ske då
// req.onload = () => {
//     const data = req.response;
//     console.log(data); 
    

//     data.forEach(element => {
//         const li = document.createElement('li');
//         li.textContent = element;
//         document.getElementById('list').appendChild(li);
//     });
   
//}