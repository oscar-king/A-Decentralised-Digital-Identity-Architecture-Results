var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1500",
        "ok": "910",
        "ko": "590"
    },
    "minResponseTime": {
        "total": "49",
        "ok": "117",
        "ko": "49"
    },
    "maxResponseTime": {
        "total": "1942",
        "ok": "1942",
        "ko": "1599"
    },
    "meanResponseTime": {
        "total": "382",
        "ok": "424",
        "ko": "316"
    },
    "standardDeviation": {
        "total": "259",
        "ok": "245",
        "ko": "267"
    },
    "percentiles1": {
        "total": "322",
        "ok": "353",
        "ko": "207"
    },
    "percentiles2": {
        "total": "458",
        "ok": "472",
        "ko": "408"
    },
    "percentiles3": {
        "total": "955",
        "ok": "971",
        "ko": "917"
    },
    "percentiles4": {
        "total": "1338",
        "ok": "1346",
        "ko": "1231"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 829,
    "percentage": 55
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 65,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 590,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.983",
        "ok": "3.023",
        "ko": "1.96"
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
        "total": "1500",
        "ok": "910",
        "ko": "590"
    },
    "minResponseTime": {
        "total": "49",
        "ok": "117",
        "ko": "49"
    },
    "maxResponseTime": {
        "total": "1942",
        "ok": "1942",
        "ko": "1599"
    },
    "meanResponseTime": {
        "total": "382",
        "ok": "424",
        "ko": "316"
    },
    "standardDeviation": {
        "total": "259",
        "ok": "245",
        "ko": "267"
    },
    "percentiles1": {
        "total": "323",
        "ok": "353",
        "ko": "207"
    },
    "percentiles2": {
        "total": "458",
        "ok": "472",
        "ko": "408"
    },
    "percentiles3": {
        "total": "955",
        "ok": "971",
        "ko": "917"
    },
    "percentiles4": {
        "total": "1338",
        "ok": "1346",
        "ko": "1231"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 829,
    "percentage": 55
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 65,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 590,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.983",
        "ok": "3.023",
        "ko": "1.96"
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
