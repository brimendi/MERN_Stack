import React, {Component} from 'react'

class PersonCards extends Component{
    constructor(props){
        super(props);
        this.state = {
            age :this.props.age
        };
    }
    birthdayCounter = () => this.setState({age:this.state.age +1});
    render(){
        const {firstName, lastName, hairColor} = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair color: {hairColor}</p>
                <button onClick = {this.birthdayCounter}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCards;