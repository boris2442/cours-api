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
    console.log(xhr.responseText);
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
            console.log(response);
        })  
        .catch((error)=>{
            console.log(error);
        });
 
