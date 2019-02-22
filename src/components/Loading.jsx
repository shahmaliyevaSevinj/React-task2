import React from 'react';

const Loading = ({title}) => {
    let styles = {
        margin: '20px',
        width: '300px',
        height: '100px',
    };
    return (
        <div className="ui segment" style={styles}>
            <div className="ui active inverted dimmer">
                <div className="ui text loader">{title} is loading</div>
            </div>
        </div>
    )
}
export default Loading;