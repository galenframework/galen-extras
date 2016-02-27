load("init.js");

testSpec("one-liners.gspec", [], function (spec) {
    assertSpec(spec)
    .hasRuleSection("every icon-* is inside menu 0px top bottom and has width 100px", {
        "icon-1": [
            "inside menu 0px top bottom",
            "width 100px"
        ],
        "icon-2": [
            "inside menu 0px top bottom",
            "width 100px"
        ]
    })
    .hasRuleSection("every icon-* is inside menu 0px left", {
        "icon-1": [
            "inside menu 0px left"
        ],
        "icon-2": [
            "inside menu 0px left"
        ]
    })
    .hasRuleSection("first box-* has width 134px", {
        "box-1": ["width 134px"]
    })
    .hasRuleSection("last box-* is visible", {
        "box-3": ["visible"]
    })
    .hasRuleSection("first box-*:", {
        "box-1": ["centered vertically inside screen"]
    })
    .hasRuleSection("last box-*:", {
        "box-3": ["centered horizontally inside screen"]
    })
});


