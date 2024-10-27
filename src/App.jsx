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

  let tabcontent = <p>Please select a topic</p>;

  if(selectedTopic)
  {
    tabcontent = <div id="tab-content">           
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
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
          <TabButton isSelected = {selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButton>
          <TabButton isSelected = {selectedTopic === 'jsx'}  onSelect={() => handleSelect("jsx")}>JSX</TabButton>
          <TabButton isSelected = {selectedTopic === 'props'}  onSelect={() => handleSelect("props")}>Props</TabButton>
          <TabButton isSelected = {selectedTopic === 'state'}  onSelect={() => handleSelect("state")}>State</TabButton>
        </menu>


        {tabcontent}
        
        
       </section>
       
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
