// JavaScript for handling tab navigation
document.addEventListener('DOMContentLoaded', function () {
    // Get all tabs and content sections
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    // Function to handle tab switching
    function switchTab(event) {
        // Remove active class from all tabs and content sections
        tabs.forEach(tab => tab.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked tab and corresponding content
        const targetTab = event.target;
        targetTab.classList.add('active');
        const targetContent = document.getElementById(targetTab.getAttribute('data-tab'));
        targetContent.classList.add('active');
    }

    // Add event listeners to all tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', switchTab);
    });
});

