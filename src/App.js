import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { checked: false };
    this.showContent = this.showContent.bind(this);
  }
  showContent() {
    this.setState({
      // this condition always evaluates to the opposite of current value
      checked: !this.state.checked
      //checked: true,, not working this way
    })
  }
  render() {
    const content = this.state.checked ?
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      : null;
    return (
      <div className="wrapper">
        <label><input type="checkbox" checked={this.state.checked}
          onChange={this.showContent} /> Mostrar información importante</label>
        {content}
      </div>
    );
  }

}

export default App;


// cool code changing the display from blok to none and viceversa
// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super();

//     this.state = { checked: false };
//     this.showContent = this.showContent.bind(this);
//   }
//   showContent() {
//     this.setState({
//       // this condition always evaluates to the opposite of current value
//       checked: !this.state.checked
//       //checked: true,, not working this way
//     })
//   }
//   render() {
//     //const content = this.state.checked ? '' : 'hidden';
//     return (
//       <div className="wrapper">
//         <label><input type="checkbox" checked={this.state.checked}
//           onChange={this.showContent} /> Mostrar información importante</label>
//         <p style={{ display: this.state.checked ? 'block' : 'none' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//       </div>
//     );
//   }

// }

// export default App;