import React from "react";

export default function Experience() {
    return (
        <div className="container-sm mt-5">
            <h2 className="mb-3">Development experience</h2>
            <div className="row">
                <h4 className="mb-3">Technical</h4>
                <div className="col-md-3 col-sm-12 border">
                    <h5>Main Stack</h5>
                    <ul>
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>Maven</li>
                        <li>PostgreSQL</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-12 border">
                    <h5 className="mt-1">Tooling</h5>
                    <ul>
                        <li>IntelliJ IDEA</li>
                        <li>Jira</li>
                        <li>Github</li>
                        <li>Jenkins</li>
                        <li>Miro</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-12 border">
                    <h5 className="mt-1">Workstyle</h5>
                    <ul>
                        <li>Clean and structured code</li>
                        <li>Unit and Integration testing</li>
                        <li>UML (Sequence Diagram)</li>
                        <li>SCRUM</li>
                        <li>Teamwork!</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-12 border">
                    <h5 className="mt-1">Books I read</h5>
                    <ul>
                        <li>Java Head First (2nd edition)</li>
                        <li>Clean Code & Clean Coder</li>
                        <li>Java by Comparison</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <p className="col-md-10 mt-4">Above I listed the main technical setup I have worked with in the past. Furthermore
                    there were
                    many more tools or languages I had some contact with. For example, I also have experience in regular web
                    development.</p>
                <div className="col-md-2"></div>

                <h4 className=" mb-3">Preferred workstyle</h4>

                <p className="col-md-10">I like working with the stakeholders and developing software for them. It is fun to figure
                    out their
                    requirements and afterwards implementing them in an efficient way. In most projects we had great results
                    pursuing an incremental development style. This means implementing small features every sprint and
                    continuously presenting them to the stakeholders.</p>
                <div className="col-md-2"></div>
            </div>
        </div>

    );


}