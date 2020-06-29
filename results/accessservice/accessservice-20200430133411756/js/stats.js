var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2263",
        "ko": "737"
    },
    "minResponseTime": {
        "total": "2959",
        "ok": "2959",
        "ko": "5670"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "59977",
        "ko": "60010"
    },
    "meanResponseTime": {
        "total": "27804",
        "ok": "21494",
        "ko": "47177"
    },
    "standardDeviation": {
        "total": "17444",
        "ok": "9996",
        "ko": "20841"
    },
    "percentiles1": {
        "total": "19937",
        "ok": "18501",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "33707",
        "ok": "24446",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "47143",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "56862",
        "ko": "60009"
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
    "count": 2263,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "count": 737,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.902",
        "ok": "6.715",
        "ko": "2.187"
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
        "total": "3000",
        "ok": "2263",
        "ko": "737"
    },
    "minResponseTime": {
        "total": "2959",
        "ok": "2959",
        "ko": "5670"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "59977",
        "ko": "60010"
    },
    "meanResponseTime": {
        "total": "27804",
        "ok": "21494",
        "ko": "47177"
    },
    "standardDeviation": {
        "total": "17444",
        "ok": "9996",
        "ko": "20841"
    },
    "percentiles1": {
        "total": "19937",
        "ok": "18501",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "33707",
        "ok": "24446",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "47143",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "56862",
        "ko": "60009"
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
    "count": 2263,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "count": 737,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.902",
        "ok": "6.715",
        "ko": "2.187"
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
