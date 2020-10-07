import React, {Component} from 'react';
import Card from './Card';
import {connect} from 'react-redux';

class Soma extends Component{
    render(){
        const res = this.props.number1 + this.props.number2
        return(
            <Card title="Soma">
                {res}
            </Card>
        )
    }
    

}

function mapStateToProps(state){
    return {
        number1: state.calcNumber.number1,
        number2: state.calcNumber.number2
    }
}

export default connect(mapStateToProps)(Soma)