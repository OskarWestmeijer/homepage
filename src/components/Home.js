import React from "react";

export default function Home() {
    return (
        <section>
            <div className="container pt-5 mt-4">
                <header className="">
                    <div className="row">
                        <div className="col-lg-1 col-sm-12 " />
                        <div className="col-lg-4 col-sm-12 mt-2">
                            <img src="images/oskar_westmeijer_08_2022.jpg" className="rounded img-fluid" alt="Oskar Westmeijer" />
                        </div>
                        <div className="col-lg-6 col-sm-12 ms-lg-5" >
                            <h2 className="text-center display-6">Oskar Westmeijer</h2>
                            <h5 className="text-center">Java Software Developer</h5>
                            <p>Hello, I am working as a software developer, with main focus on Java application development.</p>
                            <p>I am located in Hamburg, Germany.
                                In my free time I like to exercise.
                                Bouldering, lifting and running are my main interests. Furthermore I like reading books and
                                travelling. Besides this, I also code in my free time.</p>
                            <p>My heritage is a cultural mix of finnish, dutch and german.
                                I have a strong affinity for these three cultures and share great interest in getting to know others as
                                well.
                                This understanding has been beneficial in culturally diverse teams.</p>
                        </div>
                        <div className="col-lg-1 col-sm-12 " />
                    </div>
                </header>
            </div>
        </section>

    );
}