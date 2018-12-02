import React, {Component} from 'react';
import {Layout} from "antd";
import {Route, Switch} from "react-router-dom";
import PageNotFound from "../../common/PageNotFound";
import {default as UserList} from "../Users/List";
import {default as UserForm} from "../Users/Form";
import {default as ProductList} from '../Products/List';
import {default as QuestionList} from '../Questions/List';
import MoviesContainer from "../../../containers/MoviesContainer";

const {Content} = Layout;


class ContentTemplate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Content style={{ padding: "0 50px", marginTop: 64 }}>
                <div style={{ margin: "16px 0" }}>
                </div>
                <div style={{ background: "#fff", padding: 24, minHeight:'calc(100vh - 55px)' }}>
                    <Switch>
                        <Route exact path="/" component={MoviesContainer} />
                        <Route exact path="/users" component={UserList} />
                        <Route exact path="/users/add" component={UserForm} />
                        <Route exact path="/products" component={ProductList} />
                        <Route exact path="/questions" component={QuestionList} />
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>
            </Content>
        );
    }
}

export default ContentTemplate;
