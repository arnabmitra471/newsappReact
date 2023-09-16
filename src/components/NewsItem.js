import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class NewsItem extends Component {
  static propTypes = {title:PropTypes.string,
    description:PropTypes.string}
  constructor(){
    super();
    console.log("Hello !! I am a constructor from NewsItem component");
  }
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl == null ? "https://sportshub.cbsistatic.com/i/r/2023/09/14/64e69eb8-0647-4510-8a80-d01c598a0f3a/thumbnail/1200x675/33a21ba8a3723ba5c969708d245de06a/usatsi-21380309-168396417-lowres-1.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} className="btn btn-sm btn-primary" target="_blank" rel="noreferrer">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
