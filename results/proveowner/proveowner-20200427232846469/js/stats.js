var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2700",
        "ok": "2691",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "45",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "1444",
        "ok": "1444",
        "ko": "865"
    },
    "meanResponseTime": {
        "total": "179",
        "ok": "179",
        "ko": "217"
    },
    "standardDeviation": {
        "total": "222",
        "ok": "222",
        "ko": "297"
    },
    "percentiles1": {
        "total": "76",
        "ok": "76",
        "ko": "59"
    },
    "percentiles2": {
        "total": "152",
        "ok": "152",
        "ko": "81"
    },
    "percentiles3": {
        "total": "654",
        "ok": "654",
        "ko": "785"
    },
    "percentiles4": {
        "total": "1060",
        "ok": "1060",
        "ko": "849"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2621,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 53,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 17,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 9,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9",
        "ok": "8.97",
        "ko": "0.03"
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
        "total": "2700",
        "ok": "2691",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "45",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "1444",
        "ok": "1444",
        "ko": "865"
    },
    "meanResponseTime": {
        "total": "179",
        "ok": "179",
        "ko": "217"
    },
    "standardDeviation": {
        "total": "222",
        "ok": "222",
        "ko": "297"
    },
    "percentiles1": {
        "total": "76",
        "ok": "76",
        "ko": "59"
    },
    "percentiles2": {
        "total": "152",
        "ok": "152",
        "ko": "81"
    },
    "percentiles3": {
        "total": "654",
        "ok": "654",
        "ko": "785"
    },
    "percentiles4": {
        "total": "1060",
        "ok": "1060",
        "ko": "849"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2621,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 53,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 17,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 9,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9",
        "ok": "8.97",
        "ko": "0.03"
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
