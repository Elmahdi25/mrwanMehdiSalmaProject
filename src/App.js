import  { Component } from 'react';
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
 class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Intro/>
      </div>
    )
  }
}
export default App;
