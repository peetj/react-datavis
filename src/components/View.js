import React from 'react';

const View = (props) => {
    return (
        <div className="view">
            {React.cloneElement(props.children, {
                header: <header>Generic Header</header>,
                footer: <footer>Generic Footer</footer> 
            } )}
        </div>
    )
};

export default View;
