// Function to initialize dark mode
function initDarkMode() {
    // Check if user has a preference saved
    const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
    
    // If they do, apply it
    if (darkModeEnabled) {
        document.body.classList.add("dark-mode");
        const toggleCheckbox = document.getElementById("darkModeToggle");
        if (toggleCheckbox) {
            toggleCheckbox.checked = true;
        }
    }
}

// Function to toggle dark mode
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    
    // Save preference to localStorage
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

// Add Dark Mode toggle button to header
function addDarkModeToggle() {
    const headerRight = document.querySelector('.header-right');
    if (headerRight && !document.querySelector('.theme-switch-wrapper')) {
        // Create the toggle wrapper
        const toggleWrapper = document.createElement('div');
        toggleWrapper.className = 'theme-switch-wrapper';
        
        // Create the toggle HTML with improved design
        toggleWrapper.innerHTML = `
            <label class="theme-switch" for="darkModeToggle" title="Chuyển chế độ sáng/tối">
                <input type="checkbox" id="darkModeToggle" />
                <div class="slider">
                    <div class="slider-icons">
                        <span>☀️</span>
                        <span>🌙</span>
                    </div>
                </div>
            </label>
        `;
        
        // Insert at the beginning of header-right
        headerRight.insertBefore(toggleWrapper, headerRight.firstChild);
        
        // Add event listener to the checkbox
        const darkModeToggle = document.getElementById("darkModeToggle");
        if (darkModeToggle) {
            darkModeToggle.addEventListener("click", toggleDarkMode);
        }
    }
}

// Function to run when document is ready
function onDocumentReady() {
    addDarkModeToggle();
    initDarkMode();
}

// Initialize when DOM is fully loaded
if (document.readyState === "loading") {
    document.addEventListener('DOMContentLoaded', onDocumentReady);
} else {
    // DOMContentLoaded has already fired
    onDocumentReady();
}

// Add a fallback initialization to ensure dark mode works across all pages
window.addEventListener('load', function() {
    if (!document.querySelector('.theme-switch-wrapper')) {
        onDocumentReady();
    }
});