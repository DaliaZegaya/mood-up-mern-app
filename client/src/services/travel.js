const getAllTravelPlaces = async () => {
    try {
        return await fetch("https://travel-app-server.onrender.com/places")
        .then(res=>res.json())
    }
    catch (error) {
        console.log(error);
    }
}
export default getAllTravelPlaces;