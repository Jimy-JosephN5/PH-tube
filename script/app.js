// load categories
const loadCategories = () =>{
  // fetch categories
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
 .then(res => res.json())
 .then(data => displayCategories(data.categories))
 .catch(error => console.error(error))
}

const loadVideos = () =>{
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
  .then(res => res.json())
  .then(data => displayVideos(data.videos))
  .catch(error => console.error(error))
}

// Display Categories
const displayCategories = (categories) =>{
  const categoryContainer = document.getElementById('categories');
  categories.forEach(item => {
    // console.log(item);
    const button = document.createElement('button');    
    button.classList = 'btn';
    button.innerText = item.category;
    categoryContainer.append(button);
  });
}

const copyDemo = {
    "category_id": "1003",
    "video_id": "aaaf",
    "thumbnail": "https://i.ibb.co/5LRQkKF/stick-and-stones.jpg",
    "title": "Sticks & Stones",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/rdTZrCM/dev.jpg",
            "profile_name": "Dave Chappelle",
            "verified": true
        }
    ],
    "others": {
        "views": "113K",
        "posted_date": ""
    },
    "description": "Dave Chappelle's 'Sticks & Stones' has garnered 113K views and remains a controversial yet highly engaging piece of stand-up comedy. Known for his fearless approach, Dave dives into a wide range of topics, delivering his unique perspective with wit and sharp humor. As a verified artist, Dave's comedy is raw, honest, and unapologetically funny."
}

const displayVideos = (videos) => {
  const videoContainer = document.getElementById('videos');
  
  videos.forEach(video =>{
    console.log(video);
    const card = document.createElement('div');
    card.classList = 'card card-compact';
    card.innerHTML = `
  <figure class= "h-[200px]">
    <img
      src="${video.thumbnail}"
      class = "h-full w-full object-cover"
      alt="Shoes"/>
  </figure>
  <div class="px-0 py-2 flex gap-2 items-start">
    <div>
    <img class = "w-10 h-10 rounded-full object-cover" src =${video.authors[0].profile_picture}/>
    </div>

    <div class = "flex flex-col gap-2">
    <h2 class ="text-3xl md:text-2xl font-bold">${video.title}</h2>
    <div class = "flex items-center gap-1">
      <p class ="text-gray-400">${video.authors[0].profile_name}</p>
      <img class = "w-5" src = "https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>
    </div>
    <p>${video.others.views + ' ' +  'views'}</p>
    </div>
  </div>
    `;
    videoContainer.append(card);
  })
}
loadCategories();
loadVideos();
displayCategories();