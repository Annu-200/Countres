
import { useEffect, useState } from "react";
import countresData from "../countresData";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

export default function ConturesList({query}) {
 const [countriesData, setCountriesData] = useState([])
 const [count, setCount] = useState(0);
useEffect(() =>{
  fetch('https://restcountries.com/v3.1/all').then((res) => res.json())
  .then((data) => {
    setCountriesData(data)
})
}, [] );
  
if(countriesData.length === 0){
return  <CountriesListShimmer />

}
console.log(countriesData);
  return (
    <> 
    <div className="country-container">

      {countresData
        .filter((country) => 
        country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
        )
        .map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          );
        })}
    </div>
    </>
  );
}
