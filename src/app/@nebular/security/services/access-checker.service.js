import { Injectable } from '@angular/core';
import { NbRoleProvider } from './role.provider';
import { NbAclService } from './acl.service';
import { map } from 'rxjs/operators';
/**
 * Access checker service.
 *
 * Injects `NbRoleProvider` to determine current user role, and checks access permissions using `NbAclService`
 */
var NbAccessChecker = /** @class */ (function () {
    function NbAccessChecker(roleProvider, acl) {
        this.roleProvider = roleProvider;
        this.acl = acl;
    }
    /**
     * Checks whether access is granted or not
     *
     * @param {string} permission
     * @param {string} resource
     * @returns {Observable<boolean>}
     */
    /**
       * Checks whether access is granted or not
       *
       * @param {string} permission
       * @param {string} resource
       * @returns {Observable<boolean>}
       */
    NbAccessChecker.prototype.isGranted = /**
       * Checks whether access is granted or not
       *
       * @param {string} permission
       * @param {string} resource
       * @returns {Observable<boolean>}
       */
    function (permission, resource) {
        var _this = this;
        return this.roleProvider.getRole()
            .pipe(map(function (role) {
            return _this.acl.can(role, permission, resource);
        }));
    };
    NbAccessChecker.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NbAccessChecker.ctorParameters = function () { return [
        { type: NbRoleProvider, },
        { type: NbAclService, },
    ]; };
    return NbAccessChecker;
}());
export { NbAccessChecker };
//# sourceMappingURL=access-checker.service.js.map