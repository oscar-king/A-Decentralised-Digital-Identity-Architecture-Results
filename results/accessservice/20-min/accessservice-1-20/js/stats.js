var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1200",
        "ok": "1200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1390",
        "ok": "1390",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "456",
        "ok": "456",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "percentiles1": {
        "total": "438",
        "ok": "438",
        "ko": "-"
    },
    "percentiles2": {
        "total": "537",
        "ok": "537",
        "ko": "-"
    },
    "percentiles3": {
        "total": "755",
        "ok": "755",
        "ko": "-"
    },
    "percentiles4": {
        "total": "926",
        "ok": "926",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1157,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 41,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
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
        "total": "1200",
        "ok": "1200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1390",
        "ok": "1390",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "456",
        "ok": "456",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "percentiles1": {
        "total": "438",
        "ok": "438",
        "ko": "-"
    },
    "percentiles2": {
        "total": "537",
        "ok": "537",
        "ko": "-"
    },
    "percentiles3": {
        "total": "755",
        "ok": "755",
        "ko": "-"
    },
    "percentiles4": {
        "total": "926",
        "ok": "926",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1157,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 41,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
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
