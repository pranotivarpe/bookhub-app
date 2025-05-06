import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function DialogBox({ open, handleClose, bookSuggestions }) {
  if (!bookSuggestions || bookSuggestions.length === 0) {
    return null;
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle style={{ textAlign: "center", fontWeight: "bold" }}>
        Book Suggestions
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          {bookSuggestions.map((book, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div style={{ textAlign: "center" }}>
                <img
                  src={book.image}
                  alt={book.title}
                  style={{
                    maxWidth: "100%",
                    height: "200px",
                    objectFit: "contain",
                    marginBottom: "10px",
                  }}
                />
                <Typography variant="h6">{book.title}</Typography>
                {book.authors && (
                  <Typography variant="subtitle2">
                    Author: {book.authors.join(", ")}
                  </Typography>
                )}

                <Typography variant="body2" style={{ marginBottom: "8px" }}>
                  {book.description.slice(0, 100)}...
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
