var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10800",
        "ok": "7073",
        "ko": "3727"
    },
    "minResponseTime": {
        "total": "698",
        "ok": "698",
        "ko": "28633"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "59980",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "37971",
        "ok": "26400",
        "ko": "59931"
    },
    "standardDeviation": {
        "total": "17286",
        "ok": "8243",
        "ko": "783"
    },
    "percentiles1": {
        "total": "28787",
        "ok": "24151",
        "ko": "59939"
    },
    "percentiles2": {
        "total": "59937",
        "ok": "28496",
        "ko": "59953"
    },
    "percentiles3": {
        "total": "60003",
        "ok": "44104",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "55901",
        "ko": "60008"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7064,
    "percentage": 65
},
    "group4": {
    "name": "failed",
    "count": 3727,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.703",
        "ok": "5.699",
        "ko": "3.003"
    }
},
contents: {
"req_verify-block-c7e7a": {
        type: "REQUEST",
        name: "Verify Block",
path: "Verify Block",
pathFormatted: "req_verify-block-c7e7a",
stats: {
    "name": "Verify Block",
    "numberOfRequests": {
        "total": "10800",
        "ok": "7073",
        "ko": "3727"
    },
    "minResponseTime": {
        "total": "698",
        "ok": "698",
        "ko": "28633"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "59980",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "37971",
        "ok": "26400",
        "ko": "59931"
    },
    "standardDeviation": {
        "total": "17286",
        "ok": "8243",
        "ko": "783"
    },
    "percentiles1": {
        "total": "28787",
        "ok": "24151",
        "ko": "59939"
    },
    "percentiles2": {
        "total": "59937",
        "ok": "28496",
        "ko": "59953"
    },
    "percentiles3": {
        "total": "60003",
        "ok": "44104",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "55901",
        "ko": "60008"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7064,
    "percentage": 65
},
    "group4": {
    "name": "failed",
    "count": 3727,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.703",
        "ok": "5.699",
        "ko": "3.003"
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
