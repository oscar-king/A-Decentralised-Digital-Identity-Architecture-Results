var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "300",
        "ok": "299",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "44",
        "ok": "44",
        "ko": "80"
    },
    "maxResponseTime": {
        "total": "280",
        "ok": "280",
        "ko": "80"
    },
    "meanResponseTime": {
        "total": "63",
        "ok": "63",
        "ko": "80"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "19",
        "ko": "0"
    },
    "percentiles1": {
        "total": "59",
        "ok": "59",
        "ko": "80"
    },
    "percentiles2": {
        "total": "68",
        "ok": "68",
        "ko": "80"
    },
    "percentiles3": {
        "total": "90",
        "ok": "90",
        "ko": "80"
    },
    "percentiles4": {
        "total": "115",
        "ok": "115",
        "ko": "80"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 299,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.997",
        "ko": "0.003"
    }
},
contents: {
"req_prove-owner-47bdd": {
        type: "REQUEST",
        name: "Prove Owner",
path: "Prove Owner",
pathFormatted: "req_prove-owner-47bdd",
stats: {
    "name": "Prove Owner",
    "numberOfRequests": {
        "total": "300",
        "ok": "299",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "44",
        "ok": "44",
        "ko": "80"
    },
    "maxResponseTime": {
        "total": "280",
        "ok": "280",
        "ko": "80"
    },
    "meanResponseTime": {
        "total": "63",
        "ok": "63",
        "ko": "80"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "19",
        "ko": "0"
    },
    "percentiles1": {
        "total": "59",
        "ok": "59",
        "ko": "80"
    },
    "percentiles2": {
        "total": "68",
        "ok": "68",
        "ko": "80"
    },
    "percentiles3": {
        "total": "90",
        "ok": "90",
        "ko": "80"
    },
    "percentiles4": {
        "total": "115",
        "ok": "115",
        "ko": "80"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 299,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
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
