
function _ruleRenderedInTable(rule, itemPattern, columns, verticalMargin, horizontalMargin) {
    var allItems = findAll(itemPattern);

    var currentColumn = 0;

    for (var i = 0; i < allItems.length - 1; i += 1) {
        if (currentColumn < columns - 1) {
            rule.addObjectSpecs(allItems[i].name, [
                "left-of " + allItems[i + 1].name + " " + horizontalMargin,
                "aligned horizontally all " + allItems[i + 1].name
            ]);
        }

        var j = i + columns;

        if (j < allItems.length) {
            rule.addObjectSpecs(allItems[i].name, [
                "above " + allItems[j].name + " " + verticalMargin,
                "aligned vertically all " + allItems[j].name
            ]);
        }

        currentColumn += 1;
        if (currentColumn === columns) {
            currentColumn = 0;
        }
    }
}

/**
 * This is a high-level spec for checking that elements are displayed in table layout
 * e.g.
 *
 *      | menuItem-* are rendered in 2 column table layout, with 0 to 4px margin
 */
rule("%{itemPattern} are rendered in %{columns: [0-9]+} column table layout, with %{margin} margin", function (objectName, parameters) {
    _ruleRenderedInTable(this, parameters.itemPattern, parseInt(columns), parameters.margin, parameters.margin);
});


/**
 * This is a high-level spec for checking that elements are displayed in table layout 
 * with different margins for vertical and horizontal sides
 * e.g.
 *
 *      | menuItem-* are rendered in 2 column table layout, with 0 to 4px vertical and 1px horizontal margins
 */
rule("%{itemPattern} are rendered in %{columns: [0-9]+} column table layout, with %{verticalMargin} vertical and %{horizontalMargin} horizontal margins", function (objectName, parameters) {
    _ruleRenderedInTable(this, parameters.itemPattern, parseInt(columns), parameters.verticalMargin, parameters.horizontalMargin);
});



function _applyRuleBodyForAllElements(rule, objectPattern, appliesConditionCallback) {
    var allElements = findAll(parameters.objectPattern);

    if (allElements.length > 0) {
        for (var i = 0; i < allElements.length - 1; i += 1) {
            if (!appliesConditionCallback(allElements[i])) {
                return;
            }
        }
        rule.doRuleBody();
    }
}

function _applyRuleBodyForSingleElement(rule, objectPattern, appliesConditionCallback) {
    var allElements = findAll(parameters.objectPattern);

    if (allElements.length > 0) {
        for (var i = 0; i < allElements.length - 1; i += 1) {
            if (appliesConditionCallback(allElements[i])) {
                rule.doRuleBody();
                return;
            }
        }
    }
}

rule("if all %{objectPattern} are visible", function (objectName, parameters) {
    _applyRuleBodyForAllElements(this, parameters.objectPattern, function (element) {
        return element.isVisible();
    });
});


rule("if none of %{objectPattern} are visible", function (objectName, parameters) {
    _applyRuleBodyForAllElements(this, parameters.objectPattern, function (element) {
        return ! element.isVisible();
    });
});

rule("if any of %{objectPattern} is visible", function (objectName, parameters) {
    _applyRuleBodyForSingleElement(this, parameters.objectPattern, function (element) {
        return element.isVisible();
    });
});


rule("%{objectPattern} sides are inside %{containerObject} with %{margin} margin from %{sideAName} and %{sideBName}", function (objectName, parameters) {
    var items = findAll(parameters.objectPattern);


    if (items.length > 0) {
        this.addObjectSpecs(items[0].name, [ "inside " + parameters.containerObject + " " + parameters.margin + " " + parameters.sideAName ]);
        
        for (var i = 1; i < items.length - 1; i++) {
            this.addObjectSpecs(items[i].name, [ "inside " + parameters.containerObject ]);
        }

        this.addObjectSpecs(items[items.length - 1].name, [ "inside " + parameters.containerObject + " " + parameters.margin + " " + parameters.sideBName ]);
    } else {
        throw new Error("Couldn't find any items matching " + parameters.objectPattern);
    }
});


