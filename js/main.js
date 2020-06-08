function oGFA(){
    //oldGFA

    var ORfloors = document.getElementById("ORfloors").value;
    var Oflats = document.getElementById("Oflats").value;
    var OFarea = document.getElementById("OFarea").value;
    var oGFA= ORfloors*Oflats*OFarea;
    //NewGFA
    var siteArea = document.getElementById("siteArea").value;
    var maxplotratio=document.getElementById("maxplotratio").value;
    var nGFA = maxplotratio*siteArea;
    //Old unit Price
    var Sechandvalue=  document.getElementById("Sechandvalue").value;         
    var depreciation=  document.getElementById("depreciation").value;         
    var compensation=  document.getElementById("compensation").value;         

    var OuPrice = ((Sechandvalue*(1-depreciation))+compensation)/(OFarea);
    //console.log((Sechandvalue*(int(1)-depreciation))+compensation);
    //Calculating Cost
    var newUnitPrice = document.getElementById("newUnitPrice").value;
    var CCperarea=document.getElementById("CCperarea").value;
    var totalBankInterest=document.getElementById("totalBankInterest").value;

    var cost1 = (newUnitPrice*oGFA + CCperarea*nGFA) * (1+totalBankInterest); 
    
    //Calculating Profit
    var agentFees = document.getElementById("agentfees").value;
    var profit1 = newUnitPrice*nGFA*(1-agentFees)-cost1;

    var revenue1 = newUnitPrice*nGFA*(1-agentFees);

    //calculating New Max Unit Price 
    var acceptableMargin = document.getElementById("acceptableMargin").value;
    var maxUnitPrice1 = (newUnitPrice*nGFA*(1-agentFees))/((acceptableMargin+1)*(1+totalBankInterest)*oGFA) - (CCperarea*nGFA)/oGFA;

    //Setting Values
    var oldGFA = document.getElementById("oldGFA");
    var newGFA=  document.getElementById("newGFA");
    var OunitPrice = document.getElementById("OunitPrice");
    var cost = document.getElementById("cost");
    var profit = document.getElementById("profit");
    var revenue = document.getElementById("revenue");
    var maxUnitPrice = document.getElementById("maxUnitPrice");

    function setValues(){
            // oldGFA.value=oGFA;
            // newGFA.value=nGFA;
            OunitPrice.value=OuPrice;
            // cost.value=cost1;
            // profit.value=profit1;
            // revenue.value=revenue1;
            maxUnitPrice.value=maxUnitPrice1;
        }
    setValues();
    //alert(oGFA);
    //alert("Hello")
}