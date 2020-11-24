import BasketItem from "./BasketItem";

const Basket = ({items}) => (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item, index) => (
                <BasketItem price={ item.price } name={ item.name } keyRef={ index } key={index} />
            ))}
        </tbody>
    </table>

);

export default Basket;
