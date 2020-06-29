var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2745",
        "ok": "2745",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2032",
        "ok": "2032",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "593",
        "ok": "593",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "445",
        "ok": "445",
        "ko": "-"
    },
    "percentiles1": {
        "total": "472",
        "ok": "472",
        "ko": "-"
    },
    "percentiles2": {
        "total": "847",
        "ok": "847",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1490",
        "ok": "1490",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1801",
        "ok": "1801",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2010,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 342,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 393,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.826",
        "ok": "8.826",
        "ko": "-"
    }
},
contents: {
"req_verify-block-c7e7a": {
        type: "REQUEST",
        name: "Verify Block",
path: "Verify Block",
pathFormatted: "req_verify-block-c7e7a",
stats: {
    "name": "Verify Block",
    "numberOfRequests": {
        "total": "2745",
        "ok": "2745",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2032",
        "ok": "2032",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "593",
        "ok": "593",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "445",
        "ok": "445",
        "ko": "-"
    },
    "percentiles1": {
        "total": "472",
        "ok": "472",
        "ko": "-"
    },
    "percentiles2": {
        "total": "847",
        "ok": "847",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1490",
        "ok": "1490",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1801",
        "ok": "1801",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2010,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 342,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 393,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.826",
        "ok": "8.826",
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
