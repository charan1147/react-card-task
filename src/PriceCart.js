import './App.css';


const PriceCart = ({ title, price, features }) => {
    return (
        <div className="card">
            <p className="card-title">{title}</p>
            <h3 className="card-price">{price}</h3>
            <hr />
            <ul className="features-list">
                {features.map((item) => (
                    
                    <p key={item.feature} className={item.available ? 'available' : 'unavailable'}>
                        {item.available ? String.fromCharCode(10003) : String.fromCharCode(10006)} {item.feature}
                    </p>
                ))}
            </ul>
            <button className="card-button">Button</button>
        </div>
    );
};

export default PriceCart;
