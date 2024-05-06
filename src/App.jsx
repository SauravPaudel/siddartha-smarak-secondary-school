import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Popup from './components/global/Popup'
import Topbar from './components/global/Topbar'
import Navbar from './components/global/Navbar'
import Main from './pages/Main'
import Books from './pages/Books'
import About from './pages/About'
import Contact from './pages/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const App = () => {

  return (
    <>
      <Router>
        <Topbar />
        <Navbar />
        <Popup />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Books' component={Books} />
          <Route exact path='/Contact' component={Contact} />
        </Switch>
      </Router>
    </>
  )
}

export default App