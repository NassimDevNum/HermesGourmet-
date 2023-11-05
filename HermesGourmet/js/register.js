function traiterAge(){
    var age = document.getElementById("age").value;
    if(age < 18)
    {
        document.getElementById("age").placeholder="Trop jeune";
        document.getElementById("age").style="background-color : FFD2D2";
        document.getElementById("age").value=null;

    }else{
        document.getElementById("age").style="background-color : #D2FFD6";
    }
}

function verifEmail()
{
    var email = document.getElementById("email").value;
    var cpt1=0, cpt2=0;
    for (let i=0; i<email.length; i++)
    {
        if (email.charAt(i) === '@') cpt1++;
        else if (email.charAt(i)==='.')cpt2++;
    }
    if (cpt1==1 && cpt2 >= 1){
        document.getElementById("email").style.backgroundColor="green";
    }else {
        document.getElementById("email").style.backgroundColor="red";
    }
}

function traiterNom(){
    var nom = document.getElementById("nom").value;
    nom = nom.toUpperCase();
    document.getElementById("nom").value=nom;

}

function traiterPrenom(){
    var prenom = document.getElementById("prenom").value;
    prenom = prenom.charAt(0).toUpperCase() + prenom.slice(1).toLowerCase();
    document.getElementById("prenom").value=prenom;

}


/*function startEnquete(){
    document.location.href="pageOne.html"
}*/



var myCookies= [];
function  saveCookies(name)
{
    myCookies ["prenom"]  = document.getElementById ("prenom").value;
    myCookies ["nom"]  = document.getElementById ("nom").value;
    myCookies ["age"]=document.getElementById("age").value;
    myCookies ["email"]  = document.getElementById ("email").value;
    myCookies ["telephone"]  = document.getElementById ("tel").value;
    myCookies ["role"]  = document.getElementById ("roletype").value;
    myCookies ["postal"]  = document.getElementById ("postal").value;
    myCookies ["somme"]  ="0" ;
    myCookies ["note1"]  ="0" ;
    myCookies ["note2"]  ="0" ;
    myCookies ["note3"]  ="0" ;
    myCookies ["note4"]  ="0" ;
    myCookies ["note5"]  ="0" ;
    myCookies ["note6"]  ="0" ;
    myCookies["moyenne"]="0";

    document.cookie  =  "" ;
    var  expiresAttrib  =  new  Date( Date.now() + 60 * 1000 ).toString();
    var  cookieString  =  "" ;
    for  ( var  key  in  myCookies )
    {
        cookieString  =  key+"="+myCookies[key]+";"+expiresAttrib+";" ;
        document.cookie = cookieString ;
    }

}

function getCookie(name){
      if(document.cookie.length == 0)
        return null;

      var regSepCookie = new RegExp('(; )', 'g');
      var cookies = document.cookie.split(regSepCookie);

      for(var i = 0; i < cookies.length; i++){
        var regInfo = new RegExp('=', 'g');
        var infos = cookies[i].split(regInfo);
        if(infos[0] == name){
             return unescape (infos[1]);
        }
      }
      return null;
    }

function moyenne(){
var somme = parseInt (getCookie('somme'));
var somme = (somme / 3);
var somme = Math.round(somme);

document.cookie= "moyenne="+ somme;
}

