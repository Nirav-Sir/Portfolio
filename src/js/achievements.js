// JavaScript for Achievement Tab Switching
document.addEventListener('DOMContentLoaded', function() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const achievementCategories = document.querySelectorAll('.achievement-category');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all categories
            achievementCategories.forEach(category => {
                category.classList.remove('active');
            });
            
            // Show the selected category
            const categoryId = this.getAttribute('data-category') + '-achievements';
            document.getElementById(categoryId).classList.add('active');
        });
    });
});
