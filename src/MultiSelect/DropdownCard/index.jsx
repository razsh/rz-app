import './styles.scss';

const DropdownCard = ({ value, label }) => {
    const handleClick = () => {
        console.log(value, label);
    }

    return <div className="dropdown-card" role="button" onClick={handleClick}>{label}</div>;
}

export default DropdownCard;
