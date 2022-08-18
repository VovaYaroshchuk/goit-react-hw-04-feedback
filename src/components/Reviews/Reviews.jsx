import { useState } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import {Section} from "components/SectionTitle/SectionTitle";
import {Notification} from "components/Notification/Notification";
function Reviews () {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const totalFeedback = good + neutral + bad;
    const arrayOptions = ["good", "neutral", "bad"];
    
    const leaveFeedback = (option) => {
        if (option === "good") {
            setGood(good + 1);
        } else if (option === "neutral") {
            setNeutral(neutral + 1);
        } else if (option === "bad") {
            setBad(bad + 1);
        }
    }
    const positivePercentageCalculator = () => {
        if (totalFeedback === 0) {
            return 0;
        } else {
            return Math.round((good / totalFeedback) * 100);
        }
    }
   
    

        return (
            <Section title="Please leave feedback">
            <FeedbackOptions options={arrayOptions} onLeaveFeedback={leaveFeedback} />
            {(totalFeedback > 0) ? (
                <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentageCalculator()} />
            ) : (<Notification message="There is no feedback"></Notification>)}
            </Section>
        );
    }



    

export default Reviews;