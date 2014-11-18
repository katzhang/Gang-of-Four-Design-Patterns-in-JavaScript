/*
Aims to minimize the use of memory in an application by sharing as much data as possible with related objects
Two ways in which the Flyweight pattern can be applied. 
1. data-layer: share data between large quantities of similar objects stored in memory
2. DOM-layer: used as a central event-manager to avoid attaching event handlers
*/

//Implement a system to manage all of the books in a library.

//Initial version works fine for small collections of books
var Book = function( id, title, author, genre, pageCount,publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate,availability ){
 
   this.id = id;
   this.title = title;
   this.author = author;
   this.genre = genre;
   this.pageCount = pageCount;
   this.publisherID = publisherID;
   this.ISBN = ISBN;
   this.checkoutDate = checkoutDate;
   this.checkoutMember = checkoutMember;
   this.dueReturnDate = dueReturnDate;
   this.availability = availability;
 
};
 
Book.prototype = {
 
  getTitle: function () {
     return this.title;
  },
 
  getAuthor: function () {
     return this.author;
  },
 
  getISBN: function (){
     return this.ISBN;
  },
 
  // For brevity, other getters are not shown
  updateCheckoutStatus: function( bookID, newStatus, checkoutDate , checkoutMember, newReturnDate ){
 
     this.id  = bookID;
     this.availability = newStatus;
     this.checkoutDate = checkoutDate;
     this.checkoutMember = checkoutMember;
     this.dueReturnDate = newReturnDate;
 
  },
 
  extendCheckoutPeriod: function( bookID, newReturnDate ){
 
      this.id =  bookID;
      this.dueReturnDate = newReturnDate;
 
  },
 
  isPastDue: function(bookID){
 
     var currentDate = new Date();
     return currentDate.getTime() > Date.parse( this.dueReturnDate );
 
   }
};

//Intrinsic states: books' title, author, .etc
//Extrinsic states: books' checkout data
var Book = function ( title, author, genre, pageCount, publisherID, ISBN ) {
 
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;
 
};

// Book Factory singleton: make sure we only create a single copy of each unique intrinsic piece of data
var BookFactory = (function () {
  var existingBooks = {}, existingBook;
 
  return {
    createBook: function ( title, author, genre, pageCount, publisherID, ISBN ) {
 
      // Find out if a particular book meta-data combination has been created before
      // !! or (bang bang) forces a boolean to be returned
      existingBook = existingBooks[ISBN];
      if ( !!existingBook ) {
        return existingBook;
      } else {
 
        // if not, let's create a new instance of the book and store it
        var book = new Book( title, author, genre, pageCount, publisherID, ISBN );
        existingBooks[ISBN] = book;
        return book;
 
      }
    }
  };
 
});

/*
all of the data that's been extracted from the Book class is now being stored in an attribute of the BookManager singleton 
(BookDatabase) - something considerably more efficient than the large number of objects we were previously using. 
Methods related to book checkouts are also now based here as they deal with data that's extrinsic rather than intrinsic.
*/

// BookRecordManager singleton
var BookRecordManager = (function () {
 
  var bookRecordDatabase = {};
 
  return {
    // add a new book into the library system
    addBookRecord: function ( id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability ) {
 
      var book = bookFactory.createBook( title, author, genre, pageCount, publisherID, ISBN );
 
      bookRecordDatabase[id] = {
        checkoutMember: checkoutMember,
        checkoutDate: checkoutDate,
        dueReturnDate: dueReturnDate,
        availability: availability,
        book: book
      };
    },
    updateCheckoutStatus: function ( bookID, newStatus, checkoutDate, checkoutMember, newReturnDate ) {
 
      var record = bookRecordDatabase[bookID];
      record.availability = newStatus;
      record.checkoutDate = checkoutDate;
      record.checkoutMember = checkoutMember;
      record.dueReturnDate = newReturnDate;
    },
 
    extendCheckoutPeriod: function ( bookID, newReturnDate ) {
      bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
    },
 
    isPastDue: function ( bookID ) {
      var currentDate = new Date();
      return currentDate.getTime() > Date.parse( bookRecordDatabase[bookID].dueReturnDate );
    }
  };
 
})();


















