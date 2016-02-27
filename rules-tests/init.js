


function testSpec(specPath, callback) {
    test("Check spec " + specPath, function () {
        var pageSpec = parsePageSpec({
            driver: null,
            spec: "specs/" + specPath,
            tags: null
        });

        callback.call(this, pageSpec);
    });
}


function assertEquals(title, val1, val2) {
    if (val1 !== val2) {
        throw new Error("Does not equal: " + title + "\n   - [" + val1 + "]\n   - [" + val2 + "]\n");
    }
}

function assertArrayContains(title, arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return;
        }
    }

    throw new Error("Does not contain: " + title + "\n    Expected item: " + item + "\n    Actual array:\n" 
        + arr.map(function (arrItem) {return "          - " + arrItem;}).join("\n") + "\n"
    );
}

function SpecAssert(spec) {
    this.spec = spec;
}
SpecAssert.prototype.hasRuleSection = function (sectionName, sectionContents) {
    var section = this.findSection(sectionName);
    if (section === null) {
        throw new Error("There is no section with name: " + sectionName
            + "\nThe only available sections are:\n"
            + this.extractAllSectionNames().map(function (name) {
                return "   - [" + name + "]"; 
            }).join("\n"));
    }

    for (var objectName in sectionContents) {
        if (sectionContents.hasOwnProperty(objectName)) {
            var obj = this.findObjectInSection(section, objectName);
            if (obj === null) {
                throw new Error("There is no object " + objectName + " in section: " + sectionName);
            }

            var expectedSpecs = sectionContents[objectName];
            var realSpecs = this.convertSpecsToStringArray(obj.getSpecs());

            assertEquals("Amount of expectedSpecs and realSpecs", expectedSpecs.length, realSpecs.length);
            for (var i = 0; i < expectedSpecs.length; i++) {
                assertArrayContains("realSpecs should contain: ", realSpecs, expectedSpecs[i]);
            }
        }
    }
};
SpecAssert.prototype.findObjectInSection = function (section, objectName) {
    var iterator = section.getObjects().iterator();
    while (iterator.hasNext()) {
        var objectSpecs = iterator.next();
        if (objectName === "" + objectSpecs.getObjectName()) {
            return objectSpecs;
        }
    }
    return null;
};
SpecAssert.prototype.convertSpecsToStringArray = function (specsList) {
    var specs = [];
    var iterator = specsList.iterator();
    while (iterator.hasNext()) {
        var spec = iterator.next();
        specs.push("" + spec.getOriginalText());
    }
    return specs;
};
SpecAssert.prototype.findSection = function (sectionName) {
    var iterator = this.spec.getSections().get(0).getSections().iterator();
    while(iterator.hasNext()) {
        var section = iterator.next();

        if (sectionName === "" + section.getName()) {
            return section;
        }
    }

    return null;
};
SpecAssert.prototype.extractAllSectionNames = function () {
    var sectionNames = [];
    var iterator = this.spec.getSections().get(0).getSections().iterator();
    while(iterator.hasNext()) {
        var section = iterator.next();
        sectionNames.push("" + section.getName());
    }

    return sectionNames;
};

function assertSpec(spec) {
    return new SpecAssert(spec);
}
