import React from "react";

export default function Experience() {
    return (
        <section>
            <div className="container pt-5 mt-4">
                <h2 className=" text-center display-6">Experience</h2>
                <div className="row">
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
                                    <li className="list-group-item">PostgreSQL</li>
                                    <li className="list-group-item">Docker</li>
                                    <li className="list-group-item">Kubernetes</li>
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
                                    <li className="list-group-item">CI / CD</li>
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
                                    <li className="list-group-item">UML (Sequence Diagram)</li>
                                    <li className="list-group-item">SCRUM</li>
                                    <li className="list-group-item">Teamwork!</li>
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
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-12" />
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-md-2 col-sm-12" />
                    <p className="col-md-8 mt-2">There were many more tools or languages I have worked with, for example regular web
                        development. This website is build with ReactJs.</p>
                    <div className="col-md-2 col-sm-12" />

                    <div className="col-md-2 col-sm-12" />
                    <div className="mb-5 col-md-8 col-sm-12">
                        <h5>Working with the stakeholders</h5>
                        <p>I like working with the stakeholders. It is fun to figure out requirements and understand the business processes.
                            In most projects we had great results pursuing an incremental development style. This means implementing small features every sprint and
                            continuously presenting them to the stakeholders. It feels fulfilling to develop stable and thought-out tooling for the users.</p>
                    </div>
                    <div className="mb-5 col-md-2 col-sm-12" />
                </div>
            </div >
        </section>
    );


}