import logo from './logo.svg';
import './App.css';
import UserProfile from './components/user-profile/UserProfile';
import ContactLine from './components/contact-line/ContactLine';

function App() {
  return (
    <div className="App">
      {/* <nav className="shadow">
        <h2 className="nav-title">Arunkumar N</h2>
      </nav> */}
      <br/>
      <UserProfile />
      <ContactLine />
      <div className="app-card" style={{height: '500px'}}>
            <h5>Profile loading......</h5>
      </div>
      <br/>
       
    </div>
  );
}

export default App;
