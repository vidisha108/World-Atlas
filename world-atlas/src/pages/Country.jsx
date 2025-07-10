import { startTransition, useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/layout/CountryCard";

export const Country = () =>{
    const[isPending, stateTransition] =  useTransition();
    const[countries, setCountries] = useState([]);
    useEffect(() =>{ 
        startTransition(async () => {
        const res = await getCountryData();
        setCountries(res.data);
        });
    },[]);
    if(isPending) return <Loader />

    return (
        <section className="country-section">
            <ul className="grid grid-four-cols">
                {countries.map((curCountry, index) => {
                    return <CountryCard country = {curCountry} key={index} />
                })}
            </ul>
        </section>
    )
};