fetch('https://ubahthebuilder.tech/posts/1')
.then(data => {
return data.json();
})
.then(post => {
console.log(post.title);
});