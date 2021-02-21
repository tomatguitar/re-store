import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) return <ErrorIndicator />;

    return this.props.children;
  }
}
