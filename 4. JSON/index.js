fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => {
    let jsonData = data;
    console.table(jsonData);
    jsonData.map(function(data){
      creatList(data)
    })
  });

window.onload = function(){
  function updateToDo(event){
    if(event.target.classList.contains('listItem')){
      event.target.classList.toggle('line-through');
      event.target.classList.toggle('bg-gray-300');
      event.target.classList.toggle('success');
      const changeData = {
        id : event.target.childNodes[0].innerText,
        completed : event.target.classList.contains('success') ? true : false
      }
      changeList(changeData);
    }
  }
  const listWrap = document.querySelector('.listWrap');
  listWrap.addEventListener('click', updateToDo);
}

function filterFetch(value) {
  const listWrap = document.querySelector('.listWrap');
  listWrap.innerHTML = ''; 
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => {
    let jsonData = data;
    const valueBoolean = stringToBoolean(value.value);
    jsonData.forEach((data) => {
      if(value.value === "all"){
        creatList(data)
      } else {
        if(data.completed === valueBoolean){
          creatList(data)
        }
      }
    })
  });
}

function stringToBoolean(str)
{
  switch (str.toLowerCase())
  {
    case "true":
    case "yes":
    case "1":
      return true;

    case "false":
    case "no":
    case "0":
      return false;

    default:
      return undefined;
  }
}

function creatList(data) {
  const listWrap = document.querySelector('.listWrap');
  const list = document.createElement('li');
  list.classList.add('my-5');

  const button = document.createElement('button');
  button.classList.add('border');
  button.classList.add('w-full');
  button.classList.add('text-left');
  button.classList.add('p-3');
  button.classList.add('listItem');
  if(data.completed === true){
    button.classList.add('line-through');
    button.classList.add('bg-gray-300');
    button.classList.add('success')
  }

  const itemId = document.createElement('span');
  itemId.classList.add('inline-block');
  itemId.classList.add('w-[35px]');

  const itemTitle = document.createElement('span');

  const itemUserId = document.createElement('span');
  itemUserId.classList.add('hidden');

  itemId.innerHTML = `${data.id}`;
  itemTitle.innerHTML = `${data.title}`;
  itemUserId.innerHTML = `${data.userId}`

  button.append(itemId);
  button.append(itemTitle);
  button.append(itemUserId);
  list.append(button);

  listWrap.append(list);
}

function changeList(changeData){
  fetch(`https://jsonplaceholder.typicode.com/todos/${changeData.id}`, {
    method: 'PATCH',
    body: JSON.stringify(changeData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
}