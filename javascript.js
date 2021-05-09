
document.querySelector('.bouton').addEventListener('click',()=>{
let menu=document.querySelector('.menu')
menu.style.width="100%"
menu.style.zIndex="1"
menu.style.overflowY= "scroll";

let url="https://api.le-systeme-solaire.net/rest/bodies"


fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  for(let i in data.bodies){
    /*console.log(data.bodies[i].id)*/
    let maDiv=document.createElement('div')
    maDiv.classList='divListe'
    let nomAstre=document.createElement('p')
    nomAstre.innerHTML=data.bodies[i].id

    maDiv.appendChild(nomAstre)
    document.getElementById('apiGet').appendChild(maDiv)

    maDiv.addEventListener('click',()=>{
     let url2="https://api.le-systeme-solaire.net/rest/bodies/{"+data.bodies[i].id+"}"
     console.log(url2)
     document.getElementById('apiGet').innerHTML=""
     fetch(url2)
     .then((resp) => resp.json())
     .then(function(data){
       console.log(data)
       let monTitre=document.createElement('h1')
       monTitre.innerHTML=data.name
       monTitre.style.color="white"
       document.getElementById('apiGet').appendChild(monTitre)
     })
     
    })
      
  }

})
  .catch(function(error) {
console.log(error)
});

})
document.querySelector('.boutonClose').addEventListener('click',()=>{
  let menu=document.querySelector('.menu')
  menu.style.width="0%"
  menu.style.zIndex="-1"
  document.getElementById('apiGet').innerHTML=""
  })


  