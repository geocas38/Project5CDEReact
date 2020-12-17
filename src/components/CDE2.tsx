import React from 'react'; // we need this to make JSX compile
import CounterDisplay from './CounterDisplay';
import CounterChanger from './CounterChanger';
import './CDE.css';
import jsonObject from '../JSON/test.json'

interface CDEProps {
  title?: string;
  paragraph?: string;
}

class CDECard2 extends React.Component<CDEProps> {
    render() {
        const elements = jsonObject.list2;
        const list = []

        for (var i in elements) {
            list.push(<li>{jsonObject.list2[i]}</li>)
        }

        return (
            <div>
                <section>
                    <h2>CDE Name</h2>
                    <p>{jsonObject.CDE2}</p>

                    <h2> Specification</h2>
                    <p>{jsonObject.spec2}</p>
                    <p className="list">
                        {list}
                    </p>
                    <h2>Collection</h2>
                    <p>{jsonObject.collection2}</p>

                    <h2>Source</h2>
                    <p>{jsonObject.source2}</p>

                    <h2>Definition</h2>
                    <p>{jsonObject.definition2}</p>

                    <div className="voteCount">
                    {/* This calls the voting component */}
                    <CounterDisplay /><CounterChanger />
                    </div>
                </section>
            </div> 
        )
    };
}

export default CDECard2;