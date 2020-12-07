var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10800",
        "ok": "10361",
        "ko": "439"
    },
    "minResponseTime": {
        "total": "28",
        "ok": "38",
        "ko": "28"
    },
    "maxResponseTime": {
        "total": "10327",
        "ok": "10220",
        "ko": "10327"
    },
    "meanResponseTime": {
        "total": "98",
        "ok": "94",
        "ko": "190"
    },
    "standardDeviation": {
        "total": "249",
        "ok": "172",
        "ko": "908"
    },
    "percentiles1": {
        "total": "66",
        "ok": "66",
        "ko": "48"
    },
    "percentiles2": {
        "total": "82",
        "ok": "82",
        "ko": "67"
    },
    "percentiles3": {
        "total": "281",
        "ok": "281",
        "ko": "288"
    },
    "percentiles4": {
        "total": "453",
        "ok": "447",
        "ko": "5272"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10354,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 439,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.993",
        "ok": "8.627",
        "ko": "0.366"
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
        "total": "10800",
        "ok": "10361",
        "ko": "439"
    },
    "minResponseTime": {
        "total": "28",
        "ok": "38",
        "ko": "28"
    },
    "maxResponseTime": {
        "total": "10327",
        "ok": "10220",
        "ko": "10327"
    },
    "meanResponseTime": {
        "total": "98",
        "ok": "94",
        "ko": "190"
    },
    "standardDeviation": {
        "total": "249",
        "ok": "172",
        "ko": "908"
    },
    "percentiles1": {
        "total": "66",
        "ok": "66",
        "ko": "48"
    },
    "percentiles2": {
        "total": "82",
        "ok": "82",
        "ko": "67"
    },
    "percentiles3": {
        "total": "281",
        "ok": "281",
        "ko": "288"
    },
    "percentiles4": {
        "total": "453",
        "ok": "447",
        "ko": "5272"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10354,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 439,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.993",
        "ok": "8.627",
        "ko": "0.366"
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
