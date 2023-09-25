import React, { Component } from 'react';
export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
    {source}
  </span>
          <img src={imageUrl === null ? "https://sportshub.cbsistatic.com/i/r/2023/09/14/64e69eb8-0647-4510-8a80-d01c598a0f3a/thumbnail/1200x675/33a21ba8a3723ba5c969708d245de06a/usatsi-21380309-168396417-lowres-1.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author===null ? "unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-primary" target="_blank" rel="noreferrer">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
