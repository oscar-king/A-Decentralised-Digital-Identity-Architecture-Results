var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2100",
        "ok": "2090",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "37",
        "ok": "39",
        "ko": "37"
    },
    "maxResponseTime": {
        "total": "1461",
        "ok": "1461",
        "ko": "225"
    },
    "meanResponseTime": {
        "total": "83",
        "ok": "83",
        "ko": "87"
    },
    "standardDeviation": {
        "total": "79",
        "ok": "79",
        "ko": "54"
    },
    "percentiles1": {
        "total": "63",
        "ok": "63",
        "ko": "64"
    },
    "percentiles2": {
        "total": "78",
        "ok": "78",
        "ko": "109"
    },
    "percentiles3": {
        "total": "208",
        "ok": "208",
        "ko": "180"
    },
    "percentiles4": {
        "total": "342",
        "ok": "342",
        "ko": "216"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2085,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7",
        "ok": "6.967",
        "ko": "0.033"
    }
},
contents: {
"req_prove-owner-47bdd": {
        type: "REQUEST",
        name: "Prove Owner",
path: "Prove Owner",
pathFormatted: "req_prove-owner-47bdd",
stats: {
    "name": "Prove Owner",
    "numberOfRequests": {
        "total": "2100",
        "ok": "2090",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "37",
        "ok": "39",
        "ko": "37"
    },
    "maxResponseTime": {
        "total": "1461",
        "ok": "1461",
        "ko": "225"
    },
    "meanResponseTime": {
        "total": "83",
        "ok": "83",
        "ko": "87"
    },
    "standardDeviation": {
        "total": "79",
        "ok": "79",
        "ko": "54"
    },
    "percentiles1": {
        "total": "63",
        "ok": "63",
        "ko": "64"
    },
    "percentiles2": {
        "total": "78",
        "ok": "78",
        "ko": "109"
    },
    "percentiles3": {
        "total": "208",
        "ok": "208",
        "ko": "180"
    },
    "percentiles4": {
        "total": "342",
        "ok": "342",
        "ko": "216"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2085,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7",
        "ok": "6.967",
        "ko": "0.033"
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
