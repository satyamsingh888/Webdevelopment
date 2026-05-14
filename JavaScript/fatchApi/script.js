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