import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel, MenuItem, Select,
    TextField
} from "@mui/material";


import useCategories from "../../../../hooks/useCategories.js";
import useAuthors from "../../../../hooks/useAuthors.js";


const EditBookDialog = ({open, onClose, book, onEdit}) => {
    const [formData, setFormData] = useState({
        "name": book.name,
        "category": book.category,
        "author": book.author,
        "availableCopies":book.availableCopies
    });
    const categories = useCategories();
    const authors = useAuthors();
    let r=0;
    r+=1
    console.log(authors+" "+r);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        onEdit(book.id, formData);
        setFormData(formData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Book</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel>Category</InputLabel>
                    <Select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        label="Category"
                        variant="outlined">
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {/*<FormControl fullWidth margin="dense">*/}
                {/*    <InputLabel>Author</InputLabel>*/}
                {/*    <Select*/}
                {/*        name="author"*/}
                {/*        value={formData.author}*/}
                {/*        onChange={handleChange}*/}
                {/*        label="Author"*/}
                {/*        variant="outlined">*/}
                {/*        {authors.map((author) => (*/}
                {/*            <MenuItem key={author.id} value={author.id}>{author.name}</MenuItem>*/}
                {/*        ))}*/}
                {/*    </Select>*/}
                {/*</FormControl>*/}
                <FormControl fullWidth margin="dense">
                    <InputLabel>Author</InputLabel>
                    <Select
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        label="Author"
                        variant="outlined">
                        {authors.length > 0 ? (
                            authors.map((author) => (
                                <MenuItem key={author.id} value={author.id}>
                                    {author.name}
                                </MenuItem>
                            ))
                        ) : (
                            <MenuItem disabled>No authors available</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <TextField
                    margin="dense"
                    label="AvailableCopies"
                    name="availableCopies"
                    type="number"
                    value={formData.availableCopies}
                    onChange={handleChange}
                    fullWidth
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="warning">Edit</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditBookDialog;
