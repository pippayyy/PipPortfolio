document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video');

    // videos.forEach(video => {
    //     video.addEventListener('mouseenter', () => {
    //         video.play();
    //     });

    //     video.addEventListener('mouseleave', () => {
    //         video.pause();
    //         video.currentTime = 0; // Optional: reset video to the beginning
    //     });
    // });

    //Used to auto play video when it is visible on user's screen - used instead of 'on hover' for mobiles

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5 // Trigger when at least 50% of the video is visible
    };

    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
                entry.target.currentTime = 0; // Optional: reset video to the beginning
            }
        });
    }, observerOptions);

    videos.forEach(video => {
        videoObserver.observe(video);
    });


});