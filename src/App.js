 import React, { useState, useEffect } from "react";

 function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");


  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4e810f4fd27a76f2216762382edf4438`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "september",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search.."
            className="search-bar"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <>
            {" "}
            <div className="location-box">
              <div className="location">{search}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{city.temp}°c</div>
              <div className="weather">Min:{city.temp_min}°c | Max:{city.temp_max}°c</div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
// Alt + 248 on numberpad for :- °c