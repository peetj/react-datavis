import React from 'react';

// The View Class enables a 'default' kind of template which can be overridden by child components.
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
