function loadItems(){
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((result) => result);
}

loadItems().then((items) => { 
  console.log(items);
})
