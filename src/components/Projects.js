import React from "react";

export default function Projects() {

    return (
        <section>
            <div className="container pt-5 mt-4">
                <div className="row">
                    <div className="col-lg-2 col-sm-12"></div>
                    <div className="col-lg-8 col-sm-12">
                        <h2 className="text-center display-6">Projects</h2>
                        <h5>Weather-Api <a href="https://github.com/OskarWestmeijer/weather-api"><img className="bi" width="24" height="24" src="images/github.svg" alt="Github logo" /> </a>
                            <a href="https://oskar-westmeijer.com/weather/ui/"><img className="bi" width="24" height="24" src="images/weather_api.png" alt="Weather-Api logo" /></a>
                        </h5>
                        <p>This app requests the OpenWeatherApi every minute for current weather data. It only fetches information for my home town Luebeck (Germany).
                            The setup contains a postgres database, where the data is stored after each request. Everything is dockerized. I am using the free plan from OpenWeatherApi, only 60 possible requests per hour.
                            I display this data in a ReactJs UI with nice charts. Furthermore the API is directly accessable.
                        </p>
                        <h5>Homepage <a href="https://github.com/OskarWestmeijer/homepage"><img className="bi" width="24" height="24" src="images/github.svg" alt="Github logo" /></a>
                        </h5>
                        <p>This website is built with ReactJs. I had quite some fun working with the framework. Once the groundwork is done, it can be expanded easily.
                            The concepts are relatively straight forward. Excellent documentation, a lively plugin system and the big community make this a good choice.
                        </p>
                        <h5>Server</h5>
                        <p>Managing a server is the basis for hosting applications. This server is running with a linux distribution. My services are dockerized. Over the years I have had many different machines.
                            My understanding about securing the setup, increased on each approach. SSL certificates and various other techniques accomplish the job.
                            From past experiences I concluded, that the internet truly is a wild west. :)</p>


                    </div>
                    <div className="col-lg-2  col-sm-12" />
                </div>
            </div>
        </section>
    );
}