var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3600",
        "ok": "3570",
        "ko": "30"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "51",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "10631",
        "ok": "10631",
        "ko": "234"
    },
    "meanResponseTime": {
        "total": "562",
        "ok": "566",
        "ko": "90"
    },
    "standardDeviation": {
        "total": "374",
        "ok": "373",
        "ko": "48"
    },
    "percentiles1": {
        "total": "476",
        "ok": "478",
        "ko": "84"
    },
    "percentiles2": {
        "total": "648",
        "ok": "650",
        "ko": "98"
    },
    "percentiles3": {
        "total": "1192",
        "ok": "1195",
        "ko": "185"
    },
    "percentiles4": {
        "total": "1652",
        "ok": "1652",
        "ko": "224"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2956,
    "percentage": 82
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 437,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 177,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 30,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.998",
        "ok": "2.973",
        "ko": "0.025"
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
        "total": "3600",
        "ok": "3570",
        "ko": "30"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "51",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "10631",
        "ok": "10631",
        "ko": "234"
    },
    "meanResponseTime": {
        "total": "562",
        "ok": "566",
        "ko": "90"
    },
    "standardDeviation": {
        "total": "374",
        "ok": "373",
        "ko": "48"
    },
    "percentiles1": {
        "total": "476",
        "ok": "478",
        "ko": "84"
    },
    "percentiles2": {
        "total": "648",
        "ok": "650",
        "ko": "98"
    },
    "percentiles3": {
        "total": "1192",
        "ok": "1195",
        "ko": "185"
    },
    "percentiles4": {
        "total": "1652",
        "ok": "1652",
        "ko": "224"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2956,
    "percentage": 82
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 437,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 177,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 30,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.998",
        "ok": "2.973",
        "ko": "0.025"
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
