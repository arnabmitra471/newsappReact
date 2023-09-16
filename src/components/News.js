import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {
  render() {
    return (
      <div className="container">
        <h2>NewsMonkey -top headlines</h2>
        <div className="row">
          <div className="col-md-3">

        <NewsItem title="This is a sample title1" description ="This is the description1"/>
          </div>
          <div className="col-md-3">

        <NewsItem title="This is a sample title2" description ="This is the description2"/>
          </div>
          <div className="col-md-3">

        <NewsItem title="This is a sample title3" description ="This is the description3"/>
          </div>
      </div>
    </div>
    )
  }
}
