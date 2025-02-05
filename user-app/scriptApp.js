const userData1=[];
const fetchUser1=()=>{
    fetch("https://randomuser.me/api/?results=24").then((res)=>res.json()).then((data)=>{
    console.log(data.results)
   userData1=data.results

})
console.log(userData1)
}
fetchUser1();