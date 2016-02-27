load("init.js");


testSpec("general-rules.gspec", [], function (spec) {
    assertSpec(spec)
    .hasObjectWithSpecGroups("button", {
        "is more or less readable": [
            "width > 30px",
            "height > 10px"
        ]
    })
    .hasRuleSection("icon-* should be more or less readable", {
        "icon-1": [
            "width > 30px",
            "height > 10px"
        ],
        "icon-2": [
            "width > 30px",
            "height > 10px"
        ]
    })
    .hasObjectWithSpecGroups("login_button", {
        "is tapable": [
            "width > 50px",
            "height > 30px"
        ]
    })
    .hasRuleSection("cancel_button,register_button should be tapable", {
        "cancel_button": [
            "width > 50px",
            "height > 30px"
        ],
        "register_button": [
            "width > 50px",
            "height > 30px"
        ]
    })
});
