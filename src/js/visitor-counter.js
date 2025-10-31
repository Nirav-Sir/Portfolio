// Visitor Counter Script
document.addEventListener('DOMContentLoaded', function() {
    // Check if counter exists in localStorage
    let visitorCount = localStorage.getItem('visitorCount');
    
    // If not, initialize it
    if (!visitorCount) {
        visitorCount = 0;
    }
    
    // Increment the count for this visit
    visitorCount = parseInt(visitorCount) + 1;
    
    // Save back to localStorage
    localStorage.setItem('visitorCount', visitorCount);
    
    // Update the counter element if it exists
    const counterElement = document.getElementById('visitor-count');
    if (counterElement) {
        counterElement.textContent = visitorCount;
    }
});
