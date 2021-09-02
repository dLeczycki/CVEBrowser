import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import { ErrorIcon } from './Icons';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;
    const textT = 'Something went wrong';
    if (errorInfo) {
      // Error path
      return (
        <Box as="article">
          <Header title={textT} icon={<ErrorIcon />} />
          {error && error.toString()}
          <br />
          {errorInfo.componentStack}
        </Box>
      );
    }
    // Normally, just render children
    return children;
  }
}

export default ErrorBoundary;
