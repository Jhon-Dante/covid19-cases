import React from "react";
import './CountryList.css';
import './Country.css';

const CountryList = ({stats}) => {
    return(
        <div className="countrylist">
            {stats.map(country => 
                <>
                    <div className="country">
                        <h1>{country.Country}</h1>
                        <img width="200" src={`https://cdn.countryflags.com/thumbs/${country.Country.toLowerCase()}/flag-400.png`} />
                        <div className="description">
                            <p>{`Active : ${country.Active}`}</p>
                            <p>{`Confirmed : ${country.Confirmed}`}</p>
                            <p>{`Deaths : ${country.Deaths}`}</p>
                            <p>{`Recovered : ${country.Recovered}`}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CountryList;