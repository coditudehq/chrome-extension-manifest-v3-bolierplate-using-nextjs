import Tabs from "@/components/Tabs";
import type { CustomNextPage } from "next";
import Head from "next/head";
import { Layout } from "../layout";
import "../styles/tabs.css";
const IndexPage: CustomNextPage = () => {
  return (
    <div>
      <Tabs />
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
