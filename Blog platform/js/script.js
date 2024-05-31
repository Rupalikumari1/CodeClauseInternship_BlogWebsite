document.addEventListener('DOMContentLoaded', () => {
    const commentButtons = document.querySelectorAll('.comment-btn');

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