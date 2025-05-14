import {useEffect, useState} from "react";
import booksRepository from "../repository/booksRepository.js";

const useCategories = () =>{
    const [categories,setCategories] = useState([]);

    useEffect(() => {
        booksRepository
            .getCategories()
            .then((response) => {

                setCategories(response.data);
            })
            .catch((error) => console.log(error));
    }, []);
return categories;
}
export default useCategories;
