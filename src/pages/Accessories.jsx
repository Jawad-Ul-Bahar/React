export default function Accessories() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-5 mb-4 mb-lg-0 fade-in-left">
                    <h6 className="text-success text-uppercase fw-bold letter-spacing-2">Premium Gear</h6>
                    <h2 className="fw-bold display-5 mb-4">Level Up Your Audio</h2>
                    <p className="text-muted lead mb-4">Experience crystal clear sound with our new noise-cancelling
                        headphones. Designed for comfort and immersive audio.</p>
                    <ul className="list-unstyled text-muted mb-4">
                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i> Active Noise Cancellation
                        </li>
                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i> 30-Hour Battery Life</li>
                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i> Ultra-Low Latency</li>
                    </ul>
                    <button className="btn btn-primary rounded-pill px-4 hover-lift text-white">Shop Accessories</button>
                </div>
                <div className="col-lg-7 text-center fade-in-right">
                    <div className="glass-card p-5 rounded-circle d-inline-block position-relative">
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 bg-success opacity-10 rounded-circle filter-blur-3xl">
                        </div>
                        <img src="/headphones.png"
                            alt="Headphones" className="img-fluid floating-anim" style={{ maxWidth: "80%" }} />
                    </div>
                </div>
            </div>

            <div className="row g-4 mt-5">
                <div className="col-md-6 col-lg-4">
                    <div className="product-card glass-card rounded-4 p-3 h-100">
                        <div className="product-img-wrapper text-center py-4">
                            <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Headphones" className="img-fluid" style={{ maxHeight: "250px" }} />
                        </div>
                        <div className="card-body p-3">
                            <h5 className="fw-bold">NexBuds Pro</h5>
                            <p className="text-muted small">Wireless - Noise Cancelling</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <span className="h5 fw-bold text-success mb-0">$249</span>
                                <button className="btn btn-sm btn-outline-dark rounded-pill"><i
                                    className="fas fa-shopping-cart"></i> Add</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="product-card glass-card rounded-4 p-3 h-100">
                        <div className="product-img-wrapper text-center py-4">
                            <img src="https://images.unsplash.com/photo-1526178612014-98b7f1d3b1a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Charger" className="img-fluid" style={{ maxHeight: "250px" }} />
                        </div>
                        <div className="card-body p-3">
                            <h5 className="fw-bold">TurboCharge 30W</h5>
                            <p className="text-muted small">USB-C Fast Charger</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <span className="h5 fw-bold text-success mb-0">$39</span>
                                <button className="btn btn-sm btn-outline-dark rounded-pill"><i
                                    className="fas fa-shopping-cart"></i> Add</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="product-card glass-card rounded-4 p-3 h-100">
                        <div className="product-img-wrapper text-center py-4">
                            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Case" className="img-fluid" style={{ maxHeight: "250px" }} />
                        </div>
                        <div className="card-body p-3">
                            <h5 className="fw-bold">ArmorCase</h5>
                            <p className="text-muted small">Rugged Protection</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <span className="h5 fw-bold text-success mb-0">$29</span>
                                <button className="btn btn-sm btn-outline-dark rounded-pill"><i
                                    className="fas fa-shopping-cart"></i> Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
