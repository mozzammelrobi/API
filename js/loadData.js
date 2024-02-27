function loadDataDisplay(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => showData(data))
}

function showData(data){
    const postContainer = document.getElementById('post-container')
   for(const post of data){

     const p = document.createElement('p')
     const p2 = document.createElement('p')
     p.innerText = post.userId
     p2.innerText = post.title
     postContainer.appendChild(p)
     postContainer.appendChild(p2)
   }
}