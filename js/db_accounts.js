<!-- Begin
function Login(){
var done=0;
var username=document.login.username.value;
username=username.toLowerCase();
var password=document.login.password.value;
password=password.toLowerCase();
if (username=="convidado" && password=="convidado") { window.location="http://zinaminados.blogspot.com.br/"; done=1; }
if (done==0) { alert("Senha ou Usuário inválido."); }
}
// End -->