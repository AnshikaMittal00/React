
import useAddress from '../utils/useAddress';
const Address=()=>{
    const {
    savedAddresses,
    isModalOpen,
    setIsModalOpen,
    showForm,
    setShowForm,
    Icon,
    selectedAddress,
    newAddress,
    handleSelectAddress,
    handleFormChange,
    handleSaveAddress
  }=useAddress();
    return (
            <div className="p-2 m-2  bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-md font-semibold text-left text-pink-600 mb-2">Shipping Address</h2>
            {selectedAddress ? (
                <div className="p-2 border-2 border-pink-500 bg-pink-50 rounded-lg">
                    <p className="font-semibold">{selectedAddress.line1}</p>
                    <p>{selectedAddress.city}, {selectedAddress.state} {selectedAddress.zip}</p>
                    <p className="text-sm mt-1">{selectedAddress.type}</p>
                    <button onClick={() => setIsModalOpen(true)} className="mt-4 text-sm font-semibold text-pink-600 hover:text-pink-800 transition-colors">
                        Change Address
                    </button>
                </div>
            ) : (
                <button onClick={() => setIsModalOpen(true)} className="w-full bg-pink-100 text-pink-600 py-3 px-4 rounded-lg hover:bg-pink-800 hover:text-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition-transform transform hover:scale-110">
                    Select An Address
                </button>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-lg font-bold text-pink-600">{showForm ? 'Add a New Address' : 'Select an Address'}</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-pink-600 hover:text-pink-800">
                                <Icon path="M6.28 5.22a.75.75 0 00-1.06 1.06L10.94 12l-5.72 5.72a.75.75 0 101.06 1.06L12 13.06l5.72 5.72a.75.75 0 101.06-1.06L13.06 12l5.72-5.72a.75.75 0 00-1.06-1.06L12 10.94 6.28 5.22z" />
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto">
                            
                                {showForm ? (
                <form onSubmit={handleSaveAddress} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
                    <input type="text" name="line1" value={newAddress.line1} onChange={handleFormChange} className="mt-1 block w-full px-3 py-2 bg-white border border-pink-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">City</label>
                      <input type="text" name="city" value={newAddress.city} onChange={handleFormChange} className="mt-1 block w-full px-3 py-2 bg-white border border-pink-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">State</label>
                      <input type="text" name="state" value={newAddress.state} onChange={handleFormChange} className="mt-1 block w-full px-3 py-2 bg-white border border-pink-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                  </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                      <input type="text" name="zip" value={newAddress.zip} onChange={handleFormChange} className="mt-1 block w-full px-3 py-2 bg-white border border-pink-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Address Type</label>
                      <select name="type" value={newAddress.type} onChange={handleFormChange} className="mt-1 block w-full px-3 py-2 bg-white border border-pink-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                        <option>Home</option>
                        <option>Work</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-end space-x-4 pt-4">
                    <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                      Back to list
                    </button>
                    <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-pink-700">
                      Save Address
                    </button>
                  </div>
                </form>
                            ) : (
                                <div className="space-y-3">
                                    {savedAddresses.map(address => (
                                        <div key={address.id} onClick={() => handleSelectAddress(address)} className="p-4 border border-pink-600 rounded-lg cursor-pointer hover:bg-pink-50 transition-all">
                                            <p className="font-semibold text-gray-800">{address.line1}</p>
                                            <p className="text-gray-600">{address.city}, {address.state} {address.zip}</p>
                                            <p className="text-sm text-gray-500 mt-1">{address.type}</p>
                                        </div>
                                    ))}
                                    <button onClick={() => setShowForm(true)} className="w-full mt-4 flex items-center justify-center space-x-2 border-2 border-dashed border-pink-300 text-gray-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-colors">
                                        <Icon path="M12 4.5a.75.75 0 01.75.75v6h6a.75.75 0 010 1.5h-6v6a.75.75 0 01-1.5 0v-6h-6a.75.75 0 010-1.5h6v-6A.75.75 0 0112 4.5z" className="w-5 h-5" />
                                        <span>Add a New Address</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
  );
};
export default Address;
