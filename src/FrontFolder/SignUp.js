import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            email: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({email: event.target.value});
        // console.log(event.target.value)
    }

    render() {
        return(
            <div>
                <h1>Welcome {this.state.email}</h1>
                <input 
                    type="email" 
                    name="email"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default SignUp;