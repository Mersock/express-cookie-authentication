class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div><input type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={this.handleChange}
                /></div>
                <div><input type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                /></div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default LoginForm;