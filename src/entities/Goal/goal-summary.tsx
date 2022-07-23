import * as React from 'react';
import { Container, Progress } from 'reactstrap';
import { Goal } from './types';

// define an interface for component props
interface Props {
    goal: Goal;
}

function GoalSummary({ goal }: Props) {
  return (
    <Container className="mt-4" data-id={goal.id}>
        <span>{goal.name}</span>
        <Progress value={goal.value} />
    </Container>
  );
}

export default GoalSummary;