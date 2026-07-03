import React from 'react';
import { FiSearch, FiStar, FiClock, FiCheck, FiGift, FiPackage, FiHeart } from 'react-icons/fi';
import { BsCartPlus, BsCartCheck, BsPlus, BsDash } from 'react-icons/bs';
import { GiShoppingBag } from 'react-icons/gi';

const GroceryKits = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [cart, setCart] = React.useState({});
  const [addedItems, setAddedItems] = React.useState({});
  const [selectedKit, setSelectedKit] = React.useState(null);
  const [showDetailModal, setShowDetailModal] = React.useState(false);
  const [showCartModal, setShowCartModal] = React.useState(false);
  const [wishlist, setWishlist] = React.useState([]);

  const groceryKits = [
    { 
      id: 301, 
      name: 'Starter Grocery Kit', 
      price: 29.99, 
      originalPrice: 49.99, 
      image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=400&h=400&fit=crop', 
      unit: 'Kit', 
      weight: 'Complete Set', 
      badge: 'Save 40%', 
      category: 'Essential',
      description: 'Perfect for beginners or emergency supplies. Includes all basic grocery essentials for a week.', 
      items: [
        'Premium Basmati Rice - 1kg',
        'Toor Dal - 500g',
        'Complete Spices Set - 7 pcs',
        'Refined Cooking Oil - 1L',
        'Iodized Salt - 500g',
        'Organic Sugar - 500g',
        'Wheat Flour - 2kg',
        'Tea Bags - 25 pcs'
      ], 
      includes: ['All essential pantry items', 'Perfect for 2-3 people', 'Lasts 1-2 weeks'],
      origin: 'Premium Quality', 
      stock: 100,
      rating: 4.5,
      reviews: 128,
      deliveryTime: '30-40 min',
      isVeg: true,
      savings: 'Save ₹1700'
    },
    { 
      id: 302, 
      name: 'Premium Grocery Hamper', 
      price: 59.99, 
      originalPrice: 89.99, 
      image: 'https://images.unsplash.com/photo-1592417817038-d13fd7342603?w=400&h=400&fit=crop', 
      unit: 'Hamper', 
      weight: 'Deluxe Set', 
      badge: 'Limited', 
      category: 'Premium',
      description: 'Luxury grocery collection featuring organic and premium quality products.', 
      items: [
        'Organic Basmati Rice - 2kg',
        'Organic Dal Set - 3 varieties',
        'Premium Organic Spices - 10 pcs',
        'Cold Pressed Coconut Oil - 1L',
        'Organic Rock Salt - 500g',
        'Organic Jaggery - 500g',
        'Raw Honey - 250g',
        'Premium Dry Fruits - 500g mix'
      ], 
      includes: ['100% Organic products', 'Premium quality ingredients', 'Beautiful gift packaging'],
      origin: 'Organic Farms', 
      stock: 50,
      rating: 4.8,
      reviews: 89,
      deliveryTime: '45-60 min',
      isVeg: true,
      savings: 'Save ₹2550'
    },
    { 
      id: 303, 
      name: 'Breakfast Essential Kit', 
      price: 24.99, 
      originalPrice: 39.99, 
      image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=400&fit=crop', 
      unit: 'Kit', 
      weight: '7 Days', 
      badge: 'Popular', 
      category: 'Breakfast',
      description: 'Start your day right with our healthy breakfast essentials bundle.', 
      items: [
        'Rolled Oats - 500g',
        'Cornflakes - 300g',
        'Natural Peanut Butter - 340g',
        'Mixed Fruit Jam - 400g',
        'Organic Honey - 250g',
        'Whole Wheat Bread - 400g',
        'Granola - 300g',
        'Chia Seeds - 200g'
      ], 
      includes: ['Healthy breakfast options', 'Quick to prepare', 'Nutritious ingredients'],
      origin: 'Natural & Organic', 
      stock: 75,
      rating: 4.6,
      reviews: 203,
      deliveryTime: '25-35 min',
      isVeg: true,
      savings: 'Save ₹1275'
    },
    { 
      id: 304, 
      name: 'Indian Cooking Essentials', 
      price: 39.99, 
      originalPrice: 59.99, 
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop', 
      unit: 'Kit', 
      weight: 'Spice Kit', 
      badge: 'Bestseller', 
      category: 'Cooking',
      description: 'Everything you need for authentic Indian cooking.', 
      items: [
        'Turmeric Powder - 200g',
        'Red Chili Powder - 200g',
        'Cumin Seeds - 200g',
        'Coriander Powder - 200g',
        'Garam Masala - 100g',
        'Mustard Seeds - 100g',
        'Fenugreek Seeds - 100g',
        'Complete Masala Dabba - 1 box'
      ], 
      includes: ['Traditional Indian spices', 'Stainless steel masala box', 'Recipe booklet'],
      origin: 'Authentic Indian Spices', 
      stock: 120,
      rating: 4.9,
      reviews: 456,
      deliveryTime: '35-45 min',
      isVeg: true,
      savings: 'Save ₹1700'
    },
    { 
      id: 305, 
      name: 'Healthy Living Kit', 
      price: 45.99, 
      originalPrice: 69.99, 
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop', 
      unit: 'Kit', 
      weight: 'Wellness', 
      badge: 'Wellness', 
      category: 'Health',
      description: 'Curated for health-conscious individuals.', 
      items: [
        'Quinoa - 500g',
        'Brown Rice - 1kg',
        'Mixed Seeds - 300g',
        'Cold Pressed Olive Oil - 500ml',
        'Apple Cider Vinegar - 500ml',
        'Matcha Green Tea - 50g',
        'Almonds - 250g',
        'Walnuts - 250g'
      ], 
      includes: ['Low glycemic foods', 'Rich in antioxidants', 'Heart-healthy'],
      origin: 'Organic & Natural', 
      stock: 60,
      rating: 4.7,
      reviews: 167,
      deliveryTime: '40-50 min',
      isVeg: true,
      savings: 'Save ₹2040'
    },
    { 
      id: 306, 
      name: 'Baking Master Kit', 
      price: 34.99, 
      originalPrice: 54.99, 
      image: 'https://images.unsplash.com/photo-1589985270959-6d87eaa30a18?w=400&h=400&fit=crop', 
      unit: 'Kit', 
      weight: 'Baking', 
      badge: 'New', 
      category: 'Baking',
      description: 'Everything you need to start baking delicious treats.', 
      items: [
        'All-Purpose Flour - 2kg',
        'Baking Powder - 100g',
        'Baking Soda - 100g',
        'Vanilla Extract - 30ml',
        'Cocoa Powder - 200g',
        'Powdered Sugar - 500g',
        'Butter - 500g',
        'Baking Paper - 1 roll'
      ], 
      includes: ['Premium baking ingredients', 'Recipe card included', 'Perfect for beginners'],
      origin: 'Premium Quality', 
      stock: 85,
      rating: 4.4,
      reviews: 92,
      deliveryTime: '30-40 min',
      isVeg: true,
      savings: 'Save ₹1700'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Kits', icon: '📦', color: 'success' },
    { id: 'Essential', name: 'Essential', icon: '🏠', color: 'primary' },
    { id: 'Premium', name: 'Premium', icon: '💎', color: 'info' },
    { id: 'Breakfast', name: 'Breakfast', icon: '🍳', color: 'warning' },
    { id: 'Cooking', name: 'Cooking', icon: '🍲', color: 'danger' },
    { id: 'Health', name: 'Health', icon: '💪', color: 'secondary' },
    { id: 'Baking', name: 'Baking', icon: '🎂', color: 'pink' }
  ];

  const filteredKits = React.useMemo(() => {
    let filtered = groceryKits;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(kit => kit.category === selectedCategory);
    }
    if (searchTerm) {
      filtered = filtered.filter(kit =>
        kit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        kit.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [searchTerm, selectedCategory]);

  const addToCart = (id, fromModal = false) => {
    setAddedItems(prev => ({ ...prev, [id]: true }));
    setCart(prev => {
      const newCart = { ...prev };
      newCart[id] = (newCart[id] || 0) + 1;
      return newCart;
    });
    
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [id]: false }));
    }, 1000);

    if (fromModal) {
      setTimeout(() => {
        setShowDetailModal(false);
        setSelectedKit(null);
      }, 500);
    }
  };

  const updateQuantity = (id, change) => {
    setCart(prev => {
      const newCart = { ...prev };
      const newQuantity = (newCart[id] || 0) + change;
      
      if (newQuantity <= 0) {
        delete newCart[id];
      } else {
        newCart[id] = newQuantity;
      }
      return newCart;
    });
  };

  const getItemQuantity = (id) => cart[id] || 0;
  
  const getCartTotal = () => {
    return Object.entries(cart).reduce((sum, [id, qty]) => {
      const kit = groceryKits.find(k => k.id === parseInt(id));
      return sum + (kit ? kit.price * 85 * qty : 0);
    }, 0);
  };

  const getCartItemsCount = () => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  };

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(itemId => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  // Add CSS animations
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes slideInRight {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
      }
      .card-hover {
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .card-hover:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
      }
      .category-btn {
        transition: all 0.3s;
        white-space: nowrap;
      }
      .category-btn:hover {
        transform: translateY(-2px);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Detail Modal Component
  const DetailModal = () => {
    if (!selectedKit) return null;
    
    return (
      <div className="modal show d-block" style={{ 
        backgroundColor: 'rgba(0,0,0,0.8)', 
        zIndex: 1100,
        animation: 'fadeIn 0.3s ease'
      }} onClick={() => {
        setShowDetailModal(false);
        setSelectedKit(null);
      }}>
        <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content" style={{ animation: 'slideUp 0.3s ease' }}>
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  setShowDetailModal(false);
                  setSelectedKit(null);
                }}
              ></button>
            </div>
            <div className="modal-body p-4">
              <div className="row">
                <div className="col-md-5">
                  <img 
                    src={selectedKit.image} 
                    alt={selectedKit.name}
                    className="img-fluid rounded"
                    style={{ objectFit: 'cover', height: '300px', width: '100%' }}
                  />
                </div>
                <div className="col-md-7">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h2 className="h3 mb-0">{selectedKit.name}</h2>
                    <button
                      onClick={() => toggleWishlist(selectedKit.id)}
                      className="btn btn-link text-decoration-none"
                      style={{ fontSize: '24px', color: wishlist.includes(selectedKit.id) ? '#ff4757' : '#ccc' }}
                    >
                      {wishlist.includes(selectedKit.id) ? '❤️' : '🤍'}
                    </button>
                  </div>
                  
                  <div className="d-flex gap-2 mb-3 flex-wrap">
                    <span className="badge bg-success">{selectedKit.weight}</span>
                    <span className="badge bg-warning text-dark">In Stock: {selectedKit.stock}</span>
                    <span className="badge bg-info">
                      <FiClock className="me-1" size={12} /> {selectedKit.deliveryTime}
                    </span>
                  </div>
                  
                  <p className="text-muted mb-4">{selectedKit.description}</p>
                  
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2"><FiPackage className="me-2" /> What's inside:</h6>
                    <div className="row">
                      {selectedKit.items.map((item, idx) => (
                        <div key={idx} className="col-6 mb-2">
                          <small className="text-muted">
                            <FiCheck className="text-success me-1" size={12} /> {item}
                          </small>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2"><FiGift className="me-2" /> Includes:</h6>
                    <div className="d-flex gap-2 flex-wrap">
                      {selectedKit.includes.map((item, idx) => (
                        <span key={idx} className="badge bg-light text-dark">{item}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                    <div>
                      <span className="h2 text-success mb-0">₹{(selectedKit.price * 85).toFixed(2)}</span>
                      <span className="text-muted text-decoration-line-through ms-2">₹{(selectedKit.originalPrice * 85).toFixed(2)}</span>
                      <div className="small text-danger">{selectedKit.savings}</div>
                    </div>
                    
                    {getItemQuantity(selectedKit.id) > 0 ? (
                      <div className="d-flex align-items-center gap-3 bg-light rounded-pill p-2">
                        <button
                          onClick={() => updateQuantity(selectedKit.id, -1)}
                          className="btn btn-sm btn-success rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: '32px', height: '32px' }}
                        >
                          <BsDash size={16} />
                        </button>
                        <span className="fw-bold fs-5">{getItemQuantity(selectedKit.id)}</span>
                        <button
                          onClick={() => updateQuantity(selectedKit.id, 1)}
                          className="btn btn-sm btn-success rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: '32px', height: '32px' }}
                        >
                          <BsPlus size={16} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(selectedKit.id, true)}
                        className="btn btn-success rounded-pill px-4 py-2 fw-bold"
                      >
                        <BsCartPlus className="me-2" /> Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Cart Modal Component
  const CartModal = () => {
    const cartItems = Object.entries(cart).map(([id, qty]) => {
      const kit = groceryKits.find(k => k.id === parseInt(id));
      return { ...kit, quantity: qty };
    }).filter(item => item.name);

    return (
      <div className="modal show d-block" style={{ 
        backgroundColor: 'rgba(0,0,0,0.5)', 
        zIndex: 1100,
        animation: 'fadeIn 0.3s ease'
      }} onClick={() => setShowCartModal(false)}>
        <div className="modal-dialog modal-dialog-end modal-dialog-scrollable" style={{ marginRight: 0, maxWidth: '500px' }} onClick={(e) => e.stopPropagation()}>
          <div className="modal-content h-100" style={{ animation: 'slideInRight 0.3s ease' }}>
            <div className="modal-header">
              <h5 className="modal-title">Your Cart ({getCartItemsCount()} items)</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowCartModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              {cartItems.length === 0 ? (
                <div className="text-center py-5">
                  <GiShoppingBag size={64} className="text-muted mb-3" />
                  <p className="text-muted">Your cart is empty</p>
                  <button
                    onClick={() => setShowCartModal(false)}
                    className="btn btn-success mt-3"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="card mb-3 border-0 bg-light">
                    <div className="card-body p-3">
                      <div className="d-flex gap-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="rounded"
                          style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                        />
                        <div className="flex-grow-1">
                          <h6 className="mb-1 fw-bold">{item.name}</h6>
                          <small className="text-muted">{item.weight}</small>
                          <div className="d-flex justify-content-between align-items-center mt-2">
                            <span className="fw-bold text-success">₹{(item.price * 85 * item.quantity).toFixed(2)}</span>
                            <div className="d-flex align-items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="btn btn-sm btn-danger rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: '28px', height: '28px' }}
                              >
                                <BsDash size={12} />
                              </button>
                              <span className="fw-bold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="btn btn-sm btn-success rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: '28px', height: '28px' }}
                              >
                                <BsPlus size={12} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            {cartItems.length > 0 && (
              <div className="modal-footer">
                <div className="w-100">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <span>₹{getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Delivery Fee</span>
                    <span>₹40.00</span>
                  </div>
                  <div className="d-flex justify-content-between fw-bold fs-5 pt-2 border-top">
                    <span>Total</span>
                    <span className="text-success">₹{(getCartTotal() + 40).toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => {
                      alert('Order placed successfully! 🎉');
                      setCart({});
                      setShowCartModal(false);
                    }}
                    className="btn btn-success w-100 mt-3 py-2 fw-bold"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-light min-vh-100">
      {showDetailModal && <DetailModal />}
      {showCartModal && <CartModal />}

      {/* Header */}
      <div className="bg-gradient-primary text-white sticky-top shadow-sm" style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        zIndex: 1000
      }}>
        <div className="container py-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h3 mb-0 d-flex align-items-center gap-2">
                <GiShoppingBag size={28} /> Grocery Kits
              </h1>
              <p className="text-white-50 mb-0 small">Curated bundles for every need</p>
            </div>
            <button 
              onClick={() => setShowCartModal(true)}
              className="btn btn-light bg-white bg-opacity-25 text-white rounded-pill position-relative"
            >
              🛒 Cart
              {getCartItemsCount() > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {getCartItemsCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container" style={{ marginTop: '30px' }}>
        <div className="card shadow-sm rounded-pill border-0">
          <div className="card-body py-2">
            <div className="d-flex align-items-center">
              <FiSearch className="text-muted me-2" size={20} />
              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Search for grocery kits (e.g., Breakfast, Premium, Baking)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="container mt-4">
        <div className="d-flex gap-2 overflow-auto pb-2" style={{ scrollbarWidth: 'thin' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`btn rounded-pill category-btn ${
                selectedCategory === cat.id 
                  ? `btn-${cat.color} text-white` 
                  : 'btn-light text-dark'
              }`}
              style={{ whiteSpace: 'nowrap' }}
            >
              <span className="me-1">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mt-4 pb-5">
        {filteredKits.length > 0 ? (
          <>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold mb-0">
                {selectedCategory === 'all' ? 'All Kits' : selectedCategory}
                {searchTerm && ` - Results for "${searchTerm}"`}
              </h5>
              <small className="text-muted">{filteredKits.length} items found</small>
            </div>
            
            <div className="row g-4">
              {filteredKits.map(kit => (
                <div key={kit.id} className="col-md-4 col-sm-6">
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    {/* Product Image */}
                    <div 
                      className="position-relative"
                      style={{ height: '220px', cursor: 'pointer', overflow: 'hidden' }}
                      onClick={() => {
                        setSelectedKit(kit);
                        setShowDetailModal(true);
                      }}
                    >
                      <img 
                        src={kit.image} 
                        alt={kit.name}
                        className="card-img-top h-100 w-100"
                        style={{ objectFit: 'cover' }}
                      />
                      {kit.badge && (
                        <span className="position-absolute top-0 start-0 m-2 badge bg-danger">
                          {kit.badge}
                        </span>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(kit.id);
                        }}
                        className="position-absolute top-0 end-0 m-2 btn btn-light btn-sm rounded-circle"
                        style={{ width: '35px', height: '35px' }}
                      >
                        {wishlist.includes(kit.id) ? '❤️' : '🤍'}
                      </button>
                      <div className="position-absolute bottom-0 start-0 m-2">
                        <span className="badge bg-dark">
                          <FiClock size={11} className="me-1" /> {kit.deliveryTime}
                        </span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="card-body">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="d-flex align-items-center">
                          <FiStar className="text-warning me-1" size={14} />
                          <span className="small fw-bold">{kit.rating}</span>
                          <span className="small text-muted ms-1">({kit.reviews})</span>
                        </div>
                        {kit.isVeg && (
                          <span className="badge bg-success bg-opacity-10 text-success">🟢 Veg</span>
                        )}
                      </div>
                      
                      <h6 
                        className="card-title fw-bold mb-2"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          setSelectedKit(kit);
                          setShowDetailModal(true);
                        }}
                      >
                        {kit.name}
                      </h6>
                      
                      <p className="card-text small text-muted mb-3">
                        {kit.description.substring(0, 80)}...
                      </p>
                      
                      <div className="mb-3">
                        <div className="d-flex gap-1 flex-wrap">
                          {kit.items.slice(0, 3).map((item, idx) => (
                            <span key={idx} className="badge bg-light text-dark small">
                              {item.split(' - ')[0]}
                            </span>
                          ))}
                          {kit.items.length > 3 && (
                            <span className="badge bg-light text-dark small">+{kit.items.length - 3}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="d-flex justify-content-between align-items-center border-top pt-3">
                        <div>
                          <span className="fw-bold text-success h5 mb-0">₹{(kit.price * 85).toFixed(2)}</span>
                          <span className="text-muted text-decoration-line-through small ms-2">
                            ₹{(kit.originalPrice * 85).toFixed(2)}
                          </span>
                          <div className="small text-danger">{kit.savings}</div>
                        </div>
                        
                        {getItemQuantity(kit.id) > 0 ? (
                          <div className="d-flex align-items-center gap-2 bg-light rounded-pill p-1">
                            <button
                              onClick={() => updateQuantity(kit.id, -1)}
                              className="btn btn-sm btn-success rounded-circle d-flex align-items-center justify-content-center"
                              style={{ width: '28px', height: '28px', padding: 0 }}
                            >
                              <BsDash size={14} />
                            </button>
                            <span className="fw-bold small">{getItemQuantity(kit.id)}</span>
                            <button
                              onClick={() => updateQuantity(kit.id, 1)}
                              className="btn btn-sm btn-success rounded-circle d-flex align-items-center justify-content-center"
                              style={{ width: '28px', height: '28px', padding: 0 }}
                            >
                              <BsPlus size={14} />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(kit.id)}
                            className="btn btn-sm btn-success rounded-pill px-3"
                          >
                            {addedItems[kit.id] ? <BsCartCheck className="me-1" /> : <BsCartPlus className="me-1" />}
                            ADD
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-5">
            <GiShoppingBag size={64} className="text-muted mb-3" />
            <h4 className="text-muted">No kits found matching "{searchTerm}"</h4>
            <p className="text-muted">Try searching for something else</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="btn btn-success mt-3"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      {/* Floating Cart Button */}
      {getCartItemsCount() > 0 && (
        <button
          onClick={() => setShowCartModal(true)}
          className="btn btn-success rounded-pill shadow-lg position-fixed bottom-0 start-50 translate-middle-x mb-3 px-4 py-2 fw-bold"
          style={{ zIndex: 1000, whiteSpace: 'nowrap' }}
        >
          🛒 {getCartItemsCount()} items • ₹{getCartTotal().toFixed(2)} • View Cart →
        </button>
      )}

      {/* Bootstrap CSS is assumed to be imported in your main file */}
    </div>
  );
};

export default GroceryKits;