import React, { useState } from 'react';
import Search  from "./Search";  
import ConturesList from "./ConturesList";
import FilterMenu from "./FilterMenu";
import React, { useState } from "react";

export default function Home() {
  const [query,setQuery] = useState('');

  return (
    <>
   <main>
   <div className="search-container">
        <Search setQuery={setQuery} />
        <FilterMenu setQuery={setQuery} />
   </div>
    <ConturesList query={query} />
   </main>
   </>
  )
}
