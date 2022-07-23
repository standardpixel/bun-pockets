import * as React from 'react';
import { Container, Progress } from 'reactstrap';
import { goal } from '../Goal/mock';
import { Pocket } from './types';

// define an interface for component props
interface Props {
    pocket: Pocket;
}

function PocketSummary({ pocket }: Props) {
  return (
    <Container className="mt-4 text-center" data-id={pocket.id}>
        <div className="fs-1">{pocket.icon}</div>
        <div>{pocket.name}</div>
        <div>{pocket.total}</div>
    </Container>
  );
}

export default PocketSummary;