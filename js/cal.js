//電卓用変数
var kigou = "";	
var tsuu = "";	
var sounyuu = "";	
var memo = "";	
var lut = "";
//電卓用変数
function suu(hkazu,ban){			
	if (tsuu == ""){
		hkazu.hyouji.value = ban;
		tsuu = ban;
	}else if (tsuu.indexOf(".") > -1 && ban == "."){
		hkazu.hyouji.value += "";
	}else {
		hkazu.hyouji.value += ban;
		tsuu += ban;
	}
	tsuu = tsuu + "";
	if (tsuu.length > 10){
		hkazu.hyouji.value = "";
		hkazu.hyouji.value = "0";
		alert("\n！…エラー\n\n１０桁以上の入力・計算ができません\n");
		tsuu = "";
		kigou = "";
	}
}

function keisann(kei){			
	if (kigou == "/"){
		sounyuu = sounyuu / kei;
	}else if (kigou == "*"){
		sounyuu = sounyuu * kei;
	}else if (kigou == "-"){
		sounyuu = sounyuu - kei;
	}else if (kigou == "+"){
		sounyuu = parseFloat(sounyuu) + parseFloat(kei);
	}

	sounyuu = sounyuu + "";

	if (sounyuu.indexOf(".") == 0){
			sounyuu = "0" + sounyuu;
	}else if (sounyuu.indexOf("-") == 0 && sounyuu.indexOf(".") == 1){
			sounyuu = "-0" + sounyuu.substring(1,10);
	}
	if (sounyuu.length > 10 && sounyuu.indexOf(".") > -1){
		sounyuu = sounyuu.substring(0,10);
	}else if (sounyuu.length > 10 && sounyuu.indexOf(".") == -1){
		alert("\n！…エラー\n\n計算結果が１０桁を超えます。\n\n１０桁以上の入力・計算はできません。\n");
		tsuu = "";
		kigou = "";
		sounyuu = 0;
	}
}

function ennzann(hkazu,ban){		
	if (tsuu == "" && lut ==""){	
			kigou = ban;	
	}else{
		if (kigou == ""){
			sounyuu = hkazu.hyouji.value;
			kigou = ban;
			tsuu = "";
			lut ="";
		}else{
			keisann(hkazu.hyouji.value);
			kigou = ban;
			tsuu = "";
			lut ="";
			hkazu.hyouji.value = sounyuu;
		}
	}
}

function hoka(hkazu,ban){		
	if (ban == "+-"){
		if (tsuu == ""){
			sounyuu = sounyuu * -1;
			hkazu.hyouji.value = (hkazu.hyouji.value) * -1;
		}else{
			hkazu.hyouji.value = (hkazu.hyouji.value) * -1;
			
		}
	}else if (ban == "*/*"){
		lut = Math.sqrt(hkazu.hyouji.value);
		lut = lut + "";
			if (lut.length > 10 && lut.indexOf(".") > -1){
				lut = lut.substring(0,10);
			}
		hkazu.hyouji.value = lut;
		tsuu = "";
	}else if (ban == "ce"){
		if (tsuu == ""){
			kigou = "";tsuu = "";sounyuu = "";
			hkazu.hyouji.value = "";
		}else{
			hkazu.hyouji.value = "0";
			tsuu = "";
		}
	}
}

function kioku(hkazu,ban){	
	if (ban == "mc"){
		memo = 0;
	}else if (ban == "m-"){
		memo -= hkazu.hyouji.value;
		tsuu = "";
	}else if(ban == "m+"){
		memo = (hkazu.hyouji.value) * 1 + memo * 1;
		tsuu = "";
	}else if(ban == "mr"){
		hkazu.hyouji.value = memo;
	}
}

