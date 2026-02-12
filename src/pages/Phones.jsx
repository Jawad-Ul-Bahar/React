export default function Phones() {
    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-end mb-5">
                <div>
                    <h6 className="text-success text-uppercase fw-bold letter-spacing-2">Latest Models</h6>
                    <h2 className="fw-bold display-6">All Smartphones</h2>
                </div>
            </div>

            <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                    <div className="product-card glass-card rounded-4 p-3 h-100 position-relative">
                        <span className="badge bg-danger position-absolute top-0 start-0 m-3">Best Seller</span>
                        <div className="product-img-wrapper text-center py-4">
                            <img src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="NexPhone X Pro" className="img-fluid" style={{ maxHeight: "300px" }} />
                        </div>
                        <div className="card-body p-3">
                            <h5 className="fw-bold">NexPhone X Pro</h5>
                            <p className="text-muted small">256GB - Midnight Black</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <span className="h5 fw-bold text-success mb-0">$999</span>
                                <button className="btn btn-sm btn-outline-dark rounded-pill"><i
                                    className="fas fa-shopping-cart"></i> Add</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="product-card glass-card rounded-4 p-3 h-100">
                        <div className="product-img-wrapper text-center py-4">
                            <img src="https://i.pinimg.com/originals/2f/f7/26/2ff726d28d05518ae14cb6e830c72ab6.jpg"
                                alt="NexPhone X" className="img-fluid" style={{ maxHeight: "300px" }} />
                        </div>
                        <div className="card-body p-3">
                            <h5 className="fw-bold">NexPhone X</h5>
                            <p className="text-muted small">128GB - Ocean Blue</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <span className="h5 fw-bold text-success mb-0">$799</span>
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
                                alt="NexPhone Lite" className="img-fluid" style={{ maxHeight: "300px" }} />
                        </div>
                        <div className="card-body p-3">
                            <h5 className="fw-bold">NexPhone Lite</h5>
                            <p className="text-muted small">64GB - Starlight White</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <span className="h5 fw-bold text-success mb-0">$499</span>
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
