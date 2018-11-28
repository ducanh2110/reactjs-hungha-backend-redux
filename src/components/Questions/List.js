import React, {Component} from 'react';
import DayPickerFromTo from "../../common/DayPickerFromTo/DayPickerFromTo";
import {Input, Select} from "antd";
import reqwest from "reqwest";
import queryString from "query-string";
import moment from 'moment';
import CommonTableFilter from "../../common/CommonTableFilter";
import {setTokenAuthenticated, setUserInfo} from "../../../actions";
import store from '../../../store';

const Search = Input.Search;
const Option = Select.Option;

class List extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'Content',
                dataIndex: 'content',
                width: '30%',
            },
            {
                title: 'State',
                dataIndex: 'state',
                width: '20%',

            },
            {
                title: 'Created Date',
                dataIndex: 'createdDate',
                width: '30%',

            },
            {
                title: 'Action',
                width: '20%',
            }
        ];
        this.state = {
            data: [],
            pagination: {},
            loading: false,
        };
        this.query = {
            fromDate: moment(new Date()).format('x'),
            toDate: moment(new Date()).format('x'),
            state: '',
            role: '',
            keyword: '',
        };
        this.handleTableChange = this.handleTableChange.bind(this);
        this.fetch = this.fetch.bind(this);
        this.handleDateValue = this.handleDateValue.bind(this);
        this.handleStateValue = this.handleStateValue.bind(this);
        this.handleRoleValue = this.handleRoleValue.bind(this);
        this.handleKeywordValue = this.handleKeywordValue.bind(this);

        this.filter = [
            {
                id: 1,
                content: (<DayPickerFromTo handleDateValue={this.handleDateValue} width='100%'/>),
                lg: 10
            },
            {
                id: 2,
                content: (<Select id="state" style={{ width: '100%' }} onSelect={this.handleStateValue}  placeholder="Select User State">
                    <Option value='true'>Active</Option>
                    <Option value='false'>Deactivate</Option>
                </Select>),
                lg: 4
            },
            {
                id: 3,
                content: ( <Search
                    placeholder="ProductName"
                    enterButton="Search"
                    size="default"
                    onSearch={this.fetch}
                    onChange={e => this.handleKeywordValue(e.target.value)}
                />),
                lg: 10
            }
        ];
    }

    componentDidMount() {
        this.fetch();
    }

    handleTableChange(pagination, filters, sorter) {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    }

    fetch() {
        this.setState({ loading: true });
        reqwest({
            url: 'https://my.api.mockaroo.com/products.json?' + queryString.stringify(this.query),
            method: 'get',
            data: {
                key: '322fe390',
            },
            type: 'json',
        }).then((data) => {
            const pagination = { ...this.state.pagination };
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;
            this.setState({
                loading: false,
                data: data,
                pagination,
            });
        }).fail(() => {
            this.fetch();
        });
    }

    handleStateValue(state) {
        this.query.state = state;
    }
    handleKeywordValue(keyword) {
        this.query.keyword = keyword;
    }
    handleRoleValue(role) {
        this.query.role = role;
    }
    handleDateValue(fromDate, toDate) {
        this.query.fromDate = moment(fromDate).format('x');
        this.query.toDate = moment(toDate).format('x');
    }

    render() {
        return (
            <CommonTableFilter
                urlAdd="/questions/add"
                fetch={this.fetch}
                title="Question manager"
                filter={this.filter}
                columns={this.columns}
                data={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                handleTableChange={this.handleTableChange}
            />
        );
    }
}

export default List;
