load("init.js");



testSpec("conditional-rules.gspec", [], function (spec) {
    assertSpec(spec)
    .hasRuleSection("if all icon-* are visible", {
        "screen": ['text is "qwe1"']
    })
    .doesNotHaveRuleSection("if all box-* are visible")
    .hasRuleSection("if none of icon-* are visible", {
        "screen": ['text is "qwe3"']
    })
    .doesNotHaveRuleSection("if none of box-* are visible")
    .hasRuleSection("if any of icon-* is visible", {
        "screen": ['text is "qwe5"']
    })
    .doesNotHaveRuleSection("if any of box-* is visible")
});
