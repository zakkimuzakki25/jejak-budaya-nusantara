import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" component={< Home/>} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App
