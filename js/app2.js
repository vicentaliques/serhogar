/*$(document).ready(function() {
	$( ".speed" ).selectmenu();
	$( "#modelo").autocomplete();
});*/

function cambiar() {
	
var index=document.forms.formulario.aparato.selectedIndex;

formulario.marca.length=0;
formulario.modelo.length=0;

if(index==0) lavadora();
if(index==1) lavavajillas();
if(index==2) horno();
if(index==3) aireacondicionado(); 

}

function lavadora(){
opcion0=new Option("Balay","Balay","defauldSelected");
opcion1=new Option("Teka","Teka");
opcion2=new Option("Whirlpool","Whirlpool");

document.forms.formulario.marca.options[0]=opcion0;
document.forms.formulario.marca.options[1]=opcion1;
document.forms.formulario.marca.options[2]=opcion2; 
}

function lavavajillas(){
opcion0=new Option("Indesit","Indesit","defauldSelected");
opcion1=new Option("LG","LG");
opcion2=new Option("Whirlpool","Whirlpool");

document.forms.formulario.marca.options[0]=opcion0;
document.forms.formulario.marca.options[1]=opcion1;
document.forms.formulario.marca.options[2]=opcion2; 
}

function horno(){
opcion0=new Option("NEF","NEF","defauldSelected");
opcion1=new Option("Hisense","Hisense");
opcion2=new Option("Siemens","Siemens");

document.forms.formulario.marca.options[0]=opcion0;
document.forms.formulario.marca.options[1]=opcion1;
document.forms.formulario.marca.options[2]=opcion2; 
}

function aireacondicionado(){
opcion0=new Option("Mitsubishi Electric","Mitsubishi Electric","defauldSelected");
opcion1=new Option("Mitsubishi Heavy Industries","Mitsubishi Heavy Industries");
opcion2=new Option("Daikin","Daikin");

document.forms.formulario.marca.options[0]=opcion0;
document.forms.formulario.marca.options[1]=opcion1;
document.forms.formulario.marca.options[2]=opcion2; 
}



