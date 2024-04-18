function select(item) {
  return document.querySelector(item);
}

const users = [
  {
    location: "Delhi, India",
    name: "Scarlet",
    age: 24,
    image: "images/users/aiony-haust-3TLl_97HNJo-unsplash.jpg",
    interest: [
      {
        interestName: "Music",
        interestIcon: "ri-music-2-fill",
      },
      {
        interestName: "Writing",
        interestIcon: "ri-quill-pen-fill",
      },
    ],
    bio: "Scarlet is a music enthusiast and loves to spend her free time writing stories and poems. She finds solace in melodies and inspiration in the flow of words.",
  },
  {
    location: "New York, USA",
    name: "Eva",
    age: 23,
    image: "images/users/roman-akhmerov-Js6Hwobewi8-unsplash.jpg",
    interest: [
      {
        interestName: "Photography",
        interestIcon: "ri-camera-fill",
      },
      {
        interestName: "Cooking",
        interestIcon: "ri-restaurant-fill",
      },
    ],
    bio: "Eva captures life's moments through her lens, finding beauty in every frame. When she's not behind the camera, she's experimenting in the kitchen, creating culinary masterpieces.",
  },
  {
    location: "London, UK",
    name: "Sophie",
    age: 25,
    image: "images/users/andrey-zvyagintsev-x0c6vTO5ibA-unsplash.jpg",
    interest: [
      {
        interestName: "Travel",
        interestIcon: "ri-plane-line",
      },
      {
        interestName: "Reading",
        interestIcon: "ri-book-2-fill",
      },
    ],
    bio: "Sophie's heart belongs to the world, as she seeks adventure in every corner. With a book in hand and a passport in her bag, she's always ready to explore new cultures and landscapes.",
  },
  {
    location: "Tokyo, Japan",
    name: "Kenzie",
    age: 26,
    image: "images/users/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg",
    interest: [
      {
        interestName: "Gaming",
        interestIcon: "ri-gamepad-fill",
      },
      {
        interestName: "Technology",
        interestIcon: "ri-remote-control-fill",
      },
    ],
    bio: "Kenzie is a tech-savvy gamer who navigates the virtual world with ease. She's always up-to-date with the latest tech trends and enjoys immersing herself in interactive adventures.",
  },
  {
    location: "Paris, France",
    name: "Isabelle",
    age: 29,
    image: "images/users/jake-nackos-IF9TK5Uy-KI-unsplash.jpg",
    interest: [
      {
        interestName: "Music",
        interestIcon: "ri-music-2-fill",
      },
      {
        interestName: "Fashion",
        interestIcon: "ri-shirt-fill",
      },
    ],
    bio: "Isabelle is a connoisseur of elegance, finding harmony in both melodies and styles. With a keen eye for beauty, she draws inspiration from the world's cultural tapestry.",
  },
  {
    location: "Sydney, Australia",
    name: "Jackie",
    age: 24,
    image: "images/users/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg",
    interest: [
      {
        interestName: "Reading",
        interestIcon: "ri-book-2-fill",
      },
      {
        interestName: "Cooking",
        interestIcon: "ri-restaurant-fill",
      },
    ],
    bio: "Jackie is a bookworm who savors the aroma of freshly cooked meals. Whether lost in the pages of a novel or whipping up culinary delights, she finds joy in simple pleasures.",
  },
  {
    location: "Los Angeles, USA",
    name: "Emily",
    age: 28,
    image: "images/users/allef-vinicius-u7991rqwgVM-unsplash.jpg",
    interest: [
      {
        interestName: "Chatting",
        interestIcon: "ri-chat-1-fill",
      },
      {
        interestName: "Painting",
        interestIcon: "ri-brush-fill",
      },
    ],
    bio: "Emily is a social butterfly with a passion for self-expression. Whether engaged in lively conversations or wielding a paintbrush, she finds freedom in creativity.",
  },
  {
    location: "Berlin, Germany",
    name: "Lucy",
    age: 22,
    image: "images/users/raamin-ka-uR51HXLO7G0-unsplash.jpg",
    interest: [
      {
        interestName: "History",
        interestIcon: "ri-ancient-gate-fill",
      },
      {
        interestName: "Computer",
        interestIcon: "ri-cpu-line",
      },
    ],
    bio: "Lucy is a time traveler through the annals of history, her bicycle a trusty steed. With a fascination for the past and a knack for technology, she bridges the gap between epochs.",
  },
  {
    location: "Toronto, Canada",
    name: "Ava",
    age: 25,
    image: "images/users/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
    interest: [
      {
        interestName: "Foodie",
        interestIcon: "ri-drinks-2-fill",
      },
      {
        interestName: "Movies",
        interestIcon: "ri-film-fill",
      },
    ],
    bio: "Ava's palate is as diverse as her taste in movies, always seeking new flavors and cinematic experiences. When not indulging in gastronomic delights, she's lost in the magic of film.",
  },
  {
    location: "Moscow, Russia",
    name: "Nikola",
    age: 29,
    image: "images/users/stefan-stefancik-QXevDflbl8A-unsplash.jpg",
    interest: [
      {
        interestName: "Movies",
        interestIcon: "ri-music-2-fill",
      },
      {
        interestName: "Reading",
        interestIcon: "ri-book-2-fill",
      },
    ],
    bio: "Nikola's mind is a theater of ideas, where stories unfold like chess moves on a board. With a love for cinematic narratives and literary plots, she navigates the complexities of life with strategic intellect.",
  },
];
let currUser = 0;
let isAnimating = false;
function setUser(index) {
  select("#location").innerHTML = users[index].location;
  select("#name").innerHTML = users[index].name;
  select("#age").innerHTML = users[index].age;
  select("#bio").innerHTML = users[index].bio;
  select("#intrests").innerHTML = "";
  users[index].interest.forEach((item) => {
    let userInterest = document.createElement("div");
    userInterest.classList.add(
      "interest-items",
      "flex",
      "items-center",
      "gap-1",
      "text-white",
      "text-xs",
      "bg-white/30",
      "px-4",
      "py-1",
      "rounded-[30px]"
    );
    userInterest.innerHTML = `<i class=${item.interestIcon}></i> ${item.interestName}`;
    select("#intrests").appendChild(userInterest);
  });
}
(function setUserInitially() {
  select(".primary-user img").src = users[currUser].image;
  select(".secondary-user img").src = users[currUser + 1].image;
  setUser(currUser);
  currUser = 2;
})();

function animeImage() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let primary = select(".primary-user");
        let secondary = select(".secondary-user");

        secondary.classList.remove("z-[2]");
        secondary.classList.add("z-[3]");
        secondary.classList.remove("secondary-user");

        primary.classList.remove("z-[3]");
        primary.classList.add("z-[2]");

        gsap.set(primary, {
          scale: 1,
          opacity: 1,
        });
        if (currUser === users.length) {
          currUser = 0;
        }
        select(".primary-user img").src = users[currUser].image;
        currUser++;
        primary.classList.remove("primary-user");
        secondary.classList.add("primary-user");
        primary.classList.add("secondary-user");
      },
    });
    tl.to(
      ".primary-user",
      {
        opacity: 0,
        scale: 1.1,
        duration: 1,
      },
      "a"
    );
    tl.from(
      ".secondary-user",
      {
        opacity: 0,
        scale: 0.9,
        duration: 1,
      },
      "a"
    );
  }
}
function handleClick() {
  animeImage();
  setUser(currUser - 1);
  gsap.from(".animeElem", {
    y: 100,
    opacity: 0,
    duration: 1,
  });
  gsap.from(".interest-items", {
    // scale: 0,
    x: -100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.25,
  });
}
function handleMsg(){
  let msg = document.createElement("h2");
  msg.classList.add("w-full", "text-center", "absolute", "text-transparent", "left-1/2", "-translate-x-1/2", "top-7", "font-semibold", "uppercase", "like-msg", "bg-gradient-to-b", "from-red-700", "to-pink-400", "px-2")
  if(currUser === 1){
    msg.innerHTML =  `<h3>You liked ${users[users.length -1].name}</h3>`;
  }
  else{
    msg.innerHTML =  `<h3>You liked ${users[currUser - 2].name}</h3>`;
  }
  select("#content").appendChild(msg);
  setTimeout(() => {
    select("#content").removeChild(msg);
  }, 2500);
  gsap.from(msg, {
    scale: 0,
    opacity: 0,
    duration: 0.2,
  })
}
let isHeart = false;
select("#decline-btn").addEventListener("click", handleClick);
select("#heart-btn").addEventListener("click", (e)=>{
  isHeart = true
  if(isHeart){
    e.currentTarget.classList.add("bg-[#ffa9a9]")
    select("#heart-btn span").classList.add('text-[#dc143c]', "scale-[1.23]");
  }
  handleMsg()
  setTimeout(() => {
    handleClick();
  }, 800);
});
select("#heart-btn").addEventListener("mouseleave", (e)=>{
  isHeart = false;
  e.currentTarget.classList.remove("bg-[#ffa9a9]")
  select("#heart-btn span").classList.remove('text-[#dc143c]', "scale-[1.23]");
})
select(".nav-chat").addEventListener("mouseover", (e)=>{
  select(".nav-chat span").classList.add('scale-[1.5]', 'top-[32%]', 'right-[32%]');
})
select(".nav-chat").addEventListener("mouseleave", (e)=>{
  select(".nav-chat span").classList.remove('scale-[1.5]', 'top-[32%]', 'right-[32%]');
})