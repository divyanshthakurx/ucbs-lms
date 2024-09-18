import { useContext, useState, useEffect } from "react";
import { BooksHistoryContext } from '../../../context/bookshistory.context';
const UserBooksHistory = () => {
    const { listBookHistory } = useContext(BooksHistoryContext);
    const [BookHistory, setBookHistory] = useState();

    useEffect(() => {
        listBookHistory().then((data) => setBookHistory(data.documents));
    });

    return(
        <>
            <p className="mb-4">Books history:</p>
            <div className="flex justify-evenly border border-black rounded-md w-3/4 m-auto">
                <p>Book</p>
                <p>Author</p>
                <p>Stock</p>
                <p>Date</p>
            </div>
            {BookHistory && BookHistory.sort((a, b) => new Date(b.date) - new Date(a.date)).map((item) => {
                return(
                    <div key={item.$id} className="flex justify-evenly border border-black rounded-md w-3/4 m-auto mb-10">
                        <p>{item.added_book && item.added_book.title.slice(0,10) + (item.added_book.title.length > 10 ? '...' : '')}</p>
                        <p>{item.added_book && item.added_book.author.slice(0,10) + (item.added_book.author.length > 10 ? '...' : '')}</p>
                        <p>{item.added_book && item.added_book.stock}</p>
                        <p>{new Date(item.date).toLocaleDateString()}</p>
                    </div>
                )
            })}
        </>
    )
}

export default UserBooksHistory;