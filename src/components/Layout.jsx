import { useEffect } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import '../App.css'

export default function Layout() {
    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        const onScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                navbar.classList.remove('shadow-lg');
                navbar.style.background = 'rgba(255, 255, 255, 0.85)';
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light glass-nav">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/"><i className="fas fa-mobile-alt me-2 text-success"></i>NexTech</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><NavLink end className="nav-link" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/phones">Phones</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/accessories">Accessories</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/support">Support</NavLink></li>
                        </ul>
                        <Link to="/cart" className="btn btn-primary ms-lg-3 rounded-pill px-4 text-white">Cart (0)</Link>
                    </div>
                </div>
            </nav>

            <main style={{ paddingTop: '90px' }}>
                <ErrorBoundary>
                    <Outlet />
                </ErrorBoundary>
            </main>

            <footer className="bg-light pt-5 pb-3 border-top mt-5">
                <div className="container text-center">
                    <p className="text-muted small">&copy; 2026 NexTech. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}
