
    const gallery = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    let images = [];
    let currentIndex = 0;

    // Load images from JSON
    fetch('images.json')
        .then(res => res.json())
        .then(data => {
            images = data;
            images.forEach((img, index) => {
                const image = document.createElement('img');
                image.src = img.src;
                image.alt = img.alt;
                image.loading = 'lazy';
                image.addEventListener('click', () => openLightbox(index));
                gallery.appendChild(image);
            });
        })
        .catch(err => console.error('Error loading images:', err));

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
        lightboxImg.alt = images[currentIndex].alt;
        lightbox.style.display = 'flex';
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox(currentIndex);
    }

    // Keyboard navigation
    document.addEventListener('keydown', e => {
        if (lightbox.style.display !== 'flex') return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });

    // Close on background click
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) closeLightbox();
    });
