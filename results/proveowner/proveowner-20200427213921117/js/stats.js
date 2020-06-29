var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1500",
        "ok": "1489",
        "ko": "11"
    },
    "minResponseTime": {
        "total": "37",
        "ok": "42",
        "ko": "37"
    },
    "maxResponseTime": {
        "total": "9526",
        "ok": "9526",
        "ko": "9366"
    },
    "meanResponseTime": {
        "total": "287",
        "ok": "279",
        "ko": "1418"
    },
    "standardDeviation": {
        "total": "1114",
        "ok": "1085",
        "ko": "2900"
    },
    "percentiles1": {
        "total": "72",
        "ok": "72",
        "ko": "82"
    },
    "percentiles2": {
        "total": "93",
        "ok": "93",
        "ko": "322"
    },
    "percentiles3": {
        "total": "265",
        "ok": "255",
        "ko": "7265"
    },
    "percentiles4": {
        "total": "7271",
        "ok": "7115",
        "ko": "8946"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1432,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 55,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 11,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "4.963",
        "ko": "0.037"
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
        "total": "1500",
        "ok": "1489",
        "ko": "11"
    },
    "minResponseTime": {
        "total": "37",
        "ok": "42",
        "ko": "37"
    },
    "maxResponseTime": {
        "total": "9526",
        "ok": "9526",
        "ko": "9366"
    },
    "meanResponseTime": {
        "total": "287",
        "ok": "279",
        "ko": "1418"
    },
    "standardDeviation": {
        "total": "1114",
        "ok": "1085",
        "ko": "2900"
    },
    "percentiles1": {
        "total": "72",
        "ok": "72",
        "ko": "82"
    },
    "percentiles2": {
        "total": "93",
        "ok": "93",
        "ko": "322"
    },
    "percentiles3": {
        "total": "265",
        "ok": "255",
        "ko": "7265"
    },
    "percentiles4": {
        "total": "7271",
        "ok": "7115",
        "ko": "8946"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1432,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 55,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 11,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "4.963",
        "ko": "0.037"
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
