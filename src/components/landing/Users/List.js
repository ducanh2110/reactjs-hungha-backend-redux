import React, {Component} from 'react';
import CommonTableFilter from "../../common/CommonTableFilter";
import DayPickerFromTo from "../../common/DayPickerFromTo/DayPickerFromTo";
import moment from 'moment';
import {Input, Select} from "antd";
import queryString from 'query-string'
import reqwest from "reqwest";
const Search = Input.Search;
const Option = Select.Option;

class List extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'UserName',
                dataIndex: 'name',
                render: name => `${name.first} ${name.last}`,
                width: '10%',
                key: name => `${name.first} ${name.last}`
            },
            {
                title: 'First Name',
                dataIndex: 'name',
                render: name => `${name.first}`,
                width: '10%',
                key: name => `${name.first}`

            },
            {
                title: 'Last Name',
                dataIndex: 'name',
                render: name => `${name.last}`,
                width: '10%',
                key: name => `${name.last}`

            },
            {
                title: 'Email Address',
                dataIndex: 'email',
                width: '20%',
            },
            {
                title: 'Phone Number',
                dataIndex: 'phone',
                width: '10%',
            },
            {
                title: 'State',
                width: '10%',
            },
            {
                title: 'Role',
                width: '10%',
            },
            {
                title: 'Created Date',
                dataIndex: 'registered',
                render: data => `${data.date}`,
                width: '10%',
            },
            {
                title: 'Action',
                width: '10%',
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
                lg: 6
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
                content: (<Select id="role" style={{ width: '100%' }} onSelect={this.handleRoleValue}  placeholder="Select User State">
                    <Option value='ADMIN'>Admin</Option>
                    <Option value='USER'>User</Option>
                </Select>),
                lg: 4
            },
            {
                id: 4,
                content: ( <Search
                    placeholder="Username|| First Name || Last Name || Email || Phone"
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
            url: 'https://randomuser.me/api?' + queryString.stringify(this.query),
            method: 'get',
            data: {
                results: 10,
            },
            type: 'json',
        }).then((data) => {
            const pagination = { ...this.state.pagination };
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;
            this.setState({
                loading: false,
                data: data.results,
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
                urlAdd="/users/add"
                fetch={this.fetch}
                title="User Manager"
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
