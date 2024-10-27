import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js'






function App() {
  const [ selectedTopic , setSelectedTopic ] = useState();
  
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>
            Core Concepts
          </h2>
          <ul>
            <CoreConcepts 
             {...CORE_CONCEPTS[0]}
            />
            <CoreConcepts 
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcepts 
              title={CORE_CONCEPTS[2].title}
              description= {CORE_CONCEPTS[2].description}
              image= {CORE_CONCEPTS[2].image}
            />
          <CoreConcepts 
            title={CORE_CONCEPTS[3].title}
            description= {CORE_CONCEPTS[3].description}
            image= {CORE_CONCEPTS[3].image}
          />
          </ul>
        </section>

       <section id = "examples">
        <h2>
          Examples
        </h2>
        <menu>
          <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
          <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
          <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
        </menu>
        {!selectedTopic && (<p>Please select a topic</p>) } /// in JS if statement before and is true then it renders the later statemet
        {selectedTopic ? (<div id="tab-content">            //// Please see the github commits changes also 
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
            {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>) : null}
        
        
       </section>
       
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
