window.onload = function() {
    info = document.getElementById("info_table");
    info.style.display = "block";
    info.className = "animated zoomIn alert alert-dismissible alert-info";
    if(document.location.search == "?lg=uk")$('#info_button').replaceWith('<a href="#" class="btn btn-info" id="info_button"><i class="fa fa-question-circle" aria-hidden="true"></i> Приховати Інфо</a>');
            else $('#info_button').replaceWith('<a href="#" class="btn btn-info" id="info_button"><i class="fa fa-question-circle" aria-hidden="true"></i> Hide Info</a>');
    
    if (document.title == "Таблиця істинності" || document.title == "Table of truth") {
        if (document.getElementById("formula").value != "") {
            info.style.display = "none";
            info.className = "animated zoomOut alert alert-dismissible alert-info";
        }
    }

    if (document.title == "Алгоритм Воршала" || document.title == "Warshall algorithm") {
        if (document.getElementById("warshalla").value != "") {
            info.style.display = "none";
            info.className = "animated zoomOut alert alert-dismissible alert-info";
        }
    }

    if (document.title == "Відношення" || document.title == "Relations") {
        if (document.getElementById("relation").value != "") {
            info.style.display = "none";
            info.className = "animated zoomOut alert alert-dismissible alert-info";
        }
    }

    if (document.title == "Комбінаторика" || document.title == "Combinatorics") {
        if (document.getElementById("M_value").value != "") {
            info.style.display = "none";
            info.className = "animated zoomOut alert alert-dismissible alert-info";
        }
    }

    if (document.title == "Множення" || document.title == "Multiplication") {
        if (document.getElementById("matrix1").value != "") {
            info.style.display = "none";
            info.className = "animated zoomOut alert alert-dismissible alert-info";
        }
    }

    if (document.title == "Числа Белла/Стірлінга" || document.title == "Bell/Stirling numbers") {
        if (document.getElementById("bs_numbers").value != "") {
            info.style.display = "none";
            info.className = "animated zoomOut alert alert-dismissible alert-info";
        }
    }

    if (document.title == "Композиція" || document.title == "Composition") {
        if (document.getElementById("matrix1").value != "") {
            info.style.display = "none";
            info.className = "animated zoomOut alert alert-dismissible alert-info";
        }
    }

    if (document.title == "Числа Фібоначчі" || document.title == "Fibonacci numbers") {
        if (document.getElementById("fibo").value != "") {
            info.style.display = "none";
            info.className = "animated zoomOut alert alert-dismissible alert-info";
        }
    }


info_button = document.getElementById("info_button");
    info_button.onclick = function() {
        info.style.display = 'block';
        if (info.className == 'animated zoomOut alert alert-dismissible alert-info') {
            info.className = "animated zoomIn alert alert-dismissible alert-info";
            if(document.location.search == "?lg=uk")info_button.text = "Приховати Інфо";
            else info_button.text = "Hide Info";
        } else if (info.className == 'animated zoomIn alert alert-dismissible alert-info') {
            info.className = "animated zoomOut alert alert-dismissible alert-info";
            if(document.location.search == "?lg=uk")info_button.text = "Показати Інфо";
            else info_button.text = "Show Info";
            setTimeout("info.style.display = 'none';", 500);
        }
    }
}