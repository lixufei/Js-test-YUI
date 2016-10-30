YUI({ logInclude: { TestRunner: true } }).use('test', 'test-console', 
    function(Y) {
       var testCase = new Y.Test.Case(
           {
               name: 'Sum Test',
               testSimple: function() {
                   Y.Assert.areSame(sum(2, 2), 4, '2 + 2 does not equal 4?');
               }
           }  
       ); 
        
        Y.Test.Runner.add(testCase);
        
        (new Y.Test.Console({
            newestOnTop: false
        })).render('#log');
        
        Y.Test.Runner.run();
});