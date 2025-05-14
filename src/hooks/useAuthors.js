import {useCallback, useEffect, useState} from "react";
import authorsRepository from "../repository/authorsRepository.js";



const useAuthors = () =>{
    const [authors, setAuthors] = useState([]);

    const fetchAuthors = useCallback (() => {
        authorsRepository.findAll()
            .then((response) => {
                setAuthors(response.data);
            })
            .catch((error) => console.log(error))
    }, []);
    const onAdd = useCallback((data) => {
        authorsRepository.add(data)
            .then(() => {
                console.log("Successfully added a new author.");
                fetchAuthors();
            }).catch((error) => console.log(error));
    }, [fetchAuthors]);

    const onEdit = useCallback( (id,data) => {
        authorsRepository.edit(id,data)
            .then(() => {
                console.log(`Successfully edited a author with ID ${id}`)
                fetchAuthors();
            }).catch( (error) => console.log(error));
    },[fetchAuthors]);

    const onDelete = useCallback( (id) => {
        authorsRepository.delete(id)
            .then(() => {
                console.log(`Successfully deleted a author with ID ${id}`);
                fetchAuthors();
            }).catch( (error) => console.log(error));
    }, [fetchAuthors]);

    useEffect(() => {
        fetchAuthors()
    }, [fetchAuthors]);

    return{authors, onEdit: onEdit, onAdd: onAdd, onDelete: onDelete};
}
export default  useAuthors;