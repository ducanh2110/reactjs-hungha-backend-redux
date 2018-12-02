import React, {Component} from 'react';
import Exception from 'ant-design-pro/lib/Exception';
import {Link} from "react-router-dom";
class PageNotFound extends Component {
    render() {
        return (
            <Exception
                type="404"
                desc='404 Not Found'
                linkElement={Link}
                backText='Back to Home'
            />
        );
    }
}

export default PageNotFound;
