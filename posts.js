const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayPosts(data);
    });
};

// {userId: 10,
//     id: 100,
//     title: 'at nam consequatur ea labore ea harum', body: 'cupiditate quo est a modi nesciunt soluta\nipsa vol…nam et distinctio eum\naccusamus ratione error aut'}

const displayPosts = (posts) => {
  // 1. get the container and empty the container
  const postsContainer = document.getElementById("post-container");
  postsContainer.innerHTML = "";
  posts.forEach((post) => {
    // 2. create element

    const postCard = document.createElement("div");
    postCard.innerHTML = ` 
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
    `
    // 3. add to the container
    postsContainer.append(postCard)

  });
};


loadPost();