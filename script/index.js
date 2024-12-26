let form = document.getElementById("form").addEventListener("submit",async()=>{
    event.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    try{
       let res = await fetch("https://silken-wobbly-muenster.glitch.me/user",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(email="empher@gmail.com",password="empher@123")
       })
       let data = await res.json();
       console.log(data);
    }catch(err){
      alert("somthing went wrong",err)
    }

    if(email==empher@gmail.com){
       if (password==empher@123) {
        alert("login Success!")
        window.location.href="quiz.html"
       } 
    }else{
        alert("somthing went wrong!")
    }
})