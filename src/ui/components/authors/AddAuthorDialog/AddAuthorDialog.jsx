import {useState} from "react";
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

import useCountriesArray from "../../../../hooks/useCountriesArray.js";


const initialFormData = {
    name: "",
    surname: "",
    countryId: ""
};

const AddAuthorDialog = ({open, onClose, onAdd}) => {
    const [formData, setFormData] = useState(initialFormData);
    const countries = useCountriesArray();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }
    const handleSubmit = () => {
        console.log("Form data being sent:", formData);
        onAdd(formData);
        setFormData(initialFormData)
        onClose();
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Author</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="surname"
                    label="Surname"
                    value={formData.surname}
                    onChange={handleChange}
                    fullWidth
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel>Country</InputLabel>
                    <Select
                        name="countryId"
                        value={formData.countryId}
                        onChange={handleChange}
                        label="Country"
                        variant="outlined">
                        {countries.map((country) => (
                            <MenuItem key={country.id} value={country.id}>{country.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">Add</Button>
            </DialogActions>
        </Dialog>
    )
}
export default AddAuthorDialog;