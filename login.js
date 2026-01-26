const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authenticateUser(username, password)

    if(authenticated){
        window.location.href = "index.html"
    } else{
        alert("login failed")
    }
})



function authenticateUser(username, password) {
    if(username === "admin" && password === "password"){
        return true
    }else{
        return false
    }
}
