import React, {Component} from 'react';
import Card from './Card';
import {connect} from 'react-redux';

class Bigger extends Component{
    render(){
        if(this.props.number1 > this.props.number2){
            return(
                <Card title="Maior">
                    {this.props.number1}
                </Card>
            )
        }else return(
            <Card title="Maior">
                {this.props.number2}
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

export default connect(mapStateToProps)(Bigger)