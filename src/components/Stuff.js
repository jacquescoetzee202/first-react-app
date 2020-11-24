import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Gif from "./Gif";
import GifDescr from "./GifDescr";
import Basket from "./Basket";
import Clicked from "./state/Clicked";
import ToggleText from "./state/ToggleText";
import Counter from "./state/Counter";



const Stuff = ( {square} ) => (
    <>
        <Header>Hello, world</Header>
        <Paragraph>{ paraContent}</Paragraph>
        {!square ? null :
        <Square colour="hotpink" />
        }
        <People names={nameList} />
        <Basket items={ items } />
        <Clicked />
        <ToggleText initial="Hello" alternate="World" />
        <Counter initial={ 50 } max={ 100 } />
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

let items = [
    { name: "Coffee", price: 2.10 },
    { name: "Bananas", price: 3.50 },
    { name: "Milk", price: 250.65 },
    { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
];

Stuff.defaultProps = {
    square: true
  }

