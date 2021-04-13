/* import React from 'react'
import Graph from './Graph'


export default class saveGraph extends Component {
    state = {
        save: false
    };

    handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        this.setState({ [input.name]: value });
    };

    handleFormSubmit = () => {
        const { user, saveGraph } = this.state;
        localStorage.setItem('saveGraph', saveGraph);
        localStorage.setItem('user', saveGraph ? user : '');
    };

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    <input name="saveGraph" checked={this.state.saveGraph} onChange={this.handleChange} type="checkbox" /> Remember me
            </label>
                <button type="submit">Save Graph</button>
            </form>
        );
    }
} */