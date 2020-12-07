var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8400",
        "ok": "5603",
        "ko": "2797"
    },
    "minResponseTime": {
        "total": "375",
        "ok": "375",
        "ko": "25951"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "59965",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "40721",
        "ok": "31167",
        "ko": "59859"
    },
    "standardDeviation": {
        "total": "15057",
        "ok": "8025",
        "ko": "1661"
    },
    "percentiles1": {
        "total": "33808",
        "ok": "29825",
        "ko": "59937"
    },
    "percentiles2": {
        "total": "59935",
        "ok": "33848",
        "ko": "59946"
    },
    "percentiles3": {
        "total": "60003",
        "ok": "45630",
        "ko": "60007"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "58580",
        "ko": "60008"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5592,
    "percentage": 67
},
    "group4": {
    "name": "failed",
    "count": 2797,
    "percentage": 33
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.763",
        "ok": "4.511",
        "ko": "2.252"
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
        "total": "8400",
        "ok": "5603",
        "ko": "2797"
    },
    "minResponseTime": {
        "total": "375",
        "ok": "375",
        "ko": "25951"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "59965",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "40721",
        "ok": "31167",
        "ko": "59859"
    },
    "standardDeviation": {
        "total": "15057",
        "ok": "8025",
        "ko": "1661"
    },
    "percentiles1": {
        "total": "33808",
        "ok": "29825",
        "ko": "59937"
    },
    "percentiles2": {
        "total": "59935",
        "ok": "33848",
        "ko": "59946"
    },
    "percentiles3": {
        "total": "60003",
        "ok": "45630",
        "ko": "60007"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "58580",
        "ko": "60008"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5592,
    "percentage": 67
},
    "group4": {
    "name": "failed",
    "count": 2797,
    "percentage": 33
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.763",
        "ok": "4.511",
        "ko": "2.252"
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
