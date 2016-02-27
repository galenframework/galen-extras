load("init.js");


testSpec("stretch.gspec", [], function (spec) {
    assertSpec(spec)
    .hasObjectWithSpecGroups("some_panel", {
        "stretches to main_container with 10px margin": [
            "inside main_container 10px left right",
        ],
        "stretches to main_container": [
            "inside main_container -1 to 1px left right",
        ]
    })
    .hasRuleSection("login_panel, register_panel should stretch to main_container with 10px margin", {
        "login_panel": [
            "inside main_container 10px left right",
        ],
        "register_panel": [
            "inside main_container 10px left right",
        ]
    })
    .hasRuleSection("login_panel, register_panel should stretch to main_container", {
        "login_panel": [
            "inside main_container -1 to 1px left right",
        ],
        "register_panel": [
            "inside main_container -1 to 1px left right",
        ]
    })
});
