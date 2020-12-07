var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "11999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "455"
    },
    "maxResponseTime": {
        "total": "455",
        "ok": "330",
        "ko": "455"
    },
    "meanResponseTime": {
        "total": "26",
        "ok": "26",
        "ko": "455"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "19",
        "ko": "0"
    },
    "percentiles1": {
        "total": "19",
        "ok": "19",
        "ko": "455"
    },
    "percentiles2": {
        "total": "28",
        "ok": "28",
        "ko": "455"
    },
    "percentiles3": {
        "total": "62",
        "ok": "62",
        "ko": "455"
    },
    "percentiles4": {
        "total": "95",
        "ok": "95",
        "ko": "455"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11999,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "9.999",
        "ko": "0.001"
    }
},
contents: {
"req_service-respons-f3d56": {
        type: "REQUEST",
        name: "Service Response",
path: "Service Response",
pathFormatted: "req_service-respons-f3d56",
stats: {
    "name": "Service Response",
    "numberOfRequests": {
        "total": "12000",
        "ok": "11999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "455"
    },
    "maxResponseTime": {
        "total": "455",
        "ok": "330",
        "ko": "455"
    },
    "meanResponseTime": {
        "total": "26",
        "ok": "26",
        "ko": "455"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "19",
        "ko": "0"
    },
    "percentiles1": {
        "total": "19",
        "ok": "19",
        "ko": "455"
    },
    "percentiles2": {
        "total": "28",
        "ok": "28",
        "ko": "455"
    },
    "percentiles3": {
        "total": "62",
        "ok": "62",
        "ko": "455"
    },
    "percentiles4": {
        "total": "95",
        "ok": "95",
        "ko": "455"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11999,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "9.999",
        "ko": "0.001"
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
