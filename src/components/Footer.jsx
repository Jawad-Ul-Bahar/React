export default function Footer() {
    return (
        <footer style={{background: 'linear-gradient(135deg, #84cc16, #10b981)', color: 'white'}} className="py-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h3 style={{fontSize: '1.4rem', marginBottom: '1rem', letterSpacing: '0.5px'}} className="fw-bold"><i className="fas fa-mobile-alt me-2"></i>NexTech</h3>
                        <p style={{fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.9}}>Your trusted technology store for the latest phones and accessories.</p>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 style={{fontSize: '1.2rem', marginBottom: '1rem', letterSpacing: '0.5px'}} className="fw-bold">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li style={{marginBottom: '0.5rem'}}><a href="/" style={{fontSize: '0.95rem', opacity: 0.9}} className="text-white text-decoration-none">Home</a></li>
                            <li style={{marginBottom: '0.5rem'}}><a href="/phones" style={{fontSize: '0.95rem', opacity: 0.9}} className="text-white text-decoration-none">Phones</a></li>
                            <li style={{marginBottom: '0.5rem'}}><a href="/accessories" style={{fontSize: '0.95rem', opacity: 0.9}} className="text-white text-decoration-none">Accessories</a></li>
                            <li><a href="/support" style={{fontSize: '0.95rem', opacity: 0.9}} className="text-white text-decoration-none">Support</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 style={{fontSize: '1.2rem', marginBottom: '1rem', letterSpacing: '0.5px'}} className="fw-bold">Contact</h5>
                        <p style={{fontSize: '0.95rem', lineHeight: '1.8', opacity: 0.9}} className="mb-0">
                            Email: info@nextech.com<br />
                            Phone: +1 (555) 123-4567
                        </p>
                    </div>
                </div>
                <hr style={{borderColor: 'rgba(255, 255, 255, 0.2)', marginTop: '2rem', marginBottom: '1rem'}} />
                <div className="text-center">
                    <p style={{fontSize: '0.9rem', opacity: 0.85}} className="mb-0">&copy; 2026 NexTech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
