const NavigationHelper = {
    store: null,
    atStart: currentRoute => currentRoute == "/demo1",
    atEnd: currentRoute => currentRoute == "/demo2",
    prev(currentRoute) {
        if (currentRoute == "/ome") {
            return "/size"
        }  else {
            return "/";
        }
    },
    next(currentRoute) {
        if (currentRoute == "/") {
            return "/kioskHome";
        } else {
            return "/";
        }
    }
};
