import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, url } = this.props;
    return (
      <div>
        <div className="card mb-4">
          <div className="img-container">
            <img src={imgUrl} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="read-more-btn-container text-center">
              <a href={url} className="btn btn-primary btn-sm">Read more</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
