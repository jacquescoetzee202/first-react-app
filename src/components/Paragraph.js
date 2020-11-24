const Paragraph = ({ children }) => (
    <p>{ children }</p>
);

Paragraph.defaultProps = {
    message: "Hello, world"
};

export default Paragraph;