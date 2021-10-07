import logo from './logo.svg';
import './App.css';
import UserProfile from './components/user-profile/UserProfile';

function App() {
  return (
    <div >
      {/* <nav className="shadow">
        <h2 className="nav-title">Arunkumar N</h2>
      </nav> */}
      <div className="App flex-display">
        <div className="flex-left-item">
          <UserProfile />
        </div>
        <div className="flex-right-item">
          <div className="app-card" style={{height: '500px'}}>
            <h5>Profile loading......</h5>
          </div>
        </div>
      </div>
      
       
    </div>
  );
}

export default App;
