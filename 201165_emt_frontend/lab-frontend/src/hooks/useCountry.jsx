import {useCallback, useEffect, useState} from "react";
import hostRepository from "../repo/hostRepository.jsx";
import countryRepository from "../repo/countryRepository.jsx";

const initalState = {
    "countries": [],
    "loading" : true,
};

const useCountry = () => {
    const [state, setState] = useState(initalState);

    const fetchCountries = useCallback(()=>{
        setState(initalState);
        countryRepository.findAll().then((response) => {
            setState({
                countries: response.data,
                loading: false,
            });
        }) .catch((error)=>console.log(error));
    }, []);


    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);

    return{...state}
}

export default useCountry;