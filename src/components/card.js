import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="card border-primary mb-3" style={{ maxwidth: '20rem' }}>
                <div className="card-header">{this.props.title}</div>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;