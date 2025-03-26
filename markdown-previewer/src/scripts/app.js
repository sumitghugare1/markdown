// Select elements
const markdownInput = document.getElementById('markdown-input');
const preview = document.getElementById('preview');
const clearButton = document.getElementById('clear-button');
const toggleThemeButton = document.getElementById('toggle-theme');

// Render Markdown to HTML
markdownInput.addEventListener('input', () => {
    const markdownText = markdownInput.value;
    const html = window.marked.parse(markdownText, { breaks: true }); // Use `window.marked.parse` for newer versions
    preview.innerHTML = html; // Update the preview section
    hljs.highlightAll(); // Highlight code blocks (if any)
});

// Clear Markdown input and preview
clearButton.addEventListener('click', () => {
    markdownInput.value = ''; // Clear the textarea
    preview.innerHTML = ''; // Clear the preview section
});

// Toggle dark mode
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Toggle the dark-mode class
});