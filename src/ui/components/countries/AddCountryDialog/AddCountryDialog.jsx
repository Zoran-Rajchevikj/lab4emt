import {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";


const initialFormData = {
    name:"",
    continent:""
};

const AddCountryDialog = ({open,onClose,onAdd}) => {
    const  [formData,setFormData] = useState(initialFormData);

    const handleChange = (event) =>{
        const {name,value} = event.target;
        setFormData({...formData,[name]:value});
    }
    const handleSubmit = () =>{
        onAdd(formData);
        setFormData(initialFormData)
        onClose();
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Country</DialogTitle>
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
                    name="continent"
                    label="Continent"
                    value={formData.continent}
                    onChange={handleChange}
                    fullWidth
               />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">Add</Button>
            </DialogActions>
        </Dialog>
    )
}
export default AddCountryDialog;