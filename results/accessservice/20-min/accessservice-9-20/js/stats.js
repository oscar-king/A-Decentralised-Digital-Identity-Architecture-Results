var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10800",
        "ok": "4625",
        "ko": "6175"
    },
    "minResponseTime": {
        "total": "1208",
        "ok": "1208",
        "ko": "6813"
    },
    "maxResponseTime": {
        "total": "60027",
        "ok": "59988",
        "ko": "60027"
    },
    "meanResponseTime": {
        "total": "48933",
        "ok": "35847",
        "ko": "58735"
    },
    "standardDeviation": {
        "total": "13234",
        "ok": "6866",
        "ko": "6831"
    },
    "percentiles1": {
        "total": "60001",
        "ok": "35230",
        "ko": "60003"
    },
    "percentiles2": {
        "total": "60004",
        "ok": "38260",
        "ko": "60004"
    },
    "percentiles3": {
        "total": "60006",
        "ok": "48108",
        "ko": "60007"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "53959",
        "ko": "60010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4625,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 6175,
    "percentage": 57
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.578",
        "ok": "3.674",
        "ko": "4.905"
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
        "total": "10800",
        "ok": "4625",
        "ko": "6175"
    },
    "minResponseTime": {
        "total": "1208",
        "ok": "1208",
        "ko": "6813"
    },
    "maxResponseTime": {
        "total": "60027",
        "ok": "59988",
        "ko": "60027"
    },
    "meanResponseTime": {
        "total": "48933",
        "ok": "35847",
        "ko": "58735"
    },
    "standardDeviation": {
        "total": "13234",
        "ok": "6866",
        "ko": "6831"
    },
    "percentiles1": {
        "total": "60001",
        "ok": "35230",
        "ko": "60003"
    },
    "percentiles2": {
        "total": "60004",
        "ok": "38260",
        "ko": "60004"
    },
    "percentiles3": {
        "total": "60007",
        "ok": "48108",
        "ko": "60007"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "53959",
        "ko": "60010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4625,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 6175,
    "percentage": 57
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.578",
        "ok": "3.674",
        "ko": "4.905"
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
