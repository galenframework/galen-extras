


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

    throw new Error("Does not contain: " + title + "\n    Expected item: " + item + "\n    Actual array:\n" + arrayToPrettyError(arr)
    );
}
function arrayToPrettyError(arr) {
    return arr.map(function (arrItem) {return "          - " + arrItem;}).join("\n") + "\n"
}

function assertArraysAreEqual(title, arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error("Length doesn't match: " + title + "\n" 
            + "   array #1:\n" + arrayToPrettyError(arr1)
            + "   array #2:\n" + arrayToPrettyError(arr2));
    } else {
        for (var i = 0; i < arr1.length; i++) {
            assertArrayContains(title, arr2, arr1[i]);
        }
    }
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
    return this;
};
SpecAssert.prototype.hasObjectWithSpecGroups = function (objectName, expectedSpecsGroups) {
    var section = this.spec.getSections().get(0);
    var objectSpecs = this.findObjectInSection(section, objectName);
    if (objectSpecs === null) {
        throw new Error("There is no object with name: " + objectName + "\n     The only available objects are:\n"
            + arrayToPrettyError(this.extractAllObjectNames(section))
        );
    }
    for (var groupName in expectedSpecsGroups) {
        if (expectedSpecsGroups.hasOwnProperty(groupName)) {
            var specGroup = this.findSpecGroupInObject(objectSpecs, groupName);
            if (specGroup === null) {
                throw new Error("Object " + objectName + " does not have spec group: " + groupName + "\n     The only available groups are:\n"
                    + arrayToPrettyError(this.extractAllSpecGroupNames(objectSpecs))
                );
            }
            var actualSpecs = this.convertSpecsToStringArray(specGroup.getSpecs());
            assertArraysAreEqual("Actual specs should be equal to expected specs", actualSpecs, expectedSpecsGroups[groupName]);
        }
    }
    return this;
};
SpecAssert.prototype.extractAllSpecGroupNames = function (objectSpecs) {
    var specGroups = [];
    if (objectSpecs.getSpecGroups() !== null) {
        var iterator = objectSpecs.getSpecGroups().iterator();
        while (iterator.hasNext()) {
            var group = iterator.next();
            specGroups.push("" + group.getName());
        }
    }
    return specGroups;
};
SpecAssert.prototype.findSpecGroupInObject = function (objectSpecs, groupName) {
    if (objectSpecs.getSpecGroups() !== null) {
        var iterator = objectSpecs.getSpecGroups().iterator();
        while (iterator.hasNext()) {
            var group = iterator.next();
            if (groupName === "" + group.getName()) {
                return group;
            }
        }
    }
    return null;
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
SpecAssert.prototype.extractAllObjectNames = function (section) {
    var objectNames = [];
    var iterator = section.getObjects().iterator();
    while (iterator.hasNext()) {
        var objectSpecs = iterator.next();
        objectNames.push("" + objectSpecs.getObjectName());
    }
    return objectNames;
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
