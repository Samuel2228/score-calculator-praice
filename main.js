let username = document.getElementById('username');
let password = document.getElementById('password');
let login = document.getElementById('login');

login.addEventListener('click', ()=> {
    let userName = username.value;
    let passwrd = password.value;
    let userPass = userName + passwrd;
    let errors = [];
    
    if (userName==='') {
        errors = [...errors, 'Username required'];
    }

    if (passwrd==='') {
        errors = [...errors, 'Password required'];
    }

    if (errors.length>0) {
        alert(errors.join(', '))
    }else{
        window.location.href = './Student-score/score.html';
    }
})