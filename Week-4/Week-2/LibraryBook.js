/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise*/
      class Book{
        title;
        author;
        pages;
        isAvailable=true;
        constructor(title,author,pages){
            this.title=title;
            this.author=author;
            this.pages=pages;
            this.isAvailable=true;
        }
        borrow()
        {
            if(!this.isAvailable)
            {
                return "Book is already Borrowed ."
            }
            this.isAvailable = false;
             return "Book borrowed successfully.";
            
            }
            
            
        
        returnBook()
        {
           this.isAvailable = true
            return "Book returned successfully."
        }
        getInfo()
        {
            return `"the ${this.title} by ${this.author} (${this.pages})"`;
        }
        isLongBook(){
            if(this.pages>300){
                return true;
            }
            return false;
        }


      }




  /*1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.*/
      let book1=new Book("harry potter","the hobbit",1984,true)
      let book2=new Book("self motivation","tharunsign",900,true)
      let book3=new Book("hello","hi",200,true)
      let book4=new Book("bagavatham","vyasudu",2500,true)
      let book5=new Book("Ramayanam","Valmiki",1764,true)


  /*2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/
      console.log(book1.getInfo())
      console.log(book2.getInfo())
      console.log(book3.getInfo())
      console.log(book4.getInfo())
      
      console.log(book1.borrow())
      
      console.log(book3.borrow())
      console.log(book1.returnBook())
      let count=0
      if(book1.isLongBook())
      {
        count++
      }
       if(book2.isLongBook())
      {
        count++
      }
       if(book3.isLongBook())
      {
        count++
      }
       if(book4.isLongBook())
      {
        count++
      }
      if(book5.isLongBook())
      {
        count++
      }
      console.log("the number of books are",count)
      if(book1.isAvailable)
        console.log(`${book1.title } is available`)
    if(book2.isAvailable)
        console.log(`${book2.title } is available`)
    if(book3.isAvailable)
        console.log(`${book3.title } is available`)
    if(book4.isAvailable)
        console.log(`${book4.title } is available`)
    if(book5.isAvailable)
        console.log(`${book5.title } is available`)
    





