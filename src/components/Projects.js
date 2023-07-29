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
                                    This Api provides Weather data for predefined locations. The data is harvested every minute
                                    from https://openweathermap.org/ and stored in a database.

                                    It serves as a personal hobby project. The goal is to investigate and practice Api-design with Spring-Boot.
                                    The OpenApi specification is documented with Redoc.

                                    In addition, a ReactJs frontend is available. It displays the weather data in charts over
                                    time.

                                    This project has no commercial intentions and is free to access for everyone.
                                </p>
                            </div>
                            <div className="card-footer text-end">
                                <a href="https://github.com/OskarWestmeijer/weather-api" className="btn ci-bg">Github <img className="bi" width="24" height="24" src="images/github.svg" alt="Github logo" /></a>
                                <a href="https://ui.oskar-westmeijer.com" className="ms-2 btn ci-bg">UI Dashboard <img className="bi" width="24" height="24" src="images/weather_api.png" alt="Weather-Api logo" /></a>
                                <a href="https://api.oskar-westmeijer.com" className="ms-2 btn ci-bg">OpenApi Docs <img className="bi" width="24" height="24" src="images/weather_api.png" alt="Weather-Api logo" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12">
                        <div className="card">
                            <h5 className="card-header text-center ci-bg">Homepage</h5>
                            <div className="card-body">
                                <p className="card-text">
                                    This website is built with ReactJs. It serves only static content.
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
                                    This server is running on a Linux distribution. All hosted services are dockerized.
                                    Docker networking, Nginx proxy routing, Certificates and connecting the hosts database to containers are some of the learnings I gained with this project.
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