import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {

    const onDelete = () => {
        console.log('Deleted');
    }
    const onAdd = () => {
        console.log('Added');
    }

    return (
        <header className='header'>
            <h1>{title}</h1>

            <Button text='Add' color='green' onClick={onAdd} />
            <Button text='Delete' color='green' onClick={onDelete} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Title',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
// const HeadingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
