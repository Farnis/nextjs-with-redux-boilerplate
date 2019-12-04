import React from "react";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import store from "../src/store";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import "../src/styles/index.scss";
import theme from "../src/styles/theme";
// import Header from "../src/components/Layout/Header";
// import Footer from "../src/components/Layout/Footer";
// import Slider from "@material-ui/core/Slider";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const _App = withRedux(store)(
  class _App extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      // const { Component, pageProps, store } = this.props;
      const { Component, pageProps } = this.props;

      return (
        <React.Fragment>
          <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Provider store={store}>
                {/* <SnackbarProvider maxSnack={3}> */}
                {/* TODO: Handle error and fix last location: Invariant failed: You should not use <withRouter(LastLocationProvider) /> outside a <Router>*/}
                {/*<LastLocationProvider>*/}
                <div id="main-app-container">
                  <Component {...pageProps} />
                  {/* <ToastContainer
                      position="bottom-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl
                      pauseOnVisibilityChange
                      draggabl
                      pauseOnHover
                    /> */}
                </div>
                {/*</LastLocationProvider>*/}
                {/* </SnackbarProvider> */}
              </Provider>
            </ThemeProvider>
          </StylesProvider>
        </React.Fragment>
      );
    }
  }
);
export default _App;
