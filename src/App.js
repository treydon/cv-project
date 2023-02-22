import React from 'react';
import Profile from "./components/profile";

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      profile: {
        userName: 'John Doe',
        email: 'john@gmail.com',
        phone: '416-988-7275'
      },
    }
  }

  render() {
    return (
      <div>
        <h1>Resume</h1>
        <Profile 
          userName={this.state.profile.userName} 
          email={this.state.profile.email} 
          phone={this.state.profile.phone}
        />
      </div>
    );
  }
}

export default App;
