import { connect } from "react-redux";
import Head from "next/head";
import Layout from "../components/layout/MainLayout";

const Index = () => (
  <>
    <Head>
      <title>Hello there i'm a test</title>
      <meta property="og:title" content="Hello there i'm og title" />
    </Head>
    <Layout>
      <div style={{ margin: "15px 0" }}>Hello my app</div>
    </Layout>
  </>
);

const mstp = ({ test }) => ({ test });

export default connect(mstp)(Index);
