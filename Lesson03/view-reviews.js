const STORAGE_KEY = "productReviews";

document.addEventListener("DOMContentLoaded", () => {
    loadProductList();
});

function getReviews() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

function loadProductList() {
    const reviews = getReviews();
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    Object.keys(reviews).forEach(product => {
        const li = document.createElement("li");
        li.textContent = product;
        li.style.cursor = "pointer";
        li.onclick = () => showReviews(product);
        productList.appendChild(li);
    });
}

function showReviews(product) {
    const reviews = getReviews();
    const reviewContainer = document.getElementById("reviews");
    reviewContainer.innerHTML = "";

    if (reviews[product]) {
        reviews[product].forEach(review => {
            const div = document.createElement("div");
            div.classList.add("review");
            div.textContent = review.text;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Удалить";
            deleteButton.onclick = () => deleteReview(product, review.id);
            div.appendChild(deleteButton);

            reviewContainer.appendChild(div);
        });
    }
}

function deleteReview(product, reviewId) {
    const reviews = getReviews();
    reviews[product] = reviews[product].filter(review => review.id !== reviewId);

    if (reviews[product].length === 0) {
        delete reviews[product];
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    showReviews(product);
    loadProductList();
}
