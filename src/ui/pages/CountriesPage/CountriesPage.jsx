import useCountries from "../../../hooks/useCountries.js";
import {useState} from "react";
import CountriesGrid from "../../components/countries/CountriesGrid/CountriesGrid.jsx";
import AddCountryDialog from "../../components/countries/AddCountryDialog/AddCountryDialog.jsx";
import {Box, Button} from "@mui/material";


const CountriesPage = () => {
    const {countries , onAdd, onEdit, onDelete} = useCountries();
    const [addCountryProductDialogOpen,setAddCountryDialogOpen]= useState(false);

    return(
        <>
        <Box className="country-box">
            <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                <Button variant="contained" color="primary" onClick={() => setAddCountryDialogOpen(true)}>
                    Add Country
                </Button>
            </Box>
            <CountriesGrid countries={countries} onEdit={onEdit} onDelete={onDelete}/>
        </Box>
            <AddCountryDialog open={addCountryProductDialogOpen}
            onClose={() => setAddCountryDialogOpen(false)}
            onAdd={onAdd}/>
        </>
    )

}
export default CountriesPage;