const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

// console.log('Explore API');

// const person = {
//     name: 'selim',
//     fruit: 'dalim',
//     dish: 'halim',
//     friends: ['alim', 'kolim', 'lamim'],
//     isRich: false,
//     money: 34000,
// };
// console.log(person, typeof person);

// // JSON --> JS object with Notification
// // JSON.stringify --> JSON
// // JSON.parse --> Object

// const personJSON = JSON.stringify(person)
// console.log(personJSON, typeof personJSON)


// const parseJSON = JSON.parse(personJSON);
// console.log(parseJSON, typeof parseJSON)