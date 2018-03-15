var galleryImages = document.querySelectorAll('ul li a')
var selectedImage = document.querySelector('.image-large')

galleryImages.forEach (image =>
    image.addEventListener('click', function(e) {
        e.preventDefault()
        console.log(this)
        selectedImage.src = this.children[0].src
    }))