
// select elements
const form = document.querySelector(".post-form")
const title = document.querySelector(".post-title")
const image = document.querySelector(".post-image")
const message = document.querySelector(".post-message")
const blog = document.querySelector(".post-blog")

document.addEventListener("DOMContentLoaded", loadPosts)
form.addEventListener("submit", addPost)
//  add post
function addPost(e) {
    e.preventDefault();
    const postTitle = title.value.trim();
    const postImage = image.value.trim();
    const postMessage = message.value.trim();

    if (postTitle === "" || postMessage === "") return
    const post = {
        id: Date.now(),
        titleText: postTitle,
        imageURL: postImage,
        messageText: postMessage
    }
    addPostToDOM(post);
    savePostToLocal(post)



    form.reset()

}
// add post to dom
function addPostToDOM(post) {
    const div = document.createElement("div")
    div.className = "post"
    div.dataset.id = post.id;
    div.innerHTML = `<h3 class="post-title-text">${post.titleText}</h3>
             ${post.imageURL ? `<img src="${post.imageURL}" class="post-image-url">` : ""}
            <p class="post-message-text">${post.messageText}</p> 
            <div style="margin-top: 10px; display: flex;">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
            </div>
            `
    const h2 = blog.querySelector("h2");
    if (h2) h2.remove();
    blog.appendChild(div)
    attachPostEvents(div, post)
}
// save post 
function savePostToLocal(post) {
    const oldPosts = getPoststFromLocalStorage()

    oldPosts.push(post)

    localStorage.setItem("posts", JSON.stringify(oldPosts))
}
// get posts from local storage
function getPoststFromLocalStorage() {
    const oldPosts = JSON.parse(localStorage.getItem("posts")) || []
    return oldPosts;
}

// load posts from local storage
function loadPosts() {
    const posts = getPoststFromLocalStorage()

    posts.forEach(post => addPostToDOM(post))
}

function attachPostEvents(div, post) {
    div.querySelector(".edit-btn").addEventListener("click", () => {
        editPost(post.id, div)
    });

    div.querySelector(".delete-btn").addEventListener("click", () => {
        deletePost(post.id, div)
    });
}
// edit post
function editPost(id, div) {
    const postTtle = div.querySelector(".post-title-text")
    const postImg = div.querySelector(".post-image-url")
    const postMsg = div.querySelector(".post-message-text")

    const newTitle = prompt("Edit post title:", postTtle.textContent)
    const newImg = prompt("Edit post image URL:", postImg ? postImg.src : "")
    const newMsg = prompt("Edit post message:", postMsg.textContent)

    if (newTitle !== null && newTitle.trim() !== "") {
        updatePost(id, newTitle, "title")
        postTtle.textContent = newTitle
    }
    if (newImg !== null && newImg.trim() !== "") {
        updatePost(id, newImg, "image");

        if (postImg) {
            postImg.src = newImg;
        } else {
            const img = document.createElement("img");
            img.src = newImg;
            img.className = "post-image-url";
            img.style.maxWidth = "100%";
            img.style.margin = "10px 0";
            div.insertBefore(img, postMsg);
        }
    }
    if (newMsg !== null && newMsg.trim() !== "") {
        updatePost(id, newMsg, "message")
        postMsg.textContent = newMsg
    }
}
function updatePost(id, newPost, type) {
    const posts = getPoststFromLocalStorage();
    const post = posts.find(p => p.id === id);
    if (post) {
        if (type === "title") {
            post.titleText = newPost
        } else if (type === "image") {
            post.imageURL = newPost
        } else if (type === "message") {
            post.messageText = newPost
        }
        localStorage.setItem("posts", JSON.stringify(posts))
    }
}
// delete post
function deletePost(id, div) {
    if (!confirm("Are you sure you want to delete this post?")) return;

    let posts = getPoststFromLocalStorage();
    posts = posts.filter(p => p.id !== id);
    localStorage.setItem("posts", JSON.stringify(posts));
    div.remove();
}
