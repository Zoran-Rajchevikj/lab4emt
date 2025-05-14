import {useCallback, useEffect, useState} from "react";
import countryRepository from "../repository/countryRepository.js";


const useCountries = () =>{
    const [countries, setCountries] = useState([]);

    const fetchCountries = useCallback (() => {
        countryRepository.findAll()
            .then((response) => {
                setCountries(response.data);
            })
            .catch((error) => console.log(error))
    }, []);
    const onAdd = useCallback((data) => {
        countryRepository.add(data)
            .then(() => {
                console.log("Successfully added a new country.");
                fetchCountries();
        }).catch((error) => console.log(error));
    }, [fetchCountries]);

    const onEdit = useCallback( (id,data) => {
        countryRepository.edit(id,data)
            .then(() => {
                console.log(`Successfully edited a country with ID ${id}`)
                fetchCountries();
            }).catch( (error) => console.log(error));
    },[fetchCountries]);

    const onDelete = useCallback( (id) => {
        countryRepository.delete(id)
            .then(() => {
                console.log(`Successfully delete a country with ID ${id}`);
                fetchCountries();
            }).catch( (error) => console.log(error));
    }, [fetchCountries]);

    useEffect(() => {
        fetchCountries()
    }, [fetchCountries]);

    return{countries, onEdit: onEdit, onAdd: onAdd, onDelete: onDelete};
}
export default  useCountries;