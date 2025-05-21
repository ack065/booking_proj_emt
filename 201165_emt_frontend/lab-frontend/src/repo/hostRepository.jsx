import axiosInstance from "../axios/axios.jsx";

const hostRepository = {
    findAll: async () => {
        return await axiosInstance.get("/hosts");
    },
    add: async (data) => {
        return await axiosInstance.post("/hosts/add")
    }
};
export default hostRepository;