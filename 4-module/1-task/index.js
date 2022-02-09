function makeFriendsList(friends) {  
  const ul = document.createElement('ul');
  const body = document.body;
  for (friend of friends) {
    let li;
    li = document.createElement('li');
    li.innerHTML = `${friend.firstName} ${friend.lastName}`;
    ul.appendChild(li);
  } 
  return ul;
}
