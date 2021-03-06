import styled from 'styled-components';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {Home, About, NotFound, Community, Schedule, Login, SignUp} from './pages';
import Header from '../containers/Header.jsx';

const MainRouter = () =>{
    return(
        <Router>
            <Header/>
            <WebPage>
                <Switch>
                    <Route exact path = "/" component={Home}/>
                    <Route path = "/about" component={About}/>
                    <Route path="/community" component={Community}/>
                    <Route path="/schedule" component={Schedule}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signUp" component={SignUp}/>
                    <Route component ={NotFound}/>
                </Switch>
            </WebPage>
        </Router>
    )
}

const WebPage = styled.div`
    padding-top:55px;
`
export default MainRouter;