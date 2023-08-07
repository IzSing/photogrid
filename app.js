const container = document.querySelector('.container');

function generateLayout(columns, post) {
    container.innerHTML = '';
    console.log(post)

    // Store all column arrays which contain the relevant posts
    let colummWrappers = {};
    // create column item array and add this to coloumWrapper object
    for (let i = 0; i < columns; i++) {
        colummWrappers[`column${i}`] = []
    }

    for (let i = 0; i < post.length; i++) {
        const column = i % columns;
        colummWrappers[`column${column}`].push(post[i]);
    }

    for (let i = 0; i < columns; i++) {
        let columnPost = colummWrappers[`column${i}`];
        let column = document.createElement('div');
        column.classList.add('column');

        columnPost.forEach(post => {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');
            let image = document.createElement('img');
            image.src = post.image;
            let overlay = document.createElement('div');
            overlay.classList.add('overlay');
            let title = document.createElement('h3');
            title.innerText = post.title;

            overlay.appendChild(title);
            postDiv.append(image, overlay);
            column.appendChild(postDiv);
        })
        container.appendChild(column)
    }
}

let previousScreenSize = window.innerWidth;

window.addEventListener('resize', () => {
    imageIndex = 0;
    if (window.innerWidth < 600 && previousScreenSize >= 600) {
        generateLayout(1, post);
    } else if (window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)) {
        generateLayout(2, post);
    } else if (window.innerWidth >= 1000 && previousScreenSize < 1000) {
        generateLayout(4, post)
    }
    previousScreenSize = window.innerWidth
})

// Page load
if (previousScreenSize < 600) {
    generateLayout(1, post);
} else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
    generateLayout(2, post);
} else
    generateLayout(4, post);

