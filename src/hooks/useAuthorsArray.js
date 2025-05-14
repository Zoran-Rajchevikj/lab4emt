import {useEffect, useState} from "react";

import authorsRepository from "../repository/authorsRepository.js";


const useAuthorsArray = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        authorsRepository
            .findAll()
            .then((response) => {
                setAuthors(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return authors;
};

export default useAuthorsArray;
