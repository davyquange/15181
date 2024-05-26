const headers = Object.fromEntries(Object.entries($request.headers).map(([key, value]) => [key.toLowerCase(), value]));
Object.assign(headers, {
    'auth-uid': '212989617',
    'auth-token': '1a95b45cfd13e926d7e43ae893c622df',
});

$done({ headers });
