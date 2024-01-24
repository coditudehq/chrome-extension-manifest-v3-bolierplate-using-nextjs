"use Client";
import type { CustomAppProps } from "next/app";
import { Provider } from "react-redux";
import { memo } from "react";
// import { store } from "@/app/store";
import rootStore from "@/app/store";
// import "../styles/tabs.css";

const App = memo((props: CustomAppProps) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <Provider store={rootStore}>{getLayout(<props.Component {...props.pageProps} />)}</Provider>
  );
});

export default App;

App.displayName = "App";
