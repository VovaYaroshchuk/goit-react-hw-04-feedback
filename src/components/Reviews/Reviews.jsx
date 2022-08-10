import React, { Component } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import {Section} from "components/SectionTitle/SectionTitle";
import {Notification} from "components/Notification/Notification";
class Reviews extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    
    leaveFeedback = (option) => {
        this.setState(prevState =>
        ({[option]: prevState[option] + 1,}));
    }
    

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        if (total === 0) {
            return 0;
        }
        return Math.round(good / total * 100);
    }


    render() {
        const arrayState = Object.keys(this.state);
        return (
            <Section title="Please leave feedback">
            <FeedbackOptions options={arrayState} onLeaveFeedback={this.leaveFeedback} />
            {(this.countTotalFeedback() > 0) ? (
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
            ) : (<Notification message="There is no feedback"></Notification>)}
            </Section>
        );
    }
}


    

export default Reviews;