
mockFunction("findAll")
.thenReturn([{
        isVisible: function () {return true;}
    }, {
        isVisible: function () {return true;}
    }]
)
.thenReturn([{
        isVisible: function () {return true;}
    }, {
        isVisible: function () {return false;}
    }]
)
.thenReturn([{
        isVisible: function () {return false;}
    }, {
        isVisible: function () {return false;}
    }]
)
.thenReturn([{
        isVisible: function () {return false;}
    }, {
        isVisible: function () {return true;}
    }]
)
.thenReturn([{
        isVisible: function () {return false;}
    }, {
        isVisible: function () {return true;}
    }]
)
.thenReturn([{
        isVisible: function () {return false;}
    }, {
        isVisible: function () {return false;}
    }]
)
