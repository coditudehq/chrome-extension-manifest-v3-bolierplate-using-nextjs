import Tabs from "@/components/Tabs";
import type { CustomNextPage } from "next";
import { Layout } from "../layout";

const IndexPage: CustomNextPage = () => {
  return <div className="w-[800px] h-[600px]">{<Tabs />}</div>;
};

export default IndexPage;

IndexPage.getLayout = Layout;
