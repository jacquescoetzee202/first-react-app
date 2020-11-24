import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Gif from "./Gif";
import GifDescr from "./GifDescr";



const Stuff = ( {square} ) => (
    <>
        <Header>Hello, world</Header>
        <Paragraph>{ paraContent}</Paragraph>
        {!square ? null :
        <Square colour="red" />
        }
        <People names={nameList} />
        <Header>My App</Header>
        <Paragraph>{ crazyCatPara }</Paragraph>
        <Gif />
        <GifDescr />
    </>
);

export default Stuff;

let paraContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos.";

let crazyCatPara = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius, Lyco, oratione locuples, rebus ipsis ielunior.";

let nameList = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

Stuff.defaultProps = {
    square: true
  }

