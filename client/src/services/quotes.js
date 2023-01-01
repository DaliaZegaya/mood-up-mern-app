const BASE_URL = "https://mood-up-server.onrender.com"

const getAllQuotes = async () => {
    try {
        return await fetch(`${BASE_URL}/api/quotes`)
        .then(res=>res.json())
    }
    catch (error) {
        console.log(error);
    }
}
export default getAllQuotes;