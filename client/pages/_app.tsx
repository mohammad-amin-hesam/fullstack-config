import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store.js";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/theme";

class AppMain extends App<any, any> {
  componentDidMount = () => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  };

  render() {
    const { Component, reduxStore, pageProps } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(AppMain);
