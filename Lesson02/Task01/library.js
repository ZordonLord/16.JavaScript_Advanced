class Library {
    #books = [];

    constructor(initialBooks = []) {
        if (new Set(initialBooks).size !== initialBooks.length) {
            throw new Error("Начальный список книг содержит дубликаты!");
        }
        this.#books = [...initialBooks];
    }

    get allBooks() {
        return [...this.#books];
    }

    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error(`Книга "${title}" уже есть в библиотеке!`);
        }
        this.#books.push(title);
    }

    removeBook(title) {
        const index = this.#books.indexOf(title);
        if (index === -1) {
            throw new Error(`Книга "${title}" не найдена в библиотеке!`);
        }
        this.#books.splice(index, 1);
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

try {
    const library = new Library(["Мастер и Маргарита", "Мёртвые души", "Преступление и наказание"]);
    console.log(library.allBooks);

    library.addBook("Война и мир");
    console.log(library.allBooks);

    console.log(library.hasBook("Мёртвые души"));
    library.removeBook("Мёртвые души");
    console.log(library.hasBook("Мёртвые души"));

    console.log(library.allBooks);
} catch (error) {
    console.error(error.message);
}
