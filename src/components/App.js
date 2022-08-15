import React, { Component } from "react";
import { GlobalStyle } from './GlobalStyles';
import { Box } from 'components/Box';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0
  };
  addFeedback = property => {
    this.setState ( prevState => ({
      [property]: prevState[property] + 1,
    })
    )
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total > 0 ? Math.round(100 / total * good) : 0;
  };
  render() {
    const keys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <Box as="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mx="auto"
        mt="350px"
        width="250px"
        p={5}
        bg="maybeYellow"
        border="normal"
        borderRadius="sm"
        borderColor="almostDarkGreen"
        boxShadow="shadow"
      >
        <Section title="Please leave feedback">
          <FeedbackOptions options={keys} onLeaveFeedback={this.addFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
        <GlobalStyle />
      </Box>
    )
  }
};

/* <div
  style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101'
  }}
>
  React homework template
</div> */