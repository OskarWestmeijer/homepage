import React from "react";

export default function Projects() {

    return (
        <section>
            <div className="container pt-5 mt-4">
                <h2 className="text-center display-6">Projects</h2>

                <div className="row mt-3">

                    <div className="col-lg-2 col-sm-12" />

                    <div className="col-lg-4 col-sm-12">
                        <div className="card">
                            <h5 className="card-header text-center ci-bg">Weather-Api</h5>
                            <div className="card-body">
                                <p className="card-text">
                                    This app requests the OpenWeatherApi every minute for current weather data. It only fetches information for my home town Luebeck (Germany).
                                </p>
                                <p className="card-text">The app is written in Java (Spring Boot).
                                    The setup contains a Postgres database, where the data is stored after each request. Everything is dockerized.
                                    I display this data in a ReactJs UI with nice charts. Furthermore the API is directly accessable.
                                </p>
                            </div>
                            <div className="card-footer text-end">
                                <a href="https://github.com/OskarWestmeijer/weather-api" className="btn ci-bg">Github <img className="bi" width="24" height="24" src="images/github.svg" alt="Github logo" /></a>
                                <a href="https://oskar-westmeijer.com/weather/ui/" className="ms-2 btn ci-bg">Live Demo <img className="bi" width="24" height="24" src="images/weather_api.png" alt="Weather-Api logo" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12">
                        <div className="card">
                            <h5 className="card-header text-center ci-bg">Homepage</h5>
                            <div className="card-body">
                                <p className="card-text">
                                    This website is built with ReactJs. I had quite some fun working with the framework. Once the groundwork is done, it can be expanded easily.
                                </p>
                                <p className="card-text">
                                    The concepts are straight forward. Excellent documentation, a lively plugin system and the big community make this a good choice.
                                </p>
                            </div>
                            <div className="card-footer text-end">
                                <a href="https://github.com/OskarWestmeijer/homepage" className="btn ci-bg">Github <img className="bi" width="24" height="24" src="images/github.svg" alt="Github logo" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2  col-sm-12" />
                </div>

                <div className="row mt-3">
                    <div className="col-lg-2 col-sm-12" />

                    <div className="col-lg-4 col-sm-12">

                        <div className="card">
                            <h5 className="card-header text-center ci-bg">Server</h5>
                            <div className="card-body">
                                <p className="card-text">
                                    Managing a server is the basis for hosting applications. This server is running on a Linux distribution. All hosted services are dockerized.
                                </p>
                                <p className="card-text">
                                    Over the years I have had many different machines.
                                    My understanding about securing the setup, increased on each approach. SSL certificates and various other techniques accomplish the job.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-12" />
                    </div>
                </div>

            </div>
        </section >
    );
}