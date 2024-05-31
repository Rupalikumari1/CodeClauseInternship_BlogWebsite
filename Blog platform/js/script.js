document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('#categories li');
    const articles = document.querySelectorAll('article');
    const commentButtons = document.querySelectorAll('.comment-btn');

    // Filter articles by category
    categories.forEach(category => {
        category.addEventListener('click', () => {
            const selectedCategory = category.getAttribute('data-category');
            articles.forEach(article => {
                if (selectedCategory === 'all' || article.getAttribute('data-category') === selectedCategory) {
                    article.style.display = '';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });

    // Handle comment posting
    commentButtons.forEach(button => {
        button.addEventListener('click', () => {
            const commentInput = button.previousElementSibling;
            const commentText = commentInput.value;
            if (commentText.trim()) {
                const commentSection = button.closest('.comments-section').querySelector('.comments');
                const commentElement = document.createElement('p');
                commentElement.textContent = commentText;
                commentSection.appendChild(commentElement);
                commentInput.value = '';
            }
        });
    });
});