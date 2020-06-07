function oGFA(){
    //oldGFA
    var Sechandvalue=  document.getElementById("Sechandvalue").value;         

    var ORfloors = document.getElementById("ORfloors").value;
    var Oflats = document.getElementById("Oflats").value;
    var OFarea = document.getElementById("OFarea").value;
    var oGFA= ORfloors*Oflats*OFarea;
    //NewGFA
    var siteArea = document.getElementById("siteArea").value;
    var maxplotratio=document.getElementById("maxplotratio").value;
    var nGFA = maxplotratio*siteArea;
    //Old unit Price
    var OuPrice = Sechandvalue/OFarea;
    //Calculating Cost
    var x = document.getElementById("x1").value;
    var CCperarea=document.getElementById("CCperarea").value;
    var totalBankInterest=document.getElementById("totalBankInterest").value;

    var cost1 = (x*oGFA + CCperarea*nGFA) * (1+totalBankInterest); 

    
    //Setting Values
    var oldGFA = document.getElementById("oldGFA");
    var newGFA=  document.getElementById("newGFA");
    var OunitPrice = document.getElementById("OunitPrice");
    var cost = document.getElementById("cost");

    function setValues(){
            oldGFA.value=oGFA;
            newGFA.value=nGFA;
            OunitPrice.value=OuPrice;
            cost.value=cost1;
        }
    setValues();
    //alert(oGFA);
    //alert("Hello")
}