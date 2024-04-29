import axios from "axios";

export async function fetchData() {
    const url = 'https://660fae5c356b87a55c52079b.mockapi.io/product'
    try {
        const response = await axios.get(url);
        return response.data // Mengembalikan data yang diterima dari permintaan
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Dilempar kembali untuk penanganan di tempat lain
    }
}