'use strict'

//task 2

console.log('Hello from index!');

const fetchNames = fetch('/data')
    .then((response) => response.json()
    .then(res => Load(res)));

const Load = (res) => {
    console.log(res[0]);

    res.forEach((element => {
        const li = document.createElement('li');
        li.textContent = element;
        document.getElementById('list').appendChild(li);
    }));
}

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