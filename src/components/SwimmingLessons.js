function SwimmingLessons() {
    return (
        <>
            <section className='breadcrumb-section'>
                <div className="container">
                    <h5 className='main-head'>LeagueSabra</h5>
                    <h4 className='page-head'>Swimming Lessons</h4>
                </div>
            </section>

            <section className='section-padding overflow-hidden'>
                <div className="container">
                    <p className="section-para w-90">
                        LeagueSabra offers dynamic and enjoyable swimming lessons designed to cater to both children and adults,
                        ensuring everyone can embrace the water with confidence and grace.
                    </p>
                    <p className="section-para w-90">
                        Our certified instructors deliver swimming lessons tailored to individual abilities, accommodating complete
                        beginners, nervous swimmers, and those seeking lifeguard training or competitive coaching.
                    </p>

                    <div className="row mt-5">
                        <div className="col-12 col-xl-8 col-lg-7 col-md-6 my-auto">
                            <h2 className="section-head">Adult Swimming Lessons</h2>
                            <p className="section-para mt-5">
                                Geared towards individuals aged 16 and above, our adult swimming lessons follow a progressive
                                curriculum aimed at enhancing confidence, refining technique, and promoting water safety. Divided into
                                three levels based on overall ability, these lessons provide a structured approach to skill development.
                            </p>
                        </div>

                        <div className="col-12 col-xl-4 col-lg-5 col-md-6">
                            <div className="section-img-area mb-5 mb-md-0">
                                <img src="./adult-swimming-img.jpg" className="section-img" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 col-xl-4 col-lg-5 col-md-6">
                            <div className="section-img-area mb-5 mb-md-0">
                                <img src="./child-swimming-img.jpg" className="section-img" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-xl-8 col-lg-7 col-md-6 my-auto">
                            <h2 className="section-head">Children's Swimming Lessons</h2>
                            <p className="section-para mt-5">
                                Aligned with the Swim England Learn to Swim Programme, our children's swimming lessons uphold a
                                high standard of safe, inclusive, and effective teaching. With clearly defined stages of progression and
                                continuous assessment from instructors, children of all ages can thrive in their aquatic journey. Lessons
                                are organized into ability levels, starting from preschool age and progressing up to Stage IO, ensuring
                                each child advances at their own pace.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SwimmingLessons;