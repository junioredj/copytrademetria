import {Gauge ,ArrowSquareIn} from 'phosphor-react'
import {Link} from 'react-router-dom'
import { DropdownReports } from './DropdownReports';

export function Navbar(){
    return (
        <nav>
            <div className="container">
                <ul className="nav-links">
                    <li className="nav-item">
                        <Link to="/dashboard">
                            <Gauge size={20} />
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <DropdownReports/>
                    </li>

                    <li className="nav-item">
                        <Link to="/importar">
                            <ArrowSquareIn size={20}/>
                            <span>Importar</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}