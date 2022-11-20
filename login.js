document.getElementById("btn").addEventListener("click", ()=>{
    const username = document.getElementById("usn").value;
    const password = document.getElementById("pwd").value;
    const userArray = [{username : "pach123", password : "12345" }, {username : "galaprasanta", password : "12346" }];
    let flag = false;
    for (let i = 0; i < userArray.length; i++) {
        if(username == userArray[i].username && password == userArray[i].password){
            flag = true;
            break;
        }
    }

    if(flag){
        document.getElementById("show").innerHTML = "Login Succesfull"
    }else{
        document.getElementById("show").innerHTML = "User Not Found"
    }
});