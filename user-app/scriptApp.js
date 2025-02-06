// const userData1=[];
// const fetchUser1=()=>{
//     fetch("https://randomuser.me/api/?results=24").then((res)=>res.json()).then((data)=>{
//     console.log(data.results)
//    userData1=data.results
// //   console.log(data.results.)
// })
// console.log(userData1)
// }
// fetchUser1();



let userData=[];
const fetchUser= async()=>{
 await   fetch("https://randomuser.me/api/?results=24")
 .then((res)=>res.json())
 .then((data)=>  userData=data.results)
console.log(userData)

}
const userDisplay=async ()=>{
  await  fetchUser();
document.body.innerHTML=userData.map(
    (user)=>
       
        `
         <div class="card">
         <img src=${user.picture.medium} alt="${user.name.first}" />
         <h2>${user.name.first} <span>${user.name.last}</span></h2>
         <p>${user.location.city},${user.dob.date} </p>
         <i> Membre depuis ${user.registered.date} </i>
         </div>
       
        `

   
).join('\n')
}

userDisplay();