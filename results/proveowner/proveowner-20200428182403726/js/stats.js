var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3010",
        "ok": "2997",
        "ko": "13"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "40",
        "ko": "39"
    },
    "maxResponseTime": {
        "total": "632",
        "ok": "632",
        "ko": "493"
    },
    "meanResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "190"
    },
    "standardDeviation": {
        "total": "85",
        "ok": "84",
        "ko": "164"
    },
    "percentiles1": {
        "total": "59",
        "ok": "59",
        "ko": "64"
    },
    "percentiles2": {
        "total": "74",
        "ok": "74",
        "ko": "310"
    },
    "percentiles3": {
        "total": "305",
        "ok": "303",
        "ko": "441"
    },
    "percentiles4": {
        "total": "459",
        "ok": "456",
        "ko": "483"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2997,
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
    "count": 13,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.71",
        "ok": "9.668",
        "ko": "0.042"
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
        "total": "3010",
        "ok": "2997",
        "ko": "13"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "40",
        "ko": "39"
    },
    "maxResponseTime": {
        "total": "632",
        "ok": "632",
        "ko": "493"
    },
    "meanResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "190"
    },
    "standardDeviation": {
        "total": "85",
        "ok": "84",
        "ko": "164"
    },
    "percentiles1": {
        "total": "59",
        "ok": "59",
        "ko": "64"
    },
    "percentiles2": {
        "total": "74",
        "ok": "74",
        "ko": "310"
    },
    "percentiles3": {
        "total": "305",
        "ok": "303",
        "ko": "441"
    },
    "percentiles4": {
        "total": "459",
        "ok": "456",
        "ko": "483"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2997,
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
    "count": 13,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.71",
        "ok": "9.668",
        "ko": "0.042"
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
