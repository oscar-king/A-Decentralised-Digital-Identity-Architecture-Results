var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1200",
        "ok": "1196",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "119",
        "ok": "119",
        "ko": "183"
    },
    "maxResponseTime": {
        "total": "1742",
        "ok": "1742",
        "ko": "284"
    },
    "meanResponseTime": {
        "total": "449",
        "ok": "450",
        "ko": "235"
    },
    "standardDeviation": {
        "total": "236",
        "ok": "236",
        "ko": "44"
    },
    "percentiles1": {
        "total": "394",
        "ok": "394",
        "ko": "236"
    },
    "percentiles2": {
        "total": "520",
        "ok": "520",
        "ko": "275"
    },
    "percentiles3": {
        "total": "974",
        "ok": "975",
        "ko": "282"
    },
    "percentiles4": {
        "total": "1308",
        "ok": "1309",
        "ko": "284"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1099,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 75,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 22,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 4,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.997",
        "ko": "0.003"
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
        "total": "1200",
        "ok": "1196",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "119",
        "ok": "119",
        "ko": "183"
    },
    "maxResponseTime": {
        "total": "1742",
        "ok": "1742",
        "ko": "284"
    },
    "meanResponseTime": {
        "total": "449",
        "ok": "450",
        "ko": "235"
    },
    "standardDeviation": {
        "total": "236",
        "ok": "236",
        "ko": "44"
    },
    "percentiles1": {
        "total": "394",
        "ok": "394",
        "ko": "236"
    },
    "percentiles2": {
        "total": "520",
        "ok": "520",
        "ko": "275"
    },
    "percentiles3": {
        "total": "974",
        "ok": "975",
        "ko": "282"
    },
    "percentiles4": {
        "total": "1308",
        "ok": "1309",
        "ko": "284"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1099,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 75,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 22,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 4,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.997",
        "ko": "0.003"
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
