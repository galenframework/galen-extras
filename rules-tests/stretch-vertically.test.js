load("init.js");


testSpec("stretch-vertically.gspec", [], function (spec) {
    assertSpec(spec)
    .hasObjectWithSpecGroups("some_panel", {
        "stretches vertically to main_container with 10px margin": [
            "inside main_container 10px top bottom",
        ],
        "stretches vertically to main_container": [
            "inside main_container -1 to 1px top bottom",
        ]
    })
    .hasRuleSection("login_panel, register_panel should stretch vertically to main_container with 10px margin", {
        "login_panel": [
            "inside main_container 10px top bottom",
        ],
        "register_panel": [
            "inside main_container 10px top bottom",
        ]
    })
    .hasRuleSection("login_panel, register_panel should stretch vertically to main_container", {
        "login_panel": [
            "inside main_container -1 to 1px top bottom",
        ],
        "register_panel": [
            "inside main_container -1 to 1px top bottom",
        ]
    })
});
