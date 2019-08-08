import React from 'react';
import Form from './User/Form';

class App extends React.Component {

  submit(values) {
    alert('Your details have been successfuly submitted!')
    console.log(values);
  }

  render() {
    return (
      <div className="container">
        <h3 className="jumbotron "> Validation form </h3>
        <Form 
          onSubmit={this.submit} 
        />
      </div>
      
    )
  }
}



export default App;