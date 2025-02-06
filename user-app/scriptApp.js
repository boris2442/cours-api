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



const userData=[];
const fetchUser= async()=>{
 await   fetch("https://randomuser.me/api/?results=24").then((res)=>res.json()).then((data)=>{
    console.log(data.results)
//    userData1=data.results
// //   console.log(data.results.)
})
// console.log(userData1)

}
const userDisplay=()=>{
    fetchUser();
document.body.innerHTML=userData.map(
    (user)=>{
        return `
        <div>
            <h2>${user.name.first} ${user.name.last}</h2>
            <p>${user.email}</p>
            <img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}">
        </div>
        `
    }
)
}

userDisplay();