import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes,Route} from "react-router-dom";
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import Footer from './Components/Footer';

export default class App extends Component {
  pageSize=15;
  country='in';
  render() {
    return (
      <>
      <Router>
      <div className='conatiner'>
      <NavBar/>
      <Routes>
      <Route key={'General'} path="/" element={ <News page={this.pageSize} category={'general'} country={this.country}/>} />
      <Route key={'Business'} path="/Business" element={<News page={this.pageSize} category={'business'} country={this.country}/>} />
      <Route key={'Entertainment'} path="/Entertainment" element={<News  page={this.pageSize} category={'entertainment'} country={this.country}/>} />
      <Route key={'Health'} path="/Health" element={<News page={this.pageSize} category={'health'} country={this.country}/>} />
      <Route key={'Science'} path="/Science" element={<News page={this.pageSize} category={'science'} country={this.country}/>} />
      <Route key={'Sports'} path="/Sports" element={<News  page={this.pageSize} category={'sports'} country={this.country}/>} />
      <Route key={'Technology'} path="/Technology" element={<News page={this.pageSize} category={'technology'} country={this.country}/>} />
       </Routes>
       <Footer/>
      </div>
      </Router>
      </>
    )
  }
}
