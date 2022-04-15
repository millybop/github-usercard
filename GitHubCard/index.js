import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/millybop')
.then( (res) => {
  console.log(res.data);
  const user = cardMaker(res.data);
  const cardParent = document.querySelector('.cards');
  cardParent.appendChild(user);
})
.catch( () => {
  console.log('error');
})
.finally( () => {
  console.log('Whoop');
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

const newFunction = followersArray.forEach( item => {
  axios.get(`https://api.github.com/users/${item}`)
  .then( (res) => {
    document.querySelector('.cards').appendChild(cardMaker(res.data));
  })
  .catch( () => {
    console.log('Some Error Message');
  })
  .finally( () => {
    console.log('Touchdown!');
  })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker(obj){
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const header = document.createElement('h3');
  const username = document.createElement('p');
  const locationPara = document.createElement('p');
  const profile = document.createElement('p');
  const article = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  header.classList.add('name');
  username.classList.add('username');

  image.src = obj.avatar_url;
  image.alt = 'User Profile Picture';
  header.textContent = obj.login;
  locationPara.textContent = `Location: ${obj.location}`;
  article.href = obj.html_url;
  article.textContent = `${obj.html_url}`;
  profile.textContent = `Profile: `
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;

  card.append( image, cardInfo );
  cardInfo.append( header, username, locationPara, profile, followers, following, bio );
  profile.appendChild(article);

  return card;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
