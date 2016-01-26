var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/^internal\.example\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)example\.com$/.test(host)) return "+latern";
        return "+__ruleListOf_auto switch";
    },
    "+__ruleListOf_auto switch": "DIRECT",
    "+latern": function(url, host, scheme) {
        "use strict";
        if (host === "[::1]" || host === "localhost" || host === "127.0.0.1" || /^127\.0\.0\.1$/.test(host) || /^192\.168\./.test(host) || /^10\.88\./.test(host) || /^12\.12\./.test(host)) return "DIRECT";
        return "PROXY 127.0.0.1:8787";
    }
});