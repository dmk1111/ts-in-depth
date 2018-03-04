showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ----------------------------------

interface IBook {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category
}

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular2
}

function getAllBooks(): IBook[] {
    let books: IBook[] = [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript
        },
        {
            id: 3,
            title: 'CSS Secrets',
            author: 'Lea Verou',
            available: true,
            category: Category.CSS
        },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.JavaScript
        }
    ];

    return books;
}

function logFirstAvailable(books: IBook[]): void {
    const numberOfBooks: number = books.length;
    let firstAvailable: string = "";

    for(let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log(`number of books: ${numberOfBooks}`);
    console.log(`first available book: ${firstAvailable}`);
}

function getBooktitlesByCategory(category: Category): Array<string> {
    const allBooks: IBook[] = getAllBooks();
    const titles: Array<string> = [];

    for(let currentBook of allBooks) {
        if (currentBook.category === category) {
            titles.push(currentBook.title);
        }
    }
    return titles;
}

function logBookTitles(titles: Array<string>): void {
    // for (let title of titles) {
    //     console.log(title);
    // }
    titles.forEach(title => console.log(title));
}

function getBookByID(id: number): IBook {
    const allBooks = getAllBooks();
    return allBooks.find(book => book.id === id);
}
// ----------------------------------
// Task 01

// logFirstAvailable(getAllBooks());

// ----------------------------------
// Task 2

// logBookTitles(getBooktitlesByCategory(Category.JavaScript));
// ----------------------------------
// Task 3

// const jsBooks: Array<string> = getBooktitlesByCategory(Category.JavaScript);
// jsBooks.forEach(title => console.log(title));
//
// console.log(getBookByID(3));
