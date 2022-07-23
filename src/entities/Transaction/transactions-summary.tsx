import * as React from 'react';
import { Button, Card, CardBody, CardFooter, CardTitle, Container, Table } from 'reactstrap';
import { Pocket } from '../Pocket/types';
import TransactionSummary from './transaction-summary';
import { Transaction } from './types';

// interface for Props
interface Props {
    transactionsState: [Transaction[], React.Dispatch<React.SetStateAction<Transaction[]>>];
    pocketsState: [Pocket[], React.Dispatch<React.SetStateAction<Pocket[]>>];
}

function TransactionsSummary({ transactionsState, pocketsState }: Props) {
  const [transactions, setTransactions] = transactionsState;

  return (
    <Card className="mt-5">
      <CardBody className="pb-5">
        <CardTitle>Transactions</CardTitle>
        <Container className="d-flex justify-content-center">
        <Table striped>
            <thead>
                <tr>
                <th>
                    DateTime    
                </th>
                <th>
                    Amount
                </th>
                <th>
                    Percentages to pockets
                </th>
                <th>
                    Reason
                </th>
                </tr>
            </thead>
            <tbody>
                {
                  transactions.map((transaction: Transaction) => (
                    <TransactionSummary key={transaction.id} transaction={transaction} pockets={pocketsState[0]} />
                  ))
                }
            </tbody>
            </Table>
        </Container>
      </CardBody>
      <CardFooter className="d-flex justify-content-end">
        <Button className="mx-2">View All</Button>
        <Button>Edit</Button>
      </CardFooter>
    </Card>
  );
}

export default TransactionsSummary;