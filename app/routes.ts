import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route(path: '/auth', file: 'routes/auth.tsx'),
] satisfies RouteConfig;
