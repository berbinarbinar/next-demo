import { createContext, useContext, useState } from "react";

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState("Harpot 7 ");
  const value = { books, setBooks };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

const useBooks = () => useContext(BookContext);

export { BookContext, BookProvider, useBooks };
