const servicePrefix = 'http://localhost:1337/api/posts/';
// prefix: ön ek
// suffix: son ek

const contentEl = document.querySelector('.content');

window.addEventListener('hashchange', function() {
    console.log(this.location.hash.substring(2));
});

async function loadPage(url) {
    contentEl.innerHTML = 'Yükleniyor..'
    if (url === '') {
        // anasayfayı çek
    } else {
        // dinamik sayfayı getir
    }
}

async function init() {
    const posts = await fetch(servicePrefix).then(r => r.json())
    // console.log(posts);

    for(const post of posts.data) {
        contentEl.innerHTML += `
        
        `

        console.log(post.id);
        console.log(post.attributes.title);
        console.log(post.attributes.summary);
    }
}

init();