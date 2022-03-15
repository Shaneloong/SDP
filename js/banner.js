const BANNER = ['images1.jpg', 'images2.jpg', 'images3.jpg', 'images4.jpg', 'images5.jpg', 'images6.jpg'];

const CARD_IMG = document.getElementsByClassName('banner-img');

Array.from(CARD_IMG).forEach(element =>{
    let random_img = Math.floor(Math.random() * 6); // range 0 - 5     
    element.src = '/banner/' + BANNER[random_img];
})
    



