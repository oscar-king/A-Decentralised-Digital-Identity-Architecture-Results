var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "5103",
        "ko": "6897"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "455",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "60008",
        "ok": "59993",
        "ko": "60008"
    },
    "meanResponseTime": {
        "total": "48207",
        "ok": "33762",
        "ko": "58895"
    },
    "standardDeviation": {
        "total": "14155",
        "ok": "7086",
        "ko": "6545"
    },
    "percentiles1": {
        "total": "59935",
        "ok": "32517",
        "ko": "59937"
    },
    "percentiles2": {
        "total": "59938",
        "ok": "36185",
        "ko": "59944"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "47086",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60003",
        "ok": "58285",
        "ko": "60004"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5101,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 6897,
    "percentage": 57
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.547",
        "ok": "4.06",
        "ko": "5.487"
    }
},
contents: {
"req_request-signatu-63665": {
        type: "REQUEST",
        name: "Request Signature",
path: "Request Signature",
pathFormatted: "req_request-signatu-63665",
stats: {
    "name": "Request Signature",
    "numberOfRequests": {
        "total": "12000",
        "ok": "5103",
        "ko": "6897"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "455",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "60008",
        "ok": "59993",
        "ko": "60008"
    },
    "meanResponseTime": {
        "total": "48207",
        "ok": "33762",
        "ko": "58895"
    },
    "standardDeviation": {
        "total": "14155",
        "ok": "7086",
        "ko": "6545"
    },
    "percentiles1": {
        "total": "59935",
        "ok": "32517",
        "ko": "59937"
    },
    "percentiles2": {
        "total": "59938",
        "ok": "36185",
        "ko": "59944"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "47086",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60003",
        "ok": "58285",
        "ko": "60004"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5101,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 6897,
    "percentage": 57
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.547",
        "ok": "4.06",
        "ko": "5.487"
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
