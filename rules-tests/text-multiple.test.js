load("init.js");

testSpec("text-multiple.gspec", [], function (spec) {
    assertSpec(spec)
    .hasRuleSection('text of all &labels should be ["text 1", "text 2", "text 3 with \\"double quotes\\""]', {
        "label-1":['text is "text 1"'],
        "label-2":['text is "text 2"'],
        "label-3":['text is "text 3 with \\"double quotes\\""']
    })
});
