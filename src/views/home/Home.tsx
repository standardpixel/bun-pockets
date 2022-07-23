import * as React from 'react';
import { Container } from 'reactstrap';
import GoalsSummary from '../../entities/Goal/goals-summary';
import { Goal } from '../../entities/Goal/types';
import PocketsSummary from '../../entities/Pocket/pockets-summary';
import { Pocket } from '../../entities/Pocket/types';
import TransactionsSummary from '../../entities/Transaction/transactions-summary';
import { Transaction } from '../../entities/Transaction/types';

// Interface for the component props
interface Props {
    goalsState: [Goal[], React.Dispatch<React.SetStateAction<Goal[]>>];
    transactionsState: [Transaction, React.Dispatch<React.SetStateAction<Transaction>>];
    pocketsState: [Pocket, React.Dispatch<React.SetStateAction<Pocket>>];
}

function ViewHome({ goalsState, transactionsState, pocketsState }: Props) {
    return (
        <Container className="App">
            <GoalsSummary goalsState={goalsState} />
            <PocketsSummary pocketsState={pocketsState} />
            <TransactionsSummary transactionsState={transactionsState} pocketsState={pocketsState} />
        </Container>
    );
}

export default ViewHome;