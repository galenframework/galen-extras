load("init.js");


testSpec("location.gspec", [], function (spec) {
    assertSpec(spec)
    .hasObjectWithSpecGroups("login_panel", {
        "located at the top inside main_container with 10px margin": [
            "inside main_container 10px top",
        ],
        "located at the right bottom inside main_container with 11px margin": [
            "inside main_container 11px right bottom",
        ]
    })
    .hasObjectWithSpecGroups("register_panel", {
        "located at the top left inside main_container": [
            "inside main_container -1 to 1px top left",
        ]
    })
    .hasRuleSection("comments_section should be located at the right inside main_container with ~10px margin", {
        "comments_section": ["inside main_container ~10px right"],
    })
    .hasRuleSection("ads_section should be located at the top left inside main_container", {
        "ads_section": ["inside main_container -1 to 1px top left"],
    })
    .hasObjectWithSpecGroups("ads_panel", {
        "located on the left side of main_container and takes 70 % of its width": [
            "inside main_container -1 to 1px left",
            "width 70  % of main_container/width",
        ],
        "located on the top side of main_container and takes 50 % of its height": [
            "inside main_container -1 to 1px top",
            "width 50  % of main_container/height",
        ]
    })
    .hasRuleSection("login_panel should be located on the left side of main_container and take 70 % of its width", {
        "login_panel": [
            "inside main_container -1 to 1px left",
            "width 70  % of main_container/width",
        ]
    })
    .hasRuleSection("register_panel should be located on the top side of main_container and take 50 % of its height", {
        "register_panel": [
            "inside main_container -1 to 1px top",
            "width 50  % of main_container/height",
        ]
    })
    .hasObjectWithSpecGroups("user_panel", {
        "located on the left side of main_container with ~10px margin and takes 70 % of its width": [
            "inside main_container ~10px left",
            "width 70  % of main_container/width",
        ],
        "located on the top side of main_container with 10 to 12px margin and takes 50 % of its height": [
            "inside main_container 10 to 12px top",
            "width 50  % of main_container/height",
        ]
    })
    .hasRuleSection("login_panel should be located on the left side of main_container with 10px margin and take 70 % of its width", {
        "login_panel": [
            "inside main_container 10px left",
            "width 70  % of main_container/width",
        ]
    })
    .hasRuleSection("register_panel should be located on the top side of main_container with < 123px margin and take 50 % of its height", {
        "register_panel": [
            "inside main_container < 123px top",
            "width 50  % of main_container/height",
        ]
    })
});
