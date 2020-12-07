var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "11326",
        "ko": "674"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "43",
        "ko": "29"
    },
    "maxResponseTime": {
        "total": "10928",
        "ok": "10928",
        "ko": "10727"
    },
    "meanResponseTime": {
        "total": "311",
        "ok": "313",
        "ko": "281"
    },
    "standardDeviation": {
        "total": "430",
        "ok": "397",
        "ko": "805"
    },
    "percentiles1": {
        "total": "124",
        "ok": "128",
        "ko": "72"
    },
    "percentiles2": {
        "total": "451",
        "ok": "462",
        "ko": "192"
    },
    "percentiles3": {
        "total": "983",
        "ok": "990",
        "ko": "842"
    },
    "percentiles4": {
        "total": "1541",
        "ok": "1515",
        "ko": "5603"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10091,
    "percentage": 84
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 979,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 256,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 674,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "9.438",
        "ko": "0.562"
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
        "total": "12000",
        "ok": "11326",
        "ko": "674"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "43",
        "ko": "29"
    },
    "maxResponseTime": {
        "total": "10928",
        "ok": "10928",
        "ko": "10727"
    },
    "meanResponseTime": {
        "total": "311",
        "ok": "313",
        "ko": "281"
    },
    "standardDeviation": {
        "total": "430",
        "ok": "397",
        "ko": "805"
    },
    "percentiles1": {
        "total": "124",
        "ok": "128",
        "ko": "72"
    },
    "percentiles2": {
        "total": "451",
        "ok": "462",
        "ko": "192"
    },
    "percentiles3": {
        "total": "983",
        "ok": "990",
        "ko": "842"
    },
    "percentiles4": {
        "total": "1541",
        "ok": "1515",
        "ko": "5603"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10091,
    "percentage": 84
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 979,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 256,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 674,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "9.438",
        "ko": "0.562"
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
