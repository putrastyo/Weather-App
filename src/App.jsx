// * API_URL: https://api.openweathermap.org/data/2.5/weather?q=North&units=metric&appid=edb12a176284c36e70681903d9c369a7

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import SearchForm from "./components/SearchForm";
import Container from "./components/Container";
import moment from "moment/moment";
import NotFound from "./components/NotFound";

const App = () => {
  const [search, setSearch] = useState("");
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("");
  const [msg, setMsg] = useState(null);

  const fetchData = async () => {
    try {
      const apiKey = "edb12a176284c36e70681903d9c369a7";
      const q = search == "" ? "jakarta" : search;
      const response = await axios.get(
        `weather?q=${q}&units=metric&appid=${apiKey}`
      );
      const data = response.data;
      setMsg(null);
      setTemp(data.main.temp);
      setWeather(data.weather[0].main);
      setHumidity(data.main.humidity);
      setWindSpeed(data.wind.speed);
      setCity(data.name);
      setIcon(
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );
    } catch (error) {
      console.log("Error:", error.response.data);
      setMsg(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  const current = moment().format("MMMM D");

  return (
    <div>
      <div className="h-dvh flex items-center justify-center">
        <Container>
          <SearchForm
            search={search}
            setSearch={setSearch}
            handleSubmit={handleSubmit}
          />
          {!msg ? (
            <div className="text-white">
              <div className="text-center mb-20">
                <h3 className="text-xl font-bold text-center">{weather}</h3>
                <h5 className="text-center">{city}</h5>
                <img src={icon} alt="weather icon" className="mx-auto" />
                <h1 className="text-4xl font-bold">{temp}&#176;c</h1>
              </div>
              <h4 className="text-2xl font-bold mb-5 text-center">{current}</h4>
              <div className="flex justify-center">
                <div className="pr-4">
                  <p className="font-medium">Humidity</p>
                  <h5 className="text-xl">{humidity}%</h5>
                </div>
                <div className="border-l px-4">
                  <p className="font-medium">Wind Speed</p>
                  <h5 className="text-xl">{windSpeed} km/h</h5>
                </div>
              </div>
              <a
                href="https://instagram.com/putrastyo_"
                target="_blank"
                className="text-center text-white/50 absolute bottom-10 inset-x-0"
              >
                <span className="text-xs">made by</span>
                <br />
                <span className="text-sm">@putrastyo_</span>
              </a>
            </div>
          ) : (
            <NotFound msg={msg} />
          )}
        </Container>
      </div>
    </div>
  );
};

export default App;
