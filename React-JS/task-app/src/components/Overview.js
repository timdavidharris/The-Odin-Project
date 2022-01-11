// Responsible for rendering tasks
// reference this video https://www.youtube.com/watch?v=GIU8ekYndKw
// for how to use map
import React from 'react';

class Overview extends React.Component {
    render() {
        return (
            <div>
                <h3>Tasks Below</h3>
                <ul>
                {inputArray}
                </ul>
            </div>
        );
    }
}

export default Overview;