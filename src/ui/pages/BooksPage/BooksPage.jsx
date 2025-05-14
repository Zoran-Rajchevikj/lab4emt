
import {useState} from "react";

import {Box, Button} from "@mui/material";


import useBooks from "../../../hooks/useBooks.js";
import BooksGrid from "../../components/books/BooksGrid/BooksGrid.jsx";
import AddBookDialog from "../../components/books/AddBookDialog/AddBookDialog.jsx";


const BooksPage = () => {
    const {books , onAdd, onEdit, onDelete} = useBooks();
    const [addBookDialogOpen,setAddBookDialogOpen]= useState(false);

    return(
        <>
            <Box className="author-box">
                <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                    <Button variant="contained" color="primary" onClick={() => setAddBookDialogOpen(true)}>
                        Add Book
                    </Button>
                </Box>
                <BooksGrid books={books} onEdit={onEdit} onDelete={onDelete}/>
            </Box>
            <AddBookDialog open={addBookDialogOpen}
                             onClose={() => setAddBookDialogOpen(false)}
                             onAdd={onAdd}/>
        </>
    )

}
export default BooksPage;