var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "880",
        "ko": "2120"
    },
    "minResponseTime": {
        "total": "769",
        "ok": "839",
        "ko": "769"
    },
    "maxResponseTime": {
        "total": "60024",
        "ok": "58813",
        "ko": "60024"
    },
    "meanResponseTime": {
        "total": "27249",
        "ok": "20522",
        "ko": "30041"
    },
    "standardDeviation": {
        "total": "17341",
        "ok": "9158",
        "ko": "19083"
    },
    "percentiles1": {
        "total": "19334",
        "ok": "18510",
        "ko": "19891"
    },
    "percentiles2": {
        "total": "32597",
        "ok": "21941",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "43244",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60003",
        "ok": "49717",
        "ko": "60003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 878,
    "percentage": 29
},
    "group4": {
    "name": "failed",
    "count": 2120,
    "percentage": 71
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.902",
        "ok": "2.611",
        "ko": "6.291"
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
        "total": "3000",
        "ok": "880",
        "ko": "2120"
    },
    "minResponseTime": {
        "total": "769",
        "ok": "839",
        "ko": "769"
    },
    "maxResponseTime": {
        "total": "60024",
        "ok": "58813",
        "ko": "60024"
    },
    "meanResponseTime": {
        "total": "27249",
        "ok": "20522",
        "ko": "30041"
    },
    "standardDeviation": {
        "total": "17341",
        "ok": "9158",
        "ko": "19083"
    },
    "percentiles1": {
        "total": "19334",
        "ok": "18510",
        "ko": "19891"
    },
    "percentiles2": {
        "total": "32597",
        "ok": "21941",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "43244",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60003",
        "ok": "49717",
        "ko": "60003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 878,
    "percentage": 29
},
    "group4": {
    "name": "failed",
    "count": 2120,
    "percentage": 71
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.902",
        "ok": "2.611",
        "ko": "6.291"
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
