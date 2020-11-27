import { Link } from "react-router-dom";

const Footer = () => (
    <ul className="list-group">
        <li className="list-group-item">
            <Link to="/">Home</Link>
        </li>
        <li className="list-group-item">
            <Link to="/lists">List Tools</Link>
        </li>
        <li className="list-group-item">
            <Link to="/form-checker">Form Tools</Link>
        </li>
        <li className="list-group-item">
            <Link to="/temp-converter">Temperature Converter</Link>
        </li>
        <li className="list-group-item">
            <Link to="/text-toggle/poo">Toggle Text</Link>
        </li>
        <li className="list-group-item">
            <Link to="/die/6">Roll the Die!</Link>
        </li>
        <li className="list-group-item">
            <Link to="/bootstrapped">Bootstrap React Components</Link>
        </li>
    </ul>
);

export default Footer;