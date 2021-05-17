import React from "react";
import PageFooter from "../../PageFooter";
import { metadata } from "../../metadata";
import "../global.css";
import "./Introduction.css";
import Slider from "react-slick";
import pic1 from "../../../../Assets/Internships/rules/pic1.png";
import pic2 from "../../../../Assets/Internships/rules/pic2.png";
import pic3 from "../../../../Assets/Internships/rules/pic3.png";
import RulesCard from "./RulesCard";

const Introduction = ({ callback }) => {
    const rulesCards = [
        {
            image: pic1,
            title: "Top 10 internship tips",
            tips: {
                tip1: "Tip #11",
                tip2: "Tip #12",
                tip3: "Tip #13",
                tip4: "Tip #14",
                tip5: "Tip #15",
                tip6: "Tip #16",
            },
        },
        {
            image: pic2,
            title: "Top 10 internship tips",
            tips: {
                tip1: "Tip #21",
                tip2: "Tip #22",
                tip3: "Tip #23",
            },
        },
        {
            image: pic3,
            title: "Top 10 internship tips",
            tips: {
                tip1: "Tip #31",
                tip2: "Tip #32",
                tip3: "Tip #33",
            },
        },
        {
            image: pic1,
            title: "Top 10 internship tips",
            tips: {
                tip1: "Tip #41",
                tip2: "Tip #42",
                tip3: "Tip #43",
            },
        },
        {
            image: pic2,
            title: "Top 10 internship tips",
            tips: {
                tip1: "Tip #51",
                tip2: "Tip #52",
                tip3: "Tip #53",
            },
        },
        {
            image: pic3,
            title: "Top 10 internship tips",
            tips: {
                tip1: "Tip #61",
                tip2: "Tip #62",
                tip3: "Tip #63",
            },
        },
    ];

    const slidesNum =
        window.innerWidth < 600
            ? Math.min(1, rulesCards.length)
            : Math.min(3, rulesCards.length);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: slidesNum,
        speed: 600,
        arrows: window.innerWidth < 600 ? false : true,
        dots: true,
    };

    return (
        <div className="introduction">
            <h1 className="heading">Why Internship?</h1>
            <div className="card">
                <ol>
                    <li>
                        It is a great way to apply classroom knowledge to the
                        real world. It helps one explore different career paths
                        and specializations that may suit them.
                    </li>
                    <li>
                        It gives you experience in the career field. This helps
                        you prepare for what to expect from a job in a similar
                        field, increases confidence in skills and gives you an
                        edge over others.
                    </li>
                    <li>
                        Internships provide a great environment to meet
                        professionals in the career field you want to pursue, as
                        well as other interns who have similar interests.
                    </li>
                    <li>
                        It can provide students with the soft skills needed in
                        the workplace and in leadership positions
                    </li>
                    <li>
                        Internships help students learn all about workplace
                        culture, employee relations, and leadership structure,
                        which should help them onboard in their first
                        professional job with more ease than if they haven’t had
                        professional experience.
                    </li>
                    <li>
                        Most organizations and jobs that you apply to following
                        graduation want employees to have some sort of
                        professional experience.
                    </li>
                    <li>
                        Internships provide opportunities for receiving feedback
                        from someone who works in your desired field on a daily
                        basis.
                    </li>
                    <li>
                        You can learn from the best during an internship. People
                        will be watching over you and working closely with you
                        on projects so that you have someone to look up to and a
                        goal to work towards.
                    </li>
                </ol>
            </div>
            <div className="rules_reg">
                <h1 className="heading">Rules and Regulations</h1>
                <Slider {...settings}>
                    {rulesCards.map((card) => (
                        <RulesCard card={card} />
                    ))}
                </Slider>
            </div>
            <h1 className="heading">Is CP important?</h1>
            <div className="research_vs_internship">
                <div className="card">
                    <h1>Internship</h1>
                    <ul>
                        <li>
                            If you wish to pursue a job after graduation, then a
                            corporate internship would be recommended over a
                            research one.
                        </li>
                        <li>
                            It gives you industry experience and helps you build
                            connections. It teaches you how it is to work in a
                            team and spend long hours at work.
                        </li>
                        <li>
                            If you are seeking real industry-experience and
                            aspire to get a job soon after, choose industrial
                            training.
                        </li>
                    </ul>
                    <img src="https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/rvi_research.png" />
                </div>
                <div className="vs">v/s</div>
                <div className="card">
                    <h1>Research</h1>
                    <ul>
                        <li>
                            If you wish to pursue a Masters degree after
                            graduation, then a research internship would be
                            recommended over a corporate one.
                        </li>
                        <li>
                            It is comparatively tough to achieve but can help
                            you enhance your learnings. A successfully completed
                            research internship has a lot of value and it
                            establishes you as someone who has the commitment to
                            approaching a project and completing it on your own.
                        </li>
                        <li>
                            If you are a person who loves getting deep into a
                            subject, exploring new stuff and are self-motivated,
                            choose research internships.
                        </li>
                    </ul>
                    <img src="https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/rvi_internship.png" />
                </div>
            </div>
            <PageFooter
                settings={{
                    left: {
                        alignment: "left",
                        colors: ["#236FDC", " #43AEDA"],
                        image: metadata["preparation"].image,
                        redirect: {
                            linkType: "link",
                            link: "https://iiitdplaybook.web.app/homepage",
                        },
                        title: "Research with Professors",
                    },
                    right: {
                        alignment: "right",
                        image: metadata["resume"].image,
                        redirect: {
                            linkType: "component",
                            componentName: "resume",
                        },
                        setActive: callback,
                        title: "Build Your Resume",
                    },
                }}
            />
        </div>
    );
};

export default Introduction;
