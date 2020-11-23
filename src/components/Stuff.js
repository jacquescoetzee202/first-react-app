import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Gif from "./Gif";
import Header2 from "./Header2";
import GifDescr from "./GifDescr";

let paraContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos.";

const Stuff = () => (
    <>
        <Header text="Hello, world"/>
        <Paragraph message={ paraContent } />
        <Square />
        <People />
        <Header2 />
        <Gif />
        <GifDescr />
    </>
);



export default Stuff;