import React from "react";

export default function Experience() {
    return (
        <section>
            <div className="container pt-5 mt-4">
                <h2 className=" text-center display-6">Experience</h2>
                <div className="mt-3 row">
                    <div className="col-md-2 col-sm-12" />
                    <div className="col-md-4 col-sm-12">
                        <div className="card ci-bg">
                            <div className="card-body text-center">
                                <div className="h2 mb-2">
                                    <i className="bi bi-stack-overflow"></i>
                                </div>
                                <h5 className="card-title mb-3">Stack</h5>
                                <ul className="list-group">
                                    <li className="list-group-item">Java</li>
                                    <li className="list-group-item">Spring Boot</li>
                                    <li className="list-group-item">Maven</li>
                                    <li className="list-group-item">ReactJs</li>
                                    <li className="list-group-item">Docker</li>
                                    <li className="list-group-item">PostgreSQL</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card  ci-bg">
                            <div className="card-body text-center">
                                <div className="h2 mb-2">
                                    <i className="bi bi-gear-fill"></i>
                                </div>
                                <h5 className="card-title mb-3">Tooling</h5>
                                <ul className="list-group">
                                    <li className="list-group-item">IntelliJ IDEA</li>
                                    <li className="list-group-item">Jira</li>
                                    <li className="list-group-item">Github</li>
                                    <li className="list-group-item">Metrics</li>
                                    <li className="list-group-item">Postman</li>
                                    <li className="list-group-item">Miro</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12" />
                </div>
                <div className="row mt-2">
                    <div className="col-md-2 col-sm-12" />
                    <div className="col-md-4 col-sm-12">
                        <div className="card ci-bg">
                            <div className="card-body text-center">
                                <div className="h2 mb-2">
                                    <i className="bi bi-people-fill"></i>
                                </div>
                                <h5 className="mt-1">Workstyle</h5>
                                <ul className="list-group">
                                    <li className="list-group-item">Clean and structured code</li>
                                    <li className="list-group-item">Unit and Integration testing</li>
                                    <li className="list-group-item">C4-Model documentation</li>
                                    <li className="list-group-item">SCRUM</li>
                                    <li className="list-group-item">Working with the stakeholders!</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card ci-bg">
                            <div className="card-body text-center">
                                <div className="h2 mb-2">
                                    <i className="bi bi-book-half"></i>
                                </div>
                                <h5 className="mt-1">Books</h5>
                                <ul className="list-group">
                                    <li className="list-group-item">Java Head First (2nd edition)</li>
                                    <li className="list-group-item">Clean Code & Clean Coder</li>
                                    <li className="list-group-item">Java by Comparison</li>
                                    <li className="list-group-item">A Philosophy of Software Design</li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-12" />
                        </div>
                    </div>
                </div>
            </div >
        </section>
    );


}