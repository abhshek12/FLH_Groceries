import React from 'react';
import { GiMeat } from 'react-icons/gi';
import { BsCartPlus, BsCartCheck, BsPlus, BsDash } from 'react-icons/bs';
import { FiSearch, FiX } from 'react-icons/fi';

const Meat = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredMeats, setFilteredMeats] = React.useState([]);
  const [cart, setCart] = React.useState({});
  const [addedItems, setAddedItems] = React.useState({});
  const [selectedMeat, setSelectedMeat] = React.useState(null);
  const [showDetailModal, setShowDetailModal] = React.useState(false);
  const [showCartModal, setShowCartModal] = React.useState(false);
  
  const [meats] = React.useState([
    { id: 1, name: 'Chicken Breast', price: 5.99, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/fe38d6b4-c558-43c4-9600-619547e57385.png', unit: '500g', weight: '500g', description: 'Fresh, boneless chicken breast. High in protein, low in fat. Perfect for grilling, baking, or stir-frying.', origin: 'Local Farm', stock: 50 },
    { id: 2, name: 'Ground Beef', price: 7.99, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/b6566431-2751-4394-bf20-ed1a12067cce.png', unit: '500g', weight: '500g', description: 'Premium lean ground beef. Perfect for burgers, meatballs, and tacos. 80/20 lean to fat ratio.', origin: 'Grass-fed', stock: 35 },
    { id: 3, name: 'Pork Chops', price: 6.99, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/da/cms-assets/cms/product/ed401770-12f2-45b4-8870-a22cf6409a31.png', unit: '400g', weight: '400g', description: 'Tender, juicy pork chops. Great for pan-searing or grilling. Bone-in for extra flavor.', origin: 'Premium Pork', stock: 40 },
    { id: 4, name: 'Lamb Shanks', price: 12.99, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/54485b40-6b39-4de0-a0d7-15200d6539c3.png', unit: '600g', weight: '600g', description: 'Tender lamb shanks, slow-cooked to perfection. Rich in flavor, perfect for special occasions.', origin: 'New Zealand', stock: 20 },
    { id: 5, name: 'Turkey Legs', price: 8.99, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/da/cms-assets/cms/product/d46fa663-4022-4c55-95e4-58a4e054797c.png', unit: '400g', weight: '400g', description: 'Large, meaty turkey legs. Perfect for roasting or smoking. Great for holiday meals.', origin: 'Free-range', stock: 25 },
    { id: 6, name: 'Salmon Fillet', price: 10.99, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1779080176262-164.png', unit: '300g', weight: '300g', description: 'Fresh Atlantic salmon fillet. Rich in Omega-3 fatty acids. Skin-on, boneless.', origin: 'Norwegian', stock: 30 },
    { id: 7, name: 'Tilapia', price: 4.99, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/79725b12-0409-4f69-9cde-0924965a4e39.png', unit: 'Whole', weight: '500g', description: 'Whole fresh tilapia. Mild, sweet flavor. Perfect for frying, baking, or grilling.', origin: 'Farm-raised', stock: 45 },
  ]);

  React.useEffect(() => {
    const filtered = meats.filter(meat =>
      meat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMeats(filtered);
  }, [searchTerm, meats]);

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

    // Close modal if adding from detail view
    if (fromModal) {
      setTimeout(() => {
        setShowDetailModal(false);
        setSelectedMeat(null);
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
      const meat = meats.find(m => m.id === parseInt(id));
      return sum + (meat ? meat.price * 85 * qty : 0);
    }, 0);
  };

  const getCartItemsCount = () => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  };

  const openDetailPage = (meat) => {
    setSelectedMeat(meat);
    setShowDetailModal(true);
  };

  const removeFromCart = (id) => {   
    const newCart = { ...cart };
    delete newCart[id];
    setCart(newCart);
  };

  // Detail Modal Component
  const DetailModal = () => {
    if (!selectedMeat) return null;
    
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.8)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeIn 0.3s ease'
      }} onClick={() => {
        setShowDetailModal(false);
        setSelectedMeat(null);
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          maxWidth: '500px',
          width: '90%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
          animation: 'slideUp 0.3s ease'
        }} onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => {
              setShowDetailModal(false);
              setSelectedMeat(null);
            }}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              width: '35px',
              height: '35px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1
            }}
          >
            <FiX size={20} />
          </button>
          
          <img 
            src={selectedMeat.image} 
            alt={selectedMeat.name}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'contain',
              backgroundColor: '#f8f9fa',
              padding: '20px'
            }}
          />
          
          <div style={{ padding: '20px' }}>
            <h2 style={{ marginBottom: '10px', color: '#1a1a1a' }}>{selectedMeat.name}</h2>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
              <span style={{
                backgroundColor: '#e8f5e9',
                color: '#2e7d32',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                {selectedMeat.weight}
              </span>
              <span style={{
                backgroundColor: '#fff3e0',
                color: '#e65100',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                In Stock: {selectedMeat.stock}
              </span>
            </div>
            
            <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
              {selectedMeat.description}
            </p>
            
            <div style={{ marginBottom: '15px' }}>
              <strong style={{ color: '#666' }}>Origin:</strong>
              <span style={{ marginLeft: '10px', color: '#333' }}>{selectedMeat.origin}</span>
            </div>
            
            <div style={{
              borderTop: '1px solid #eee',
              paddingTop: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#28a745' }}>
                  ₹{(selectedMeat.price * 85).toFixed(2)}
                </span>
                <span style={{ fontSize: '12px', color: '#999', marginLeft: '5px' }}>
                  MRP
                </span>
              </div>
              
              {getItemQuantity(selectedMeat.id) > 0 ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '50px',
                  padding: '8px 15px'
                }}>
                  <button
                    onClick={() => updateQuantity(selectedMeat.id, -1)}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: '#28a745',
                      color: 'white',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    <BsDash size={16} style={{ marginTop: '-3px' }} />
                  </button>
                  <span style={{ fontWeight: '600', fontSize: '18px' }}>
                    {getItemQuantity(selectedMeat.id)}
                  </span>
                  <button
                    onClick={() => updateQuantity(selectedMeat.id, 1)}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: '#28a745',
                      color: 'white',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    <BsPlus size={16} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(selectedMeat.id, true)}
                  style={{
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer'
                  }}
                >
                  <BsCartPlus size={18} />
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Cart Modal Component
  const CartModal = () => {
    const cartItems = Object.entries(cart).map(([id, qty]) => {
      const meat = meats.find(m => m.id === parseInt(id));
      return { ...meat, quantity: qty };
    });

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1100,
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.3s ease'
      }} onClick={() => setShowCartModal(false)}>
        <div style={{
          backgroundColor: 'white',
          width: '100%',
          maxWidth: '500px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideInRight 0.3s ease'
        }} onClick={(e) => e.stopPropagation()}>
          {/* Cart Header */}
          <div style={{
            padding: '20px',
            borderBottom: '1px solid #eee',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h3 style={{ margin: 0 }}>Your Cart ({getCartItemsCount()} items)</h3>
            <button
              onClick={() => setShowCartModal(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer'
              }}
            >
              <FiX />
            </button>
          </div>

          {/* Cart Items */}
          <div style={{ flex: 1, overflow: 'auto', padding: '20px' }}>
            {cartItems.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <GiMeat style={{ fontSize: '64px', color: '#ddd', marginBottom: '20px' }} />
                <p style={{ color: '#999' }}>Your cart is empty</p>
                <button
                  onClick={() => setShowCartModal(false)}
                  style={{
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '20px'
                  }}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  gap: '15px',
                  marginBottom: '20px',
                  padding: '15px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px'
                }}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'contain',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      padding: '10px'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h5 style={{ margin: '0 0 5px 0' }}>{item.name}</h5>
                    <p style={{ color: '#666', margin: '0 0 10px 0', fontSize: '14px' }}>
                      {item.weight}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 'bold', color: '#28a745' }}>
                        ₹{(item.price * 85 * item.quantity).toFixed(2)}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            border: 'none',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            cursor: 'pointer'
                          }}
                        >
                          <BsDash size={14} />
                        </button>
                        <span style={{ fontWeight: '600' }}>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            border: 'none',
                            backgroundColor: '#28a745',
                            color: 'white',
                            cursor: 'pointer'
                          }}
                        >
                          <BsPlus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div style={{
              borderTop: '1px solid #eee',
              padding: '20px',
              backgroundColor: 'white'
            }}>
              <div style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span>Subtotal</span>
                  <span>₹{getCartTotal().toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span>Delivery Fee</span>
                  <span>₹40.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '18px', marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #eee' }}>
                  <span>Total</span>
                  <span style={{ color: '#28a745' }}>₹{(getCartTotal() + 40).toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  alert('Order placed successfully! 🎉');
                  setCart({});
                  setShowCartModal(false);
                }}
                style={{
                  width: '100%',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  padding: '15px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    );
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
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Modals */}
      {showDetailModal && <DetailModal />}
      {showCartModal && <CartModal />}

      {/* Header Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="fw-bold text-white d-flex align-items-center gap-2 mb-0">
              <GiMeat style={{ fontSize: '32px' }} /> Fresh Meats
            </h1>
            <div 
              onClick={() => setShowCartModal(true)}
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.2)',
                padding: '8px 16px',
                borderRadius: '50px',
                color: 'white',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              🛒 {getCartItemsCount()} items
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container" style={{ marginTop: '30px' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '50px',
          padding: '5px 20px',
          boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
          marginBottom: '30px'
        }}>
          <div className="d-flex align-items-center">
            <FiSearch style={{ color: '#999', fontSize: '20px' }} />
            <input
              type="text"
              className="form-control border-0"
              style={{ padding: '15px', fontSize: '16px' }}
              placeholder="Search for meats (e.g., Chicken, Beef, Salmon)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container">
        {filteredMeats.length > 0 ? (
          <div className="row g-4">
            {filteredMeats.map(meat => (
              <div key={meat.id} className="col-md-4 col-sm-6">
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                }}>
                  {/* Product Image - Clickable */}
                  <div 
                    style={{ position: 'relative', paddingTop: '100%', backgroundColor: '#f8f9fa', cursor: 'pointer' }}
                    onClick={() => openDetailPage(meat)}
                  >
                    <img 
                      src={meat.image} 
                      alt={meat.name}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        padding: '20px'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '10px',
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      {meat.weight}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h6 
                      style={{ 
                        fontSize: '16px', 
                        fontWeight: '600',
                        marginBottom: '8px',
                        color: '#1a1a1a',
                        cursor: 'pointer'
                      }}
                      onClick={() => openDetailPage(meat)}
                    >
                      {meat.name}
                    </h6>
                    
                    <div style={{
                      marginTop: 'auto',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: '1px solid #f0f0f0',
                      paddingTop: '12px'
                    }}>
                      <div>
                        <span style={{ 
                          fontSize: '20px', 
                          fontWeight: '700',
                          color: '#1a1a1a'
                        }}>
                          ₹{(meat.price * 85).toFixed(2)}
                        </span>
                        <span style={{ 
                          fontSize: '12px', 
                          color: '#999',
                          marginLeft: '4px'
                        }}>
                          MRP
                        </span>
                      </div>
                      
                      {getItemQuantity(meat.id) > 0 ? (
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          backgroundColor: '#f8f9fa',
                          borderRadius: '50px',
                          padding: '4px 8px'
                        }}>
                          <button
                            onClick={() => updateQuantity(meat.id, -1)}
                            style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '50%',
                              border: 'none',
                              backgroundColor: '#28a745',
                              color: 'white',
                              fontWeight: 'bold',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer'
                            }}
                          >
                            <BsDash size={14} />
                          </button>
                          <span style={{ fontWeight: '600', minWidth: '20px', textAlign: 'center' }}>
                            {getItemQuantity(meat.id)}
                          </span>
                          <button
                            onClick={() => updateQuantity(meat.id, 1)}
                            style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '50%',
                              border: 'none',
                              backgroundColor: '#28a745',
                              color: 'white',
                              fontWeight: 'bold',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer'
                            }}
                          >
                            <BsPlus size={14} />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(meat.id)}
                          style={{
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            padding: '8px 16px',
                            borderRadius: '50px',
                            fontSize: '14px',
                            fontWeight: '500',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'transform 0.1s',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                          {addedItems[meat.id] ? <BsCartCheck /> : <BsCartPlus />}
                          ADD
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            backgroundColor: 'white',
            borderRadius: '16px',
            marginTop: '40px'
          }}>
            <GiMeat style={{ fontSize: '64px', color: '#ddd', marginBottom: '20px' }} />
            <h3 style={{ color: '#999' }}>No meats found matching "{searchTerm}"</h3>
            <p style={{ color: '#bbb' }}>Try searching for something else</p>
          </div>
        )}
      </div>

      {/* Floating Cart Summary */}
      {getCartItemsCount() > 0 && (
        <div 
          onClick={() => setShowCartModal(true)}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#28a745',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '50px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            zIndex: 1000,
            display: 'flex',
            gap: '20px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(-50%) scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(-50%) scale(1)'}>
            <span>🛒 {getCartItemsCount()} items</span>
            <span>•</span>
            <span>₹{getCartTotal().toFixed(2)}</span>
            <span>•</span>
            <span>View Cart →</span>
          </div>
      )}
    </div>
  );
};

export default Meat;