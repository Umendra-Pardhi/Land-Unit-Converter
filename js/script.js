var a=document.getElementById("value");
var b=document.getElementById("o1");
var c=document.getElementById("o2");
var d=document.getElementById("o3");
var e=document.getElementById("o4");
var f=document.getElementById("o5");
var g=document.getElementById("sel");

empty();

function change(){
    var active=g.selectedIndex;
    if(a.value<0){
        empty();
    }else{
        if(active==0){
            r_to_();
            document.getElementById("a").style.background="#078576";
            document.getElementById("b").style.background="#22b9a8";
            document.getElementById("c").style.background="#22b9a8";
            document.getElementById("d").style.background="#22b9a8";
            document.getElementById("e").style.background="#22b9a8";

        }else{
            if(active==1){
                acre_to_();
                document.getElementById("a").style.background="#22b9a8";
                document.getElementById("b").style.background="#078576";
                document.getElementById("c").style.background="#22b9a8";
                document.getElementById("d").style.background="#22b9a8";
                document.getElementById("e").style.background="#22b9a8";
            }else{
                if(active==2){
                    sqm_to_();
                    document.getElementById("a").style.background="#22b9a8";
                    document.getElementById("b").style.background="#22b9a8";
                    document.getElementById("c").style.background="#078576";
                    document.getElementById("d").style.background="#22b9a8";
                    document.getElementById("e").style.background="#22b9a8";
                }else{
                    if(active==3){
                        sqf_to_();
                        document.getElementById("a").style.background="#22b9a8";
                        document.getElementById("b").style.background="#22b9a8";
                        document.getElementById("c").style.background="#22b9a8";
                        document.getElementById("d").style.background="#078576";
                        document.getElementById("e").style.background="#22b9a8";
                    }else{
                        guntha_to_();
                        document.getElementById("a").style.background="#22b9a8";
                        document.getElementById("b").style.background="#22b9a8";
                        document.getElementById("c").style.background="#22b9a8";
                        document.getElementById("d").style.background="#22b9a8";
                        document.getElementById("e").style.background="#078576";
                    }
                }
            }
        }
    }                

}
function r_to_(){
    var temp=a.value*1076.39/1089;
    b.value=a.value;
    c.value=temp/40;
    d.value=a.value*100;
    e.value=a.value*1076.39;
    f.value=a.value*1076.39/1089;
}
function acre_to_(){
    var temp=a.value*1089*40/1076.39;
    b.value=temp;
    c.value=a.value;
    d.value=temp*100;
    e.value=temp*1076.39;
    f.value=temp*1076.39/1089;
}
function sqm_to_(){
    var temp0=a.value/100;
    var temp=temp0*1076.39/1089;
    b.value=a.value/100;
    c.value=temp/40;
    d.value=a.value;
    e.value=temp0*1076.39;
    f.value=temp0*1076.39/1089;
}
function sqf_to_(){
    var temp0=a.value/1076.39;
    var temp=temp0*1076.39/1089;
    b.value=temp0;
    c.value=temp/40;
    d.value=temp0*100;
    e.value=a.value;
    f.value=temp0*1076.39/1089;
}
function guntha_to_(){
    var temp0=a.value*1089/1076.39;
    var temp=temp0*1076.39/1089;
    b.value=temp0;
    c.value=temp/40;
    d.value=temp0*100;
    e.value=temp0*1076.39;
    f.value=a.value;
}
function empty(){
    b.value="-";
    c.value="-";
    d.value="-";
    e.value="-";
    f.value="-";
}