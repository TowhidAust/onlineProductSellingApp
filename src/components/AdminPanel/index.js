import React, { Component } from 'react';
import './admin.css';

export default class Admin extends Component {
    render() {
        return (
            <>
                <section className="adminPanel">
                    <div className="adminInner">
                        <div>Admin Panel</div>
                        <input type="text" placeholder="place holder"/>
                        <input type="text" placeholder="place holder"/>
                        <input type="text" placeholder="place holder"/>
                        <input type="text" placeholder="place holder"/>
                    </div>
                </section>
            </>
        )
    }
}
