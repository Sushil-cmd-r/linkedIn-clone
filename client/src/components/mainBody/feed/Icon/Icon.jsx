import "./icon.scss";

const Icon = ({ Icon, title, color }) => {
  return (
    <div className="icon">
      <Icon style={{ color: `${color}` }} />
      <h4>{title}</h4>
    </div>
  );
};

export default Icon;
