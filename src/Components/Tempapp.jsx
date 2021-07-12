import React, { useEffect, useState } from 'react';
import LocationTemp from './LocationTemp';
import Waves from './Waves';
import InputField from './InputField';

const Tempapp = () =>{

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("pune");

    useEffect(()=>{
        const fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bbede7450e05ef105e7130a0f302fa57`
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    },[search])

    const inputEvent = (event) =>{
        setSearch(event.target.value);
    }

   return(
       <>
            <div className="box">
                <InputField
                    search={search}
                    input={inputEvent}
                />

            {!city ? (
                    <p className="error">No Data Found</p>
                ):(
                    <LocationTemp
                        search={search}
                        city={city}
                    />
                )
            }
                <Waves/>
            </div>
       </>
   )
}

export default Tempapp;