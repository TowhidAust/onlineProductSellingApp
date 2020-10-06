import React, { Component } from 'react';
import './sorting.css';

export default class SortingDropDown extends Component {
    render() {
        return (
            <>
                <select>
                    <option value="A">Default Sorting</option>
                    <option value="B">Sort by price High to Low</option>
                    <option value="C">Sort by price Low to High</option>
                </select>
            </>
        )
    }
}
