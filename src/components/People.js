let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => (
    <ul className="list-group">
        {names.map((name, index) => (
            <li key={ index } className="list-group-item">
                {name}
            </li>
        ))}
    </ul>
);

export default People;