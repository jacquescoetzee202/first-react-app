const People = ({ names }) => (
    <>
        { !names ? <p>Nothing to see here</p> : 
            <ul className="list-group">
                {names.map((name, index) => (
                    <li key={ index } className="list-group-item">
                        {name}
                    </li>
                ))}
            </ul>
        }
    </>
);

export default People;