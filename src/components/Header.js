import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {


    const onAdd = () => {
        console.log('Added');
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Add' color='green' onClick={onAdd} />
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
