var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1500",
        "ok": "1492",
        "ko": "8"
    },
    "minResponseTime": {
        "total": "36",
        "ok": "39",
        "ko": "36"
    },
    "maxResponseTime": {
        "total": "1578",
        "ok": "1578",
        "ko": "217"
    },
    "meanResponseTime": {
        "total": "84",
        "ok": "84",
        "ko": "94"
    },
    "standardDeviation": {
        "total": "91",
        "ok": "91",
        "ko": "57"
    },
    "percentiles1": {
        "total": "64",
        "ok": "65",
        "ko": "82"
    },
    "percentiles2": {
        "total": "81",
        "ok": "81",
        "ko": "120"
    },
    "percentiles3": {
        "total": "168",
        "ok": "166",
        "ko": "183"
    },
    "percentiles4": {
        "total": "370",
        "ok": "370",
        "ko": "210"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1486,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 8,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "4.973",
        "ko": "0.027"
    }
},
contents: {
"req_prove-owner-47bdd": {
        type: "REQUEST",
        name: "Prove Owner",
path: "Prove Owner",
pathFormatted: "req_prove-owner-47bdd",
stats: {
    "name": "Prove Owner",
    "numberOfRequests": {
        "total": "1500",
        "ok": "1492",
        "ko": "8"
    },
    "minResponseTime": {
        "total": "36",
        "ok": "39",
        "ko": "36"
    },
    "maxResponseTime": {
        "total": "1578",
        "ok": "1578",
        "ko": "217"
    },
    "meanResponseTime": {
        "total": "84",
        "ok": "84",
        "ko": "94"
    },
    "standardDeviation": {
        "total": "91",
        "ok": "91",
        "ko": "57"
    },
    "percentiles1": {
        "total": "65",
        "ok": "64",
        "ko": "82"
    },
    "percentiles2": {
        "total": "81",
        "ok": "81",
        "ko": "120"
    },
    "percentiles3": {
        "total": "168",
        "ok": "166",
        "ko": "183"
    },
    "percentiles4": {
        "total": "370",
        "ok": "370",
        "ko": "210"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1486,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 8,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "4.973",
        "ko": "0.027"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
