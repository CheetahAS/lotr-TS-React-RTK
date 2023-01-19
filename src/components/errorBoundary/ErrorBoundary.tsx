import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './ErrorBoundary.module.scss';

interface ErrorBoundaryProps {
  children: any
};

interface ErrorBoundaryState {
  hasError: boolean
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false
    }
  };

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  };

  render() {
    if(this.state.hasError) {
      return (
        <div className={style.boundary_wrapper}>
          <h1>Something went definitely wrong!</h1>
          <span>but we are working hardly to find a solution</span>
          <NavLink to='/main'>
              <button onClick={() => this.setState({hasError: false})}
                >
                go to the main page
              </button>
          </NavLink>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;