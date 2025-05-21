import axiosInstance from "../axios/axios.jsx";

const countryRepository = {
    findAll: async () => {
        return await axiosInstance.get("/countries");
    },
};
export default countryRepository;