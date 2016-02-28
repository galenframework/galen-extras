load("init.js");


testSpec("table-layout.gspec", [], function (spec) {
    assertSpec(spec)
    .hasRuleSection("brick-* are rendered in 2 column table layout", {
        "brick-1": [
            "aligned horizontally all brick-2",
            "left-of brick-2 -1 to 1px",
            "aligned vertically all brick-3",
            "above brick-3 -1 to 1px"
        ],
        "brick-2": [
            "aligned vertically all brick-4",
            "above brick-4 -1 to 1px"
        ],
        "brick-3": [
            "aligned horizontally all brick-4",
            "left-of brick-4 -1 to 1px",
            "aligned vertically all brick-5",
            "above brick-5 -1 to 1px"
        ],
        "brick-4": [
            "aligned vertically all brick-6",
            "above brick-6 -1 to 1px"
        ],
        "brick-5": [
            "aligned horizontally all brick-6",
            "left-of brick-6 -1 to 1px"
        ]
    })
    .hasRuleSection("brick-* are rendered in 2 column table layout, with 14px margin", {
        "brick-1": [
            "aligned horizontally all brick-2",
            "left-of brick-2 14px",
            "aligned vertically all brick-3",
            "above brick-3 14px"
        ],
        "brick-2": [
            "aligned vertically all brick-4",
            "above brick-4 14px"
        ],
        "brick-3": [
            "aligned horizontally all brick-4",
            "left-of brick-4 14px",
            "aligned vertically all brick-5",
            "above brick-5 14px"
        ],
        "brick-4": [
            "aligned vertically all brick-6",
            "above brick-6 14px"
        ],
        "brick-5": [
            "aligned horizontally all brick-6",
            "left-of brick-6 14px"
        ]
    })
    .hasRuleSection("brick-* are rendered in 2 column table layout, with 14px vertical and 12px horizontal margin", {
        "brick-1": [
            "aligned horizontally all brick-2",
            "left-of brick-2 12px",
            "aligned vertically all brick-3",
            "above brick-3 14px"
        ],
        "brick-2": [
            "aligned vertically all brick-4",
            "above brick-4 14px"
        ],
        "brick-3": [
            "aligned horizontally all brick-4",
            "left-of brick-4 12px",
            "aligned vertically all brick-5",
            "above brick-5 14px"
        ],
        "brick-4": [
            "aligned vertically all brick-6",
            "above brick-6 14px"
        ],
        "brick-5": [
            "aligned horizontally all brick-6",
            "left-of brick-6 12px"
        ]
    })
});
