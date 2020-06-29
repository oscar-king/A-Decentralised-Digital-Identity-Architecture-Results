var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2700",
        "ok": "2080",
        "ko": "620"
    },
    "minResponseTime": {
        "total": "1032",
        "ok": "1032",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "59448",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "32801",
        "ok": "24693",
        "ko": "60002"
    },
    "standardDeviation": {
        "total": "17180",
        "ok": "9840",
        "ko": "2"
    },
    "percentiles1": {
        "total": "23720",
        "ok": "22343",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "52893",
        "ok": "26752",
        "ko": "60004"
    },
    "percentiles3": {
        "total": "60004",
        "ok": "50781",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "60005",
        "ok": "55896",
        "ko": "60005"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2079,
    "percentage": 77
},
    "group4": {
    "name": "failed",
    "count": 620,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.918",
        "ok": "6.1",
        "ko": "1.818"
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
        "total": "2700",
        "ok": "2080",
        "ko": "620"
    },
    "minResponseTime": {
        "total": "1032",
        "ok": "1032",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "59448",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "32801",
        "ok": "24693",
        "ko": "60002"
    },
    "standardDeviation": {
        "total": "17180",
        "ok": "9840",
        "ko": "2"
    },
    "percentiles1": {
        "total": "23720",
        "ok": "22343",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "52893",
        "ok": "26752",
        "ko": "60004"
    },
    "percentiles3": {
        "total": "60004",
        "ok": "50781",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "60005",
        "ok": "55896",
        "ko": "60005"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2079,
    "percentage": 77
},
    "group4": {
    "name": "failed",
    "count": 620,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.918",
        "ok": "6.1",
        "ko": "1.818"
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
