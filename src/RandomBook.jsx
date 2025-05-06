import * as React from "react";
import DialogBox from "./DialogBox";
import Button from "@mui/material/Button";

const googleBooksUrl = "https://www.googleapis.com/books/v1/volumes?q=the";

export default function BookSearch() {
  const [open, setOpen] = React.useState(false);
  const [bookSuggestions, setBookSuggestions] = React.useState([]);

  const handleSuggestBooks = async () => {
    try {
      const response = await fetch(googleBooksUrl);
      if (response.ok) {
        const data = await response.json();
        const books = data.items;

        if (books && books.length > 0) {
          // Shuffle books and take first 5
          const shuffled = books.sort(() => 0.5 - Math.random());
          const selected = shuffled.slice(0, 5).map((book) => ({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors || ["Unknown Author"],
            description:
              book.volumeInfo.description || "No description available",
            image: book.volumeInfo.imageLinks?.thumbnail || "",
          }));

          setBookSuggestions(selected);
          setOpen(true);
        } else {
          console.error("No books found in response");
        }
      } else {
        console.error("Failed to fetch books from Google Books API");
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <Button
        variant="contained"
        onClick={handleSuggestBooks}
        sx={{
          backgroundColor: "#65491B",
          color: "white",
          fontWeight: "bold",
          borderRadius: "8px",
          padding: "10px 24px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "#B87333",
          },
        }}
      >
        BOOK SUGGESTIONS
      </Button>

      {/* Pass an array of book suggestions to DialogBox */}
      {bookSuggestions.length > 0 && (
        <DialogBox
          open={open}
          handleClose={handleClose}
          bookSuggestions={bookSuggestions}
        />
      )}
    </div>
  );
}
