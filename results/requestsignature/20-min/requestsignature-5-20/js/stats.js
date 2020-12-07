var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "5987",
        "ko": "13"
    },
    "minResponseTime": {
        "total": "117",
        "ok": "117",
        "ko": "438"
    },
    "maxResponseTime": {
        "total": "17432",
        "ok": "17432",
        "ko": "15000"
    },
    "meanResponseTime": {
        "total": "4541",
        "ok": "4541",
        "ko": "4641"
    },
    "standardDeviation": {
        "total": "5077",
        "ok": "5076",
        "ko": "5677"
    },
    "percentiles1": {
        "total": "1461",
        "ok": "1465",
        "ko": "1115"
    },
    "percentiles2": {
        "total": "8724",
        "ok": "8716",
        "ko": "11453"
    },
    "percentiles3": {
        "total": "14739",
        "ok": "14738",
        "ko": "14264"
    },
    "percentiles4": {
        "total": "16190",
        "ok": "16191",
        "ko": "14853"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1813,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 833,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3341,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "count": 13,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.996",
        "ok": "4.985",
        "ko": "0.011"
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
        "total": "6000",
        "ok": "5987",
        "ko": "13"
    },
    "minResponseTime": {
        "total": "117",
        "ok": "117",
        "ko": "438"
    },
    "maxResponseTime": {
        "total": "17432",
        "ok": "17432",
        "ko": "15000"
    },
    "meanResponseTime": {
        "total": "4541",
        "ok": "4541",
        "ko": "4641"
    },
    "standardDeviation": {
        "total": "5077",
        "ok": "5076",
        "ko": "5677"
    },
    "percentiles1": {
        "total": "1461",
        "ok": "1465",
        "ko": "1115"
    },
    "percentiles2": {
        "total": "8724",
        "ok": "8716",
        "ko": "11453"
    },
    "percentiles3": {
        "total": "14739",
        "ok": "14738",
        "ko": "14264"
    },
    "percentiles4": {
        "total": "16190",
        "ok": "16191",
        "ko": "14853"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1813,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 833,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3341,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "count": 13,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.996",
        "ok": "4.985",
        "ko": "0.011"
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
