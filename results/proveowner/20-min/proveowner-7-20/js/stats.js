var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8400",
        "ok": "8227",
        "ko": "173"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "38",
        "ko": "29"
    },
    "maxResponseTime": {
        "total": "10047",
        "ok": "10047",
        "ko": "5115"
    },
    "meanResponseTime": {
        "total": "85",
        "ok": "83",
        "ko": "173"
    },
    "standardDeviation": {
        "total": "195",
        "ok": "172",
        "ko": "659"
    },
    "percentiles1": {
        "total": "65",
        "ok": "65",
        "ko": "47"
    },
    "percentiles2": {
        "total": "79",
        "ok": "79",
        "ko": "59"
    },
    "percentiles3": {
        "total": "176",
        "ok": "175",
        "ko": "505"
    },
    "percentiles4": {
        "total": "351",
        "ok": "335",
        "ko": "4816"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8224,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 173,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7",
        "ok": "6.856",
        "ko": "0.144"
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
        "total": "8400",
        "ok": "8227",
        "ko": "173"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "38",
        "ko": "29"
    },
    "maxResponseTime": {
        "total": "10047",
        "ok": "10047",
        "ko": "5115"
    },
    "meanResponseTime": {
        "total": "85",
        "ok": "83",
        "ko": "173"
    },
    "standardDeviation": {
        "total": "195",
        "ok": "172",
        "ko": "659"
    },
    "percentiles1": {
        "total": "65",
        "ok": "65",
        "ko": "47"
    },
    "percentiles2": {
        "total": "79",
        "ok": "79",
        "ko": "59"
    },
    "percentiles3": {
        "total": "176",
        "ok": "175",
        "ko": "505"
    },
    "percentiles4": {
        "total": "351",
        "ok": "335",
        "ko": "4816"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8224,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 173,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7",
        "ok": "6.856",
        "ko": "0.144"
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
