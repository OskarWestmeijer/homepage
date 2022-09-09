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
                            <p>Hello! This website shares information regarding my personal experiences and interests.</p>
                            <p>In 2018 I completed my apprenticeship as a software developer and am pursuing a career as a Java
                                developer
                                ever since.</p>
                            <p>Currently I am living in the beautiful old town of Luebeck, Germany.
                                In my free time I like to exercise, a lot! This is a passion I discovered during the covid pandemic.
                                Bouldering, yoga, lifting and running are my main interests. Furthermore I like to read books and
                                travel. Besides this, I also code in my free time. This website is running on my own server and I
                                maintain a dockerized Java application setup in the background.</p>
                            <p>My heritage is mixed, mother finnish, father dutch, I was born in Finland, but I grew up in
                                Germany.
                                I have a strong affinity for these three cultures and share great interest in getting to know others as
                                well.
                                This understanding has been beneficial in culturally diverse teams.</p>
                            <p>Feel free to explore this website, to learn more about me and use the links to have a look at my accounts.</p>
                        </div>
                        <div className="col-lg-1 col-sm-12 " />
                    </div>
                </header>
            </div>
        </section>

    );
}