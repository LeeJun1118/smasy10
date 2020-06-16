import React, {Component} from "react";
import axios from "axios";

class Check extends Component {
    static propTypes = {
        resource: React.PropTypes.string.isRequired,
        permission: React.PropTypes.oneOf(['read', 'write']),
        userPermissions: React.PropTypes.object,
    };

    // Checks that user permission for resource is the same or greater than required
    allowed() {
        const permissions = ['read', 'write'];
        const { permission, userPermissions } = this.props;
        const userPermission = userPermissions[resource] || 'none';

        return permissions.indexOf(userPermission) >= permissions.indexOf(permission)
    }

    render() {
        if (this.allowed()) return { this.props.children };
    }
}

export default connect(userPermissionsSelector)(Check)