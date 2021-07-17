"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_ROLES = exports.User = void 0;
class User {
    constructor(props, id) {
        Object.assign(this, props);
        this.id = id;
    }
    static stringToUserRole(input) {
        switch (input) {
            case "NORMAL":
                return USER_ROLES.NORMAL;
            case "ADMIN":
                return USER_ROLES.ADMIN;
            default:
                throw new Error("Invalid user role");
        }
    }
    static toUserModel(user) {
        const { id, ...props } = user;
        return new User(props, id);
    }
}
exports.User = User;
var USER_ROLES;
(function (USER_ROLES) {
    USER_ROLES["NORMAL"] = "NORMAL";
    USER_ROLES["ADMIN"] = "ADMIN";
})(USER_ROLES = exports.USER_ROLES || (exports.USER_ROLES = {}));
