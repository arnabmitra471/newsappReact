import React, { Component } from 'react'
import NewsItem from './NewsItem';
import LoadingSpinner from './LoadingSpinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  pageSize = 20
  
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  };
  static defaultProps = {
    country: "ar",
    pageSize: 10,
    category: "science"

  }
  constructor(props) {
    super(props);
    //console.log("Hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    }
    document.title = `${this.props.category} News Monkey`
  } 
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=112ab18126964b80b648149d0f4def2b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  async componentDidMount() {
      this.updateNews();
  }
  handlePrevClick = async () => {
    this.setState({page:this.state.page -1})
    this.updateNews();
  }
  handleNextClick = async () => {
    this.setState({page:this.state.page +1})
    this.updateNews();
  }
  fetchMoreData = async ()=>{
    this.setState({page:this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=112ab18126964b80b648149d0f4def2b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
  }
  render() {
    console.log("render");
    return (
      <>
        <h2 className="text-center" style={{ margin: '40px' }}>NewsMonkey -top headlines</h2>
        {this.state.loading && <LoadingSpinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<LoadingSpinner/>}
        >
        <div className="container">
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>

              <NewsItem title={element != null ? element.title.slice(0, 45) : ""} description={element.description != null ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

            </div>
          })};
        </div>
        </div>
      </InfiniteScroll>
      </>
    )
  }
}
