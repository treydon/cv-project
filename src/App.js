import React from 'react';
import Profile from "./components/profile";
import Education from './components/education';
import Experience from './components/experience';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      profile: {
        userName: 'John Doe',
        email: 'john@gmail.com',
        phone: '416-988-7275',
      },
      education: [
        {id: 0,
        school: 'Ivey Business School',
        degree: 'Honors Business Administration',
        year: 2012,},
        {id: 1,
          school: 'University of Western Ontario',
          degree: 'Honors Specialization in Economics',
          year: 2012,},
      ],
      experience: [
        {id: 0,
        company: 'Capco',
        position: 'Senior Consultant',
        description: 'Digital transformation consultant for Financial Institutions.',
        start: 'Sept 2015',
        end: 'July 2020',
        },
        {id: 1,
          company: 'Big Bank',
          position: 'Director',
          description: 'Leader for Digital Product Development',
          start: 'July 2020',
          end: 'Present',
          },
      ]   
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
        <Education
          education={this.state.education}
        />
        <Experience
          experience={this.state.experience}
        />
      </div>
    );
  }
}

export default App;
