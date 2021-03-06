import React from 'react';


class Scroll extends React.Component {

    render() {
        return (
            <div style={{ overflowY: 'scroll', height:'90vh'}}>
                {this.props.children}
            </div>
        );
    }
}

export default Scroll;