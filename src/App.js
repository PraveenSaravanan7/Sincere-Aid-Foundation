import './App.css'
import {Switch, Route, Redirect } from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {AboutusPage} from './pages/AboutusPage'
import { GalleryPage } from "./pages/GalleryPage";

function App() {
  return (
    <div className="m-auto app-div" >
    <Switch  >
      <Route exact path={["/","/home"]} component={HomePage}></Route>
      <Route exact path="/aboutus" component={AboutusPage}></Route>
      <Route exact path="/gallery" component={GalleryPage}></Route>
    </Switch>
    </div>
  );
}

export default App;
