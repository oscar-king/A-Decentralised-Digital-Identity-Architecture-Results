var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "4499",
        "ko": "7501"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "335",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "60024",
        "ok": "59891",
        "ko": "60024"
    },
    "meanResponseTime": {
        "total": "48440",
        "ok": "35756",
        "ko": "56047"
    },
    "standardDeviation": {
        "total": "14869",
        "ok": "7343",
        "ko": "12922"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "35161",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "38326",
        "ko": "60003"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "48535",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60008",
        "ok": "55007",
        "ko": "60008"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4494,
    "percentage": 37
},
    "group4": {
    "name": "failed",
    "count": 7501,
    "percentage": 63
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.539",
        "ok": "3.576",
        "ko": "5.963"
    }
},
contents: {
"req_access-service-f8ddd": {
        type: "REQUEST",
        name: "Access Service",
path: "Access Service",
pathFormatted: "req_access-service-f8ddd",
stats: {
    "name": "Access Service",
    "numberOfRequests": {
        "total": "12000",
        "ok": "4499",
        "ko": "7501"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "335",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "60024",
        "ok": "59891",
        "ko": "60024"
    },
    "meanResponseTime": {
        "total": "48440",
        "ok": "35756",
        "ko": "56047"
    },
    "standardDeviation": {
        "total": "14869",
        "ok": "7343",
        "ko": "12922"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "35161",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "38326",
        "ko": "60003"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "48535",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60008",
        "ok": "55007",
        "ko": "60008"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4494,
    "percentage": 37
},
    "group4": {
    "name": "failed",
    "count": 7501,
    "percentage": 63
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.539",
        "ok": "3.576",
        "ko": "5.963"
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
