import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Credits from './components/Credits';
import Debits from './components/Debits';
import accountBalance from './components/AccountBalance';


class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      debit: [],
      credit: []
    }
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const DebitComponent = () => (<Debits debits={this.state.debits} balance={accountBalance} />)
    const CreditComponent = () => (<Credits credits={this.state.credits} balance={accountBalance} {...this.props} />)

    return (
        <Router>
          <Switch>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/debits" render={DebitComponent}/>
            <Route exact path="/credits" render={CreditComponent}/>
          </Switch>
        </Router>
    );
  }

}

export default App;