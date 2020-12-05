import React from 'react';
import { StringLiteral } from 'typescript';
import './App.css';
import jsonObject from './JSON/test.json'

// Defining our Todo class 
class Todo { 
    userId!: number; 
    id!: number; 
    title!: string; 
    done!: boolean;
    label!: string;
    name1!: string;
    spec1!: string;
   
    getLabel() { 
        return this.label; 
    }

    getName() {
        return this.name1;
    }

    getSpec() {
        return this.spec1;
    }
   
    isDone() { 
        return this.done; 
    } 
} 

// Object.assign() will clone jsonData into 
// Todo class object Storing the new class 
// object in a typescript variable 
let newTodo = Object.assign(new Todo(), jsonObject); 


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
        <br/>
          {createCard1(newTodo.getLabel(), newTodo.getName())}
          <br/>
          {createCard2("Sexual Orientation", "Sexual Orientation")}
      </header>
    </div>
  );
}

function createCard1(label: string, name: string) {
  return (
    <section className="labelCard"> 
        <h1>Label: {label}</h1>
        <div className="cards">
            <div className="CDECard">
                <h2>CDE Name</h2>
                {name}
                <h2> Specification</h2>
                <p>
                    1a. What terms best express how you describe your gender identity? (Check all that apply)
                </p>
                <p className="list">
                    Man<br />
                    Woman<br />
                    Non-binary<br />
                    Transgender<br />
                    None of these describe me, and I’d like to consider additional options<br />
                    Prefer not to answer<br />
                </p>
                <h2>Collection</h2>
                <p>Self-Report</p>

                <h2>Source</h2>
                <p>RADx [All of Us Research Program PPI]</p>

                <h2>Definition</h2>
                <p>
                    NCIt and CDISC:  Gender Identity (Code C158277) – Definition:  A person's internally 
                    held sense of their gender, which may or may not correspond to the individual's genotypic or phenotypic sex.
                </p>

                
            </div>



            <div className="CDECard">
                <h2>CDE Specification: {name}</h2>
                <p>
                    1b. Are any of these a closer description to your gender identity?
                </p>

                <p className="list">
                    Trans man/Transgender Man/FTM<br />
                    Trans woman/Transgender Woman/MTF <br />
                    Genderqueer<br />
                    Genderfluid<br />
                    Gender variant<br />
                    Questioning or unsure of your gender identity<br />
                </p>
                <h2>Collection</h2>
                <p>Self-Report</p>

                <h2>Source</h2>
                <p>RADx [NIH SGMRO]</p>

                <h2>Definition</h2>
                <p>
                    NCIt and CDISC:  Gender Identity (Code C158277) – Definition:  A person's internally 
                    held sense of their gender, which may or may not correspond to the individual's genotypic or phenotypic sex.
                </p>
            </div>
        </div>
        <section className="voteSection"> 
            <div className="voteCard">
                <p>Vote</p>
            </div>
            <div className="voteCard">
                <p>Vote</p>
            </div>
        </section>
    </section>
  )
}

function createCard2(label: string, name: string) {
    return (
      <section className="labelCard"> 
          <h1>Label: {label}</h1>
          <div className="cards">
              <div className="CDECard">
                  <h2>CDE Specification: {name}</h2>
                  <p>
                  1a. Which of the following best represents how you think of yourself?
                  </p>
                
                <p className="list">
                  Gay<br />
                  Lesbian<br />
                  Straight; that is, not gay or lesbian, etc. <br />
                  Bisexual<br />
                  None of these describe me, and I’d like to see additional options<br />
                  Prefer not to answer<br />
                </p>

                <h2>Collection</h2>
                <p>Self-Report</p>

                <h2>Source</h2>
                <p> RADx [All of Us Research Program PPI]</p>

                <h2>Definition</h2>
                <p>
                    NCIt: Sexual Orientation (Code C84361) –
                    Definition:  The pattern of a person's emotional, romantic, and/or sexual attractions.
                </p>
              </div>


              <div className="CDECard">
                  <h2>CDE Specification: Sexual Orientation (Extended)</h2>
                  <p>
                  <strong>1b. Are any of these a closer description of how you think of yourself?</strong>
                  </p>
  
                <p className="list">
                  Queer<br />
                  Polysexual, omnisexual, sapiosexual or  |pansexual <br />
                  Asexual<br />
                  Two-spirit<br />
                  Have not figured out or are in the process of figuring out your sexuality<br />
                  Mostly straight, but sometimes attracted to people of your own sex<br />
                  Do not think of yourself as having sexuality<br />
                  Do not use labels to identity yourself<br />
                  No, I mean something else (optional free text)<br />
                  Prefer not to answer<br />
                </p>

                <h2>Collection</h2>
                <p>Self-Report</p>

                <h2>Source</h2>
                <p> RADx [NIH SGMRO]</p>

                <h2>Definition</h2>
                <p>
                    NCIt: Sexual Orientation (Code C84361) –
                    Definition:  The pattern of a person's emotional, romantic, and/or sexual attractions.
                </p>
              </div>
              
          </div>
        <section className="voteSection"> 
            <div className="voteCard">
                <p>Vote</p>
            </div>
            <div className="voteCard">
                <p>Vote</p>
            </div>
        </section>
      </section>
    )
  }

export default App;
