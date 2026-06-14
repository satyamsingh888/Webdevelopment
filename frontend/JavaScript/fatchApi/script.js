fetch("https://randomuser.me/api")
.then((response)=>{
    return response.json()
})
.then((rawData)=>{
    console.log(rawData.results[0].name.first);
})
.catch((err)=>{
    console.log(err);
})



fetch('https://randomuser.me/api/?results=5')
.then((raw)=> raw.json())
.then((data)=>console.log(data.results))

