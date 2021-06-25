import React, { Component } from 'react';


class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ageCount: this.props.age
        };
    }


    render() {
        const addAyear = () =>{
            this.setState({ageCount: this.state.ageCount += 1 })
        }


        const { lastName, firstName, age, hairColor} = this.props

                return <div className='personalinfo'>
                    <h1>{lastName}, {firstName}</h1>
                    <p>Age: {this.state.ageCount}</p>
                    <p>Hair Color: {hairColor}</p>
                    <button onClick={addAyear}>Birthday Button for {firstName} {lastName}</button>
                </div>;
            }
}
export default PersonCard;