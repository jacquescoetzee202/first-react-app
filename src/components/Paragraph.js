const Paragraph = ({ message }) => (
    <p>{ message }</p>
);

Paragraph.defaultProps = {
    message: "Hello, world"
};

export default Paragraph;