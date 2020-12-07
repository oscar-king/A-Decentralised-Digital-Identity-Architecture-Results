var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1200",
        "ok": "1195",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "46",
        "ok": "50",
        "ko": "46"
    },
    "maxResponseTime": {
        "total": "385",
        "ok": "385",
        "ko": "158"
    },
    "meanResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "73"
    },
    "standardDeviation": {
        "total": "43",
        "ok": "43",
        "ko": "42"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "56"
    },
    "percentiles2": {
        "total": "106",
        "ok": "106",
        "ko": "56"
    },
    "percentiles3": {
        "total": "177",
        "ok": "177",
        "ko": "138"
    },
    "percentiles4": {
        "total": "282",
        "ok": "282",
        "ko": "154"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1195,
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
    "count": 5,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.996",
        "ko": "0.004"
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
        "total": "1200",
        "ok": "1195",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "46",
        "ok": "50",
        "ko": "46"
    },
    "maxResponseTime": {
        "total": "385",
        "ok": "385",
        "ko": "158"
    },
    "meanResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "73"
    },
    "standardDeviation": {
        "total": "43",
        "ok": "43",
        "ko": "42"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "56"
    },
    "percentiles2": {
        "total": "106",
        "ok": "106",
        "ko": "56"
    },
    "percentiles3": {
        "total": "177",
        "ok": "177",
        "ko": "138"
    },
    "percentiles4": {
        "total": "282",
        "ok": "282",
        "ko": "154"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1195,
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
    "count": 5,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.996",
        "ko": "0.004"
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
