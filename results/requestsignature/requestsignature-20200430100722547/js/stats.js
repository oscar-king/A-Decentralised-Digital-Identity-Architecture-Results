var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "900",
        "ok": "740",
        "ko": "160"
    },
    "minResponseTime": {
        "total": "50",
        "ok": "115",
        "ko": "50"
    },
    "maxResponseTime": {
        "total": "1590",
        "ok": "1590",
        "ko": "1062"
    },
    "meanResponseTime": {
        "total": "370",
        "ok": "386",
        "ko": "296"
    },
    "standardDeviation": {
        "total": "218",
        "ok": "206",
        "ko": "256"
    },
    "percentiles1": {
        "total": "319",
        "ok": "332",
        "ko": "186"
    },
    "percentiles2": {
        "total": "451",
        "ok": "452",
        "ko": "445"
    },
    "percentiles3": {
        "total": "836",
        "ok": "814",
        "ko": "856"
    },
    "percentiles4": {
        "total": "1115",
        "ok": "1151",
        "ko": "976"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 702,
    "percentage": 78
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 31,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 160,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.99",
        "ok": "2.458",
        "ko": "0.532"
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
        "total": "900",
        "ok": "740",
        "ko": "160"
    },
    "minResponseTime": {
        "total": "50",
        "ok": "115",
        "ko": "50"
    },
    "maxResponseTime": {
        "total": "1590",
        "ok": "1590",
        "ko": "1062"
    },
    "meanResponseTime": {
        "total": "370",
        "ok": "386",
        "ko": "296"
    },
    "standardDeviation": {
        "total": "218",
        "ok": "206",
        "ko": "256"
    },
    "percentiles1": {
        "total": "319",
        "ok": "332",
        "ko": "186"
    },
    "percentiles2": {
        "total": "451",
        "ok": "452",
        "ko": "445"
    },
    "percentiles3": {
        "total": "836",
        "ok": "814",
        "ko": "856"
    },
    "percentiles4": {
        "total": "1115",
        "ok": "1151",
        "ko": "976"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 702,
    "percentage": 78
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 31,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 160,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.99",
        "ok": "2.458",
        "ko": "0.532"
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
