var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "6000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "65",
        "ok": "65",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3121",
        "ok": "3121",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "327",
        "ok": "327",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "237",
        "ok": "237",
        "ko": "-"
    },
    "percentiles1": {
        "total": "246",
        "ok": "246",
        "ko": "-"
    },
    "percentiles2": {
        "total": "361",
        "ok": "361",
        "ko": "-"
    },
    "percentiles3": {
        "total": "820",
        "ok": "820",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1215",
        "ok": "1215",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5677,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 259,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 64,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.996",
        "ok": "4.996",
        "ko": "-"
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
        "total": "6000",
        "ok": "6000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "65",
        "ok": "65",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3121",
        "ok": "3121",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "327",
        "ok": "327",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "237",
        "ok": "237",
        "ko": "-"
    },
    "percentiles1": {
        "total": "246",
        "ok": "246",
        "ko": "-"
    },
    "percentiles2": {
        "total": "361",
        "ok": "361",
        "ko": "-"
    },
    "percentiles3": {
        "total": "820",
        "ok": "820",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1215",
        "ok": "1215",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5677,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 259,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 64,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.996",
        "ok": "4.996",
        "ko": "-"
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
