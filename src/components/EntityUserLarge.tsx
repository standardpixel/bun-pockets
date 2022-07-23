import * as React from 'react';
import { Container } from 'reactstrap';

export enum IconSizeEnum {
    Small = '16',
    Medium = '20',
    Large = '64'
};

// An interface for the props of the component
interface IEntityUserLargeProps {
    iconSize: IconSizeEnum;
}

function EntityUserLarge({ iconSize = IconSizeEnum.Medium }: IEntityUserLargeProps) {
    return (
        <Container className="d-flex flex-row-reverse m-3 align-items-center align-content-between">
            <span className="fs-4">Dad</span>
            <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="currentColor" className="bi bi-person-circle me-2" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
        </Container>
    );
}

export default EntityUserLarge;