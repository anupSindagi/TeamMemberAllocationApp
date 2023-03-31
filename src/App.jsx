import './App.css'
import Header from './Header.jsx'
import Employees from './Employees.jsx'
import Footer from './Footer.jsx'
import Nav from './Nav.jsx'
import NotFound from './NotFound.jsx'
import GroupedTeamMembers from './GroupedTeamMembers.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

export default function App() {
    return (
        <DataProvider>
            <Router>
                <Nav />
                <Header />
                <Routes>
                    <Route path="/" element={<Employees/>}>
                    </Route>
                    <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers />}>
                    </Route>
                    <Route path="*" element={<NotFound />}>
                    </Route>
                </Routes>
                <Footer />
            </Router>
        </DataProvider>

    )
}
