import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Modal,Text } from "atomize";
import BookCard from "./components/BookCard";
import SearchBar from "./components/SearchBar";
import { getBook, getNewBooks } from "./data/actions";
import { bookState,loadingState } from "./data/recoil";
import BookInfo from "./components/BookInfo";
import Loader from "./components/util/Loader";
import Footer from "./components/util/Footer";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] =  useState(null);
  const [books, setBooks] = useRecoilState(bookState);
  const [loading, setLoading] = useRecoilState(loadingState);

  useEffect(async () => {
    setLoading(true);
    setBooks(await getNewBooks());
    setLoading(false);
  }, []);
  const onClose = () => {
    setIsOpen(false);
 };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        rounded="md"
        maxW="48rem"
      >
          <BookInfo {...selectedBook}/>
      </Modal>
      <SearchBar />
      <div className="card-holder">
        {loading ? (
          <Loader />
        ) : (
          
            books?.length===0 ? <Text textSize="title" textColor="black200" m="3rem" textAlign="center">No Results Found...</Text> :
            (
              books?.map((book) => <BookCard onMoreInfo={async()=>{setIsOpen(true);setSelectedBook(await getBook(book.isbn13))}} key={book.id} {...book} />)
            )
          
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
