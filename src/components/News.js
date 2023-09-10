import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'




export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 10,
    categories: 'science'
  }
  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   categories: PropTypes.string,
  // }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }
  
  async changeArticles(pageNo){
    this.setState({
      loading: false,
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=b73cd3d382144af5879694def1e8d5f5&page=${pageNo}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      loading: true,
    });
  }
  // api calls
  componentDidMount(){
    this.changeArticles(this.state.page)
  } 

  // go previous articles
  goPrev = () => {
    console.log('prev')
    console.log(this.state.page)
    this.changeArticles(this.state.page-1)
    this.setState({
      page: this.state.page-1,
    })
  }
  // go next articles
  goNext = () => {
    console.log('next')
    console.log(this.state.page)
    this.changeArticles(this.state.page+1)
    this.setState({
      page: this.state.page+1,
    })
  }


  render() {
    return (
      <div>
        <h1 className="my-5 text-center">Top news heading</h1>
        <div className="container">
          <div className="row">
            {!this.state.loading? <Spiner/> :this.state.articles.map(article => <div key={article.url} className="col-md-4">
              <NewsItem title={article.title?article.title:'Not provided'} description={article.description?article.description:'Not provided'} imgUrl={article.urlToImage?article.urlToImage:'https://images.mktw.net/im-709706/social'} url={article.url}/>
            </div>)}
          </div>
        </div>
        <div className="container text-center my-5">
          <button disabled={this.state.page <= 1} className="btn btn-primary btn-sm mx-5" onClick={this.goPrev}>&larr; previous page</button>
          <button className="btn btn-primary btn-sm mx-5" onClick={this.goNext}>next page &rarr;</button>
        </div>
      </div>
    )
  }
}
