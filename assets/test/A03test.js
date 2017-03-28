function constCalculator(){

{
    return tot*(1+(14/100)) ;
}
QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});
QUnit.test('Testing the new multiply function with two sets of inputs', function (assert) {
    assert.equal(constCalculator(100, 100, 100, 100, 100), 570, "works with all five positive integers");
    assert.equal(constCalculator(100, -100, 100, 100, 100), 342, "works with 4 positive and one negative integers");
    assert.equal(constCalculator(-100, -100, -100, -100, -100), -570, "works with all negative integers");
    assert.equal(constCalculator(0, 0, 0, 0, 0), 0, "works with zeros");

});  