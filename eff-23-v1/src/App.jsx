// App.js
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Composant1 from './Composant1';
import Composant2 from './Composant2';

function App() {
    const [salaries, setSalaries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/salaries')
            .then(response => response.json())
            .then(data => setSalaries(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <Router>
            <div>
                <h1>Application</h1>
                <nav>
                    <Link to="/composant1">Gestion Voitures</Link>
                    <Link to="/composant2">Recherche par Service</Link>
                </nav>
                <Routes>
                    <Route path="/composant1" element={<Composant1 salaries={salaries} />} />
                    <Route path="/composant2" element={<Composant2 salaries={salaries} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
