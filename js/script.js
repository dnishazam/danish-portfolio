/**
 * Filters the project visibility on the dashboard using CSS and opacity transitions.
 * @param {string} category - The category token ('all', 'web', 'sec') to isolate.
 */
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = {
        all: document.getElementById('btn-all'),
        web: document.getElementById('btn-web'),
        sec: document.getElementById('btn-sec')
    };

    // 1. Update active tab design states smoothly
    Object.keys(buttons).forEach(key => {
        if (!buttons[key]) return; // Safeguard if button element is missing
        
        if (key === category) {
            buttons[key].classList.add('bg-gray-800', 'text-white', 'font-semibold');
            buttons[key].classList.remove('hover:text-white');
        } else {
            buttons[key].classList.remove('bg-gray-800', 'text-white', 'font-semibold');
            buttons[key].classList.add('hover:text-white');
        }
    });

    // 2. Handle card animations for sorted layouts
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            // Unhide and trigger fade-in transition
            card.style.display = 'flex';
            // Small timeout ensures the browser registers the display swap before animating opacity
            setTimeout(() => { 
                card.style.opacity = '1'; 
                card.style.transform = 'scale(1)';
            }, 50);
        } else {
            // Trigger fade-out transition
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            // Hide element completely after transition duration finishes (150ms)
            setTimeout(() => { 
                card.style.display = 'none'; 
            }, 150);
        }
    });
}

// 3. Add dynamic styling helper transitions when the script initializes
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.style.transition = 'opacity 200ms ease, transform 200ms ease';
    });
});