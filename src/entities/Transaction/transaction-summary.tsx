import * as React from 'react';
import PocketInline from '../Pocket/pocket-inline';
import { Pocket } from '../Pocket/types';
import { Transaction } from './types';

function getPocketById(pockets, id) {
    return pockets.find((pocket) => pocket.id === id);
}

// define an interface for component props
interface Props {
    transaction: Transaction;
    pockets: Pocket[];
}

function TransactionSummary({transaction, pockets}) {
    return (
        <tr>
            <th scope="row">
                {transaction.dateTime.toLocaleString()}
            </th>
            <td>
                {transaction.amount}
            </td>
            <td>
                {
                    transaction.percentages.map((percentageToPocket) => {
                        return (
                            <div key={percentageToPocket.id}>
                                <PocketInline pocket={getPocketById(pockets, percentageToPocket.pocket)} />: {percentageToPocket.percent}
                            </div>
                        )
            })
                }
            </td>
            <td>
                {transaction.reason}
            </td>
        </tr>
    );
}

export default TransactionSummary;