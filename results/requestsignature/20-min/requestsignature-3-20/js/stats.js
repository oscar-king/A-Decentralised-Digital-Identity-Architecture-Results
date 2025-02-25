var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3600",
        "ok": "3587",
        "ko": "13"
    },
    "minResponseTime": {
        "total": "87",
        "ok": "87",
        "ko": "135"
    },
    "maxResponseTime": {
        "total": "1733",
        "ok": "1733",
        "ko": "943"
    },
    "meanResponseTime": {
        "total": "377",
        "ok": "377",
        "ko": "424"
    },
    "standardDeviation": {
        "total": "197",
        "ok": "197",
        "ko": "224"
    },
    "percentiles1": {
        "total": "322",
        "ok": "322",
        "ko": "341"
    },
    "percentiles2": {
        "total": "449",
        "ok": "448",
        "ko": "505"
    },
    "percentiles3": {
        "total": "773",
        "ok": "773",
        "ko": "795"
    },
    "percentiles4": {
        "total": "1109",
        "ok": "1110",
        "ko": "913"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3427,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 137,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 13,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3",
        "ok": "2.989",
        "ko": "0.011"
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
        "total": "3600",
        "ok": "3587",
        "ko": "13"
    },
    "minResponseTime": {
        "total": "87",
        "ok": "87",
        "ko": "135"
    },
    "maxResponseTime": {
        "total": "1733",
        "ok": "1733",
        "ko": "943"
    },
    "meanResponseTime": {
        "total": "377",
        "ok": "377",
        "ko": "424"
    },
    "standardDeviation": {
        "total": "197",
        "ok": "197",
        "ko": "224"
    },
    "percentiles1": {
        "total": "322",
        "ok": "322",
        "ko": "341"
    },
    "percentiles2": {
        "total": "449",
        "ok": "448",
        "ko": "505"
    },
    "percentiles3": {
        "total": "773",
        "ok": "773",
        "ko": "795"
    },
    "percentiles4": {
        "total": "1109",
        "ok": "1110",
        "ko": "913"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3427,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 137,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 13,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3",
        "ok": "2.989",
        "ko": "0.011"
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
