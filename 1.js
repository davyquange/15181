const headers = Object.fromEntries(Object.entries($request.headers).map(([key, value]) => [key.toLowerCase(), value]));
Object.assign(headers, {
    'auth-uid': '212989617',
    'auth-token': '02f09000692e85ca994ffd283cc726fb',
});

$done({ headers });
