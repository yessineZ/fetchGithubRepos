let theInput = document.querySelector('.get-repos input');
let getButton = document.querySelector(".get-btn") ; 
let reposData = document.querySelector(".show-data")  ;
console.log(theInput,getButton,reposData);

getButton.addEventListener("click",getRepos) ; 

function getRepos() {
    if(theInput.value ==="") {
        reposData.innerHTML ="<span>Please Write Your Github Username.</span>"
    }else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`).then((response)  => (response.json()))
        .then((respo) => {
            reposData.innerHTML = "" ; 
            console.log(respo) ;
            if(respo.length ===0){
                reposData.innerHTML ="<span>This Kid have a private Rep</span>" ;
            }
            if (respo.message === "Not Found") {
                reposData.innerHTML ="<span>Invalid Username</span>" ;
            }
              respo.forEach((respo) => {
                let maindiv = document.createElement("div");

                let repoName = document.createTextNode(respo.name);

                maindiv.appendChild(repoName);

                let theurl = document.createElement("a");

                let urlText = document.createTextNode("Visit");

                theurl.appendChild(urlText);

                theurl.href = respo.url;

                theurl.setAttribute("target", "_blank");

                maindiv.appendChild(theurl);

                reposData.appendChild(maindiv);
              });
            
        })
    }


}