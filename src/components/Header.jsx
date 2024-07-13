import {memo} from 'react';

export const Header = memo((props) => {
    return (
        <div>
            <h1>My name is {props.name}</h1>
        </div>
    );
});
