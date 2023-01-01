const BASE_URL = "https://mood-up-server.onrender.com"

const getAllQuestions = async () => {
    try {
        return await fetch(`${BASE_URL}/api/questions`)
        .then(res=>res.json())
    }
    catch (error) {
        console.log(error);
    }
}
export default getAllQuestions;