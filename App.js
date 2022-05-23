//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';

function App() {
  return (
    <div className="App">
      <Greet fname ="Bruce" lname ="Batman"/>
      <p>This is children props</p>
      <Welcome fname ="Bruce" lname ="Batman"/>
      <Welcome fname ="Clark" lname ="Superman"/>
      <Hello/>
      <Message/>
      <Counter/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      <ParentComponent/> 
      <UserGreeting/>
      <NameList/>
      <Stylesheet primary ={false}/>
    </div>
  );
}

export default App;
