load("init.js");

testSpec("alignment.gspec", function (spec) {
    assertSpec(spec)
    .hasRuleSection("box-* are aligned horizontally next to each other", {
        "box-1": [
            "aligned horizontally all box-2",
            "left-of box-2 -1 to 1px"
        ],
        "box-2": [
            "aligned horizontally all box-3",
            "left-of box-3 -1 to 1px"
        ]
    })
    .hasRuleSection("box-* are aligned vertically above each other", {
        "box-1": [
            "aligned vertically all box-2",
            "above box-2 -1 to 1px"
        ],
        "box-2": [
            "aligned vertically all box-3",
            "above box-3 -1 to 1px"
        ]
    })
    .hasRuleSection("box-* are aligned horizontally next to each other with 11px margin", {
        "box-1": [
            "aligned horizontally all box-2",
            "left-of box-2 11px"
        ],
        "box-2": [
            "aligned horizontally all box-3",
            "left-of box-3 11px"
        ]
    })
    .hasRuleSection("box-* are aligned vertically above each other with 12px margin", {
        "box-1": [
            "aligned vertically all box-2",
            "above box-2 12px"
        ],
        "box-2": [
            "aligned vertically all box-3",
            "above box-3 12px"
        ]
    })
    .hasRuleSection("box-* are aligned horizontally next to each other with equal distance", {
        "box-1": [
            "aligned horizontally all box-2",
            "left-of box-2 4 to 6 px"
        ],
        "box-2": [
            "aligned horizontally all box-3",
            "left-of box-3 4 to 6 px"
        ]
    })
    .hasRuleSection("box-* are aligned vertically above each other with equal distance", {
        "box-1": [
            "aligned vertically all box-2",
            "above box-2 9 to 11 px"
        ],
        "box-2": [
            "aligned vertically all box-3",
            "above box-3 9 to 11 px"
        ]
    })
});

