import React from 'react';
import './Doc.css'
import review from '../../Components/image/review.jpg'

const Doc = () => {

    return (
        <div className="doc-main">
            <div className="doc-img">
                <img src={review} alt="" />
            </div>
            <div>
                <h2>More resource available if you want learn:</h2>
                <br />
                <p>english Gramer part</p>
                <small>As the world’s English experts, no one is better qualified to get you closer to the English language and help you make the most of your educational opportunities.

                    And as one of the co-creators of the IELTS test, we are uniquely positioned to help you get the score you need to get into your dream university.</small>
            </div>
            <br />
            <p>Take this English for IELTS course with the world’s English experts and you will:</p>

            <small>build towards the IELTS score you need to continue your studies abroad
                be taught by a highly qualified and experienced specialist IELTS teacher
                develop all four language skills: reading, writing, listening and speaking
                improve your ability and confidence when using spoken and written English in a wide variety of situations
                learn through a variety of teaching techniques including pair and group work as well as class projects
                become familiar with the format and requirements of all four parts of the IELTS test
                receive training in essential test-taking strategies and techniques
                practise on real IELTS test questions</small>
            <br />



            <h2>Specially for litchening test:</h2>
            <small>
                Using IELTS official practice materials will enable you to:

                familiarise yourself with the test format
                experience the types of tasks you will be asked to undertake
                test yourself under timed conditions
                review your answers and compare them with model answers.
                Once you have prepared with the sample questions put your knowledge to the test with IELTS Progress Check, an official IELTS online marked practice test. The test will give you an indication of your band score and provide feedback on areas to improve. Book your official practice test today.
            </small>

        </div>
    );
};

export default Doc;