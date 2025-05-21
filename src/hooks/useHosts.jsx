import {useCallback, useEffect, useState} from "react";
import hostRepository from "../repo/hostRepository.jsx";

const initalState = {
    "hosts": [],
    "loading" : true,
};

const useHosts = () => {
    const [state, setState] = useState(initalState);

    const fetchHosts = useCallback(()=>{
        setState(initalState);
        hostRepository.findAll().then((response) => {
            setState({
                hosts: response.data,
                loading: false,
            });
        }) .catch((error)=>console.log(error));
    }, []);

    const onAdd = useCallback((data) => {
        hostRepository
            .add(data)
            .then(() => {
                console.log("Successfully added a new host.");
                fetchHosts();
            })
            .catch((error) => console.log(error));
    }, [fetchHosts]);
    const onEdit = useCallback((id,data) => {
        hostRepository
            .edit(id,data)
            .then(() => {
                console.log(`Successfully changed host ${id}.`);
                fetchHosts();
            })
            .catch((error) => console.log(error));
    }, [fetchHosts]);
    const onDelete = useCallback((id) => {
        hostRepository
            .delete(id)
            .then(() => {
                console.log(`Successfully deleted host ${id}`);
                fetchHosts();
            })
            .catch((error) => console.log(error));
    }, [fetchHosts]);


    useEffect(() => {
        fetchHosts();
    }, [fetchHosts]);

    return{...state, onAdd: onAdd, onDelete: onDelete, onEdit: onEdit}
}

export default useHosts;