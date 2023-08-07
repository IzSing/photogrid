
const post = [];



const images = [
    'IMG_1289.JPG',
    'IMG_1294.JPG',
    'IMG_5657.JPG',
    'IMG_5673.JPG',
    'IMG_5285.JPG',
    'IMG_5003.JPG',
    'IMG_2017.JPG',
    'IMG_4906.JPG',
    'IMG_4992.JPG',
    'IMG_0817.jpeg',
    'IMG_0820.jpeg',
    'IMG_1406.JPG',
    'IMG_1488.JPG',
    'IMG_1297.JPG',
    'IMG_5355.JPG',
    'IMG_5565.JPG',
    'IMG_5225.JPG',
    'IMG_4950.PNG',
    'IMG_5074.JPG',
    'IMG_5665.JPG'
];

let imageIndex = 0;

for (let i = 1; i <= 80; i++) {
    let item = {
        id: i,
        title: `Post ${i}`,
        image: images[imageIndex]
    }
    post.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
}

// console.log(post)