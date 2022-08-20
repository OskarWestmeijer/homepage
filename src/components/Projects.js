import React from "react";

export default function Projects() {

    return (
        <div className="container-sm mt-3">
            <div className="row">
                <div className="col-md-1 col-sm-12"></div>
                <div className="col-md-9 col-sm-12">
                    <h2>Projects</h2>
                    <p>By pursuing hobby projects, I am enhancing my developer knowledge. You can track my repositories on Github.</p>
                    <h4>Server</h4>
                    <p>Managing a server is the basis for hosting applications. This server is running with a linux distribution. My services are dockerized. Over the years I have had many different machines.
                        My understanding about securing the setup, increased on each approach. SSL certificates and various other techniques accomplish the job.
                        From past experiences I concluded, that the internet truly is a wild west. :)</p>

                    <h4>Homepage <a href="https://github.com/OskarWestmeijer/homepage"><img className="bi" width="24" height="24" src="images/github.svg" alt="Github logo" /></a>
                    </h4>
                    <p>This website is built with ReactJs. I had quite some fun working with the framework. Once the groundwork is done, it can be expanded easily.
                        The concepts are relatively straight forward. Excellent documentation, a lively plugin system and the big community make this a good choice.
                    </p>

                    <h4>Weather-Api <a href="https://github.com/OskarWestmeijer/weather-api"><img className="bi" width="24" height="24" src="images/github.svg" alt="Github logo" /> </a>
                        <a href="https://oskar-westmeijer.com/weather"><img className="bi" width="24" height="24" src="images/weather_api.png" alt="Weather-Api logo" /></a>
                    </h4>
                    <p>This app requests the OpenWeatherApi every minute for current weather data. It only fetches information for my home town Luebeck (Germany).
                        The setup contains a postgres database, where the data is stored after each request. Everything is dockerized. I am using the free plan from OpenWeatherApi, only 60 possible requests per hour.
                        I display this data in a ReactJs UI. Furthermore the API is directly accessable.
                    </p>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
}