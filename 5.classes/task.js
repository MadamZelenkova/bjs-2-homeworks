class PrintEditionItem {
    #state;

    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.#state = 100;
      this.type = null;
    }

    fix() {
        if(this.#state === 100 || this.#state === 0) {
            return;
        }
        this.#state *= 1.5;  
    }


    set state(newState) {
        if(newState < 0) {
            this.#state = 0;
        } else if(newState > 100) {
            this.#state = 100
        } else {
          this.#state = newState;
        }
    }

    get state(){
        return this.#state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
        this.type = 'book';
      }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
          this.type = 'magazine';
        }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
        }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
        }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
        }
}


class Library {
    constructor(name, books) {
        this.name = 'name';
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);  
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        for (let i of this.books) {
            if(this.books[i].name === bookName) {
                const book = this.books[i];
                delete this.books[i];
                return book;
            }
            retutn null;
        }
    }
}  



