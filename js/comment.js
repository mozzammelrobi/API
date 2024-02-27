function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('erroe happend', error))
}


// const loadComment2 = async() => {
//     const res  = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//     const  data = await res.json();
//     console.log(data)
// }

const loadComment2 = async() => {
    try{
        const res  = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        const  data = await res.json();
        console.log(data)
    }
    catch(error){
        console.error('data load error')
    }
    
}