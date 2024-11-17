import './App.css';
import PriceCart from './PriceCart';

function App() {
    const Packs = [
        {
            title: 'FREE',
            price: '$0/month',
            features: [
                { feature: 'Single User', available: true },
                { feature: '50GB Storage', available: true },
                { feature: 'Unlimited Public Projects', available: true },
                { feature: 'Community Access', available: true },
                { feature: 'Unlimited Private Projects', available: false },
                { feature: 'Dedicated Phone Support', available: false },
                { feature: 'Free Subdomain', available: false },
                { feature: 'Monthly Status Reports', available: false },
            ],
        },
        {
            title: 'PLUS',
            price: '$9/month',
            features: [
                { feature: '5 Users', available: true },
                { feature: '50GB Storage', available: true },
                { feature: 'Unlimited Public Projects', available: true },
                { feature: 'Community Access', available: true },
                { feature: 'Unlimited Private Projects', available: true },
                { feature: 'Dedicated Phone Support', available: true },
                { feature: 'Free Subdomain', available: true },
                { feature: 'Monthly Status Reports', available: false },
            ],
        },
        {
            title: 'PRO',
            price: '$49/month',
            features: [
                { feature: 'Unlimited Users', available: true },
                { feature: '50GB Storage', available: true },
                { feature: 'Unlimited Public Projects', available: true },
                { feature: 'Community Access', available: true },
                { feature: 'Unlimited Private Projects', available: true },
                { feature: 'Dedicated Phone Support', available: true },
                { feature: 'Free Subdomain', available: true },
                { feature: 'Monthly Status Reports', available: true },
            ],
        },
    ];

    return (
        <div className="App">
              <div className="app">
            {Packs.map((pack,index) => (
                <PriceCart key={index}  title={pack.title} price={pack.price} features={pack.features} />
            ))}
        </div>
        </div>
    );
}

export default App;
