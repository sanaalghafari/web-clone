// Counter Animation (Numbers increasing from 0 to desired value)
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.stat-item span');
    const speed = 200; // The speed of the animation

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target'); // Target number from HTML
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10); // Recursively call to update the number
            } else {
                counter.innerText = target; // Ensure the target is exactly reached
            }
        };

        updateCount();
    });
});

// Carousel for What's Trending Section
const trendingContainer = document.querySelector('.trending-container');
const trendingItems = document.querySelectorAll('.trending-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.pagination-dot');

let currentIndex = 0; // Keep track of the current slide

// Function to show the current slide and update the dots
function showSlide(index) {
    // Ensure index is within the bounds of the slides
    if (index >= trendingItems.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = trendingItems.length - 1;
    } else {
        currentIndex = index;
    }

    // Move the trendingContainer to show the correct item
    trendingContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update the dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Add event listeners for previous and next buttons
prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1); // Show the previous slide
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1); // Show the next slide
});

// Add event listeners for pagination dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index); // Go to the clicked dot's slide
    });
});

// Initially show the first slide and set the first dot as active
showSlide(currentIndex);
