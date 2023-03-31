import {useContext} from 'react'
import DataContext from './context/DataContext'

const Header = () => {
    const {employees, selectedTeam} = useContext(DataContext)
    const teamMemberCount = employees.filter(emp => emp.teamName === selectedTeam).length;
    
    return (
        <header className="container">
            <div className="row justify-content-center">
                <div className="col-8">
                    <h1 className="">Team Members Allocation</h1>
                    <h3>{selectedTeam} has {teamMemberCount} members.</h3>
                </div>
            </div>
        </header>
    )

}

export default Header;