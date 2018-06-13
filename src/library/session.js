export default {
    setRouterSession($router) {
        $router.beforeEach(function (to, from, next) {
            // to : 이동할 url
            // from : 현재 url
            // next : to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
            window.scrollTo(0, 0);
            if (to.path === '/login') {
                next({ path: '/member/login' });
            } else {
                next();
            }
        });
        $router.afterEach(() => {
        });
    }
}