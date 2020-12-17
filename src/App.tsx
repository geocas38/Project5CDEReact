import React, { Component } from 'react'
import './App.css';
import jsonObject from './JSON/test.json'
import CDECard from './components/CDE';
import CDECard2 from './components/CDE2';
import CSVReader from 'react-csv-reader'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Person Focused Set 2 (Marriage and Sex) Tier 2</h1>
        <div id="versions">
            <p className="version">1.0</p>
            <p className="version">2.0</p>
            <p className="version">3.0</p>
            <p className="version">4.0</p>
        </div>
        <CSVReader onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)} />
        <br/>
        {createLabel1("Self-Identified Gender", "Something")}
        {createLabel2("Sexual Orientation", "Something")}


      </header>
    </div>
  );
}

function createLabel1(label: string, name: string) {
    return (
      <section className="labelCard"> 
            <h1>Label: {label}</h1>
            <div className="cards">
                <CDECard></CDECard>
                <CDECard2></CDECard2>

            </div>
      </section>
    )
  }

  function createLabel2 (label: string, name: string) {
    return (
      <section className="labelCard"> 
            <h1>Label: {label}</h1>
            <div className="cards">
                <CDECard></CDECard>
                <CDECard2></CDECard2>
            </div>
      </section>
    )
  }

export default App;
