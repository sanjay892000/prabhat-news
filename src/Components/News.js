import React, { Component } from 'react';
import PropTypes from 'prop-types'
import NewsItems from './NewsItems';
import Loading from './Loading';


export class News extends Component {

   static defaultProps = {
      country: 'in',
      pageSize: 15,
      category: 'general',
      apiKey:`79a4d82c033c445f94b5ca8e52390987`
   }

   static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
      apiKey: PropTypes.string,
   }
   constructor(props) {
      super(props);
      this.state = {
         articles: [],
         loading: false,
         page: 1
      };
      document.title=`${this.capializeFirstLtr(this.props.category)}-Prabhat-News App`;
   }
   async updateComponent() {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
         articles: parsedData.articles,
         totalResults: parsedData.totalResults,
         loading: false
      });
   }

   async componentDidMount() {
      this.updateComponent();
   }

   ClickNextBtn = async () => {
      this.setState({ page: this.state.page + 1 });
      this.updateComponent();
   }
   ClickPreviousBtn = async () => {
      this.setState({ page: this.state.page - 1 });
      this.updateComponent();
   }
   capializeFirstLtr=(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
   }
 

   render() {
      return (
         <>
            <div className="container my-3">
               <h3 className='my-4' style={{ textAlign: 'center', padding: '13px' }}>Prabhat News- Top {this.capializeFirstLtr(this.props.category)} Headlines</h3>
               {/* Loading component (spinner) */}
               {this.state.loading && <Loading />}

               <div className="row">
                  {this.state.articles.map((element) => {
                     return <div className="col-md-4" key={element.url}>
                        <NewsItems tittle={element.title ? element.title.slice(0, 100) : ""} description={element.description ? element.description.slice(0, 80) : ""} urlToImage={element.urlToImage} Newsurl={element.url} date={element.publishedAt} author={element.author} badge={element.source.name} />
                     </div>
                  })}
               </div><br />
               <div className="container d-flex justify-content-between">
                  <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.ClickPreviousBtn}>&larr; Previous</button>
                  <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.ClickNextBtn}>Next &rarr;</button>
               </div>
            </div>
         </>
      )
   }
}

export default News
