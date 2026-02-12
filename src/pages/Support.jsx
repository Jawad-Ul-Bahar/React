import { useState } from 'react'

export default function Support() {
    const [status, setStatus] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        // No backend — show a static success message
        setStatus('Message sent (static demo).')
    }

    return (
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-6">
                    <h2 className="fw-bold">Support Center</h2>
                    <p className="text-muted">Need help with your device? Our support team is ready to assist. Browse FAQs,
                        schedule a repair, or contact us directly.</p>

                    <h5 className="mt-4">FAQs</h5>
                    <ul className="text-muted">
                        <li>How do I register my device?</li>
                        <li>What is the warranty policy?</li>
                        <li>How do I start a return?</li>
                    </ul>

                    <h5 className="mt-4">Contact</h5>
                    <p className="text-muted">Email: support@nextech.example<br />Phone: +1 (555) 123-4567</p>
                </div>
                <div className="col-lg-6">
                    <div className="p-4 glass-card rounded-4">
                        <h5 className="fw-bold">Send a message</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="you@example.com" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" rows="5" required />
                            </div>

                            {status && <div className="alert alert-success">{status}</div>}

                            <button type="submit" className="btn btn-primary rounded-pill px-4">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
