import * as React from 'react';
import { Button, Card, CardBody, CardFooter, CardTitle, Container } from 'reactstrap';
import PocketSummary from './pocket-summary';
import { Pocket } from './types';

// interface for Props
interface Props {
    pocketsState: [Pocket[], React.Dispatch<React.SetStateAction<Pocket[]>>];
}

function PocketsSummary({ pocketsState }: Props) {
  const [pockets, setPockets] = pocketsState;

  return (
    <Card className="mt-5">
      <CardBody className="pb-5">
        <CardTitle>Pockets</CardTitle>
        <Container className="d-flex justify-content-center">
          {
            pockets.map((pocket: Pocket) => (
              <PocketSummary key={pocket.id} pocket={pocket} />
            ))
          }
        </Container>
      </CardBody>
      <CardFooter className="d-flex justify-content-end">
        <Button className="mx-2">View All</Button>
        <Button>Edit</Button>
      </CardFooter>
    </Card>
  );
}

export default PocketsSummary;