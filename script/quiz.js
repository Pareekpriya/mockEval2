let form = document.getElementById("form").addEventListener("submit",async()=>{
 let question = document.getElementById("question").value
 try{
    let res = await fetch('https://silken-wobbly-muenster.glitch.me/question',{
        method:"POST",
        headers:{
            "Content-Text":"application/json"
        },
        body:JSON.stringify(question)
     
    })
    let data = await res.json();
    alert("Question Created")
 }catch(err){
    console.log("err",err)
 }
});

