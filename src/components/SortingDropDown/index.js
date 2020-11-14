import React, { Component } from 'react';
import './sorting.css';

export default class SortingDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDataLoaded: false,
        }
    }

    componentDidMount() {
        
    }

    onchangEventHandler(event) {
        this.setState({
            onChangeValue: event.target.value
        })

        if (event.target.value === 'Sort by price High to Low') {
            this.props.onChangeSortHighToLow();
        } else if (event.target.value === 'Sort by price Low to High') {
            this.props.onChangeSortLowToHigh();
        } else {
            this.props.defaultOnChange();
        }
        
    }

    render() {
        return (
            <>
                <select onChange={(event)=>{this.onchangEventHandler(event)}} value={this.state.onChangeValue}>
                    <option value="Default Sorting">Default Sorting</option>
                    <option value="Sort by price High to Low">Sort by price High to Low</option>
                    <option value="Sort by price Low to High">Sort by price Low to High</option>
                </select>
            </>
        )
    }
}
