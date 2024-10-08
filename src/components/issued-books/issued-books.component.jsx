import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../context/users.context";
import { BooksContext } from "../../context/books.context";
import { createUBHistory, listUBHistory, updateUBHistory } from "../../lib/usershistory.appwrite";

const IssuedBooks = () => {
  const { updateThisUser, clickedUser, setclickedUser } = useContext(UsersContext);
  const { clickedBook, setclickedBook } = useContext(BooksContext);
  const [books, setBooks] = useState([]);
  const [historyId, sethistoryId] = useState();

  useEffect(() => {
    historyId && updateUBHistory(historyId);
    sethistoryId(null);
  }, [historyId]);

  useEffect(() => {
    setBooks(clickedUser.book);
  }, [clickedUser]);

  if(clickedBook){
    if (clickedUser && clickedUser.book && clickedBook.s_no) {
      const existingBook = clickedUser.book.find(b => b.s_no === clickedBook.s_no);
      if (!existingBook) {
        clickedUser.book.push(clickedBook);
        updateThisUser(clickedUser);
        clickedBook.$id && createUBHistory(clickedUser.$id, clickedBook.$id);
      }
    }
  }

  const getHistoryId = (user_rno, book_sno) => {
    listUBHistory().then((result) => {
      const history = result.documents.find((h) => h.user.roll_no === user_rno && h.issued_book.s_no === book_sno);
      sethistoryId(history ? history.$id : '');
    });
  }

  const handleDelete = async (book) => {
    const updatedBooks = books.filter((b) => b.s_no !== book.s_no);
    setBooks(updatedBooks);
    const updatedUser = { ...clickedUser, book: updatedBooks };
    updateThisUser(updatedUser);
    setclickedUser(updatedUser);
    setclickedBook(null);
    getHistoryId(clickedUser.roll_no, book.s_no);
  };

  return (
    <>
      <div className="flex flex-col mb-4">
        <p className="text-xl">Issued Books</p>
        <ul className="text-lg">
          {books && books.map((book) => (
            <li key={book.s_no}>
              {book.title}
              <button
                className="ml-10 text-red-500 hover:text-red-700"
                onClick={() => handleDelete(book)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default IssuedBooks;