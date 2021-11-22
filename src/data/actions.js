import axios from 'axios';
const ENDPOINT = 'https://api.itbook.store/1.0/';


export const getNewBooks = async() => {
    try {
        const response = await axios.get(`${ENDPOINT}new`);
        return await response.data.books;
    }catch(error){
        console.log(error);
    }
}

export const searchBooks = async(query) => { 
    try {
        const response = await axios.get(`${ENDPOINT}search/${query}`);
        return await response.data.books;
    }catch(error){
        console.log(error);
    }
}

export const getBook = async(id) => {  
    try {
        const response = await axios.get(`${ENDPOINT}books/${id}`);
        return await response.data;
    }catch(error){
        console.log(error);
    }
}
