import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null, info: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary caught an error', error, info)
        this.setState({ info })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="container py-5">
                    <div className="alert alert-danger">
                        <h4 className="alert-heading">Something went wrong</h4>
                        <p className="mb-1">An unexpected error occurred while rendering the page.</p>
                        {this.state.error && (
                            <pre className="small mt-2 text-muted">{this.state.error.toString()}</pre>
                        )}
                        {this.state.info && this.state.info.componentStack && (
                            <details className="mt-2">
                                <summary className="text-muted">Show stack</summary>
                                <pre className="small text-muted">{this.state.info.componentStack}</pre>
                            </details>
                        )}
                        <div className="mt-3">
                            <button className="btn btn-sm btn-outline-dark me-2" onClick={() => window.location.reload()}>Reload</button>
                        </div>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}
