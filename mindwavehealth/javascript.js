function validateAndStore() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var usernamePattern = /^[a-zA-Z]+$/;

    console.log('Username:', username);

    if (!usernamePattern.test(username)) {
        alert('Username should contain letters only.');
        return false; // Prevent form submission
    }

    if (username && password) {
        // Store the username (e.g., in local storage)
        localStorage.setItem('username', username);
        alert('Login successful!');
    } else {
        alert('Please enter both username and password.');
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}

function performSearch() {
    var query = document.getElementById('search').value;
    console.log('Search Query:', query);

    if (query) {
        // Implement your search logic here
        alert('Searching for: ' + query);
        // Example: Redirect to a search results page
        // window.location.href = '/search_results.html?query=' + encodeURIComponent(query);
    } else {
        alert('Please enter a search term.');
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
