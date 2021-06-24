var linkedinATag = document.getElementById('linkedinUrl');
linkedinATag.href = "https://www.linkedin.com/in/nesibe-sare-%C3%B6zkan-3405b6182/"

var githubATag = document.getElementById('githubUrl');
githubATag.href = "https://github.com/n-sare"

function createHtmlElements (){
    document.getElementById("buttonId").style.display="none"; 
    let h1= document.getElementById("nameSurname")
    let isim = document.createTextNode("N. Sare Özkan");
    h1.appendChild(isim);

    let h2= document.getElementById("age");
    let yas = document.createTextNode("(26)");
    h2.appendChild(yas);

   
    document.appendChild(h1, h2);
}