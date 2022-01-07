var t,n;
var c = ["WRbNW7BcVSouvHW=", "wY3cP8oSvq==", "WQRdGmoDghTlea==", "vdD6WR0QwWldQ8kW", "aaXsf8oaWRVcJ8khWQNdRW==", "BXjAWPuK", "WQPfW6NcTCoG", "W5acgG==", "WQuZW4vLzCkT", "WObUWRfLrG==", "nGb9eCkK", "sa9UWQez", "DHzyWPiz", "D0VcHXvM", "ExDbWQGAWQW=", "W7j4jZ1Y", "WRldOGVcICk1iSkN", "gCk7CX8dW4pdRW==", "xLhdImkiW6e=", "W6z9lYntwSo5", "W5TbWQFcOmoJ", "a8kiD8oWWR4=", "sMZcVWPD", "nsbmaSoI", "dmkXDrmwW4xdQG==", "W74cW7Lyta==", "WRZcN8kCWOFcKq==", "WRhdKYBcQ8k+", "WOvCW7hcLCo3", "WP3cNahcOMNcRW==", "W4GPW78QhrBcPW==", "DSkQWP/cP8oGW4e=", "lt0UWQb7", "W695nqv4wCoK", "W4pcQJBcL3y=", "WPvHW4ivba==", "W6yqW64=", "fJq8EmkvW4NdMCoLWQS=", "hZ4/", "W4qbW75vCq==", "W5v1v8k5W7m=", "WQ1YW7FcO8oQ", "hCosAciW", "AtD0WO84", "W6rEW7CIW6e=", "WPZdJYmlW4O=", "wbZcIG==", "iZuqWQbd", "tw56shm=", "CK3cQX1f", "W4rlt8keW48=", "grqkq8oE", "C1hcNInU", "FKFcPZLFqq==", "abHKeCkY", "W6RdQCogrmkE", "gYu3WQbT", "W4bKiIn+WOtdN0NdS3i=", "q1/dOmkNW60=", "aqKBzSo4WOHYWQvm", "Cc16WRqd", "WQZcR8kkWOBcQ8kXWPFdUSon", "W5eVW4q5ja==", "vd9TWPSz", "WQ1LWObezCo5eSoV", "WOfOW74PjSk1WP4=", "WRPMWOPsBq==", "W79ZW48WW7K=", "BG3cMSo2Ea==", "a8oBtcOG", "WO1yW53cGCoD", "WQOZW4LVymkBeGNcJCokWO5P", "WQX+W6qria==", "WPNcK8kRWRdcQq==", "bmoZxsuB", "kc5KlCoU", "eWzZemo3WOFcICkuWQFdPaq=", "sSkHAb4AW6G8n8kLWQS=", "W7Slp0HyWRO4tmonzSko", "W6P2DmoIdW==", "CxDtWOWj", "jCoeBJzh", "fX9Pbmkj", "b8k9EmotWR8=", "W43cSJBcS00=", "uLDRWRHmWQy=", "bSo4ttjK", "nJqGD8ks", "W6CaW7bUFtJcOW==", "rgTeWOvK", "W67cPW/cVmkOj8o/vG==", "W4XPib5o", "tGJcSSojzW==", "f8otvJLE", "W6xdTmoLWQaS", "s1P8WPT9", "WRhdKqueW7C=", "W4GPW78TabtcSmoQqqK=", "W4K9p01f", "W5hdTCoLsSkr", "WOlcIqpcRgK=", "W6hcSqFcUfy=", "uWnFWPqg"];
t = u, n = 208, function (e) {
    for (; --e;) t.push(t.shift());
  }(++n);
var mme = function(e) {
    for (var t, r, n = String(e).replace(/=+$/, ""), a = "", i = 0, o = 0; r = n.charAt(o++); ){
        
        r = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(r);
        if(~r){
            t = i % 4 ? 64 * t + r : r;
            if(i++ % 4){
                a += String.fromCharCode(255 & t >> (-2 * i & 6))
            }
        }
        
        // ~r && (t = i % 4 ? 64 * t + r : r,
        //     i++ % 4) ? a += String.fromCharCode(255 & t >> (-2 * i & 6)) : 0
    }
        
    return a
};
var u = function e(t, r) {
    var n = c[t -= 0];
    // n='ExDbWQGAWQW=';
    var kGRpXb = function(e, t) {
        for (var r = [], n = 0, a = void 0, i = "", o = "", s = 0, c = (e = mme(e)).length; s < c; s++)
            o += "%" + ("00" + e.charCodeAt(s).toString(16)).slice(-2);
        e = decodeURIComponent(o);
        var u = void 0;
        for (u = 0; u < 256; u++)
            r[u] = u;
        for (u = 0; u < 256; u++)
            n = (n + r[u] + t.charCodeAt(u % t.length)) % 256,
            a = r[u],
            r[u] = r[n],
            r[n] = a;
        u = 0,
        n = 0;
        for (var d = 0; d < e.length; d++)
            n = (n + r[u = (u + 1) % 256]) % 256,
            a = r[u],
            r[u] = r[n],
            r[n] = a,
            i += String.fromCharCode(e.charCodeAt(d) ^ r[(r[u] + r[n]) % 256]);
        return i
    };
    var ret = kGRpXb(n, r);
    return ret;
}

// console.log(mme('DHzyWPiz'));
console.log(u('0xc','S0tV'));
// window[u('0xc', 'S0tV')];