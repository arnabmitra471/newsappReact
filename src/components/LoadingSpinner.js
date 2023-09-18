import React, { Component } from 'react'
export default class LoadingSpinner extends Component {
    render() {
        return (
            <div className="spinner-wrapper">
                <div class="spinner-border text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}