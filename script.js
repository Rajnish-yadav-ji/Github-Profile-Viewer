let user = document.querySelector('#userId')
let searchBtn = document.querySelector('#sBtn')
let secondDiv = document.querySelector('#userProfile')

async function fetchUser(userName){
    let response = await fetch(`https://api.github.com/users/${userName}`)
    let result = await response.json();
    console.log(result)
    displayUser(result)
    
}



searchBtn.addEventListener('click', ()=>{
    let userID = user.value;
    fetchUser(userID)
    secondDiv.classList.remove('secondDivHidden')
    secondDiv.classList.add('secondDiv')
    
})

function displayUser (result){
    let {avatar_url,name,bio,followers,following,public_repos,html_url} = result;


    
    if(user.value === ''){
        document.getElementById('userProfile').innerHTML = `<h1>Please , Enter a Github username in the input box</h1>`
        return
    }
    if(!avatar_url){
        document.getElementById('userProfile').innerHTML = `<h1>Sorry 🥹, user not found</h1>`
        return;
    }
    if(!bio){
        bio = ""
    }
    if(!name){
        name = "Unknown"
    }

    document.getElementById('userProfile').innerHTML = `<div class="userInfo">
    <img src=${avatar_url} alt="userImage" class="userImage">
    <div class="userDetail">
        <p class="userName">${name}</p>
        <p class="userBio">${bio}</p>
    </div>
</div>
<div class="userFollow">
    <div class="follower">
        <div class="repo">
            <p>Followers</p>
            <p>${followers}</p>
        </div>
        <div class="repo">
            <p>Following</p>
            <p>${following}</p>
        </div>
        <div class="repo">
            <p>Repos</p>
            <p>${public_repos}</p>
        </div>
    </div>
    <div class="profileVisit">
        <a href=${html_url} target="_blank"><button class="pBtn">Visit Profile</button></a>
    </div>
</div>`
}