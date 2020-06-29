var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2700",
        "ok": "853",
        "ko": "1847"
    },
    "minResponseTime": {
        "total": "194",
        "ok": "967",
        "ko": "194"
    },
    "maxResponseTime": {
        "total": "60008",
        "ok": "54696",
        "ko": "60008"
    },
    "meanResponseTime": {
        "total": "22236",
        "ok": "19150",
        "ko": "23661"
    },
    "standardDeviation": {
        "total": "14271",
        "ok": "8937",
        "ko": "15951"
    },
    "percentiles1": {
        "total": "18305",
        "ok": "18166",
        "ko": "18413"
    },
    "percentiles2": {
        "total": "21934",
        "ok": "20730",
        "ko": "23380"
    },
    "percentiles3": {
        "total": "60003",
        "ok": "34705",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "60005",
        "ok": "49156",
        "ko": "60005"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 852,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 1847,
    "percentage": 68
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.108",
        "ok": "2.562",
        "ko": "5.547"
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
        "total": "2700",
        "ok": "853",
        "ko": "1847"
    },
    "minResponseTime": {
        "total": "194",
        "ok": "967",
        "ko": "194"
    },
    "maxResponseTime": {
        "total": "60008",
        "ok": "54696",
        "ko": "60008"
    },
    "meanResponseTime": {
        "total": "22236",
        "ok": "19150",
        "ko": "23661"
    },
    "standardDeviation": {
        "total": "14271",
        "ok": "8937",
        "ko": "15951"
    },
    "percentiles1": {
        "total": "18305",
        "ok": "18166",
        "ko": "18413"
    },
    "percentiles2": {
        "total": "21934",
        "ok": "20730",
        "ko": "23380"
    },
    "percentiles3": {
        "total": "60003",
        "ok": "34705",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "60005",
        "ok": "49156",
        "ko": "60005"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 852,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 1847,
    "percentage": 68
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.108",
        "ok": "2.562",
        "ko": "5.547"
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
