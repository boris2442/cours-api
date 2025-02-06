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
// console.log(userData)

}
const userDisplay=async ()=>{
  await  fetchUser();
  const dateParser=(date)=>{
    const newDate=new Date(date).toLocaleDateString("fr-FR",{
        year:"numeric",
        month:'long',
        day:"numeric",
        hour:"numeric",
        minute:"numeric",
        second:"numeric"
        
    })
    return newDate
  }


  const calday=(date)=>{
    const today=new Date();
    // console.log(today);
    const todayTimestamp=Date.parse(today);
    console.log(todayTimestamp);
    const timestamp=Date.parse(date);
    // console.log((todayTimestamp-timestamp)/(1000*60*60*24));
    return Math.floor((todayTimestamp - timestamp)/(1000*60*60*24));
  }

  calday()

document.body.innerHTML=userData.map(
    (user)=>
       
        `
         <div class="card">
           <img src=${user.picture.medium} alt="${user.name.first}" />
           <h2>${user.name.first} <span>${user.name.last}</span></h2>
           <p>${user.location.city},${dateParser(user.dob.date)} </p>
           <i> Membre depuis  ${calday(user.registered.date) }</i>
         </div>
       
        `

   
).join('\n')
}

userDisplay();