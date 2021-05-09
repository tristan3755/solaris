
let url="https://api.le-systeme-solaire.net/rest/bodies/{lune}"

  fetch(url)
.then((resp) => resp.json())
.then(function(data) {
console.log(data)
})
  .catch(function(error) {
console.log(error)
});


document.querySelector('.bouton').addEventListener('click',()=>{
let menu=document.querySelector('.menu')
menu.style.width="100%"
menu.style.zIndex="1"
})
document.querySelector('.boutonClose').addEventListener('click',()=>{
  let menu=document.querySelector('.menu')
  menu.style.width="0%"
  menu.style.zIndex="-1"
  })


