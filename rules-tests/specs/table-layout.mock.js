var result = [{
        name: "brick-1"
    }, {
        name: "brick-2"
    }, {
        name: "brick-3"
    }, {
        name: "brick-4"
    }, {
        name: "brick-5"
    }, {
        name: "brick-6"
    }];
mockFunction("findAll")
    .thenReturn(result)
    .thenReturn(result)
    .thenReturn(result)
    .thenReturn(result)
    .thenReturn(result)
    .thenReturn(result);
