// import logo from './logo.svg';
import './App.scss';

import Footer from './components/footer/footer'
import Header from './components/header/header'
import Form from './components/form/form'
import Results from './components/results/results'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      results: ''
    }
  }

  updateUrl = async (value) => {
    await this.setState({url: value})
    console.log(value)
  }

  updateMethod = async (value) => {
    await this.setState({method: value})
    console.log(value)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form updateUrl={this.updateUrl} updateMethod={this.updateMethod}/>
        <Results method={this.state.method} url={this.state.url}/>
        <Footer />
      </div>
    );
  }
}

export default App;
