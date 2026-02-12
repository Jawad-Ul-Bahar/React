import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <header className="hero-section d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 hero-text fade-in-left">
                            <span className="badge bg-primary-soft mb-3">New Release</span>
                            <h1 className="display-3 fw-bold mb-4">Experience the Future with <span className="text-gradient">NexPhone
                                X</span></h1>
                            <p className="lead text-muted mb-5">Ultra-fast performance, stunning camera, and battery life that keeps
                                up with you. The smartphone redefined.</p>
                            <Link to="/phones" className="btn btn-primary btn-lg rounded-pill px-5 me-3 hover-lift text-white">Buy
                                Now</Link>
                            <Link to="/support" className="btn btn-outline-light btn-lg rounded-pill px-5 hover-lift">Learn More</Link>
                        </div>
                        <div className="col-lg-6 hero-image text-center fade-in-right">

                            <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="NexPhone X" className="img-fluid floating-anim rounded-4 shadow-lg" />
                        </div>
                    </div>
                </div>
            </header>


            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row g-4 text-center">
                        <div className="col-md-4 fade-in-up">
                            <div className="p-4 glass-card rounded-4">
                                <i className="fas fa-shipping-fast fa-3x text-success mb-3"></i>
                                <h5 className="fw-bold">Fast Delivery</h5>
                                <p className="text-muted small">Free express shipping on all orders over $500.</p>
                            </div>
                        </div>
                        <div className="col-md-4 fade-in-up" style={{ animationDelay: "0.1s" }}>
                            <div className="p-4 glass-card rounded-4">
                                <i className="fas fa-shield-alt fa-3x text-success mb-3"></i>
                                <h5 className="fw-bold">Official Warranty</h5>
                                <p className="text-muted small">2-year official warranty on all devices.</p>
                            </div>
                        </div>
                        <div className="col-md-4 fade-in-up" style={{ animationDelay: "0.2s" }}>
                            <div className="p-4 glass-card rounded-4">
                                <i className="fas fa-headset fa-3x text-success mb-3"></i>
                                <h5 className="fw-bold">24/7 Support</h5>
                                <p className="text-muted small">Expert support anytime you need it.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured preview for quick browsing */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-end mb-5">
                        <div>
                            <h6 className="text-success text-uppercase fw-bold letter-spacing-2">Latest Models</h6>
                            <h2 className="fw-bold display-6">Featured Smartphones</h2>
                        </div>
                        <Link to="/phones" className="text-decoration-none text-muted hover-arrow">View All <i
                            className="fas fa-arrow-right ms-2"></i></Link>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4">
                            <div className="product-card glass-card rounded-4 p-3 h-100 position-relative">
                                <span className="badge bg-danger position-absolute top-0 start-0 m-3">Best Seller</span>
                                <div className="product-img-wrapper text-center py-4">
                                    <img src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                        alt="NexPhone X Pro" className="img-fluid" style={{ maxHeight: "250px" }} />
                                </div>
                                <div className="card-body p-3">
                                    <h5 className="fw-bold">NexPhone X Pro</h5>
                                    <p className="text-muted small">256GB - Midnight Black</p>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <span className="h5 fw-bold text-success mb-0">$999</span>
                                        <Link to="/cart" className="btn btn-sm btn-outline-dark rounded-pill"><i
                                            className="fas fa-shopping-cart"></i> Add</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="product-card glass-card rounded-4 p-3 h-100">
                                <div className="product-img-wrapper text-center py-4">
                                    <img src="https://i.pinimg.com/originals/2f/f7/26/2ff726d28d05518ae14cb6e830c72ab6.jpg"
                                        alt="NexPhone X" className="img-fluid" style={{ maxHeight: "250px" }} />
                                </div>
                                <div className="card-body p-3">
                                    <h5 className="fw-bold">NexPhone X</h5>
                                    <p className="text-muted small">128GB - Ocean Blue</p>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <span className="h5 fw-bold text-success mb-0">$799</span>
                                        <Link to="/cart" className="btn btn-sm btn-outline-dark rounded-pill"><i
                                            className="fas fa-shopping-cart"></i> Add</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="product-card glass-card rounded-4 p-3 h-100">
                                <div className="product-img-wrapper text-center py-4">
                                    <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                        alt="NexPhone Lite" className="img-fluid" style={{ maxHeight: "250px" }} />
                                </div>
                                <div className="card-body p-3">
                                    <h5 className="fw-bold">NexPhone Lite</h5>
                                    <p className="text-muted small">64GB - Starlight White</p>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <span className="h5 fw-bold text-success mb-0">$499</span>
                                        <Link to="/cart" className="btn btn-sm btn-outline-dark rounded-pill"><i
                                            className="fas fa-shopping-cart"></i> Add</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
