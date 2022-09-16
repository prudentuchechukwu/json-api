// function fetchData(){
//     console.log('user');
//     let url='https://randomuser.me/api?results=5';

//     const request = new XMLHttpRequest ()

//     request.onload = function(){
//         if(this.readyState==4 & this.status ==200){
//             console.log(request.responseText);
//             const responseObject =JSON.parse(request.responseText);
//             console.log(responseObject);
//              document.getElementById('kunle').src =innerHTML=response.results[0].picture.medium;
//              document.getElementById('genda').innerHTML=responseObject.results[0].name;
            
//              document.getElementById('girl')
//             document.getElementById('genda').innerHTML.responseObject.results[2].name.location;

//             // name= innerHTML = responseObject.name
//             // user.classList.remove('hidden');
//             // click.classList.add('hidden');
//      }
//     }
//     request.open('GET', URL, true);
//     request.send();
// }
// fetchData()

function fetchData(){
    console.log('user');
    let url='https://randomuser.me/api';

    const request = new XMLHttpRequest ();

    request.onload = function(){
        if(this.readyState === 4 && this.status ===200){
            console.log(request.responseText);
            const responseObject =JSON.parse(request.responseText);
            console.log(responseObject);
            const url =' https://randomuser.me/api/ ';

let avatar = document.getElementById('avatar');
let fullname = document.getElementById('fullname');
let username = document.getElementById('username');
let email = document.getElementById('email');
let city = document.getElementById('city');
let btn = document.getElementById('btn');

btn.addEventListener("click", function() {
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError)
});

function handleErrors (res){
  if(!res.ok){
    throw error(res.status);
  }
  console.log(res);
  return res;
}

function parseJSON (res){
  return res.json();
}

function updateProfile (profile){
  avatar.src = profile.results[0].picture.medium;
  fullname.innerHTML = profile.results[0].name.first +" "+profile.results[0].name.last; 
  username.innerHTML = profile.results[0].login.username; 
  email.innerHTML = profile.results[0].email;
  city.innerHTML = profile.results[0].location.city;
  return 1;
}

function printError (error){
  console.log(error);
}
        }
    }
    request.open('GET', url, true);
    request.send();
}
fetchData();