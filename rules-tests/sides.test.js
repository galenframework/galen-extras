load("init.js");


testSpec("sides.gspec", [], function (spec) {
    assertSpec(spec)
    .hasRuleSection("box-* sides are inside main_container with 5px margin from top and bottom", {
        "box-1": ["inside main_container 5px top"],
        "box-2": ["inside main_container"],
        "box-3": ["inside main_container 5px bottom"]
    })
    .hasRuleSection("box-* sides are vertically inside main_container with 4px margin", {
        "box-1": ["inside main_container 4px top"],
        "box-2": ["inside main_container"],
        "box-3": ["inside main_container 4px bottom"]
    })
    .hasRuleSection("box-* sides are vertically inside main_container", {
        "box-1": ["inside main_container -1 to 1 px top"],
        "box-2": ["inside main_container"],
        "box-3": ["inside main_container -1 to 1 px bottom"]
    })
    .hasRuleSection("box-* sides are horizontally inside main_container with 3px margin", {
        "box-1": ["inside main_container 3px left"],
        "box-2": ["inside main_container"],
        "box-3": ["inside main_container 3px right"]
    })
    .hasRuleSection("box-* sides are horizontally inside main_container", {
        "box-1": ["inside main_container -1 to 1 px left"],
        "box-2": ["inside main_container"],
        "box-3": ["inside main_container -1 to 1 px right"]
    })
});
