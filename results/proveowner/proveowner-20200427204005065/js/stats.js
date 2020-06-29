var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "900",
        "ok": "890",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "44"
    },
    "maxResponseTime": {
        "total": "761",
        "ok": "761",
        "ko": "183"
    },
    "meanResponseTime": {
        "total": "82",
        "ok": "82",
        "ko": "80"
    },
    "standardDeviation": {
        "total": "48",
        "ok": "48",
        "ko": "38"
    },
    "percentiles1": {
        "total": "70",
        "ok": "70",
        "ko": "68"
    },
    "percentiles2": {
        "total": "86",
        "ok": "86",
        "ko": "80"
    },
    "percentiles3": {
        "total": "149",
        "ok": "149",
        "ko": "149"
    },
    "percentiles4": {
        "total": "230",
        "ok": "231",
        "ko": "176"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 890,
    "percentage": 99
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
    "count": 10,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3",
        "ok": "2.967",
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
        "total": "900",
        "ok": "890",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "44"
    },
    "maxResponseTime": {
        "total": "761",
        "ok": "761",
        "ko": "183"
    },
    "meanResponseTime": {
        "total": "82",
        "ok": "82",
        "ko": "80"
    },
    "standardDeviation": {
        "total": "48",
        "ok": "48",
        "ko": "38"
    },
    "percentiles1": {
        "total": "70",
        "ok": "70",
        "ko": "68"
    },
    "percentiles2": {
        "total": "86",
        "ok": "86",
        "ko": "80"
    },
    "percentiles3": {
        "total": "149",
        "ok": "149",
        "ko": "149"
    },
    "percentiles4": {
        "total": "230",
        "ok": "231",
        "ko": "176"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 890,
    "percentage": 99
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
    "count": 10,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3",
        "ok": "2.967",
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
