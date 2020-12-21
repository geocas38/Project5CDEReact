import React from 'react'; // we need this to make JSX compile
import CounterDisplay from './CounterDisplay';
import CounterChanger from './CounterChanger';
import './CDE.css';
import jsonObject from '../JSON/CDEContent.json'

interface CDEProps {
  number?: number;
}

class CDECard extends React.Component<CDEProps> {
    render() {
        const elements = jsonObject.SetData['Self-Identified Gender'].firstCDE.list;
        const list = []

        for (var i in elements) {
            list.push(<li>{jsonObject.SetData['Self-Identified Gender'].firstCDE.list[i]}</li>)
        }

        return (
            <div>
                <section>
                    <h2>CDE Name</h2>
                    <p>{jsonObject.SetData['Self-Identified Gender'].firstCDE.CDE}</p>

                    <h2> Specification</h2>
                    <p>{jsonObject.SetData['Self-Identified Gender'].firstCDE.spec}</p>
                    <p className="list">
                        {list}
                    </p>
                    <h2>Collection</h2>
                    <p>{jsonObject.SetData['Self-Identified Gender'].firstCDE.collection}</p>

                    <h2>Source</h2>
                    <p>{jsonObject.SetData['Self-Identified Gender'].firstCDE.source}</p>

                    <h2>Definition</h2>
                    <p>{jsonObject.SetData['Self-Identified Gender'].firstCDE.definition}</p>

                    <div className="counterDisplay">
                    {/* This calls the voting component */}
                    <CounterDisplay /><CounterChanger />
                    </div>
                </section>

                
            </div>
            
        )
    };
}

export default CDECard;