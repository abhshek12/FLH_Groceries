import React from 'react';
import { FiSearch, FiStar, FiClock, FiCheck, FiGift, FiPackage, FiCalendar, FiTruck } from 'react-icons/fi';
import { BsCartPlus, BsCartCheck, BsPlus, BsDash } from 'react-icons/bs';
import {
  // GiGiftBox, 
  GiLotus,
  GiWaterDrop,
  // GiChristmasBall, 
  GiPartyPopper,
  GiMoon,
  GiElephant,
  // GiWeddingCake,
  GiTreeBranch,
  GiCandleLight,
  GiFireworkRocket
} from 'react-icons/gi';
import { useCart } from '../../context/CartContext';

const FestivalKits = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [cart, setCart] = React.useState({});
  const [addedItems, setAddedItems] = React.useState({});
  const [selectedKit, setSelectedKit] = React.useState(null);
  const [showDetailModal, setShowDetailModal] = React.useState(false);
  const [showCartModal, setShowCartModal] = React.useState(false);
  const [wishlist, setWishlist] = React.useState([]);
  const { addToCart } = useCart();


  const festivalKits = [
    {
      id: 401,
      name: 'Diwali Special Gift Box',
      price: 49.99,
      originalPrice: 79.99,
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82c?w=400&h=400&fit=crop',
      unit: 'Gift Box',
      weight: 'Premium 2.5kg',
      badge: 'Festival Special',
      category: 'Diwali',
      festival: 'Diwali',
      description: 'Celebrate Diwali with our premium gift box featuring traditional sweets, dry fruits, and festive decor.',
      items: [
        'Kaju Katli - 250g',
        'Gulab Jamun - 500g',
        'Cashews - 250g',
        'Almonds - 250g',
        'Raisins - 200g',
        'Pista - 200g',
        'Assorted Namkeen - 500g',
        'Diwali Candles - 12 pcs',
        'Rangoli Colors - 1 set',
        'Gift Wrapping Box'
      ],
      includes: ['Free gift wrapping', 'Personalized message card', 'Fresh sweets guaranteed', 'Eco-friendly packaging'],
      origin: 'Premium Quality',
      stock: 150,
      rating: 4.9,
      reviews: 1280,
      deliveryTime: 'Same Day Delivery',
      isVeg: true,
      savings: 'Save ₹2550',
      occasions: ['Diwali', 'Festival Gift']
    },
    {
      id: 402,
      name: 'Pooja Essentials Kit',
      price: 34.99,
      originalPrice: 59.99,
      image: 'https://images.unsplash.com/photo-1518599904899-fcd3c9d7cc83?w=400&h=400&fit=crop',
      unit: 'Kit',
      weight: 'Complete Set',
      badge: 'Sacred',
      category: 'Pooja',
      festival: 'All Festivals',
      description: 'Complete pooja essentials for all religious ceremonies and festivals.',
      items: [
        'Agarbatti (Incense Sticks) - 100 sticks',
        'Camphor (Kapur) - 50g',
        'Kumkum - 50g',
        'Sandalwood Paste - 50g',
        'Fresh Coconut - 2 pcs',
        'Betel Leaves - 20 pcs',
        'Flowers (Marigold) - 1 garland',
        'Pooja Thali - 1 pc',
        'Diya (Lamp) - 2 pcs',
        'Ghee - 250ml'
      ],
      includes: ['All items pre-packaged', 'Step-by-step pooja guide', 'Mantra book included'],
      origin: 'Temple Quality',
      stock: 200,
      rating: 4.8,
      reviews: 856,
      deliveryTime: '2-3 Hours',
      isVeg: true,
      savings: 'Save ₹2125',
      occasions: ['Daily Pooja', 'Festivals', 'Special Occasions']
    },
    {
      id: 403,
      name: 'New Year Celebration Kit',
      price: 59.99,
      originalPrice: 99.99,
      image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=400&h=400&fit=crop',
      unit: 'Party Pack',
      weight: 'For 10 People',
      badge: 'Hot Deal',
      category: 'New Year',
      festival: 'New Year',
      description: 'Ultimate party kit for New Year celebration with snacks, drinks, and decorations.',
      items: [
        'Party Snacks Assorted - 1kg',
        'Soft Drinks - 6 bottles',
        'Sparkling Juice - 1 bottle',
        'Party Decorations Kit',
        'Party Hats - 10 pcs',
        'Noise Makers - 10 pcs',
        'Paper Plates & Cups - 20 sets',
        'Napkins - 20 pcs',
        'Crackers (Small) - 10 pcs',
        'Photo Booth Props'
      ],
      includes: ['Free party playlist', 'Decoration guide', 'Party games list'],
      origin: 'Party Essentials',
      stock: 100,
      rating: 4.7,
      reviews: 634,
      deliveryTime: 'Same Day',
      isVeg: true,
      savings: 'Save ₹3400',
      occasions: ['New Year', 'House Party']
    },
    {
      id: 404,
      name: 'Holi Celebration Pack',
      price: 29.99,
      originalPrice: 49.99,
      image: 'https://images.unsplash.com/photo-1614592889792-1f8c14f22b98?w=400&h=400&fit=crop',
      unit: 'Pack',
      weight: 'Complete',
      badge: 'Colorful',
      category: 'Holi',
      festival: 'Holi',
      description: 'Everything you need for a colorful and fun Holi celebration.',
      items: [
        'Organic Gulal (Colors) - 5 colors x 100g',
        'Water Guns (Pichkari) - 2 pcs',
        'Water Balloons - 100 pcs',
        'Gujiya (Sweet) - 500g',
        'Thandai Mix - 200g',
        'Chips & Namkeen - 500g',
        'Soft Drinks - 4 bottles',
        'Organic Colors for Face',
        'Holi Party Hats - 5 pcs',
        'Disposable Plates - 20 pcs'
      ],
      includes: ['Eco-friendly colors', 'Recipe for Thandai', 'Safety guidelines'],
      origin: 'Natural Colors',
      stock: 300,
      rating: 4.6,
      reviews: 945,
      deliveryTime: '24 Hours',
      isVeg: true,
      savings: 'Save ₹1700',
      occasions: ['Holi', 'Color Party']
    },
    {
      id: 405,
      name: 'Christmas Feast Box',
      price: 69.99,
      originalPrice: 109.99,
      image: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400&h=400&fit=crop',
      unit: 'Feast Box',
      weight: 'Family Pack',
      badge: 'Merry Xmas',
      category: 'Christmas',
      festival: 'Christmas',
      description: 'Traditional Christmas feast box with cakes, cookies, and festive treats.',
      items: [
        'Christmas Plum Cake - 1kg',
        'Chocolate Cake - 500g',
        'Assorted Cookies - 500g',
        'Wine (Non-alcoholic) - 750ml',
        'Fruit Mince Pies - 12 pcs',
        'Roasted Nuts - 500g',
        'Candy Canes - 12 pcs',
        'Chocolate Truffles - 250g',
        'Christmas Tree Decorations',
        'Gift Tags - 10 pcs'
      ],
      includes: ['Gift wrapping', 'Christmas card', 'Recipe card for cookies'],
      origin: 'Bakery Fresh',
      stock: 80,
      rating: 4.9,
      reviews: 567,
      deliveryTime: '2-3 Days',
      isVeg: true,
      savings: 'Save ₹3400',
      occasions: ['Christmas', 'Winter Party']
    },
    {
      id: 406,
      name: 'Ganesh Chaturthi Pack',
      price: 44.99,
      originalPrice: 69.99,
      image: 'https://images.unsplash.com/photo-1555861498-1574d9e45784?w=400&h=400&fit=crop',
      unit: 'Pooja Pack',
      weight: 'Complete',
      badge: 'Sacred',
      category: 'Ganesh',
      festival: 'Ganesh Chaturthi',
      description: 'Complete Ganesh Chaturthi celebration kit with modak and pooja items.',
      items: [
        'Modak (Sweet) - 12 pcs',
        'Coconut - 2 pcs',
        'Durva Grass - 1 bunch',
        'Red Flowers - 1 garland',
        'Incense Sticks - 50 sticks',
        'Camphor - 50g',
        'Kumkum - 50g',
        'Turmeric Powder - 50g',
        'Ghee - 250ml',
        'Pooja Thali Decorated'
      ],
      includes: ['Step-by-step pooja guide', 'Aarti lyrics', 'Prasad distribution kit'],
      origin: 'Temple Quality',
      stock: 120,
      rating: 4.8,
      reviews: 432,
      deliveryTime: 'Same Day',
      isVeg: true,
      savings: 'Save ₹2125',
      occasions: ['Ganesh Chaturthi', 'House Warming']
    },
    {
      id: 407,
      name: 'Eid Mubarak Delight Box',
      price: 54.99,
      originalPrice: 84.99,
      image: 'https://images.unsplash.com/photo-1568191259964-341d06e97b90?w=400&h=400&fit=crop',
      unit: 'Gift Box',
      weight: 'Deluxe',
      badge: 'Eid Special',
      category: 'Eid',
      festival: 'Eid',
      description: 'Celebrate Eid with traditional sweets, dry fruits, and festive treats.',
      items: [
        'Sheer Kurma - 500g',
        'Sevaiyan - 500g',
        'Dates - 500g',
        'Dry Fruits Mix - 500g',
        'Biryani Masala - 200g',
        'Rohza (Sweet) - 500g',
        'Phirni - 500g',
        'Eid Mubarak Greeting Card',
        'Gift Wrapping Box',
        'Dates Syrup - 250ml'
      ],
      includes: ['Elegant gift box', 'Personalized message', 'Recipe booklet'],
      origin: 'Premium Quality',
      stock: 90,
      rating: 4.7,
      reviews: 378,
      deliveryTime: '24 Hours',
      isVeg: true,
      savings: 'Save ₹2550',
      occasions: ['Eid', 'Ramadan']
    },
    {
      id: 408,
      name: 'Wedding Gift Hamper',
      price: 99.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
      unit: 'Luxury Hamper',
      weight: 'Premium 5kg',
      badge: 'Luxury',
      category: 'Wedding',
      festival: 'Wedding Season',
      description: 'Luxury wedding gift hamper perfect for newlyweds.',
      items: [
        'Premium Dry Fruits - 1kg box',
        'Luxury Chocolates - 500g',
        'Designer Pooja Thali',
        'God Idol (Silver plated)',
        'Scented Candles - 4 pcs',
        'Premium Gift Wrapping',
        'Wedding Greeting Card',
        'Silver Coins - 2 pcs',
        'Aromatic Oils Set',
        'Photo Frame'
      ],
      includes: ['Free shipping', 'Gift receipt', 'Beautiful packaging'],
      origin: 'Luxury Collection',
      stock: 50,
      rating: 5.0,
      reviews: 245,
      deliveryTime: '2-3 Days',
      isVeg: true,
      savings: 'Save ₹4250',
      occasions: ['Wedding', 'Anniversary', 'Engagement']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Festivals', icon: '🎊', color: 'primary' },
    { id: 'Diwali', name: 'Diwali', icon: <GiCandleLight size={18} />, color: 'warning' },
    { id: 'Holi', name: 'Holi', icon: <GiWaterDrop size={18} />, color: 'info' },
    { id: 'Christmas', name: 'Christmas', color: 'danger' },
    { id: 'New Year', name: 'New Year', icon: <GiFireworkRocket size={18} />, color: 'success' },
    { id: 'Eid', name: 'Eid', icon: <GiMoon size={18} />, color: 'secondary' },
    { id: 'Ganesh', name: 'Ganesh Chaturthi', icon: <GiElephant size={18} />, color: 'dark' },
    { id: 'Wedding', name: 'Wedding', color: 'danger' }
  ];

  const filteredKits = React.useMemo(() => {
    let filtered = festivalKits;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(kit => kit.category === selectedCategory);
    }
    if (searchTerm) {
      filtered = filtered.filter(kit =>
        kit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        kit.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        kit.festival.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [searchTerm, selectedCategory]);

  // const addToCart = (id, fromModal = false) => {
  //   setAddedItems(prev => ({ ...prev, [id]: true }));
  //   setCart(prev => {
  //     const newCart = { ...prev };
  //     newCart[id] = (newCart[id] || 0) + 1;
  //     return newCart;
  //   });

  //   setTimeout(() => {
  //     setAddedItems(prev => ({ ...prev, [id]: false }));
  //   }, 1000);

  //   if (fromModal) {
  //     setTimeout(() => {
  //       setShowDetailModal(false);
  //       setSelectedKit(null);
  //     }, 500);
  //   }
  // };
  const handleAddToCart = (kit) => {
    addToCart({
      id: kit.id,
      name: kit.name,
      price: kit.price * 85,
      image: kit.image,
    });

    setAddedItems(prev => ({
      ...prev,
      [kit.id]: true
    }));

    setTimeout(() => {
      setAddedItems(prev => ({
        ...prev,
        [kit.id]: false
      }));
    }, 1000);
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
      const kit = festivalKits.find(k => k.id === parseInt(id));
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
      .festival-badge {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 1;
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
        <div className="modal-dialog modal-dialog-centered modal-xl" onClick={(e) => e.stopPropagation()}>
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
                    className="img-fluid rounded shadow"
                    style={{ objectFit: 'cover', height: '350px', width: '100%' }}
                  />
                  <div className="mt-3 d-flex gap-2 justify-content-center">
                    <span className="badge bg-warning text-dark p-2">
                      <FiTruck className="me-1" /> {selectedKit.deliveryTime}
                    </span>
                    <span className="badge bg-success p-2">
                      <FiStar className="me-1" /> {selectedKit.rating} ({selectedKit.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <span className="badge bg-danger mb-2">{selectedKit.badge}</span>
                      <h2 className="h2 mb-2">{selectedKit.name}</h2>
                      <div className="d-flex gap-2">
                        <span className="badge bg-primary">{selectedKit.festival} Special</span>
                        <span className="badge bg-info">{selectedKit.weight}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleWishlist(selectedKit.id)}
                      className="btn btn-link text-decoration-none"
                      style={{ fontSize: '28px', color: wishlist.includes(selectedKit.id) ? '#ff4757' : '#ccc' }}
                    >
                      {wishlist.includes(selectedKit.id) ? '❤️' : '🤍'}
                    </button>
                  </div>

                  <div className="d-flex gap-2 mb-3 flex-wrap">
                    <span className="badge bg-success">In Stock: {selectedKit.stock}</span>
                    <span className="badge bg-warning text-dark">
                      <FiClock className="me-1" size={12} /> Express Delivery Available
                    </span>
                  </div>

                  <p className="text-muted mb-4 lead">{selectedKit.description}</p>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-3"><FiPackage className="me-2" /> What's inside this festive kit:</h6>
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
                    <h6 className="fw-bold mb-2"><FiGift className="me-2" /> Special Inclusions:</h6>
                    <div className="d-flex gap-2 flex-wrap">
                      {selectedKit.includes.map((item, idx) => (
                        <span key={idx} className="badge bg-light text-dark p-2">{item}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-2"><FiCalendar className="me-2" /> Perfect For:</h6>
                    <div className="d-flex gap-2 flex-wrap">
                      {selectedKit.occasions.map((occasion, idx) => (
                        <span key={idx} className="badge bg-secondary">{occasion}</span>
                      ))}
                    </div>
                  </div>

                  <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                    <div>
                      <span className="display-6 text-success fw-bold mb-0">₹{(selectedKit.price * 85).toFixed(2)}</span>
                      <span className="text-muted text-decoration-line-through ms-2 fs-5">₹{(selectedKit.originalPrice * 85).toFixed(2)}</span>
                      <div className="small text-danger fw-bold mt-1">{selectedKit.savings}</div>
                    </div>

                    {getItemQuantity(selectedKit.id) > 0 ? (
                      <div className="d-flex align-items-center gap-3 bg-light rounded-pill p-2 shadow-sm">
                        <button
                          onClick={() => updateQuantity(selectedKit.id, -1)}
                          className="btn btn-sm btn-success rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: '36px', height: '36px' }}
                        >
                          <BsDash size={18} />
                        </button>
                        <span className="fw-bold fs-4">{getItemQuantity(selectedKit.id)}</span>
                        <button
                          onClick={() => updateQuantity(selectedKit.id, 1)}
                          className="btn btn-sm btn-success rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: '36px', height: '36px' }}
                        >
                          <BsPlus size={18} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(selectedKit)}
                        className="btn btn-success rounded-pill px-5 py-3 fw-bold fs-5"
                      >
                        <BsCartPlus className="me-2" size={20} /> Add to Cart
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
      const kit = festivalKits.find(k => k.id === parseInt(id));
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
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title">Your Festival Cart ({getCartItemsCount()} items)</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => setShowCartModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              {cartItems.length === 0 ? (
                <div className="text-center py-5">
                  {/* <GiGiftBox size={64} className="text-muted mb-3" /> */}
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
                          <small className="text-muted d-block">{item.weight}</small>
                          <small className="text-warning">✨ {item.festival} Special</small>
                          <div className="d-flex justify-content-between align-items-center mt-2">
                            <span className="fw-bold text-success fs-5">₹{(item.price * 85 * item.quantity).toFixed(2)}</span>
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
                  <div className="d-flex justify-content-between mb-2">
                    <span>Festival Gift Wrapping</span>
                    <span className="text-success">FREE</span>
                  </div>
                  <div className="d-flex justify-content-between fw-bold fs-5 pt-2 border-top">
                    <span>Total</span>
                    <span className="text-success">₹{(getCartTotal() + 40).toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => {
                      alert('🎉 Order placed successfully! Your festival kit will arrive soon! 🎊');
                      setCart({});
                      setShowCartModal(false);
                    }}
                    className="btn btn-success w-100 mt-3 py-2 fw-bold"
                  >
                    Place Festival Order
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

      {/* Header with Festival Theme */}
      <div className="bg-gradient-danger text-white sticky-top shadow-sm" style={{
        background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
        zIndex: 1000
      }}>
        <div className="container py-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h3 mb-0 d-flex align-items-center gap-2">
                {/* 
                <GiGiftBox size={28} />  */}
                Festival Special Kits
              </h1>
              <p className="text-white-50 mb-0 small">Celebrate every occasion with our curated festive hampers</p>
            </div>
            <button
              onClick={() => setShowCartModal(true)}
              className="btn btn-light bg-white bg-opacity-25 text-white rounded-pill position-relative"
            >
              Cart
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
                placeholder="Search for festival kits (e.g., Diwali, Holi, Christmas, Wedding)..."
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
              className={`btn rounded-pill category-btn fw-bold ${selectedCategory === cat.id
                  ? `btn-${cat.color} text-white shadow`
                  : 'btn-light text-dark'
                }`}
              style={{ whiteSpace: 'nowrap' }}
            >
              <span className="me-2">{cat.icon}</span>
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
                🎊 {selectedCategory === 'all' ? 'All Festival Kits' : `${selectedCategory} Special Kits`}
                {searchTerm && ` - Results for "${searchTerm}"`}
              </h5>
              <small className="text-muted">{filteredKits.length} festive kits found</small>
            </div>

            <div className="row g-4">
              {filteredKits.map(kit => (
                <div key={kit.id} className="col-md-4 col-sm-6">
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    {/* Product Image */}
                    <div
                      className="position-relative"
                      style={{ height: '240px', cursor: 'pointer', overflow: 'hidden' }}
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
                      <div className="festival-badge">
                        <span className="badge bg-danger">{kit.badge}</span>
                      </div>
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
                        <span className="badge bg-warning text-dark">
                          <FiTruck size={11} className="me-1" /> {kit.deliveryTime}
                        </span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="card-body">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="badge bg-primary">{kit.festival}</span>
                        <div className="d-flex align-items-center">
                          <FiStar className="text-warning me-1" size={14} />
                          <span className="small fw-bold">{kit.rating}</span>
                          <span className="small text-muted ms-1">({kit.reviews})</span>
                        </div>
                      </div>

                      <h6
                        className="card-title fw-bold mb-2"
                        style={{ cursor: 'pointer', fontSize: '1.1rem' }}
                        onClick={() => {
                          setSelectedKit(kit);
                          setShowDetailModal(true);
                        }}
                      >
                        {kit.name}
                      </h6>

                      <p className="card-text small text-muted mb-3">
                        {kit.description.substring(0, 70)}...
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
                          <div className="small text-danger fw-bold">{kit.savings}</div>
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
                            onClick={() => handleAddToCart(kit)}
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
            <GiGiftBox size={64} className="text-muted mb-3" />
            <h4 className="text-muted">No festival kits found matching "{searchTerm}"</h4>
            <p className="text-muted">Try searching for Diwali, Holi, Christmas, or other festivals</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="btn btn-danger mt-3"
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
          className="btn btn-danger rounded-pill shadow-lg position-fixed bottom-0 start-50 translate-middle-x mb-3 px-4 py-2 fw-bold"
          style={{ zIndex: 1000, whiteSpace: 'nowrap' }}
        >
          🎁 {getCartItemsCount()} items • ₹{getCartTotal().toFixed(2)} • Checkout →
        </button>
      )}
    </div>
  );
};

export default FestivalKits;