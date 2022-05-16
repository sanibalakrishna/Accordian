import {useState} from 'react';
import './App.css';
function Content(props)
{
  if(props.present===true)
  {
    return(<div><h1 className="content">{props.text}</h1></div>);
  }
}
function Accodian(props){
  const [first,setFirst]=useState(false);
  return( 
  <div className="Accodian">
      <div className="Accodian-items">
        <h1>{props.text}</h1>
        <button className="button" onClick={()=>{(first===true)?setFirst(false):setFirst(true);}}>{(first===true)?"-":"+"}</button>
       </div>
       <Content  present={first} text={props.info} />
  </div>  
       );

}
function App() {
 
  return (
    <div className="App">
      <div className="Accodian-main">
        <div className="Accodian-list">
        <Accodian text="Introduction" info="The’react-jss’ integrates JSS with react app to style components. It helps to write CSS with Javascript and allows us to describe styles in a more descriptive way. It uses javascript objects to describe styles in a declarative way using ‘createUseStyles’ method of react-jss and incorporate those styles in functional components using className attribute.The’react-jss’ integrates JSS with react app to style components. It helps to write CSS with Javascript and allows us to describe styles in a more descriptive way. It uses javascript objects to describe styles in a declarative way using ‘createUseStyles’ method of react-jss and incorporate those styles in functional components using className attribute." />
        </div>
        
      
      </div>
    </div>
  );
}

export default App;
