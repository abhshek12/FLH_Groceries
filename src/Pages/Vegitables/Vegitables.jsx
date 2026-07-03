import React, { useState } from 'react';
// import VegetableCard from './VegetableCard';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// Simulated API Data Structure
const VEGETABLE_DATA = [
  { id: 1, name: 'Fresh Tomato', price: 40, category: 'Organic', isAvailable: true, image: 'https://unsplash.com' },
  { id: 2, name: 'Organic Potato', price: 30, category: 'Root', isAvailable: true, image: 'https://unsplash.com' },
  { id: 3, name: 'Broccoli', price: 120, category: 'Organic', isAvailable: false, image: 'https://unsplash.com' },
  { id: 4, name: 'Red Onions', price: 45, category: 'Root', isAvailable: true, image: 'https://unsplash.com' },
  { id: 5, name: 'Green Spinach', price: 25, category: 'Leafy', isAvailable: true, image: 'https://unsplash.com' },
  { id: 6, name: 'Carrot', price: 60, category: 'Root', isAvailable: true, image: 'https://unsplash.com' }
];

function VegetablesPage() {
  // State Management
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);

  // Event Handler: Capturing input data (Controlled Component pattern)
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Action Handler: Triggering Toast Message on click [4]
  const handleAddToCart = (product) => {
    setCartCount(prevCount => prevCount + 1);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // 🚀 Logic: Chaining .filter() to handle search and category dropdown simultaneously
  const filteredVegetables = VEGETABLE_DATA.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-5">
      {/* Toast Notification Container init */}
      {/* <ToastContainer /> */}

      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
        <h2 className="fw-bold text-success">🥦 Fresh Vegetables Market</h2>
        <div className="position-relative fs-5 fw-bold text-dark">
          🛒 Cart: <span className="badge bg-danger rounded-pill">{cartCount}</span>
        </div>
      </div>

      {/* Control Panel: Filters and Search Input */}
      <div className="row g-3 mb-5">
        <div className="col-md-6">
          <input 
            type="text" 
            className="form-control form-control-lg border-success"
            placeholder="Search fresh vegetables (e.g., Potato)..." 
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-3">
          <select 
            className="form-select form-select-lg border-success"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Organic">Organic</option>
            <option value="Root">Root Vegetables</option>
            <option value="Leafy">Leafy Greens</option>
          </select>
        </div>
      </div>

      {/* Grid rendering via .map() */}
      <div className="row">
        {/* {filteredVegetables.length > 0 ? (
          filteredVegetables.map((veg) => (
            <VegetableCard 
              key={veg.id} 
              item={veg} 
              onAddToCart={handleAddToCart} 
            />
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h4 className="text-muted">No vegetables match your search criteria.</h4>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default VegetablesPage;
