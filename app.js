
function listeEleve(){
	var objetJson=JSON.parse(JSON.stringify(logins));		
			var i=0;
			var tabeleve=Object.getOwnPropertyNames(objetJson);
			var ul = document.createElement('ul')
	
			while(tabeleve[i]!=undefined){
			
			var li = document.createElement('li');
			var a = document.createElement('a');
			var libelle = document.createTextNode(a.innerHTML=tabeleve[i]);
			var name=tabeleve[i]
						
			a.href="matiere.html?nom="+ name;
			
			li.appendChild(a);

			ul.appendChild(li); 

			i++;
			}	
			
			return ul;
}

function $_GET(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function(m, key, value) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}


function doScriptMatiere(name) {
    var sHtmlScript = "";
    sHtmlScript = "<script>\n";
    sHtmlScript += "var i = 0;\n";
    sHtmlScript += "var objetJson = JSON.parse(JSON.stringify(votes));\n";

    var objetJson = JSON.parse(JSON.stringify(votes));
    var tabeleve = Object.getOwnPropertyNames(objetJson);
    var nameEleve = "";
    for (var i = 0; i < tabeleve.length; i++) {
        if (tabeleve[i] == name) {
            nameEleve=name;
			sHtmlScript +=  " var tabMatiere = Object.keys(objetJson." + nameEleve + ");\n";
            sHtmlScript +=  "  var ul = document.createElement('ul');\n";

            sHtmlScript +=   " while (tabMatiere[i] != undefined) {\n";
            sHtmlScript +=   " var li = document.createElement('li');\n";
            sHtmlScript +=   " var a = document.createElement('a');\n";
			sHtmlScript +=   " var libelle = document.createTextNode(a.innerHTML=tabMatiere[i]);\n";	
			sHtmlScript +=   " var mat=tabMatiere[i];\n";		
			sHtmlScript +=   " a.href=\"graphique.html?nom="+ nameEleve +"&matiere=\" + mat ;\n";	
            sHtmlScript +=   " li.appendChild(a);\n";
            sHtmlScript +=   " ul.appendChild(li);\n";
            sHtmlScript +=   " i++; \n";
            sHtmlScript +=   " }\n";

        }
    }
    if (nameEleve == "") {
        alert(name + " n'a pas voté !");
        nameEleve = tabeleve[0];
        sHtmlScript +=  " var tabMatiere = Object.keys(objetJson." + nameEleve + ");\n";
        sHtmlScript +=  "  var ul = document.createElement('ul');\n";

		sHtmlScript += " while (tabMatiere[i] != undefined) {\n";
		sHtmlScript += " var li = document.createElement('li');\n";
		sHtmlScript += " var a = document.createElement('a');\n";
		sHtmlScript += " var libelle = document.createTextNode(a.innerHTML=tabMatiere[i]);\n";	
		sHtmlScript += " var mat=tabMatiere[i];\n";		
		sHtmlScript += " a.href=\"graphique.html?nom="+ name +"&matiere=\" + mat ;\n";	
		sHtmlScript += " li.appendChild(a);\n";
		sHtmlScript += " ul.appendChild(li);\n";
		sHtmlScript += " i++; \n";
		sHtmlScript += " }\n";
    }


    sHtmlScript += "resultat_html.appendChild(ul);\n";
    sHtmlScript += " </script>\n";

    return sHtmlScript;

}