"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var auth_guard_1 = require("./_guards/auth.guard");
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map