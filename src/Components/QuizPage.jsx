import React, { useState } from "react";

function QuizPage() {
    const [answers, setAnswers] = useState({
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q6: "",
        q7: "",
        q8: "",
        q9: "",
        q10: "",
        q11: "",
    });

    const handleChange = (e) => {
        setAnswers({
            ...answers,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Quiz Submitted", answers);
    };

    return (
        <div className="quiz-div">
            <h1>Mental Health Screening Quiz</h1>
            <form className="quiz-form" onSubmit={handleSubmit}>
                <h2>PHQ-4 Test: Depression Screening</h2>

                <div>
                    <p>
                        1. उदासी या उदास मनोदोष का अनुभव रहता है / Sadness or
                        depressed mood
                    </p>
                    <label>
                        <input
                            type="radio"
                            name="q1"
                            value="Never"
                            onChange={handleChange}
                        />{" "}
                        कभी नहीं / Never
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q1"
                            value="Sometimes"
                            onChange={handleChange}
                        />{" "}
                        कभी-कभी / Sometimes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q1"
                            value="Often"
                            onChange={handleChange}
                        />{" "}
                        अक्सर / Often
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q1"
                            value="Almost always"
                            onChange={handleChange}
                        />{" "}
                        लगभग हर समय / Almost always
                    </label>
                </div>

                <div>
                    <p>
                        2. चीज़ को करने में अरुचि या अप्रशांत का अनुभव / Loss of
                        interest or loss of pleasure in doing things
                    </p>
                    <label>
                        <input
                            type="radio"
                            name="q2"
                            value="Never"
                            onChange={handleChange}
                        />{" "}
                        कभी नहीं / Never
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q2"
                            value="Sometimes"
                            onChange={handleChange}
                        />{" "}
                        कभी-कभी / Sometimes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q2"
                            value="Often"
                            onChange={handleChange}
                        />{" "}
                        अक्सर / Often
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q2"
                            value="Almost always"
                            onChange={handleChange}
                        />{" "}
                        लगभग हर समय / Almost always
                    </label>
                </div>

                <div>
                    <p>
                        3. अत्याधिक थकन या बिना ऊर्जा के महसूस करना / Feeling
                        excessively tired or without energy
                    </p>
                    <label>
                        <input
                            type="radio"
                            name="q3"
                            value="Never"
                            onChange={handleChange}
                        />{" "}
                        कभी नहीं / Never
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q3"
                            value="Sometimes"
                            onChange={handleChange}
                        />{" "}
                        कभी-कभी / Sometimes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q3"
                            value="Often"
                            onChange={handleChange}
                        />{" "}
                        अक्सर / Often
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q3"
                            value="Almost always"
                            onChange={handleChange}
                        />{" "}
                        लगभग हर समय / Almost always
                    </label>
                </div>

                <div>
                    <p>
                        4. अनिन्द्रा से पीड़ित है / Suffering from sleeplessness
                    </p>
                    <label>
                        <input
                            type="radio"
                            name="q4"
                            value="Never"
                            onChange={handleChange}
                        />{" "}
                        कभी नहीं / Never
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q4"
                            value="Sometimes"
                            onChange={handleChange}
                        />{" "}
                        कभी-कभी / Sometimes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q4"
                            value="Often"
                            onChange={handleChange}
                        />{" "}
                        अक्सर / Often
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q4"
                            value="Almost always"
                            onChange={handleChange}
                        />{" "}
                        लगभग हर समय / Almost always
                    </label>
                </div>

                <h2>GAD-7 Test: Anxiety Screening</h2>

                <div>
                    <p>
                        5. बेचैन, चिंता फिर तनाव महसूस करना / Feeling nervous,
                        anxious, or on edge
                    </p>
                    <label>
                        <input
                            type="radio"
                            name="q5"
                            value="Never"
                            onChange={handleChange}
                        />{" "}
                        कभी नहीं / Never
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q5"
                            value="Sometimes"
                            onChange={handleChange}
                        />{" "}
                        कभी-कभी / Sometimes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q5"
                            value="Often"
                            onChange={handleChange}
                        />{" "}
                        अक्सर / Often
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q5"
                            value="Almost always"
                            onChange={handleChange}
                        />{" "}
                        लगभग हर समय / Almost always
                    </label>
                </div>

                <div>
                    <p>
                        6. चिंता को रोकने या नियंत्रित ना कर पाना / Not being
                        able to stop or control worrying
                    </p>
                    <label>
                        <input
                            type="radio"
                            name="q6"
                            value="Never"
                            onChange={handleChange}
                        />{" "}
                        कभी नहीं / Never
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q6"
                            value="Sometimes"
                            onChange={handleChange}
                        />{" "}
                        कभी-कभी / Sometimes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q6"
                            value="Often"
                            onChange={handleChange}
                        />{" "}
                        अक्सर / Often
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q6"
                            value="Almost always"
                            onChange={handleChange}
                        />{" "}
                        लगभग हर समय / Almost always
                    </label>
                </div>

                <div>
                    <p>
                        7. विभिन्न चीजों के बारे में अधिक चिंता करना / Worrying
                        too much about different things
                    </p>
                    <label>
                        <input
                            type="radio"
                            name="q7"
                            value="Never"
                            onChange={handleChange}
                        />{" "}
                        कभी नहीं / Never
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q7"
                            value="Sometimes"
                            onChange={handleChange}
                        />{" "}
                        कभी-कभी / Sometimes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q7"
                            value="Often"
                            onChange={handleChange}
                        />{" "}
                        अक्सर / Often
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q7"
                            value="Almost always"
                            onChange={handleChange}
                        />{" "}
                        लगभग हर समय / Almost always
                    </label>
                </div>

                <div>
                    <p>8. आराम करना मुश्किल होना / Trouble relaxing</p>
                    <label>
                        <input
                            type="radio"
                            name="q8"
                            value="Never"
                            onChange={handleChange}
                        />{" "}
                        कभी नहीं / Never
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q8"
                            value="Sometimes"
                            onChange={handleChange}
                        />{" "}
                        कभी-कभी / Sometimes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q8"
                            value="Often"
                            onChange={handleChange}
                        />{" "}
                        अक्सर / Often
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q8"
                            value="Almost always"
                            onChange={handleChange}
                        />{" "}
                        लगभग हर समय / Almost always
                    </label>
                </div>

                <div>
                    <p>
                        9. इतना बेचैन होना कि शांत न बैठ पाना / Being so
                        restless that it is hard to sit still
                    </p>
                    <label>
                        <input
                            type="radio"
                            name="q9"
                            value="Never"
                            onChange={handleChange}
                        />{" "}
                        कभी नहीं / Never
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q9"
                            value="Sometimes"
                            onChange={handleChange}
                        />{" "}
                        कभी-कभी / Sometimes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q9"
                            value="Often"
                            onChange={handleChange}
                        />{" "}
                        अक्सर / Often
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q9"
                            value="Almost always"
                            onChange={handleChange}
                        />{" "}
                        लगभग हर समय / Almost always
                    </label>
                </div>

                <div>
                    <p>
                        10. आसानी से खीजना या चिड़चिड़ाना / Becoming easily
                        annoyed or irritated
                    </p>
                    <label>
                        <input
                            type="radio"
                            name="q10"
                            value="Never"
                            onChange={handleChange}
                        />{" "}
                        कभी नहीं / Never
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q10"
                            value="Sometimes"
                            onChange={handleChange}
                        />{" "}
                        कभी-कभी / Sometimes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q10"
                            value="Often"
                            onChange={handleChange}
                        />{" "}
                        अक्सर / Often
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q10"
                            value="Almost always"
                            onChange={handleChange}
                        />{" "}
                        लगभग हर समय / Almost always
                    </label>
                </div>

                <div>
                    <p>
                        11. डर लगता है जैसे कुछ बुरा या भयंकर होने वाला है /
                        Feeling afraid as if something awful might happen
                    </p>
                    <label>
                        <input
                            type="radio"
                            name="q11"
                            value="Never"
                            onChange={handleChange}
                        />{" "}
                        कभी नहीं / Never
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q11"
                            value="Sometimes"
                            onChange={handleChange}
                        />{" "}
                        कभी-कभी / Sometimes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q11"
                            value="Often"
                            onChange={handleChange}
                        />{" "}
                        अक्सर / Often
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q11"
                            value="Almost always"
                            onChange={handleChange}
                        />{" "}
                        लगभग हर समय / Almost always
                    </label>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default QuizPage;
