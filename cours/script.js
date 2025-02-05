//XMLHttpRequest=>HTTP


//  let xhr= new XMLHttpRequest();
 //xrh=instance de notre objet
 //configuration de la requette
//  xhr.open('GET', "api", true);
//  xhr.onload=reqListener;


 //envoyer la requette au serveur
//  xhr.send();

//  xhr.oneerror=()=>{}
//  https://api.blablagues.net/?rub=blagues

//pratique
//instance de notre objet
let xhr = new XMLHttpRequest();


 //configuration de la requette
xhr.open('GET','https://api.blablagues.net/?rub=blagues', true );
xhr.onload=function(){ //gestion de la reponse
   if(xhr.status>=200 && xhr.status<300){
    // console.log(xhr.responseText);
   }else{
    // console.log("Error", responseText);
   }
}
xhr.onerror=function(){
    // console.log("Erreur réseau");

}
xhr.send();

// la methode fetxh

// fetch('mon lien api', "objet d'option", )
//.then((response)=>{
    //console.log()
    // })
    //.catch((err)=>{

        //instruction s'i ya erreur...
        //})


        fetch('https://api.blablagues.net/?rub=blagues')
        .then((response)=>{
            // console.log(response);
        })  
        .catch((error)=>{
            // console.log(error);
        });
 


        //cours api sur le Headers

const myHeaders =new Headers();
const init={
    method:'GET',
    headers:myHeaders,
    mode:"cors",
    cache:"default"
}
// fetch("data.json", init).then((res)=>console.log(res));

//CRUD=>Create des donnees(POST); GET=>envoie des donnees, Update(PUT);
//delete=>supprime moi les donees 

// const produits = [
//{
//     nom: "smartphone",
//     marque: "samsung",
//     model: "s25 ultra"
//   },
// {
//   nom: "ordinateures",
//   marque: "mackbook",
//   model: "pro"
// }
// ];

// const nproduits = produits.map(produits => 
// produits.nom,
// produits.marque,
// produits.model);
// console.log(nproduits);

 
const init2={
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        pseudo:"rostodev",
        message:"hello word"
    }),
    mode:"cors",
    Credentials:"same-origin",
};



  document.querySelector("form").addEventListener("submit",()=>{
    fetch("http://localhost:3000/posts", init2)
    .then(() => console.log("data envoyée"));
  })