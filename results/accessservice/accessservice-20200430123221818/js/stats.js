var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1500",
        "ok": "1500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "56",
        "ok": "56",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5072",
        "ok": "5072",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "363",
        "ok": "363",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "379",
        "ok": "379",
        "ko": "-"
    },
    "percentiles1": {
        "total": "249",
        "ok": "249",
        "ko": "-"
    },
    "percentiles2": {
        "total": "378",
        "ok": "378",
        "ko": "-"
    },
    "percentiles3": {
        "total": "932",
        "ok": "932",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1908",
        "ok": "1908",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1386,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 75,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 39,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.983",
        "ok": "4.983",
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
        "total": "1500",
        "ok": "1500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "56",
        "ok": "56",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5072",
        "ok": "5072",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "363",
        "ok": "363",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "379",
        "ok": "379",
        "ko": "-"
    },
    "percentiles1": {
        "total": "249",
        "ok": "249",
        "ko": "-"
    },
    "percentiles2": {
        "total": "378",
        "ok": "378",
        "ko": "-"
    },
    "percentiles3": {
        "total": "932",
        "ok": "932",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1908",
        "ok": "1908",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1386,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 75,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 39,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.983",
        "ok": "4.983",
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
