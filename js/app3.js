/*$(document).ready(function() {
	$( ".speed" ).selectmenu();
	$( "#modelo").autocomplete();
});*/

function CambiarDias() {
	
var index2=document.forms.formulario.marca.selectedIndex;
var index=document.forms.formulario.aparato.selectedIndex;

formulario.modelo.length=0;

if(index==0 && index2==1) LavadoraTeka();
if(index==1) Teka();
if(index==2) Whirlpool();
if(index==3) Abril(); 
if(index==4) Mayo(); 
if(index==5) Junio(); 
if(index==6) Julio(); 
if(index==7) Agosto(); 
if(index==8) Septiembre(); 
if(index==9) Octubre(); 
if(index==10) Noviembre(); 
if(index==11) Diciembre(); 


}

function LavadoraTeka(){
opcion0=new Option("mj35","mj35","defauldSelected");
opcion1=new Option("mj36","mj36");
opcion2=new Option("mj37","mj37");

document.forms.formulario.modelo.options[0]=opcion0;
document.forms.formulario.modelo.options[1]=opcion1;
document.forms.formulario.modelo.options[2]=opcion2; 
}

function Febrero(){
opcion0=new Option("4","4","defauldSelected");
opcion1=new Option("5","5");
opcion2=new Option("6","6");

document.forms.formulario.modelo.options[0]=opcion0;
document.forms.formulario.modelo.options[1]=opcion1;
document.forms.formulario.modelo.options[2]=opcion2;  
}

function trimestre3(){
opcion0=new Option("Julio","Julio","defauldSelected");
opcion1=new Option("Agosto","Agosto");
opcion2=new Option("Septiembre","Septiembre");

document.forms.formulario.meses.options[0]=opcion0;
document.forms.formulario.meses.options[1]=opcion1;
document.forms.formulario.meses.options[2]=opcion2; 
}

function trimestre4(){
opcion0=new Option("Octubre","Octubre","defauldSelected");
opcion1=new Option("Noviembre","Noviembre");
opcion2=new Option("Diciembre","Diciembre");

document.forms.formulario.meses.options[0]=opcion0;
document.forms.formulario.meses.options[1]=opcion1;
document.forms.formulario.meses.options[2]=opcion2; 
}



