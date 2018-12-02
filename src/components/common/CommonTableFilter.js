import React, {Component} from 'react';
import {Col, Row, Table} from 'antd';
import {NavLink} from "react-router-dom";

class CommonTableFilter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col md={24} xs={24}>
                        <div className="shop-item-desc">
                                <h1 className="title title--main pull-left">
                                    <span>{this.props.title}</span>
                                </h1>
                            <Col md={24} sm={24} xs={24} >
                                {this.props.filter.map((filter) => (
                                    <Col lg={filter.lg} md={24} sm={24} xs={24} key={filter.id}>
                                        {filter.content}
                                    </Col>
                                ))}
                            </Col>
                            <div style={{paddingTop: '50px'}}>
                                <NavLink to={this.props.urlAdd}>New job</NavLink>
                                <Table
                                    // rowKey={record => record.login.username}  Su dung ID cua api tra ve
                                    columns={this.props.columns}
                                    dataSource={this.props.data}
                                    pagination={this.props.pagination}
                                    loading={this.props.loading}
                                    onChange={this.props.handleTableChange}
                                />
                            </div>
                        </div>
                        <div id="pagination"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CommonTableFilter;
