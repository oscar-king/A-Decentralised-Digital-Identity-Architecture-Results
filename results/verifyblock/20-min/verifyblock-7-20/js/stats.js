var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8400",
        "ok": "7561",
        "ko": "839"
    },
    "minResponseTime": {
        "total": "463",
        "ok": "463",
        "ko": "59933"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "59816",
        "ko": "60010"
    },
    "meanResponseTime": {
        "total": "27459",
        "ok": "23854",
        "ko": "59946"
    },
    "standardDeviation": {
        "total": "13503",
        "ok": "8512",
        "ko": "20"
    },
    "percentiles1": {
        "total": "22528",
        "ok": "22126",
        "ko": "59938"
    },
    "percentiles2": {
        "total": "28226",
        "ok": "25155",
        "ko": "59942"
    },
    "percentiles3": {
        "total": "59938",
        "ok": "38313",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "59968",
        "ok": "54020",
        "ko": "60008"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 18,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7530,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 839,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.846",
        "ok": "6.162",
        "ko": "0.684"
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
        "total": "8400",
        "ok": "7561",
        "ko": "839"
    },
    "minResponseTime": {
        "total": "463",
        "ok": "463",
        "ko": "59933"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "59816",
        "ko": "60010"
    },
    "meanResponseTime": {
        "total": "27459",
        "ok": "23854",
        "ko": "59946"
    },
    "standardDeviation": {
        "total": "13503",
        "ok": "8512",
        "ko": "20"
    },
    "percentiles1": {
        "total": "22528",
        "ok": "22126",
        "ko": "59938"
    },
    "percentiles2": {
        "total": "28226",
        "ok": "25155",
        "ko": "59942"
    },
    "percentiles3": {
        "total": "59938",
        "ok": "38313",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "59968",
        "ok": "54020",
        "ko": "60008"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 18,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7530,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 839,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.846",
        "ok": "6.162",
        "ko": "0.684"
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
