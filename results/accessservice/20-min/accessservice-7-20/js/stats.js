var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8400",
        "ok": "4767",
        "ko": "3633"
    },
    "minResponseTime": {
        "total": "266",
        "ok": "266",
        "ko": "6192"
    },
    "maxResponseTime": {
        "total": "60042",
        "ok": "59812",
        "ko": "60042"
    },
    "meanResponseTime": {
        "total": "44844",
        "ok": "34670",
        "ko": "58194"
    },
    "standardDeviation": {
        "total": "14178",
        "ok": "7759",
        "ko": "8470"
    },
    "percentiles1": {
        "total": "39918",
        "ok": "34150",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "60004",
        "ok": "38221",
        "ko": "60006"
    },
    "percentiles3": {
        "total": "60007",
        "ok": "47827",
        "ko": "60008"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "56038",
        "ko": "60009"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4766,
    "percentage": 57
},
    "group4": {
    "name": "failed",
    "count": 3633,
    "percentage": 43
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.715",
        "ok": "3.811",
        "ko": "2.904"
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
        "total": "8400",
        "ok": "4767",
        "ko": "3633"
    },
    "minResponseTime": {
        "total": "266",
        "ok": "266",
        "ko": "6192"
    },
    "maxResponseTime": {
        "total": "60042",
        "ok": "59812",
        "ko": "60042"
    },
    "meanResponseTime": {
        "total": "44844",
        "ok": "34670",
        "ko": "58194"
    },
    "standardDeviation": {
        "total": "14178",
        "ok": "7759",
        "ko": "8470"
    },
    "percentiles1": {
        "total": "39918",
        "ok": "34150",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "60004",
        "ok": "38221",
        "ko": "60006"
    },
    "percentiles3": {
        "total": "60007",
        "ok": "47827",
        "ko": "60008"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "56038",
        "ko": "60009"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4766,
    "percentage": 57
},
    "group4": {
    "name": "failed",
    "count": 3633,
    "percentage": 43
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.715",
        "ok": "3.811",
        "ko": "2.904"
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
