const initialData = [
    { product: "Apple iPhone 13", reviews: [
            { id: "1", text: "Отличный телефон! Батарея держится долго." },
            { id: "2", text: "Камера супер, фото выглядят просто потрясающе." }
        ]},
    { product: "Samsung Galaxy Z Fold 3", reviews: [
            { id: "3", text: "Интересный дизайн, но дорогой." }
        ]},
    { product: "Sony PlayStation 5", reviews: [
            { id: "4", text: "Люблю играть на PS5, графика на высоте." }
        ]}
];

function loadInitialReviews() {
    const reviewContainer = document.getElementById("reviews");
    initialData.forEach(product => {
        product.reviews.forEach(review => {
            const div = document.createElement("div");
            div.classList.add("review");
            div.textContent = review.text;
            reviewContainer.appendChild(div);
        });
    });
}

function addReview() {
    const reviewInput = document.getElementById("review").value.trim();
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";

    try {
        if (reviewInput.length < 50 || reviewInput.length > 500) {
            throw new Error("Отзыв должен содержать от 50 до 500 символов.");
        }

        const reviewContainer = document.getElementById("reviews");
        const newReview = document.createElement("div");
        newReview.classList.add("review");
        newReview.textContent = reviewInput;
        reviewContainer.appendChild(newReview);

        document.getElementById("review").value = "";
    } catch (error) {
        errorMessage.textContent = error.message;
    }
}

window.onload = loadInitialReviews;