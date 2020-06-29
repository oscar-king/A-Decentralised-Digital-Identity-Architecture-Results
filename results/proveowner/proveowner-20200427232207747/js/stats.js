var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2100",
        "ok": "2088",
        "ko": "12"
    },
    "minResponseTime": {
        "total": "48",
        "ok": "48",
        "ko": "52"
    },
    "maxResponseTime": {
        "total": "9613",
        "ok": "9613",
        "ko": "5583"
    },
    "meanResponseTime": {
        "total": "487",
        "ok": "480",
        "ko": "1673"
    },
    "standardDeviation": {
        "total": "1346",
        "ok": "1336",
        "ko": "2207"
    },
    "percentiles1": {
        "total": "89",
        "ok": "89",
        "ko": "670"
    },
    "percentiles2": {
        "total": "283",
        "ok": "279",
        "ko": "2011"
    },
    "percentiles3": {
        "total": "1973",
        "ok": "1778",
        "ko": "5548"
    },
    "percentiles4": {
        "total": "8136",
        "ok": "8146",
        "ko": "5576"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1899,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 69,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 120,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 12,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.977",
        "ok": "6.937",
        "ko": "0.04"
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
        "ok": "2088",
        "ko": "12"
    },
    "minResponseTime": {
        "total": "48",
        "ok": "48",
        "ko": "52"
    },
    "maxResponseTime": {
        "total": "9613",
        "ok": "9613",
        "ko": "5583"
    },
    "meanResponseTime": {
        "total": "487",
        "ok": "480",
        "ko": "1673"
    },
    "standardDeviation": {
        "total": "1346",
        "ok": "1336",
        "ko": "2207"
    },
    "percentiles1": {
        "total": "89",
        "ok": "89",
        "ko": "670"
    },
    "percentiles2": {
        "total": "283",
        "ok": "279",
        "ko": "2011"
    },
    "percentiles3": {
        "total": "1973",
        "ok": "1778",
        "ko": "5548"
    },
    "percentiles4": {
        "total": "8136",
        "ok": "8146",
        "ko": "5576"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1899,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 69,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 120,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 12,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.977",
        "ok": "6.937",
        "ko": "0.04"
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
