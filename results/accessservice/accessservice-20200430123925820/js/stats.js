var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2100",
        "ok": "2056",
        "ko": "44"
    },
    "minResponseTime": {
        "total": "655",
        "ok": "655",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60004",
        "ok": "58237",
        "ko": "60004"
    },
    "meanResponseTime": {
        "total": "19734",
        "ok": "18872",
        "ko": "60002"
    },
    "standardDeviation": {
        "total": "9281",
        "ok": "7248",
        "ko": "1"
    },
    "percentiles1": {
        "total": "19569",
        "ok": "19534",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "21564",
        "ok": "21385",
        "ko": "60003"
    },
    "percentiles3": {
        "total": "34966",
        "ok": "27694",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "50073",
        "ko": "60004"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2051,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "count": 44,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.522",
        "ok": "6.385",
        "ko": "0.137"
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
        "total": "2100",
        "ok": "2056",
        "ko": "44"
    },
    "minResponseTime": {
        "total": "655",
        "ok": "655",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60004",
        "ok": "58237",
        "ko": "60004"
    },
    "meanResponseTime": {
        "total": "19734",
        "ok": "18872",
        "ko": "60002"
    },
    "standardDeviation": {
        "total": "9281",
        "ok": "7248",
        "ko": "1"
    },
    "percentiles1": {
        "total": "19569",
        "ok": "19534",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "21564",
        "ok": "21385",
        "ko": "60003"
    },
    "percentiles3": {
        "total": "34966",
        "ok": "27694",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "50073",
        "ko": "60004"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2051,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "count": 44,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.522",
        "ok": "6.385",
        "ko": "0.137"
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
