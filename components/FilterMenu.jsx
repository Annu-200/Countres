import React from 'react'

export default function FilterMenu({setQuery}) {
  return (
    <div className="filter-country">
    <select name="country" id="filter-by-relgion" onChange={(e)=> setQuery(e.target.value.toLowerCase())}>
        <option>Filter By Religon</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
</div>
  )
}
