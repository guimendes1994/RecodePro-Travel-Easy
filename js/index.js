
function rolarPacotes(){
    const Pacotes = document.getElementById('pacotes')
    Pacotes.scrollIntoView();
}
function rolarInter(){
    const Inter = document.getElementById('inters')
    Inter.scrollIntoView();
}
function rolarNacio(){
    const Nacio = document.getElementById('nacio')
    Nacio.scrollIntoView();
}
function showPassword(){
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fieldPassword = document.getElementById('field-password');

    if(eye.style.display === 'none'){
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassword.type = 'text';
    } 
    else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassword.type = 'password';
    }
};