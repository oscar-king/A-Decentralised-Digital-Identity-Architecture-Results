var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "10894",
        "ko": "1106"
    },
    "minResponseTime": {
        "total": "462",
        "ok": "462",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60008",
        "ok": "59783",
        "ko": "60008"
    },
    "meanResponseTime": {
        "total": "21444",
        "ok": "17530",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "14477",
        "ok": "8039",
        "ko": "1"
    },
    "percentiles1": {
        "total": "15943",
        "ok": "15584",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "20995",
        "ok": "18257",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "32022",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "48398",
        "ko": "60006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10883,
    "percentage": 91
},
    "group4": {
    "name": "failed",
    "count": 1106,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.756",
        "ok": "8.857",
        "ko": "0.899"
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
        "total": "12000",
        "ok": "10894",
        "ko": "1106"
    },
    "minResponseTime": {
        "total": "462",
        "ok": "462",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60008",
        "ok": "59783",
        "ko": "60008"
    },
    "meanResponseTime": {
        "total": "21444",
        "ok": "17530",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "14477",
        "ok": "8039",
        "ko": "1"
    },
    "percentiles1": {
        "total": "15943",
        "ok": "15584",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "20995",
        "ok": "18257",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "32022",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "48398",
        "ko": "60006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10883,
    "percentage": 91
},
    "group4": {
    "name": "failed",
    "count": 1106,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.756",
        "ok": "8.857",
        "ko": "0.899"
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
