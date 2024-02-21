const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.href = "https://ookokioo8456.github.io/dev/Dashboard"
    }else{
        window.location.href = "./error.html"
    }
})

function authentication(username,password){
    if(username === "admin" && password === "loginPassword"){
        return true
    }
    else{
        return false
    }
}