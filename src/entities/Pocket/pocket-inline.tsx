import * as React from 'react';
import { Pocket } from './types';

interface Props {
    pocket: Pocket;
}

function PocketInline({pocket}: Props) {
    return (
        <span>
            {pocket.icon}{" "}
            {pocket.name}
        </span>
    );
}

export default PocketInline;