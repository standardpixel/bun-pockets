import * as React from 'react';
import { Button, Card, CardBody, CardFooter, CardTitle, Container, Progress } from 'reactstrap';
import GoalSummary from './goal-summary';
import { Goal } from './types';

// interface for Props
interface Props {
    goalsState: [Goal[], React.Dispatch<React.SetStateAction<Goal[]>>];
}

function GoalsSummary({goalsState}: Props) {
  const [goals, setGoals] = goalsState;

  return (
    <Card className="mt-5">
      <CardBody className="pb-5">
        <CardTitle>Goals</CardTitle>
        <>
          {goals.map((goal: Goal) => (
            <GoalSummary key={goal.id} goal={goal} />
          ))}
        </>
      </CardBody>
      <CardFooter className="d-flex justify-content-end">
        <Button className="mx-2">View All</Button>
        <Button>Edit</Button>
      </CardFooter>
    </Card>
  );
}

export default GoalsSummary;