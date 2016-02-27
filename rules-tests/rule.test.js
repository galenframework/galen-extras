load("init.js");


testSpec("squared.gspec", function (spec) {
    assertSpec(spec).hasRuleSection("icon-* should be squared", {
        "icon-1": [
            "width 100% of icon-1/height"
        ],
        "icon-2": [
            "width 100% of icon-2/height"
        ]
    });
});
