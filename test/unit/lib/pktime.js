
var Pktime = require(process.cwd() + "/lib/pktime")

describe('pktime', function() {

//    describe('constructor', function() {
	
    it("Initialization values", function() {
	var pktime = new Pktime();
	var pktime2 = new Pktime();
	pktime2.setValue(859);
 	pktime.getPktime().should.eql(0);
	pktime.getDate().should.eql(new Date(Date.UTC(2000,0,1,0,0,0,0)));
    });

    it('setValue method', function() {
	var pktime = new Pktime();
	// set pktime value
	pktime.setValue(1);
	pktime.getPktime().should.eql(1);
	pktime.setValue(859);
	pktime.getPktime().should.eql(859);
	pktime.setValue(new Date(Date.UTC(2000,0,1,0,0,15,0)));
	pktime.getPktime().should.eql(15);
	pktime.setValue("840");
	pktime.getPktime().should.eql(840);
	pktime.setValue("2000-01-01 01:0:0");
	pktime.getPktime().should.eql(3600);
    });

    it('setValue method throw exception', function() {
	var pktime = new Pktime();
	(function() {
	    pktime.setValue("ahoj, toihle neee");
	}).should.throw();

	(function() {
	    pktime.setValue(48.7789);
	}).should.throw();
    });

//    });

});
