import { useState } from 'react';
import './App.css'; // Import external CSS

const App = () => {
    const [flats, setFlats] = useState([
        {
            id: 1,
            name: 'Cozy Apartment',
            location: 'Tampa, FL',
            price: '$2500/month',
            available: true,
            image: 'https://images.unsplash.com/photo-1580785692949-7b5b7fd83d25?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 2,
            name: 'Modern Loft',
            location: 'Midtown',
            price: '$1800/month',
            available: false,
            image: 'https://plus.unsplash.com/premium_photo-1727183904698-7a7963066170?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 3,
            name: 'Charming Studio',
            location: 'Uptown',
            price: '$1200/month',
            available: true,
            image: 'https://images1.apartments.com/i2/hZphNg-0rd4qrMGvEsAfMGV-MyJwT31wns4Pd73TXzs/117/ybor-lofts-tampa-fl-building-photo.jpg?p=1',
        },
        {
            id: 4,
            name: 'Spacious Penthouse',
            location: 'City Center',
            price: '$3000/month',
            available: true,
            image: 'https://www.viragebayshore.com/wp-content/uploads/2017/02/virage-bayshore-luxury-penthouse-interior.jpeg',
        },
        {
            id: 5,
            name: 'Luxury Condo',
            location: 'Riverside',
            price: '$2500/month',
            available: false,
            image: 'https://www.homesandcondostampa.com/images/dynamic/qpf-ImgAquatica-Condo312022-1746301Aquatica-Condo-jpg.jpg',
        },
        {
            id: 6,
            name: 'Urban Flat',
            location: 'Downtown',
            price: '$1700/month',
            available: true,
            image: 'https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/20e6b0a5c0f7b2eec05e1c149ebea378-f_b.jpg',
        },
        {
            id: 7,
            name: 'Garden Apartment',
            location: 'Suburbs',
            price: '$1400/month',
            available: true,
            image: 'https://storage.googleapis.com/download/storage/v1/b/g-green-backend-bucket-1/o/tbhafl%2FGardens_at_South_Bay_Shore32_jpg?alt=media',
        },
        {
            id: 8,
            name: 'Alexandria Garden',
            location: 'Coastal Area',
            price: '$4000/month',
            available: true,
            image: 'https://images1.apartments.com/i2/Fk-Tleu7j-FFZQ3XgZq9jM53DsGLQv-snb0zjJZeZPI/111/alexandria-garden-tampa-fl-firepit.jpg',
        },
    ]);

    const [showForm, setShowForm] = useState(false);
    const [newFlat, setNewFlat] = useState({
        name: '',
        location: '',
        price: '',
        image: '',
        available: false,
    });

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewFlat({
            ...newFlat,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleAddFlat = (e) => {
        e.preventDefault();
        setFlats([
            ...flats,
            {
                ...newFlat,
                id: flats.length + 1,
            },
        ]);
        setNewFlat({
            name: '',
            location: '',
            price: '',
            image: '',
            available: false,
        });
        setShowForm(false);
    };

    return (
        <div className="App">
            <header>
                <h1>SuperFlats</h1>
            </header>
            <main>
                {showForm ? (
                    <div className="form">
                        <div className="title">Add a Flat</div>
                        <div className="subtitle">Enter the details below:</div>

                        <div className="input-container ic1">
                            <input
                                id="name"
                                className="input"
                                type="text"
                                name="name"
                                value={newFlat.name}
                                onChange={handleInputChange}
                                placeholder=" "
                                required
                            />
                            <div className="cut"></div>
                            <label htmlFor="name" className="placeholder">Flat Name</label>
                        </div>

                        <div className="input-container ic2">
                            <input
                                id="location"
                                className="input"
                                type="text"
                                name="location"
                                value={newFlat.location}
                                onChange={handleInputChange}
                                placeholder=" "
                                required
                            />
                            <div className="cut"></div>
                            <label htmlFor="location" className="placeholder">Location</label>
                        </div>

                        <div className="input-container ic2">
                            <input
                                id="price"
                                className="input"
                                type="text"
                                name="price"
                                value={newFlat.price}
                                onChange={handleInputChange}
                                placeholder=" "
                                required
                            />
                            <div className="cut"></div>
                            <label htmlFor="price" className="placeholder">Price</label>
                        </div>

                        <div className="input-container ic2">
                            <input
                                id="image"
                                className="input"
                                type="text"
                                name="image"
                                value={newFlat.image}
                                onChange={handleInputChange}
                                placeholder=" "
                                required
                            />
                            <div className="cut"></div>
                            <label htmlFor="image" className="placeholder">Image URL</label>
                        </div>

                        <div className="checkbox-wrapper-4">
                            <input
                                className="inp-cbx"
                                id="available"
                                type="checkbox"
                                name="available"
                                checked={newFlat.available}
                                onChange={handleInputChange}
                            />
                            <label className="cbx" htmlFor="available">
                                <span>
                                    <svg width="12px" height="10px">
                                        <use xlinkHref="#check-4"></use>
                                    </svg>
                                </span>
                                <span>Available</span>
                            </label>
                            <svg className="inline-svg">
                                <symbol id="check-4" viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </symbol>
                            </svg>
                        </div>


                        <button type="submit" className="submit" onClick={handleAddFlat}>
                            Add Flat
                        </button>
                    </div>
                ) : (
                    <button id="addFlatButton" onClick={toggleForm}>
                        Add Flat
                    </button>
                )}

                <h2>Apartment Homes</h2>
                <ul>
                    {flats.map((flat) => (
                        <li key={flat.id}>
                            <h3>{flat.name}</h3>
                            <p>Location: {flat.location}</p>
                            <p>Price: {flat.price}</p>
                            <p>Availability: {flat.available ? 'Available' : 'Not Available'}</p>
                            <img src={flat.image} alt={flat.name} />
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default App;
