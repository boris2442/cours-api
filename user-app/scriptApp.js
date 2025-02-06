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
        <h2>${user.name.first}</h2>
        `

   
).join('\n')
}

userDisplay();