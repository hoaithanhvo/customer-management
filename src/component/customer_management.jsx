import { useState } from 'react';
const CustomerForm = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [customers, setCustomers] = useState([]);
    const [showCustomers, setShowCustomers] = useState(false);
    const [error, setError] = useState('');
    const [editCustomerIndex, setEditCustomerIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '' || address.trim() === '' || phone.trim() === '' || email.trim() === '') {
            setError('Please fill in all fields');
            return;
        }
        const customer = { name, address, phone, email };
        if (editCustomerIndex === null) {
            setCustomers([...customers, customer]);
            alert("Đã thêm thành công khách hàng");
            etShowCustomers(false);
        } else {
            const newCustomers = [...customers];
            newCustomers[editCustomerIndex] = customer;
            setCustomers(newCustomers);
            setEditCustomerIndex(null);
        }
        setName('');
        setAddress('');
        setPhone('');
        setEmail('');
        if (!showCustomers) {
            setShowCustomers(true);
        }
    };

    const handleDelete = (index) => {
        const newCustomers = [...customers];
        newCustomers.splice(index, 1);
        setCustomers(newCustomers);
    };

    const handleEdit = (index) => {
        const customerToEdit = customers[index];
        setName(customerToEdit.name);
        setAddress(customerToEdit.address);
        setPhone(customerToEdit.phone);
        setEmail(customerToEdit.email);
        setEditCustomerIndex(index);
    };

    const handleCancelEdit = () => {
        setName('');
        setAddress('');
        setPhone('');
        setEmail('');
        setEditCustomerIndex(null);
    };
    const filteredCustomers = customers.filter(
        (customer) => customer.phone.includes(searchTerm)
    );


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowCustomers(!showCustomers)}>
                    {showCustomers ? "Hide Customers" : "Show Customers"}
                </button>
            </form>
            {error && <p>{error}</p>}
            {customers.length > 0 && showCustomers && (
                <div>
                    <h2>Customers:</h2>
                    {customers.map((customer, index) => (
                        <div key={index}>
                            <h1>{index}</h1>
                            <p>Name: {customer.name}</p>
                            <p>Address: {customer.address}</p>
                            <p>Phone: {customer.phone}</p>
                            <p>Email: {customer.email}</p>
                            <div>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <input onChange={filteredCustomers}></input>

        </div>

    );
};

export default CustomerForm;