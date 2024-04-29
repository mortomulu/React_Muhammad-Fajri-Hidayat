import axios from "axios";

export async function postData(data){
    const url = 'https://660fae5c356b87a55c52079b.mockapi.io/product'
    try {
        const response = await axios.post(url, data);
        return response // Mengembalikan data yang diterima dari permintaan
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Dilempar kembali untuk penanganan di tempat lain
    }
}