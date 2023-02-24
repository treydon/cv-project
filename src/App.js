import React from 'react';
import Profile from "./components/profile";
import Education from './components/education';
import Experience from './components/experience';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      profile: {
        userName: '',
        email: '',
        phone: '',
      },
      education: [],
      experience: [],
      form: {
        userName: 'John Doe',
        email: 'john@gmail.com',
        phone: '416-988-7275',
        university: 'Ivey Business School',
        degree: 'Honors Business Administration',
        year: '2012',
        company: 'Capco',
        position: 'Senior Consultant',
        start: 'Sept 2015',
        end: 'July 2020',
        description: 'Digital transformation consultant for Financial Institutions',
      }
    }
    this.setUserName = this.setUserName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPhone = this.setPhone.bind(this);
    this.handleProfileSubmit = this.handleProfileSubmit.bind(this);

    this.setUniversity = this.setUniversity.bind(this);
    this.setDegree = this.setDegree.bind(this);
    this.setYear = this.setYear.bind(this);
    this.handleAddDegree = this.handleAddDegree.bind(this);

    this.setCompany = this.setCompany.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.setStart = this.setStart.bind(this);
    this.setEnd = this.setEnd.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
  }

  setUserName (value) {
    //let obj = {userName: value};
    //this.setState({form: obj});

    this.setState(prevState => {
      let form = Object.assign({}, prevState.form);
      form.userName = value;
      return {form};
    });
  }

  setEmail (value) {
    this.setState(prevState => {
      let form = Object.assign({}, prevState.form);
      form.email = value;
      return {form};
    });
  }

  setPhone (value) {
    this.setState(prevState => {
      let form = Object.assign({}, prevState.form);
      form.phone = value;
      return {form};
    });
  }

  setUniversity (value) {
    this.setState(prevState => {
      let form = Object.assign({}, prevState.form);
      form.university = value;
      return {form};
    });
  }

  setDegree (value) {
    this.setState(prevState => {
      let form = Object.assign({}, prevState.form);
      form.degree = value;
      return {form};
    });
  }

  setYear (value) {
    this.setState(prevState => {
      let form = Object.assign({}, prevState.form);
      form.year = value;
      return {form};
    });
  }

  setCompany (value) {
    this.setState(prevState => {
      let form = Object.assign({}, prevState.form);
      form.company = value;
      return {form};
    });
  }
  
  setPosition (value) {
    this.setState(prevState => {
      let form = Object.assign({}, prevState.form);
      form.position = value;
      return {form};
    });
  }
  
  setStart (value) {
    this.setState(prevState => {
      let form = Object.assign({}, prevState.form);
      form.start = value;
      return {form};
    });
  }

  setEnd (value) {
    this.setState(prevState => {
      let form = Object.assign({}, prevState.form);
      form.end = value;
      return {form};
    });
  }

  setDescription (value) {
    this.setState(prevState => {
      let form = Object.assign({}, prevState.form);
      form.description = value;
      return {form};
    });
  }

  handleProfileSubmit (event) {
    event.preventDefault();
    this.setState(prevState => {
      let profile = Object.assign({}, prevState.profile);
      profile.userName = this.state.form.userName;
      profile.email = this.state.form.email;
      profile.phone = this.state.form.phone;
      return {profile};
    });
  }

  handleAddDegree (event) {
    event.preventDefault();
    const newDegree = {id: this.state.education.length+1,
      school: this.state.form.university,
      degree: this.state.form.degree,
      year: this.state.form.year,}
    const newEducation = this.state.education.concat(newDegree);
    this.setState({education: newEducation})
  }

  handleAddExperience (event) {
    event.preventDefault();
    const newRole = {id: this.state.experience.length+1,
      company: this.state.form.company,
      position: this.state.form.position,
      description: this.state.form.description,
      start: this.state.form.start,
      end: this.state.form.end,}
    const newExperience = this.state.experience.concat(newRole);
    this.setState({experience: newExperience})
  }

  render() {
    return (
      <div>
        <h3>Personal Info</h3>
        <form onSubmit={this.handleProfileSubmit}>
          <label>
            Name:
            <input type='text' value={this.state.form.userName} onChange={e => this.setUserName(e.target.value)}/>
          </label><br/>
          <label>
            Email:
            <input type='text' value={this.state.form.email} onChange={e => this.setEmail(e.target.value)}/>
          </label><br/>
          <label>
            Phone:
            <input type='text' value={this.state.form.phone} onChange={e => this.setPhone(e.target.value)}/>
          </label><br/>
          <input type="submit" value="Update" />
        </form>
        <h3>Education Info</h3>
        <form>
        <label>
            University:
            <input type='text' value={this.state.form.university} onChange={e => this.setUniversity(e.target.value)}/>
          </label><br/>
          <label>
            Degree:
            <input type='text' value={this.state.form.degree} onChange={e => this.setDegree(e.target.value)}/>
          </label><br/>
          <label>
            Year:
            <input type='text' value={this.state.form.year} onChange={e => this.setYear(e.target.value)}/>
          </label><br/>
          <button onClick={this.handleAddDegree}>Add</button>
        </form>
        <h3>Experience Info</h3>
        <form>
        <label>
            Company:
            <input type='text' value={this.state.form.company} onChange={e => this.setCompany(e.target.value)}/>
          </label><br/>
          <label>
            Position:
            <input type='text' value={this.state.form.position} onChange={e => this.setPosition(e.target.value)}/>
          </label><br/>
          <label>
            Start:
            <input type='text' value={this.state.form.start} onChange={e => this.setStart(e.target.value)}/>
          </label><br/>
          <label>
            End:
            <input type='text' value={this.state.form.end} onChange={e => this.setEnd(e.target.value)}/>
          </label><br/>
          <label>
            Description:
            <input type='text' value={this.state.form.description} onChange={e => this.setDescription(e.target.value)}/>
          </label><br/>
          <button onClick={this.handleAddExperience}>Add</button>
        </form>
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
      </div>
    );
  }
}

export default App;
