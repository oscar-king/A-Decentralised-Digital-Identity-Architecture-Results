var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3050",
        "ok": "2774",
        "ko": "276"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60008",
        "ok": "59677",
        "ko": "60008"
    },
    "meanResponseTime": {
        "total": "20483",
        "ok": "16551",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "15217",
        "ok": "9152",
        "ko": "2"
    },
    "percentiles1": {
        "total": "16051",
        "ok": "15780",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "19787",
        "ok": "18538",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "32174",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60004",
        "ok": "49465",
        "ko": "60007"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 76,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 25,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2673,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 276,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.892",
        "ok": "8.087",
        "ko": "0.805"
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
        "total": "3050",
        "ok": "2774",
        "ko": "276"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60008",
        "ok": "59677",
        "ko": "60008"
    },
    "meanResponseTime": {
        "total": "20483",
        "ok": "16551",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "15217",
        "ok": "9152",
        "ko": "2"
    },
    "percentiles1": {
        "total": "16051",
        "ok": "15780",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "19787",
        "ok": "18538",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "32174",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60004",
        "ok": "49465",
        "ko": "60007"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 76,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 25,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2673,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 276,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.892",
        "ok": "8.087",
        "ko": "0.805"
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
