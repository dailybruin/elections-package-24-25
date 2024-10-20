import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleGrid from "./components/articlegrid/articlegrid";

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/elections-package-24-25")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])


  return data && (
    <div className="App">
      <Header/>
      Hello Daily Bruin!
      <ArticleGrid articles={data.national} title="National" />
      <ArticleGrid articles={data.state} title="State" />
      <ArticleGrid articles={data.local} title="Local" />
      <Footer/>
    </div>
  );
}

export default App;
