import {useOutletContext} from 'react-router-dom';
import ShowBook from "../Books/book-inventory/book-inventory.component";

const UserIssuedBooks = () => {
    const [curUser] = useOutletContext();
    return (
        <>
            {/* main body */}
            <main className="pb-4 px-4 md:ml-64 h-full pt-20">
                <div className="mb-4 h-full">

                    <div>
                        <div className="py-[2rem]">
                            <div className="px-[2rem]">
                                <div>
                                    <h1 className="text-4xl font-bold">Issued Books.</h1>
                                </div>                  
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="px-[2rem] md:px-0 lg:px-[2rem]">
                                                
                                <div className="my-4">
                                    <div className="w-full grid grid-cols-1 justify-items-center content-center gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5">
                                    {curUser ? (curUser.book ? curUser.book.map((book) => (
                                    <ShowBook key={book.s_no} book_item={book}></ShowBook>
                                    )) : <p>No books issued</p>) : <p>Loading...</p>}
                                    </div> 
                                </div>
            
                            </div>
                        </div>
                    </div>
                
                </div>

            </main>

        </>
    );
};

export default UserIssuedBooks;