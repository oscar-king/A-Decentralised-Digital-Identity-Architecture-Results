var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10800",
        "ok": "5220",
        "ko": "5580"
    },
    "minResponseTime": {
        "total": "603",
        "ok": "603",
        "ko": "14302"
    },
    "maxResponseTime": {
        "total": "60012",
        "ok": "59964",
        "ko": "60012"
    },
    "meanResponseTime": {
        "total": "46791",
        "ok": "33246",
        "ko": "59462"
    },
    "standardDeviation": {
        "total": "14172",
        "ok": "6632",
        "ko": "3926"
    },
    "percentiles1": {
        "total": "59927",
        "ok": "31852",
        "ko": "59937"
    },
    "percentiles2": {
        "total": "59938",
        "ok": "35468",
        "ko": "59945"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "46106",
        "ko": "60007"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "57967",
        "ko": "60008"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5216,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "count": 5580,
    "percentage": 52
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.606",
        "ok": "4.159",
        "ko": "4.446"
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
        "total": "10800",
        "ok": "5220",
        "ko": "5580"
    },
    "minResponseTime": {
        "total": "603",
        "ok": "603",
        "ko": "14302"
    },
    "maxResponseTime": {
        "total": "60012",
        "ok": "59964",
        "ko": "60012"
    },
    "meanResponseTime": {
        "total": "46791",
        "ok": "33246",
        "ko": "59462"
    },
    "standardDeviation": {
        "total": "14172",
        "ok": "6632",
        "ko": "3926"
    },
    "percentiles1": {
        "total": "59926",
        "ok": "31852",
        "ko": "59937"
    },
    "percentiles2": {
        "total": "59938",
        "ok": "35468",
        "ko": "59945"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "46106",
        "ko": "60007"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "57967",
        "ko": "60008"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5216,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "count": 5580,
    "percentage": 52
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.606",
        "ok": "4.159",
        "ko": "4.446"
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
