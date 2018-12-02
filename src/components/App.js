import React from "react";
import {Layout} from "antd";
import HeaderTemplate from "./landing/templates/HeaderTemplate";
import ContentTemplate from "./landing/templates/ContentTemplate";
import FooterTemplate from "./landing/templates/FooterTemplate";

const App = () => {
    return (
        <Layout>
            <HeaderTemplate/>
            <ContentTemplate/>
            <FooterTemplate/>
        </Layout>
    );
};

export default App;
