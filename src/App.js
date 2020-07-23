import React, { useState } from 'react';
import About from './components/about'
import Nav from './components/nav'
import Gallery from './components/gallery'
import ContactForm from './components/Contact'
import './App.css';


function App() {
  const [catagoties] = useState([
    {
        name: "commercial",
        description:
         "Photos of grocery stores, food trucks, and other commercial projects"
    },
    { name: "portraits", description: "Portraits of people in my life"},
    { name: "food", description: "Delicious delicacies"},
    {
        name: "landscape",
        description: "Fields, farmhouses, waterfalls, and the beauty of nature"
    }
  ]);
  const [currentCatagory, setCurrentCategory] = useState(catagoties[0])

  return (
    <div>
      <Nav
      catagoties={catagoties}
      setCurrentCategory={setCurrentCategory}
      currentCatagory={currentCatagory}
      ></Nav>
      <main>
        <ContactForm></ContactForm>
        <Gallery currentCategory={currentCatagory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
