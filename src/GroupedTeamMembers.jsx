import { useContext } from 'react';
import DataContext from './context/DataContext';

const GroupedTeamMembers = () => {
    const {employees, selectedTeam, setTeam} = useContext(DataContext)
    
    function handleTeamSelect(event) {
        console.log(event.currentTarget.innerText)
        setTeam(event.currentTarget.innerText.replace(/ /g,''))
    }
    return (
        <main className="container">
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header ">
                                <button className={selectedTeam === "TeamA" ? "accordion-button d-block text-center accordion-collapse " : "accordion-button d-block text-center accordion-collapse collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded={selectedTeam === "TeamA" ? "true" : "false"} aria-controls="panelsStayOpen-collapseOne" onClick={handleTeamSelect}>
                                    Team A
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className={selectedTeam === "TeamA" ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                <div className="accordion-body">
                                    {employees.filter(emp => emp.teamName === "TeamA").map(emp => <div key={emp.id}>
                                        <p key={emp.id}><strong>{emp.fullName}</strong></p>
                                        <p>Designation: {emp.designation}</p>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className={selectedTeam === "TeamB" ? "accordion-button d-block text-center accordion-collapse " : "accordion-button d-block text-center accordion-collapse collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded={selectedTeam === "TeamA" ? "true" : "false"} aria-controls="panelsStayOpen-collapseTwo" onClick={handleTeamSelect}>
                                    Team B
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className={selectedTeam === "TeamB" ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                <div className="accordion-body">
                                    {employees.filter(emp => emp.teamName === "TeamB").map(emp => <div key={emp.id}>
                                        <p key={emp.id}><strong>{emp.fullName}</strong></p>
                                        <p>Designation: {emp.designation}</p>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className={selectedTeam === "TeamC" ? "accordion-button d-block text-center accordion-collapse " : "accordion-button d-block text-center accordion-collapse collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded={selectedTeam === "TeamA" ? "true" : "false"} aria-controls="panelsStayOpen-collapseThree" onClick={handleTeamSelect}>
                                    Team C
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className={selectedTeam === "TeamC" ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                <div className="accordion-body">
                                    {employees.filter(emp => emp.teamName === "TeamC").map(emp => <div key={emp.id}>
                                        <p key={emp.id}><strong>{emp.fullName}</strong></p>
                                        <p>Designation: {emp.designation}</p>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className={selectedTeam === "TeamD" ? "accordion-button d-block text-center accordion-collapse " : "accordion-button d-block text-center accordion-collapse collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded={selectedTeam === "TeamA" ? "true" : "false"} aria-controls="panelsStayOpen-collapseFour" onClick={handleTeamSelect}>
                                    Team D
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className={selectedTeam === "TeamD" ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                <div className="accordion-body">
                                    {employees.filter(emp => emp.teamName === "TeamD").map(emp => <div key={emp.id}>
                                        <p><strong>{emp.fullName}</strong></p>
                                        <p>Designation: {emp.designation}</p>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )

}

export default GroupedTeamMembers;