class Carousel {
    constructor(image) {

        this.image = image;

        console.log(image);

        this.currentIndex = 0;
        
        const leftButton = document.querySelector('.left-button');

        const rightButton = document.querySelector('.right-button');

        rightButton.addEventListener('click', () => {
            this.changeImageRight();
        })

        leftButton.addEventListener('click', () => {
            this.changeImageLeft();
        })
    }
    changeImageRight() {
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'none';
            }
        this.currentIndex++;
        if (this.currentIndex < images.length) {
            images[this.currentIndex].style.display = 'flex';
        }
        else {
            this.currentIndex = 0;
            images[this.currentIndex].style.display = 'flex';
        }
        console.log(this.currentIndex);
    }
    
    changeImageLeft() {
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'none';
            }
        this.currentIndex--;
        if (this.currentIndex === -1) {
            this.currentIndex = (images.length - 1);
            images[this.currentIndex].style.display = 'flex';
        }
        else {
            images[this.currentIndex].style.display = 'flex';
        }
    }
}

let carousel = document.querySelector('.carousel');

let images = document.querySelectorAll('.carousel img');

images.forEach(image => {
    return new Carousel(image);
})

images[0].style.display = 'flex';


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
