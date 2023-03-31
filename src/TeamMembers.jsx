import TeamMemberCard from './TeamMemberCard.jsx';
import { useContext } from 'react';
import DataContext from './context/DataContext';

const TeamMembers = () => {
    const { employees } = useContext(DataContext);
    return (
        employees.map(emp => (
            <TeamMemberCard key={emp.id}  emp={emp}/>
        ))
    );
}
export default TeamMembers;