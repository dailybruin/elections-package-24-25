import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Cursor from './images/PencilCursor.svg';

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/elections-package-24-25")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])


  return data && (
    <div className="App" style={{cursor: `url(${Cursor}), auto`}}>
      <Header/>
      <Landing landing={data.landing_image}/>
      Hello Daily Bruin!
      <Footer/>
    </div>
  );
}

export default App;
