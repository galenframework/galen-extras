load("init.js");


testSpec("squared.gspec", function (spec) {
    assertSpec(spec).hasRuleSection("icon-* should be squared", {
        "icon-1": ["width 100% of icon-1/height"],
        "icon-2": ["width 100% of icon-2/height"]
    })
    .hasRuleSection("icon-* should be almost squared", {
        "icon-1": ["width 90 to 110% of icon-1/height"],
        "icon-2": ["width 90 to 110% of icon-2/height"]
    })
    .hasObjectWithSpecGroups("icon-1", {
        "squared with ~ 50px size": [
            "width ~ 50px",
            "height ~ 50px"
        ]
    })
    .hasObjectWithSpecGroups("icon-2", {
        "squared": ["width 100% of icon-2/height"]
    })
    .hasObjectWithSpecGroups("icon-3", {
        "almost squared": ["width 90 to 110% of icon-3/height"]
    });
});

testSpec("ratio.gspec", function (spec) {
    assertSpec(spec).hasRuleSection("icon-* should have ~ 33% width/height ratio", {
        "icon-1": ["height ~ 33 % of icon-1/width"],
        "icon-2": ["height ~ 33 % of icon-2/width"]
    })
    .hasObjectWithSpecGroups("icon-3", {
        "has 10% width/height ratio": ["height 10 % of icon-3/width"]
    });
});

testSpec("amount.gspec", function (spec) {
    assertSpec(spec)
    .hasRuleSection("amount of visible icon-* should be 2", {
        "global": ["count visible \"icon-*\" is 2"],
    })
    .hasRuleSection("amount of absent logo-* should be < 2", {
        "global": ["count absent \"logo-*\" is < 2"],
    });
});
