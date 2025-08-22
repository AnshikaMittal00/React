import  { useState } from 'react';
const useAddress=()=>{
    
        const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d={path} clipRule="evenodd" />
  </svg>
);

  const [savedAddresses, setSavedAddresses] = useState([
    { id: 1, line1: "123 Evergreen Terrace", city: "Springfield", state: "IL", zip: "62704", type: "Home" },
    { id: 2, line1: "456 Main Street", city: "Metropolis", state: "NY", zip: "10001", type: "Work" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({ line1: '', city: '', state: '', zip: '', type: 'Home' });

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
    setIsModalOpen(false);
    setShowForm(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    if (!newAddress.line1 || !newAddress.city || !newAddress.state || !newAddress.zip) {
      alert("Please fill out all fields.");
      return;
    }
    const newId = savedAddresses.length > 0 ? Math.max(...savedAddresses.map(a => a.id)) + 1 : 1;
    const addressToAdd = { id: newId, ...newAddress };
    
    setSavedAddresses(prev => [...prev, addressToAdd]);
    setShowForm(false);
    setNewAddress({ line1: '', city: '', state: '', zip: '', type: 'Home' });
  };
    return  {
    savedAddresses,
    isModalOpen,
    setIsModalOpen,
    showForm,
    Icon,
    setShowForm,
    selectedAddress,
    newAddress,
    handleSelectAddress,
    handleFormChange,
    handleSaveAddress
  };


}
export default useAddress;