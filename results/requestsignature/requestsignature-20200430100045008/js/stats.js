var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "300",
        "ok": "296",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "112",
        "ok": "112",
        "ko": "483"
    },
    "maxResponseTime": {
        "total": "972",
        "ok": "972",
        "ko": "731"
    },
    "meanResponseTime": {
        "total": "353",
        "ok": "349",
        "ko": "620"
    },
    "standardDeviation": {
        "total": "170",
        "ok": "168",
        "ko": "108"
    },
    "percentiles1": {
        "total": "310",
        "ok": "308",
        "ko": "634"
    },
    "percentiles2": {
        "total": "436",
        "ok": "432",
        "ko": "724"
    },
    "percentiles3": {
        "total": "721",
        "ok": "712",
        "ko": "730"
    },
    "percentiles4": {
        "total": "883",
        "ok": "884",
        "ko": "731"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 287,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 4,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.987",
        "ko": "0.013"
    }
},
contents: {
"req_request-signatu-63665": {
        type: "REQUEST",
        name: "Request Signature",
path: "Request Signature",
pathFormatted: "req_request-signatu-63665",
stats: {
    "name": "Request Signature",
    "numberOfRequests": {
        "total": "300",
        "ok": "296",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "112",
        "ok": "112",
        "ko": "483"
    },
    "maxResponseTime": {
        "total": "972",
        "ok": "972",
        "ko": "731"
    },
    "meanResponseTime": {
        "total": "353",
        "ok": "349",
        "ko": "620"
    },
    "standardDeviation": {
        "total": "170",
        "ok": "168",
        "ko": "108"
    },
    "percentiles1": {
        "total": "310",
        "ok": "308",
        "ko": "634"
    },
    "percentiles2": {
        "total": "436",
        "ok": "432",
        "ko": "724"
    },
    "percentiles3": {
        "total": "721",
        "ok": "712",
        "ko": "730"
    },
    "percentiles4": {
        "total": "883",
        "ok": "884",
        "ko": "731"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 287,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 4,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.987",
        "ko": "0.013"
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
