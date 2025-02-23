const STORAGE_KEY = "productReviews";

document.getElementById("review-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const productName = document.getElementById("product-name").value;
    const reviewText = document.getElementById("review-text").value;

    if (!productName || !reviewText) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    const reviews = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

    const reviewId = new Date().toISOString();

    if (!reviews[productName]) {
        reviews[productName] = [];
    }

    reviews[productName].push({
        id: reviewId,
        text: reviewText
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));

    alert("Отзыв добавлен!");
    document.getElementById("review-form").reset();
});
