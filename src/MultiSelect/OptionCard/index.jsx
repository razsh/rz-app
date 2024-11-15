import './styles.scss';

const OptionCard = ({ value, label }) => {
    return <div className="option-card" value={value}>{label}<span> x</span></div>;
};

export default OptionCard;
