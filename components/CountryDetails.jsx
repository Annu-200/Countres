import React, { useEffect, useState } from 'react'
import Search from './Search'
import CountryDetails from './countyDetail.css'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ConturesCardShimmer from './ConturesCardShimmer';
export default function CountryDetails() {
    
    const [notfound, setnotFound] = useState(false);
    const params = useParams()
    const countryName = params.country;   
      
    const [countryData , setCountryData] = useState([])
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then((res)=>res.json())
        .then(([data])=>{
        console.log(data);
             setCountryData({
             name: data.name.common,
             nativeName: Object.values(data.name.nativeName)[0].common,
             population:data.population.toLocaleString('en-IN'),
             region: data.region,
             subregion:data.subregion,
             capitial:data.capital,
             tld:data.tld,
             flag:data.flags.svg,
             language:Object.values(data.languages).join(', '),
             currence: Object.values(data.currencies)
             .map((currency) => currency.name).join(', '),
             borders: [],

             });
           if(!data.borders){
            data.borders = [];
           }
         Promise.all(data.borders.map((border) => {
          return  fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((resp)=> resp.json())
            .then(([borderCountryData]) =>  borderCountryData.name.common )
         })).then((borders) => {
            console.log(borders)
            setCountryData((prevState)=> ({ ...prevState,borders }))
         })
        }).catch((err) => {
            setnotFound(true);
        });
    }, [countryName] )


    if(notfound ){
        return <h1 style={{textAlign: 'center'}}> Country not Found</h1>
      }
      if(countryData.length === 0){
        return   <ConturesCardShimmer />
      }

    return (
    countryData && (
    <>
    <main>
  <div className="main-container-country-details">
      <span className="back-btn"onClick={() => history.back()} ><i className="fa-solid fa-arrow-left"></i>&nbsp; Back </span>
  <div className="country-details">
      <img src={countryData.flag} alt="" />
     <div className="detail-text-container">
      <h2>{countryData.name}</h2>
      <div className="details-text">
          <p><b>Native Name</b> : <span className="native-name">{countryData.nativeName}</span></p>
          <p><b>Population</b> : <span className="population">{countryData.population}</span></p>
          <p><b>Region</b> : <span className="religon">{countryData.region}</span></p>
          <p><b>sub-Region</b> : <span className="sub-relgion">{countryData.subregion}</span></p>
          <p><b>Capitial</b> : <span className="capital">{countryData.capitial}</span></p>

          <p><b>Top-level Domein</b> : <span className="domein">{countryData.tld}</span></p>
          <p><b>currencie</b> : <span className="currencie">{countryData.currence}</span></p>
          <p><b>Languages</b> : <span className="lang">{countryData.language}</span></p>
      </div>
            { countryData.borders.length !== 0 &&  <div className="border-country">
                    <b>Border Countries</b>:    
                     {
                         countryData.borders.map((border) => <Link key={border} to={`/${border}`}> {border} </Link>)
                     }
                </div>}
     </div>
  </div>
  </div>
   </main>
     </> 
    )
)
}
