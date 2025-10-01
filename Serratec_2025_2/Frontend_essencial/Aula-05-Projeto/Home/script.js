

const logout = () => {
    removeUser();
    window.open('../Login/index.html', '_self');
}

const loadUser = () => {
    let user = getUser();
    let email = user.emailUser;

    if(!email) return;

    document.getElementById("nameuser").innerHTML = email;
}

window.addEventListener("DOMContentLoaded", loadUser);