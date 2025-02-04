

//https://api.blablagues.net/?rub=blagues
//https://randomuser.me/api/?results=24
//https://www.themealdb.com/api/json/v1/1/search.php?s=


// fetch("https://api.blablagues.net/?rub=blagues")
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


fetch('https://api.blablagues.net/?rub=blagues')
.then((resp)=>resp.json())
.then((blague)=>{
console.log(blague.data);
})



//lorsque la fonction fleche et il ya une seule instruction, on supprime les alcolades


const headerBlague=document.getElementById('header');
const textBlague=document.getElementById('content');

function Blague(){

    
    fetch('https://api.blablagues.net/?rub=blagues')
    .then((resp)=>resp.json())
    .then((info)=>{
        headerBlague.textContent=info.data.content.text_head
        textBlague.textContent=info.data.content.text;
        if(textBlague.textContent===""){
            textBlague.textContent=info.data.content.text_head;
           
        }else{
            textBlague.textContent=info.data.content.text;
        }


    })
    
}
const btn=document.querySelector("#btn");
btn.addEventListener("click",Blague)







