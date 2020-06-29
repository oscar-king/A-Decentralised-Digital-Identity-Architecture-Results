var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2100",
        "ok": "844",
        "ko": "1256"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "113",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "3627",
        "ok": "3627",
        "ko": "3182"
    },
    "meanResponseTime": {
        "total": "805",
        "ok": "881",
        "ko": "753"
    },
    "standardDeviation": {
        "total": "695",
        "ok": "710",
        "ko": "680"
    },
    "percentiles1": {
        "total": "574",
        "ok": "656",
        "ko": "522"
    },
    "percentiles2": {
        "total": "1046",
        "ok": "1102",
        "ko": "1009"
    },
    "percentiles3": {
        "total": "2528",
        "ok": "2647",
        "ko": "2465"
    },
    "percentiles4": {
        "total": "3047",
        "ok": "3261",
        "ko": "2899"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 504,
    "percentage": 24
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 147,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 193,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 1256,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.977",
        "ok": "2.804",
        "ko": "4.173"
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
        "total": "2100",
        "ok": "844",
        "ko": "1256"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "113",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "3627",
        "ok": "3627",
        "ko": "3182"
    },
    "meanResponseTime": {
        "total": "805",
        "ok": "881",
        "ko": "753"
    },
    "standardDeviation": {
        "total": "695",
        "ok": "710",
        "ko": "680"
    },
    "percentiles1": {
        "total": "574",
        "ok": "656",
        "ko": "522"
    },
    "percentiles2": {
        "total": "1046",
        "ok": "1102",
        "ko": "1009"
    },
    "percentiles3": {
        "total": "2528",
        "ok": "2647",
        "ko": "2465"
    },
    "percentiles4": {
        "total": "3047",
        "ok": "3261",
        "ko": "2899"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 504,
    "percentage": 24
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 147,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 193,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 1256,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.977",
        "ok": "2.804",
        "ko": "4.173"
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
