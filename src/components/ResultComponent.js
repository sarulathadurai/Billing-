import React, {Component} from 'react';

class ResultComponent extends Component {

    render() {
        let {result} = this.props;
        return (
            <div>
                <div>
                    <input type = "text" placeholder = "Enter items" name = "item"/>
                </div>
                <div className = 'result'><p>{result}</p></div>
        
            </div>
    )
        ;
    }
}


export default ResultComponent;

