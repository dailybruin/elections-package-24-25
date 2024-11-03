import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleGrid from "./components/ArticleGrid";
import Interactive from './components/Interactive';
import Landing from './components/Landing';
import Background from './components/Background';
//import Cursor from './images/PencilCursor.svg';
import Cursor from './images/PencilCursor.png';
import CloudEffect from './components/CloudEffect';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/elections-package-24-25"
    )
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));

  }, []);

  return data && (
    <div className="App" style={{background: '#94ccee',  zIndex: -1, cursor: `url(${Cursor}), auto`}}>
      <Header/>
      <Landing/>
      <Interactive/>
      <br></br>
      <br></br>
      <br></br>
      <CloudEffect/>
      <div style={{ position: 'relative' }}>
        <Background />
        <ArticleGrid articles={data.national} title="NATIONAL" />
        <ArticleGrid articles={data.state} title="STATE" />
        <ArticleGrid articles={data.local} title="LOCAL"  isLast={true} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;