var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'<head>'+
'    <meta charset="utf-8">'+
'    <title>Modulo di condoglianze</title>'+
'    <link rel="stylesheet" href="style.css">'+
'</head>'+
'<body>'+
'    <main>'+
'        <h1>Le nostre più sentite condoglianze</h1>'+
'        <p>Le porgiamo le nostre più sentite condoglianze. Che questa persona a cui tenevi riposi in pace.</p>'+
'        <p>Non preoccuparti. Compila questo modulo, organizzeremo il funerale/funerale dalla A alla Z.</p>'+
'        '+
'        '+
'        <form id="inscription" class="formulaire" method="post" action="." onsubmit="document.getElementById(\'validator\').disabled=true; return validateForm();">'+
'          <fieldset class="">'+
'                <legend>Informazioni sul defunto/la defunta. e</legend>'+
'                '+
'                <p class="champ">'+
'                    <label for="cognome">Cognome</label>'+
'                    <input id="cognome" name="cognome" type="text" required />'+
'                </p>'+
'            '+
'                <p class="champ">'+
'                    <label for="genere">Nome</label>'+
'                    <input id="nome" name="nome" type="text" required />'+
'                </p>'+
'                '+
'                <p class="champ">'+
'                    <label for="genere">Genere</label>'+
'                    <select id="genere" name="genere" required>'+
'                        <option value="" disabled selected>Scegliere...</option>'+
'                        <option value="u">Uomo</option>'+
'                        <option value="d">Donna</option>'+
'                        <option value="bi">Bisesuale</option>'+
'                        <option value="trans">Transsessuale</option>'+
'                        <option value="altro">Altro</option>'+
'                    </select>'+
'                </p>'+
'                '+
'                <p class="champ">'+
'                    <label for="data_decesso">data del decesso</label>'+
'                    <input id="data_decesso" name="data_decesso" type="date" required />'+
'                </p>'+
''+
'                <p class="champ">'+
'                    <label for="luogo_decesso">luogo del decesso</label>'+
'                    <input id="luogo_decesso" name="luogo_decesso" type="text" required />'+
'                </p>'+
''+
'                <p class="champ">'+
'                    <label for="dettagli">dettagli</label>'+
'                    <textarea id="dettagli" name="dettagli" rows="4"></textarea>'+
'                </p>'+
'                '+
'                '+
'            '+
'        </form>'+
'    '+
''+
'    <script>'+
'        function validateForm() {'+
'            // Aggiunge una convalida personalizzata se necessario'+
'            // Return true per consentire l\'invio del modulo'+
'            return true;'+
'        }'+
'    </script>'+
''+
''+
'                  <p class="champ">'+
'    <label for="data_decesso">data del decesso</label>'+
'    <select id="giorno" name="dtJr"></select> /'+
'    <select id="mese" name="dtMese"></select> /'+
'    <select id="anno" name="dtAnno"></select>'+
'</p>'+
''+
'            <script>'+
'    document.addEventListener(\'DOMContentLoaded\', function() {'+
'        // Riempire il selettore dei giorni'+
'        const giorni = document.getElementById(\'giorno\');'+
'        for (let i = 1; i <= 31; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            giorni.appendChild(option);'+
'        }'+
''+
'        // Riempire il selettore dei mese'+
'        const mese = document.getElementById(\'mese\');'+
'        const meseNome = ['+
'            \'Gennaio\', \'Febbraio\', \'Mazro\', \'Aprile\', \'Maggio\', \'Giugno\','+
'                    \'Luglio\', \'Agosto\', \'Settembre\', \'Ottobre\', \'Novembre\', \'Dicembre\''+
'        ];'+
'        for (let i = 0; i < meseNome.length; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i + 1;'+
'            option.textContent = meseNome[i];'+
'            mese.appendChild(option);'+
'        }'+
''+
'        // Riempire il selettore degli anni'+
'        const anno = document.getElementById(\'anno\');'+
'        const annoCorrente = new Date().getFullYear();'+
'        for (let i = annoCorrente; i >= 1900; i--) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            anno.appendChild(option);'+
'        }'+
'    });'+
'</script>'+
''+
''+
'                  <p class="champ">'+
'    <label for="luogodecesso">luogo del decesso</label>'+
'    <input id="luogodecesso" name="luogodecesso" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="causadecesso">causa/e del decesso</label>'+
'    <input id="causadecesso" name="causadecesso" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="data_nascita">data di nascita</label>'+
'    <select id="giorno_nascita" name="dtGo"></select> /'+
'    <select id="mese_nascita" name="dtMese"></select> /'+
'    <select id="anno_nascita" name="dtAnno"></select>'+
'</p>'+
''+
'                                    <script>'+
'    document.addEventListener(\'DOMContentLoaded\', function() {'+
'        // Riempire il selettore dei giorni per la data di nascita'+
'        const giorniNascita = document.getElementById(\'giorno_nascita\');'+
'        for (let i = 1; i <= 31; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            giorniNascita.appendChild(option);'+
'        }'+
''+
'        // Riempire il selettore dei mesi per la data di nascita'+
'        const meseNascita = document.getElementById(\'mese_nascita\');'+
'        const meseNome = ['+
'            \'Gennaio\', \'Febbraio\', \'Mazro\', \'Aprile\', \'Maggio\', \'Giugno\','+
'                    \'Luglio\', \'Agosto\', \'Settembre\', \'Ottobre\', \'Novembre\', \'Dicembre\''+
'        ];'+
'        for (let i = 0; i < meseNome.length; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i + 1;'+
'            option.textContent = meseNome[i];'+
'            meseNascita.appendChild(option);'+
'        }'+
''+
'        // Compila il selettore degli anni per la data di nascita'+
'        const annoNascita = document.getElementById(\'anno_nascita\');'+
'        const annoCorrente = new Date().getFullYear();'+
'        for (let i = annoCorrente; i >= 1900; i--) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            annoNascita.appendChild(option);'+
'        }'+
'    });'+
'</script>'+
''+
''+
'                  <p class="champ">'+
'    <label for="luogonascita">luogo di nascita</label>'+
'    <input id="luogonascita" name="luogonascita" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="residenza">Ultimo luogo di residenza</label>'+
'    <input id="residenza" name="residenza" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="situazione_matriciale">Situazione matriciale</label>'+
'    <select id="situazione_matriciale" name="situazione_matriciale" class="">'+
'        <option value=""></option>'+
'        <option value="figli">Solo(a) senza figli</option>'+
'        <option value="sposati">sposati</option>'+
'        <option value="vedovo">vedovo</option>'+
'        <option value="pacato">pacato. e</option>'+
'        <option value="omosessuale">omosessuale</option>'+
'        <option value="lesbica">lesbica</option>'+
'        <option value="in coppia">in coppia</option>'+
'		<option value="scapolo">scapomo</option>'+
'    </select>'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="coniuge">Nome del coniuge(a)</label>'+
'    <input id="coniuge" name="coniuge" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="data_nascita_conjoint">data di nascita del/della coniuge(a)</label>'+
'    <select id="giorno_nascita_congiunto" name="dtJr"></select> /'+
'    <select id="mese_nascita_congiunto" name="dtMese"></select> /'+
'    <select id="anno_nascita_congiunto" name="dtAnno"></select>'+
'</p>'+
''+
'                                    <script>'+
'    document.addEventListener(\'DOMContentLoaded\', function() {'+
'        // Riempire il selettore dei giorni per la data di nascita del/della coniuge(a)'+
'        const giorniNascitaCongiunto = document.getElementById(\'giorno_nascita_congiunto\');'+
'        for (let i = 1; i <= 31; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            giorniNascitaConjoint.appendChild(option);'+
'        }'+
''+
'        // Riempire il selettore dei mesi per la data di nascita del/della coniuge(a)'+
'        const meseNascitaConjoint = document.getElementById(\'mese_nascita_congiunto\');'+
'        const meseNome = ['+
'            \'Gennaio\', \'Febbraio\', \'Mazro\', \'Aprile\', \'Maggio\', \'Giugno\','+
'                    \'Luglio\', \'Agosto\', \'Settembre\', \'Ottobre\', \'Novembre\', \'Dicembre\''+
'        ];'+
'        for (let i = 0; i < meseNome.length; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i + 1;'+
'            option.textContent = meseNome[i];'+
'            meseNascitaConjoint.appendChild(option);'+
'        }'+
''+
'        // Riempire il selettore degli anni per la data di nascita del/della coniuge(a)'+
'        const annoNascitaConjoint = document.getElementById(\'anno_nascita_congiunto\');'+
'        const annoCorrente = new Date().getFullYear();'+
'        for (let i = annoCorrente; i >= 1900; i--) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            annoNascitaConjoint.appendChild(option);'+
'        }'+
'    });'+
'</script>'+
''+
''+
'                  <p class="champ">'+
'    <label for="figlio">Nome del figlio(i)</label>'+
'    <input id="figlio" name="figlio" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="data_nascita_figlio">data di nascita del (dei) figlio(i)</label>'+
'    <select id="giorno_nascita_figlio" name="dtJr"></select> /'+
'    <select id="mese_nascita_figlio" name="dtMese"></select> /'+
'    <select id="anno_nascita_figlio" name="dtAnno"></select>'+
'</p>'+
''+
'                                    <script>'+
'    document.addEventListener(\'DOMContentLoaded\', function() {'+
'        // Riempire il selettore dei giorni per la data di nascita dei bambini'+
'        const giorniNascitaEnfants = document.getElementById(\'giorno_nascita_figlio\');'+
'        for (let i = 1; i <= 31; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            giorniNascitaEnfants.appendChild(option);'+
'        }'+
''+
'        // Compila il selettore dei mesi per la data di nascita dei bambini'+
'        const meseNascitaEnfants = document.getElementById(\'mese_nascita_figlio\');'+
'        const meseNome = ['+
'            \'Gennaio\', \'Febbraio\', \'Mazro\', \'Aprile\', \'Maggio\', \'Giugno\','+
'                    \'Luglio\', \'Agosto\', \'Settembre\', \'Ottobre\', \'Novembre\', \'Dicembre\''+
'        ];'+
'        for (let i = 0; i < meseNome.length; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i + 1;'+
'            option.textContent = meseNome[i];'+
'            meseNascitaEnfants.appendChild(option);'+
'        }'+
''+
'        // Riempire il selettore degli anni per la data di nascita dei bambini'+
'        const annoNascitaFiglio = document.getElementById(\'anno_nascita_figlio\');'+
'        const annoCorrente = new Date().getFullYear();'+
'        for (let i = annoCorrente; i >= 1900; i--) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            annoNascitaEnfants.appendChild(option);'+
'        }'+
'    });'+
'	<p class="champ">'+
'    <label for="bambini">Nome del figlio(i)</label>'+
'    <input id="bambini" name="bambini" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="data_nascita_figli">data di nascita del (dei) figlio(i)</label>'+
'    <select id="giorno_nascita_figli" name="dtJr"></select> /'+
'    <select id="mese_nascita_figli" name="dtMese"></select> /'+
'    <select id="anno_nascita_figli" name="dtAnno"></select>'+
'</p>'+
''+
'                                    <script>'+
'    document.addEventListener(\'DOMContentLoaded\', function() {'+
'        // Riempire il selettore dei giorni per la data di nascita dei bambini'+
'        const giorniNascitaFigli = document.getElementById(\'giorno_nascita_figli\');'+
'        for (let i = 1; i <= 31; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            giorniNascitaFigli.appendChild(option);'+
'        }'+
''+
'        // Compila il selettore dei mesi per la data di nascita dei bambini'+
'        const meseNascitaFigli = document.getElementById(\'mese_nascita_figli\');'+
'        const meseNome = ['+
'            \'Gennaio\', \'Febbraio\', \'Mazro\', \'Aprile\', \'Maggio\', \'Giugno\','+
'                    \'Luglio\', \'Agosto\', \'Settembre\', \'Ottobre\', \'Novembre\', \'Dicembre\''+
'        ];'+
'        for (let i = 0; i < meseNome.length; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i + 1;'+
'            option.textContent = meseNome[i];'+
'            meseNascitaFigli.appendChild(option);'+
'        }'+
''+
'        // Riempire il selettore degli anni per la data di nascita dei bambini'+
'        const annoNascitaEnfants = document.getElementById(\'anno_nascita_figli\');'+
'        const annoCorrente = new Date().getFullYear();'+
'        for (let i = annoCorrente; i >= 1900; i--) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            annoNascitaFigli.appendChild(option);'+
'        }'+
'    });'+
'	<p class="champ">'+
'    <label for="bambini">Nome del figlio(i)</label>'+
'    <input id="bambini" name="bambini" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="data_nascita_figli">data di nascita del (dei) figlio(i)</label>'+
'    <select id="giorno_nascita_figli" name="dtJr"></select> /'+
'    <select id="mese_nascita_figli" name="dtMese"></select> /'+
'    <select id="anno_nascita_figli" name="dtAnno"></select>'+
'</p>'+
''+
'                                    <script>'+
'    document.addEventListener(\'DOMContentLoaded\', function() {'+
'        // Riempire il selettore dei giorni per la data di nascita dei bambini'+
'        const giorniNascitaFigli = document.getElementById(\'giorno_nascita_figli\');'+
'        for (let i = 1; i <= 31; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            giorniNascitaFigli.appendChild(option);'+
'        }'+
''+
'        // Compila il selettore dei mesi per la data di nascita dei bambini'+
'        const meseNascitaFigli = document.getElementById(\'mese_nascita_figli\');'+
'        const meseNome = ['+
'            \'Gennaio\', \'Febbraio\', \'Mazro\', \'Aprile\', \'Maggio\', \'Giugno\','+
'                    \'Luglio\', \'Agosto\', \'Settembre\', \'Ottobre\', \'Novembre\', \'Dicembre\''+
'        ];'+
'        for (let i = 0; i < meseNome.length; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i + 1;'+
'            option.textContent = meseNome[i];'+
'            meseNascitaFigli.appendChild(option);'+
'        }'+
''+
'        // Riempire il selettore degli anni per la data di nascita dei bambini'+
'        const annoNascitaEnfants = document.getElementById(\'anno_nascita_figli\');'+
'        const annoCorrente = new Date().getFullYear();'+
'        for (let i = annoCorrente; i >= 1900; i--) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            annoNascitaFigli.appendChild(option);'+
'        }'+
'    });'+
'	'+
'	<p class="champ">'+
'    <label for="bambini">Nome del figlio(i)</label>'+
'    <input id="bambini" name="bambini" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="data_nascita_figli">data di nascita del (dei) figlio(i)</label>'+
'    <select id="giorno_nascita_figli" name="dtJr"></select> /'+
'    <select id="mese_nascita_figli" name="dtMese"></select> /'+
'    <select id="anno_nascita_figli" name="dtAnno"></select>'+
'</p>'+
''+
'                                    <script>'+
'    document.addEventListener(\'DOMContentLoaded\', function() {'+
'        // Riempire il selettore dei giorni per la data di nascita dei bambini'+
'        const giorniNascitaFigli = document.getElementById(\'giorno_nascita_figli\');'+
'        for (let i = 1; i <= 31; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            giorniNascitaFigli.appendChild(option);'+
'        }'+
''+
'        // Compila il selettore dei mesi per la data di nascita dei bambini'+
'        const meseNascitaFigli = document.getElementById(\'mese_nascita_figli\');'+
'        const meseNome = ['+
'            \'Gennaio\', \'Febbraio\', \'Mazro\', \'Aprile\', \'Maggio\', \'Giugno\','+
'                    \'Luglio\', \'Agosto\', \'Settembre\', \'Ottobre\', \'Novembre\', \'Dicembre\''+
'        ];'+
'        for (let i = 0; i < meseNome.length; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i + 1;'+
'            option.textContent = meseNome[i];'+
'            meseNascitaFigli.appendChild(option);'+
'        }'+
''+
'        // Riempire il selettore degli anni per la data di nascita dei bambini'+
'        const annoNascitaEnfants = document.getElementById(\'anno_nascita_figli\');'+
'        const annoCorrente = new Date().getFullYear();'+
'        for (let i = annoCorrente; i >= 1900; i--) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            annoNascitaFigli.appendChild(option);'+
'        }'+
'    });'+
'	'+
'	<p class="champ">'+
'    <label for="bambini">Nome del figlio(i)</label>'+
'    <input id="bambini" name="bambini" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="data_nascita_figli">data di nascita del (dei) figlio(i)</label>'+
'    <select id="giorno_nascita_figli" name="dtJr"></select> /'+
'    <select id="mese_nascita_figli" name="dtMese"></select> /'+
'    <select id="anno_nascita_figli" name="dtAnno"></select>'+
'</p>'+
''+
'                                    <script>'+
'    document.addEventListener(\'DOMContentLoaded\', function() {'+
'        // Riempire il selettore dei giorni per la data di nascita dei bambini'+
'        const giorniNascitaFigli = document.getElementById(\'giorno_nascita_figli\');'+
'        for (let i = 1; i <= 31; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            giorniNascitaFigli.appendChild(option);'+
'        }'+
''+
'        // Compila il selettore dei mesi per la data di nascita dei bambini'+
'        const meseNascitaFigli = document.getElementById(\'mese_nascita_figli\');'+
'        const meseNome = ['+
'            \'Gennaio\', \'Febbraio\', \'Mazro\', \'Aprile\', \'Maggio\', \'Giugno\','+
'                    \'Luglio\', \'Agosto\', \'Settembre\', \'Ottobre\', \'Novembre\', \'Dicembre\''+
'        ];'+
'        for (let i = 0; i < meseNome.length; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i + 1;'+
'            option.textContent = meseNome[i];'+
'            meseNascitaFigli.appendChild(option);'+
'        }'+
''+
'        // Riempire il selettore degli anni per la data di nascita dei bambini'+
'        const annoNascitaEnfants = document.getElementById(\'anno_nascita_figli\');'+
'        const annoCorrente = new Date().getFullYear();'+
'        for (let i = annoCorrente; i >= 1900; i--) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            annoNascitaFigli.appendChild(option);'+
'        }'+
'    });'+
'	</script>'+
'	'+
'	<p class="champ">'+
'    <label for="bambini">Nome del figlio(i)</label>'+
'    <input id="bambini" name="bambini" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="data_nascita_figli">data di nascita del (dei) figlio(i)</label>'+
'    <select id="giorno_nascita_figli" name="dtJr"></select> /'+
'    <select id="mese_nascita_figli" name="dtMese"></select> /'+
'    <select id="anno_nascita_figli" name="dtAnno"></select>'+
'</p>'+
''+
'                                    <script>'+
'    document.addEventListener(\'DOMContentLoaded\', function() {'+
'        // Riempire il selettore dei giorni per la data di nascita dei bambini'+
'        const giorniNascitaFigli = document.getElementById(\'giorno_nascita_figli\');'+
'        for (let i = 1; i <= 31; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            giorniNascitaFigli.appendChild(option);'+
'        }'+
''+
'        // Compila il selettore dei mesi per la data di nascita dei bambini'+
'        const meseNascitaFigli = document.getElementById(\'mese_nascita_figli\');'+
'        const meseNome = ['+
'            \'Gennaio\', \'Febbraio\', \'Mazro\', \'Aprile\', \'Maggio\', \'Giugno\','+
'                    \'Luglio\', \'Agosto\', \'Settembre\', \'Ottobre\', \'Novembre\', \'Dicembre\''+
'        ];'+
'        for (let i = 0; i < meseNome.length; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i + 1;'+
'            option.textContent = meseNome[i];'+
'            meseNascitaFigli.appendChild(option);'+
'        }'+
''+
'        // Riempire il selettore degli anni per la data di nascita dei bambini'+
'        const annoNascitaEnfants = document.getElementById(\'anno_nascita_figli\');'+
'        const annoCorrente = new Date().getFullYear();'+
'        for (let i = annoCorrente; i >= 1900; i--) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            annoNascitaFigli.appendChild(option);'+
'        }'+
'    });'+
'	</script>'+
'	'+
'	<p class="champ">'+
'    <label for="bambini">Nome del figlio(i)</label>'+
'    <input id="bambini" name="bambini" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="data_nascita_figli">data di nascita del (dei) figlio(i)</label>'+
'    <select id="giorno_nascita_figli" name="dtJr"></select> /'+
'    <select id="mese_nascita_figli" name="dtMese"></select> /'+
'    <select id="anno_nascita_figli" name="dtAnno"></select>'+
'</p>'+
''+
'                                    <script>'+
'    document.addEventListener(\'DOMContentLoaded\', function() {'+
'        // Riempire il selettore dei giorni per la data di nascita dei bambini'+
'        const giorniNascitaFigli = document.getElementById(\'giorno_nascita_figli\');'+
'        for (let i = 1; i <= 31; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            giorniNascitaFigli.appendChild(option);'+
'        }'+
''+
'        // Compila il selettore dei mesi per la data di nascita dei bambini'+
'        const meseNascitaFigli = document.getElementById(\'mese_nascita_figli\');'+
'        const meseNome = ['+
'            \'Gennaio\', \'Febbraio\', \'Mazro\', \'Aprile\', \'Maggio\', \'Giugno\','+
'                    \'Luglio\', \'Agosto\', \'Settembre\', \'Ottobre\', \'Novembre\', \'Dicembre\''+
'        ];'+
'        for (let i = 0; i < meseNome.length; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i + 1;'+
'            option.textContent = meseNome[i];'+
'            meseNascitaFigli.appendChild(option);'+
'        }'+
''+
'        // Riempire il selettore degli anni per la data di nascita dei bambini'+
'        const annoNascitaEnfants = document.getElementById(\'anno_nascita_figli\');'+
'        const annoCorrente = new Date().getFullYear();'+
'        for (let i = annoCorrente; i >= 1900; i--) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            annoNascitaFigli.appendChild(option);'+
'        }'+
'    });'+
'	</script>'+
'	'+
'	<p class="champ">'+
'    <label for="bambini">Nome del figlio(i)</label>'+
'    <input id="bambini" name="bambini" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="data_nascita_figli">data di nascita del (dei) figlio(i)</label>'+
'    <select id="giorno_nascita_figli" name="dtJr"></select> /'+
'    <select id="mese_nascita_figli" name="dtMese"></select> /'+
'    <select id="anno_nascita_figli" name="dtAnno"></select>'+
'</p>'+
''+
'                                    <script>'+
'    document.addEventListener(\'DOMContentLoaded\', function() {'+
'        // Riempire il selettore dei giorni per la data di nascita dei bambini'+
'        const giorniNascitaFigli = document.getElementById(\'giorno_nascita_figli\');'+
'        for (let i = 1; i <= 31; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            giorniNascitaFigli.appendChild(option);'+
'        }'+
''+
'        // Compila il selettore dei mesi per la data di nascita dei bambini'+
'        const meseNascitaFigli = document.getElementById(\'mese_nascita_figli\');'+
'        const meseNome = ['+
'            \'Gennaio\', \'Febbraio\', \'Mazro\', \'Aprile\', \'Maggio\', \'Giugno\','+
'                    \'Luglio\', \'Agosto\', \'Settembre\', \'Ottobre\', \'Novembre\', \'Dicembre\''+
'        ];'+
'        for (let i = 0; i < meseNome.length; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i + 1;'+
'            option.textContent = meseNome[i];'+
'            meseNascitaFigli.appendChild(option);'+
'        }'+
''+
'        // Riempire il selettore degli anni per la data di nascita dei bambini'+
'        const annoNascitaEnfants = document.getElementById(\'anno_nascita_figli\');'+
'        const annoCorrente = new Date().getFullYear();'+
'        for (let i = annoCorrente; i >= 1900; i--) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            annoNascitaFigli.appendChild(option);'+
'        }'+
'    });'+
'	</script>'+
'	'+
'	<p class="champ">'+
'    <label for="bambini">Nome del figlio(i)</label>'+
'    <input id="bambini" name="bambini" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="data_nascita_figli">data di nascita del (dei) figlio(i)</label>'+
'    <select id="giorno_nascita_figli" name="dtJr"></select> /'+
'    <select id="mese_nascita_figli" name="dtMese"></select> /'+
'    <select id="anno_nascita_figli" name="dtAnno"></select>'+
'</p>'+
''+
'                                    <script>'+
'    document.addEventListener(\'DOMContentLoaded\', function() {'+
'        // Riempire il selettore dei giorni per la data di nascita dei bambini'+
'        const giorniNascitaFigli = document.getElementById(\'giorno_nascita_figli\');'+
'        for (let i = 1; i <= 31; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            giorniNascitaFigli.appendChild(option);'+
'        }'+
''+
'        // Compila il selettore dei mesi per la data di nascita dei bambini'+
'        const meseNascitaFigli = document.getElementById(\'mese_nascita_figli\');'+
'        const meseNome = ['+
'            \'Gennaio\', \'Febbraio\', \'Mazro\', \'Aprile\', \'Maggio\', \'Giugno\','+
'                    \'Luglio\', \'Agosto\', \'Settembre\', \'Ottobre\', \'Novembre\', \'Dicembre\''+
'        ];'+
'        for (let i = 0; i < meseNome.length; i++) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i + 1;'+
'            option.textContent = meseNome[i];'+
'            meseNascitaFigli.appendChild(option);'+
'        }'+
''+
'        // Riempire il selettore degli anni per la data di nascita dei bambini'+
'        const annoNascitaEnfants = document.getElementById(\'anno_nascita_figli\');'+
'        const annoCorrente = new Date().getFullYear();'+
'        for (let i = annoCorrente; i >= 1900; i--) {'+
'            const option = document.createElement(\'option\');'+
'            option.value = i;'+
'            option.textContent = i;'+
'            annoNascitaFigli.appendChild(option);'+
'        }'+
'    });'+
'	</script>'+
''+
'                  <p class="champ">'+
'    <label for="sicurezza_sociale">numero di sicurezza sociale</label>'+
'    <input id="sicurezza_sociale" name="sicurezza_sociale" size="32" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="mutua">Mutua/assicurazione malattia</label>'+
'    <input id="mutua" name="mutua" size="32" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="carta_identita">numero di carta d\'identità</label>'+
'    <input id="carta_identita" name="carta_identita" size="32" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="passaporto">numero di passaporto</label>'+
'    <input id="passaporto" name="passaporto" size="32" value="" class="" />'+
'</p>'+
''+
'<p class="champ">'+
'    <label for="patente_guida">patente di guida</label>'+
'    <select id="patente_guida" name="patente_guida" class="">'+
'        <option value=""></option>'+
'        <option value="no">No</option>'+
'        <option value="si">Si</option>'+
'    </select>'+
'    <label for="numeroguida">numero della patente di guida</label>'+
'    <input id="numeroguida" name="numeroguida" value="" class="" />'+
'</p>'+
'<script>'+
'    document.addEventListener(\'DOMContentLoaded\', function() {'+
'        const patenteGuidaSelect = document.getElementById(\'patente_guida\');'+
'        const numeroGuidaInput = document.getElementById(\'numeropermis\');'+
''+
'        // Funzione per gestire la visibilità del campo "Numero patente"'+
'        function toggleNumeroPermis() {'+
'            if (patenteGuidaSelect.value === \'oui\') {'+
'                numeroGuidaInput.style.display = \'inline\';'+
'            } else {'+
'                numeroGuidaInput.style.display = \'none\';'+
'            }'+
'        }'+
''+
'        // Inizializzare lo stato del campo numero patente di guida'+
'        toggleNumeroPermis();'+
''+
'        // Aggiungi un evento per cambiare la visibilità in base alla selezione'+
'        atenteGuidaSelect.addEventListener(\'change\', toggleNumeroPermis);'+
'    });'+
'</script>'+
''+
''+
'                  '+
''+
'                  <p class="champ">'+
'    <label for="situazione_pro">situazione professionale/scolastica</label>'+
'    <select id="situazione_pro" name="situazione_pro" class="">'+
'        <option value=""></option>'+
'        <option value="pensionato">pensionato. e</option>'+
'        <option value="disoccupazione">disoccupazione</option>'+
'        <option value="invalidita">invalidità</option>'+
'        <option value="impiegato">impiegato. e</option>'+
'        <option value="apprendista">apprendista. e</option>'+
'        <option value="stagista">stagista</option>'+
'        <option value="indipendente">indipendente. e</option>'+
'        <option value="studente">studente. e</option>'+
'    </select><p>'+
'	<form id="formulaire">'+
'        <p class="champ">'+
'            <label for="posizione">Posizione</label>'+
'            <input id="posizione" name="posizione" value="" class="" />'+
'            <label for="stabilimento">Stabilimento</label>'+
'            <input id="stabilimento" name="stabilimento" value="" class="" />'+
'        </p>'+
''+
'      </form>'+
''+
'      <form id="formulaire">'+
'        <p class="champ">'+
'            <label for="malattia_disabilita">malattia. s/disabilità. s noto.</label>'+
'            <select id="malattia_disabilita" name="malattia_disabilita" class="">'+
'                <option value=""></option>'+
'                <option value="no">No</option>'+
'                <option value="si">No</option>'+
'            </select>'+
'        </p>'+
'        '+
''+
'        <div id="detagliMalattiaDisabilita" style="display: none;">'+
'            <p class="champ">'+
'                <label for="malattia">Malattia</label>'+
'                <input id="malattia" name="malattia" value="" class="" />'+
'				<label for="disabilita">Disabilità</label>'+
'                <input id="disabilita" name="disabilita" value="" class="" />'+
'            </p>'+
'        </div>'+
'    </form>'+
''+
'    <script>'+
'        document.getElementById(\'malattia_disabilita\').addEventListener(\'change\', function() {'+
'            var detagliSection = document.getElementById(\'detagliMalattiaDisabilita\');'+
'            if (this.value === \'oui\') {'+
'                detagliSection.style.display = \'block\';'+
'            } else {'+
'                detagliSection.style.display = \'none\';'+
'            }'+
'        });'+
'    </script>'+
''+
''+
''+
'    <p class="champ">'+
'                <label for="tel">telefono</label>'+
'                <input id="tel" name="tel" value="" class="" />'+
'                <label for="whatswpp">WhatsApp</label>'+
'                <select id="whatsapp" name="whatsapp" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="wechat">Wechat</label>'+
'                <select id="wechat" name="wechat" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="signal">Signal</label>'+
'                <select id="signal" name="signal" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="rebtel">Rebtel</label>'+
'                <select id="rebtel" name="rebtel" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="viber">Viber</label>'+
'                <select id="viber" name="viber" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'            </p>'+
'  '+
'  <script>'+
'      // Funzione che ascolta il cambiamento della selezione e visualizza un messaggio'+
'      function handleSelectChange(selectId) {'+
'          const selectElement = document.getElementById(selectId);'+
'          selectElement.addEventListener(\'change\', function() {'+
'              const selectedValue = selectElement.value;'+
'              if (selectedValue === "si") {'+
'                  alert(selectId + " activé.");'+
'              } else if (selectedValue === "no") {'+
'                  alert(selectId + " disattivato.");'+
'              }'+
'          });'+
'      }'+
'  '+
'      // Applicare la funzione a tutti i selettori'+
'      const services = [\'whatsapp\', \'wechat\', \'signal\', \'rebtel\', \'viber\'];'+
'      services.forEach(service => handleSelectChange(service));'+
'  </script>'+
''+
'  <p class="champ">'+
'                <label for="tel">telefono</label>'+
'                <input id="tel" name="tel" value="" class="" />'+
'                <label for="whatswpp">WhatsApp</label>'+
'                <select id="whatsapp" name="whatsapp" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="wechat">Wechat</label>'+
'                <select id="wechat" name="wechat" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="signal">Signal</label>'+
'                <select id="signal" name="signal" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="rebtel">Rebtel</label>'+
'                <select id="rebtel" name="rebtel" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="viber">Viber</label>'+
'                <select id="viber" name="viber" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'            </p>'+
'  '+
'  <script>'+
'      // Funzione che ascolta il cambiamento della selezione e visualizza un messaggio'+
'      function handleSelectChange(selectId) {'+
'          const selectElement = document.getElementById(selectId);'+
'          selectElement.addEventListener(\'change\', function() {'+
'              const selectedValue = selectElement.value;'+
'              if (selectedValue === "si") {'+
'                  alert(selectId + " activé.");'+
'              } else if (selectedValue === "no") {'+
'                  alert(selectId + " disattivato.");'+
'              }'+
'          });'+
'      }'+
'  '+
'      // Applicare la funzione a tutti i selettori'+
'      const services = [\'whatsapp\', \'wechat\', \'signal\', \'rebtel\', \'viber\'];'+
'      services.forEach(service => handleSelectChange(service));'+
'  </script>'+
'  '+
'  <p class="champ">'+
'                <label for="tel">telefono</label>'+
'                <input id="tel" name="tel" value="" class="" />'+
'                <label for="whatswpp">WhatsApp</label>'+
'                <select id="whatsapp" name="whatsapp" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="wechat">Wechat</label>'+
'                <select id="wechat" name="wechat" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="signal">Signal</label>'+
'                <select id="signal" name="signal" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="rebtel">Rebtel</label>'+
'                <select id="rebtel" name="rebtel" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="viber">Viber</label>'+
'                <select id="viber" name="viber" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'            </p>'+
'  '+
'  <script>'+
'      // Funzione che ascolta il cambiamento della selezione e visualizza un messaggio'+
'      function handleSelectChange(selectId) {'+
'          const selectElement = document.getElementById(selectId);'+
'          selectElement.addEventListener(\'change\', function() {'+
'              const selectedValue = selectElement.value;'+
'              if (selectedValue === "si") {'+
'                  alert(selectId + " activé.");'+
'              } else if (selectedValue === "no") {'+
'                  alert(selectId + " disattivato.");'+
'              }'+
'          });'+
'      }'+
'  '+
'      // Applicare la funzione a tutti i selettori'+
'      const services = [\'whatsapp\', \'wechat\', \'signal\', \'rebtel\', \'viber\'];'+
'      services.forEach(service => handleSelectChange(service));'+
'  </script>'+
'  '+
'  <p class="champ">'+
'                <label for="tel">telefono</label>'+
'                <input id="tel" name="tel" value="" class="" />'+
'                <label for="whatswpp">WhatsApp</label>'+
'                <select id="whatsapp" name="whatsapp" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="wechat">Wechat</label>'+
'                <select id="wechat" name="wechat" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="signal">Signal</label>'+
'                <select id="signal" name="signal" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="rebtel">Rebtel</label>'+
'                <select id="rebtel" name="rebtel" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="viber">Viber</label>'+
'                <select id="viber" name="viber" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'            </p>'+
'  '+
'  <script>'+
'      // Funzione che ascolta il cambiamento della selezione e visualizza un messaggio'+
'      function handleSelectChange(selectId) {'+
'          const selectElement = document.getElementById(selectId);'+
'          selectElement.addEventListener(\'change\', function() {'+
'              const selectedValue = selectElement.value;'+
'              if (selectedValue === "si") {'+
'                  alert(selectId + " activé.");'+
'              } else if (selectedValue === "no") {'+
'                  alert(selectId + " disattivato.");'+
'              }'+
'          });'+
'      }'+
'  '+
'      // Applicare la funzione a tutti i selettori'+
'      const services = [\'whatsapp\', \'wechat\', \'signal\', \'rebtel\', \'viber\'];'+
'      services.forEach(service => handleSelectChange(service));'+
'  </script>'+
'  '+
'  <p class="champ">'+
'                <label for="tel">telefono</label>'+
'                <input id="tel" name="tel" value="" class="" />'+
'                <label for="whatswpp">WhatsApp</label>'+
'                <select id="whatsapp" name="whatsapp" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="wechat">Wechat</label>'+
'                <select id="wechat" name="wechat" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="signal">Signal</label>'+
'                <select id="signal" name="signal" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="rebtel">Rebtel</label>'+
'                <select id="rebtel" name="rebtel" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'                <label for="viber">Viber</label>'+
'                <select id="viber" name="viber" class="">'+
'                    <option value=""></option>'+
'                    <option value="no">No</option>'+
'                    <option value="si">Si</option>'+
'                </select>'+
'            </p>'+
'  '+
'  <script>'+
'      // Funzione che ascolta il cambiamento della selezione e visualizza un messaggio'+
'      function handleSelectChange(selectId) {'+
'          const selectElement = document.getElementById(selectId);'+
'          selectElement.addEventListener(\'change\', function() {'+
'              const selectedValue = selectElement.value;'+
'              if (selectedValue === "si") {'+
'                  alert(selectId + " activé.");'+
'              } else if (selectedValue === "no") {'+
'                  alert(selectId + " disattivato.");'+
'              }'+
'          });'+
'      }'+
'  '+
'      // Applicare la funzione a tutti i selettori'+
'      const services = [\'whatsapp\', \'wechat\', \'signal\', \'rebtel\', \'viber\'];'+
'      services.forEach(service => handleSelectChange(service));'+
'  </script>'+
'                  '+
'            '+
'<p class="champ">'+
'          <label for="email">email</label>'+
'          <input id="email" name="email" value="" class="" />'+
'          <span id="emailMessage" style="color: red; display: none;">Indirizzo e-mail non valido</span>'+
'        </p>'+
'        '+
'        <script>'+
'          // Funzione per verificare se l\'email è valida'+
'          function validateEmail(email) {'+
'              // Espressione regolare per convalidare le e-mail'+
'              const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;'+
'              return regex.test(email);'+
'          }'+
'        '+
'          // Ascoltatore di eventi per monitorare l\'immissione dell\'e-mail'+
'          const emailInput = document.getElementById(\'email\');'+
'          const messageSpan = document.getElementById(\'emailMessage\');'+
'        '+
'          emailInput.addEventListener(\'input\', function() {'+
'              const emailValue = emailInput.value;'+
'        '+
'              if (emailValue && !validateEmail(emailValue)) {'+
'                  messageSpan.style.display = \'inline\'; // Mostra il messaggio di errore'+
''+
''+
'              } else {'+
'                  messageSpan.style.display = \'none\'; // Nasconde il messaggio di errore'+
'              }'+
'          });'+
'        </script>'+
'<p class="champ">'+
'  <label for="dtJr">blogs</label>'+
'  <select id="blogSelect" name="dtJr" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'</p>'+
''+
'<!-- Sezione per aggiungere blog (nascosta di default) -->'+
'<div id="blogSection" style="display: none;">'+
'  <div id="blogsContainer">'+
'      <input class="blogInput" name="blog[]" value="" placeholder="Nome o URL del blog" class="" />'+
'  </div>'+
'  <button type="button" id="addBlogBtn">aggiungere un altro blog</button>'+
'</div>'+
''+
'<script>'+
'  const blogSelect = document.getElementById(\'blogSelect\');'+
'  const blogSection = document.getElementById(\'blogSection\');'+
'  const blogsContainer = document.getElementById(\'blogsContainer\');'+
'  const addBlogBtn = document.getElementById(\'addBlogBtn\');'+
''+
'  // Mostra o nascondi la sezione blog'+
'  blogSelect.addEventListener(\'change\', function() {'+
'      if (blogSelect.value === \'oui\') {'+
'          blogSection.style.display = \'block\'; // Mostra la sezione blog'+
'      } else {'+
'          blogSection.style.display = \'none\'; // Nascondi la sezione blog'+
'          blogsContainer.innerHTML = \'<input class="blogInput" name="blog[]" value="" placeholder="Nom ou URL du blog" class="" />\'; // Ripristina'+
'      }'+
'  });'+
''+
'  // Funzione per aggiungere un nuovo campo blog'+
'  addBlogBtn.addEventListener(\'click\', function() {'+
'      const newBlogInput = document.createElement(\'input\');'+
'      newBlogInput.classList.add(\'blogInput\');'+
'      newBlogInput.name = \'blog[]\';'+
'      newBlogInput.placeholder = \'Nom ou URL du blog\';'+
'      blogsContainer.appendChild(newBlogInput);'+
'  });'+
'</script>'+
''+
'<p class="champ">'+
'  <label for="dtJr">blogs</label>'+
'  <select id="blogSelect" name="dtJr" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'</p>'+
''+
'<!-- Sezione per aggiungere blog (nascosta di default) -->'+
'<div id="blogSection" style="display: none;">'+
'  <div id="blogsContainer">'+
'      <input class="blogInput" name="blog[]" value="" placeholder="Nome o URL del blog" class="" />'+
'  </div>'+
'  <button type="button" id="addBlogBtn">aggiungere un altro blog</button>'+
'</div>'+
''+
'<script>'+
'  const blogSelect = document.getElementById(\'blogSelect\');'+
'  const blogSection = document.getElementById(\'blogSection\');'+
'  const blogsContainer = document.getElementById(\'blogsContainer\');'+
'  const addBlogBtn = document.getElementById(\'addBlogBtn\');'+
''+
'  // Mostra o nascondi la sezione blog'+
'  blogSelect.addEventListener(\'change\', function() {'+
'      if (blogSelect.value === \'oui\') {'+
'          blogSection.style.display = \'block\'; // Mostra la sezione blog'+
'      } else {'+
'          blogSection.style.display = \'none\'; // Nascondi la sezione blog'+
'          blogsContainer.innerHTML = \'<input class="blogInput" name="blog[]" value="" placeholder="Nom ou URL du blog" class="" />\'; // Ripristina'+
'      }'+
'  });'+
''+
'  // Funzione per aggiungere un nuovo campo blog'+
'  addBlogBtn.addEventListener(\'click\', function() {'+
'      const newBlogInput = document.createElement(\'input\');'+
'      newBlogInput.classList.add(\'blogInput\');'+
'      newBlogInput.name = \'blog[]\';'+
'      newBlogInput.placeholder = \'Nom ou URL du blog\';'+
'      blogsContainer.appendChild(newBlogInput);'+
'  });'+
'</script>'+
''+
'<p class="champ">'+
'  <label for="dtJr">blogs</label>'+
'  <select id="blogSelect" name="dtJr" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'</p>'+
''+
'<!-- Sezione per aggiungere blog (nascosta di default) -->'+
'<div id="blogSection" style="display: none;">'+
'  <div id="blogsContainer">'+
'      <input class="blogInput" name="blog[]" value="" placeholder="Nome o URL del blog" class="" />'+
'  </div>'+
'  <button type="button" id="addBlogBtn">aggiungere un altro blog</button>'+
'</div>'+
''+
'<script>'+
'  const blogSelect = document.getElementById(\'blogSelect\');'+
'  const blogSection = document.getElementById(\'blogSection\');'+
'  const blogsContainer = document.getElementById(\'blogsContainer\');'+
'  const addBlogBtn = document.getElementById(\'addBlogBtn\');'+
''+
'  // Mostra o nascondi la sezione blog'+
'  blogSelect.addEventListener(\'change\', function() {'+
'      if (blogSelect.value === \'oui\') {'+
'          blogSection.style.display = \'block\'; // Mostra la sezione blog'+
'      } else {'+
'          blogSection.style.display = \'none\'; // Nascondi la sezione blog'+
'          blogsContainer.innerHTML = \'<input class="blogInput" name="blog[]" value="" placeholder="Nom ou URL du blog" class="" />\'; // Ripristina'+
'      }'+
'  });'+
''+
'  // Funzione per aggiungere un nuovo campo blog'+
'  addBlogBtn.addEventListener(\'click\', function() {'+
'      const newBlogInput = document.createElement(\'input\');'+
'      newBlogInput.classList.add(\'blogInput\');'+
'      newBlogInput.name = \'blog[]\';'+
'      newBlogInput.placeholder = \'Nom ou URL du blog\';'+
'      blogsContainer.appendChild(newBlogInput);'+
'  });'+
'</script>'+
''+
'<p class="champ">'+
'  <label for="dtJr">blogs</label>'+
'  <select id="blogSelect" name="dtJr" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'</p>'+
''+
'<!-- Sezione per aggiungere blog (nascosta di default) -->'+
'<div id="blogSection" style="display: none;">'+
'  <div id="blogsContainer">'+
'      <input class="blogInput" name="blog[]" value="" placeholder="Nome o URL del blog" class="" />'+
'  </div>'+
'  <button type="button" id="addBlogBtn">aggiungere un altro blog</button>'+
'</div>'+
''+
'<script>'+
'  const blogSelect = document.getElementById(\'blogSelect\');'+
'  const blogSection = document.getElementById(\'blogSection\');'+
'  const blogsContainer = document.getElementById(\'blogsContainer\');'+
'  const addBlogBtn = document.getElementById(\'addBlogBtn\');'+
''+
'  // Mostra o nascondi la sezione blog'+
'  blogSelect.addEventListener(\'change\', function() {'+
'      if (blogSelect.value === \'oui\') {'+
'          blogSection.style.display = \'block\'; // Mostra la sezione blog'+
'      } else {'+
'          blogSection.style.display = \'none\'; // Nascondi la sezione blog'+
'          blogsContainer.innerHTML = \'<input class="blogInput" name="blog[]" value="" placeholder="Nom ou URL du blog" class="" />\'; // Ripristina'+
'      }'+
'  });'+
''+
'  // Funzione per aggiungere un nuovo campo blog'+
'  addBlogBtn.addEventListener(\'click\', function() {'+
'      const newBlogInput = document.createElement(\'input\');'+
'      newBlogInput.classList.add(\'blogInput\');'+
'      newBlogInput.name = \'blog[]\';'+
'      newBlogInput.placeholder = \'Nom ou URL du blog\';'+
'      blogsContainer.appendChild(newBlogInput);'+
'  });'+
'</script>'+
''+
''+
'<p class="champ">'+
'  <label for="dtJr">facebook</label>'+
'  <select id="facebookSelect" name="dtJr" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'  <input id="facebookInput" name="facebook" value="" class="" style="display: none;" placeholder="Inserisci l\'URL di Facebook" />'+
'</p>'+
''+
'<p class="champ">'+
'  <label for="dtJr">Instagram</label>'+
'  <select id="instagramSelect" name="dtJr" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'  <input id="instagramInput" name="instagram" value="" class="" style="display: none;" placeholder="Inserisci l\'URL di Instagram" />'+
'</p>'+
''+
'<p class="champ">'+
'  <label for="dtJr">X</label>'+
'  <select id="xSelect" name="dtJr" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'  <input id="xInput" name="x" value="" class="" style="display: none;" placeholder="Inserisci l\'URL X" />'+
'</p>'+
''+
'<p class="champ">'+
'  <label for="dtJr">Snapchat</label>'+
'  <select id="snapchatSelect" name="dtJr" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'  <input id="snapchatInput" name="snapchat" value="" class="" style="display: none;" placeholder="Inserisci l\'URL di Snapchat" />'+
'</p>'+
''+
'<p class="champ">'+
'  <label for="dtJr">tik-tok</label>'+
'  <select id="tiktokSelect" name="dtJr" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'  <input id="tiktokInput" name="tiktok" value="" class="" style="display: none;" placeholder="Inserisci l\'URL TikTok" />'+
'</p>'+
''+
'<script>'+
'  // Funzione per mostrare o nascondere un campo di input in base alla selezione'+
'  function toggleInput(selectId, inputId) {'+
'      const selectElement = document.getElementById(selectId);'+
'      const inputElement = document.getElementById(inputId);'+
''+
'      selectElement.addEventListener(\'change\', function() {'+
'          if (selectElement.value === \'oui\') {'+
'              inputElement.style.display = \'inline\'; // mostra il campo'+
''+
''+
'          } else {'+
'              inputElement.style.display = \'none\'; // Nascondi il campo'+
'              inputElement.value = \'\'; // Svuota il campo se "no" è selezionato'+
'          }'+
'      });'+
'  }'+
''+
'  // Applicare la funzione a ciascun servizio di social network'+
'  toggleInput(\'facebookSelect\', \'facebookInput\');'+
'  toggleInput(\'instagramSelect\', \'instagramInput\');'+
'  toggleInput(\'xSelect\', \'xInput\');'+
'  toggleInput(\'snapchatSelect\', \'snapchatInput\');'+
'  toggleInput(\'tiktokSelect\', \'tiktokInput\');'+
'</script>'+
'<br />'+
''+
'<p class="champ">'+
'  <label for="Info1">conto bancario</label>'+
'  <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'  <label for="Info1">IBAN</label>'+
'  <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'  <label for="Info1">RIB</label>'+
'  <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'  <label for="Info1">numero di carta di credito</label>'+
'  <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'</p>'+
''+
' <p class="champ">'+
'  <label for="Info1">conto bancario</label>'+
'  <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'  <label for="Info1">IBAN</label>'+
'  <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'  <label for="Info1">RIB</label>'+
'  <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'  <label for="Info1">numero di carta di credito</label>'+
'  <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'</p>'+
'                  <p class="champ">'+
'                    <label for="Info1">risparmio</label>'+
'                    <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'                  </p>'+
'                  <p class="champ">'+
'                    <label for="Info1">risparmio</label>'+
'                    <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'                  </p>'+
'				  <p class="champ">'+
'                    <label for="Info1">risparmio</label>'+
'                    <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'                  </p>'+
'				  <p class="champ">'+
'                    <label for="Info1">risparmio</label>'+
'                    <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'                  </p>'+
'                  '+
'                  <p class="champ">'+
'                    <label for="Info1">assicurazione</label>'+
'                    <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'                  </p>'+
'                  <p class="champ">'+
'                    <label for="Info1">assicurazione</label>'+
'                    <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'                  </p>'+
'                  <p class="champ">'+
'                    <label for="specieSelect">specie</label>'+
'                    <select id="specieSelect" name="specieSelect" class="">'+
'                        <option value=""></option>'+
'                        <option value="no">No</option>'+
'                        <option value="si">Si</option>'+
'                    </select>'+
'                </p>'+
'                '+
'                <!-- Campo per l\'importo nascosto predefinito -->'+
'                <p class="champ" id="montantSection" style="display: none;">'+
'                    <label for="importo">importo</label>'+
'                    <input id="importo" name="importo" size="32" value="" class="" placeholder="Inserisci l\'importo in contanti" />'+
'                </p>'+
'                '+
'                <script>'+
'                    // Funzione per mostrare o nascondere il campo dell\'importo'+
'                    const specieSelect = document.getElementById(\'specieSelect\');'+
'                    const importoSection = document.getElementById(\'importoSection\');'+
'                    const importoInput = document.getElementById(\'importo\');'+
'                '+
'                    especesSelect.addEventListener(\'change\', function() {'+
'                        if (especesSelect.value === \'si\') {'+
'                            importoSection.style.display = \'block\'; // Visualizza il campo dell\'importo'+
'                        } else {'+
'                            importoSection.style.display = \'none\'; // Nascondi il campo dell\'importo'+
'                            importoInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'                        }'+
'                    });'+
'                </script>'+
'                <br />'+
'                <p class="champ">'+
'                  <label for="beneAcquisitoSelect">Bene acquisito</label>'+
'                  <select id="beneAcquisitoSelect" name="beneAcquisitoSelect" class="">'+
'                      <option value=""></option>'+
'                      <option value="no">No</option>'+
'                      <option value="si">Si</option>'+
'                  </select>'+
'              </p>'+
'              '+
'              <!-- Champ pour l\'adresse du bien caché par défaut -->'+
'              <p class="champ" id="indirizzoBeneSection" style="display: none;">'+
'                  <label for="indirizzoBene">struttura</label>'+
'                  <input id="indirizzoBene" name="indirizzoBene" size="32" value="" class="" placeholder="Inserisci l\'indirizzo del bene" />'+
'              </p>'+
'              '+
'              <script>'+
'                  // Funzione per mostrare o nascondere il campo dell\'indirizzo della proprietà'+
'                  const beneAcquisitoSelect = document.getElementById(\'beneAcquisitoSelect\');'+
'                  const indirizzoBeneSection = document.getElementById(\'indirizzoBeneSection\');'+
'                  const indirizzoBeneInput = document.getElementById(\'indirizzoBene\');'+
'              '+
'                  bienAcquisSelect.addEventListener(\'change\', function() {'+
'                      if (beneAcquisSelect.value === \'oui\') {'+
'                          indirizzoBeneSection.style.display = \'block\'; // Visualizza il campo indirizzo'+
'                      } else {'+
'                          indirizzoBeneSection.style.display = \'none\'; // Nascondi il campo dell\'indirizzo'+
'                          indirizzoBeneInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'                      }'+
'                  });'+
'              </script>'+
'              '+
'              <p class="champ">'+
'                  <label for="beneAcquisitoSelect">Bene acquisito</label>'+
'                  <select id="beneAcquisitoSelect" name="beneAcquisitoSelect" class="">'+
'                      <option value=""></option>'+
'                      <option value="no">No</option>'+
'                      <option value="si">Si</option>'+
'                  </select>'+
'              </p>'+
'              '+
'              <!-- Champ pour l\'adresse du bien caché par défaut -->'+
'              <p class="champ" id="indirizzoBeneSection" style="display: none;">'+
'                  <label for="indirizzoBene">struttura</label>'+
'                  <input id="indirizzoBene" name="indirizzoBene" size="32" value="" class="" placeholder="Inserisci l\'indirizzo del bene" />'+
'              </p>'+
'              '+
'              <script>'+
'                  // Funzione per mostrare o nascondere il campo dell\'indirizzo della proprietà'+
'                  const beneAcquisitoSelect = document.getElementById(\'beneAcquisitoSelect\');'+
'                  const indirizzoBeneSection = document.getElementById(\'indirizzoBeneSection\');'+
'                  const indirizzoBeneInput = document.getElementById(\'indirizzoBene\');'+
'              '+
'                  bienAcquisSelect.addEventListener(\'change\', function() {'+
'                      if (beneAcquisSelect.value === \'oui\') {'+
'                          indirizzoBeneSection.style.display = \'block\'; // Visualizza il campo indirizzo'+
'                      } else {'+
'                          indirizzoBeneSection.style.display = \'none\'; // Nascondi il campo dell\'indirizzo'+
'                          indirizzoBeneInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'                      }'+
'                  });'+
'              </script>'+
'			  '+
'			  <p class="champ">'+
'                  <label for="beneAcquisitoSelect">Bene acquisito</label>'+
'                  <select id="beneAcquisitoSelect" name="beneAcquisitoSelect" class="">'+
'                      <option value=""></option>'+
'                      <option value="no">No</option>'+
'                      <option value="si">Si</option>'+
'                  </select>'+
'              </p>'+
'              '+
'              <!-- Champ pour l\'adresse du bien caché par défaut -->'+
'              <p class="champ" id="indirizzoBeneSection" style="display: none;">'+
'                  <label for="indirizzoBene">struttura</label>'+
'                  <input id="indirizzoBene" name="indirizzoBene" size="32" value="" class="" placeholder="Inserisci l\'indirizzo del bene" />'+
'              </p>'+
'              '+
'              <script>'+
'                  // Funzione per mostrare o nascondere il campo dell\'indirizzo della proprietà'+
'                  const beneAcquisitoSelect = document.getElementById(\'beneAcquisitoSelect\');'+
'                  const indirizzoBeneSection = document.getElementById(\'indirizzoBeneSection\');'+
'                  const indirizzoBeneInput = document.getElementById(\'indirizzoBene\');'+
'              '+
'                  bienAcquisSelect.addEventListener(\'change\', function() {'+
'                      if (beneAcquisSelect.value === \'oui\') {'+
'                          indirizzoBeneSection.style.display = \'block\'; // Visualizza il campo indirizzo'+
'                      } else {'+
'                          indirizzoBeneSection.style.display = \'none\'; // Nascondi il campo dell\'indirizzo'+
'                          indirizzoBeneInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'                      }'+
'                  });'+
'              </script>'+
'			  '+
'			  <p class="champ">'+
'                  <label for="beneAcquisitoSelect">Bene acquisito</label>'+
'                  <select id="beneAcquisitoSelect" name="beneAcquisitoSelect" class="">'+
'                      <option value=""></option>'+
'                      <option value="no">No</option>'+
'                      <option value="si">Si</option>'+
'                  </select>'+
'              </p>'+
'              '+
'              <!-- Champ pour l\'adresse du bien caché par défaut -->'+
'              <p class="champ" id="indirizzoBeneSection" style="display: none;">'+
'                  <label for="indirizzoBene">struttura</label>'+
'                  <input id="indirizzoBene" name="indirizzoBene" size="32" value="" class="" placeholder="Inserisci l\'indirizzo del bene" />'+
'              </p>'+
'              '+
'              <script>'+
'                  // Funzione per mostrare o nascondere il campo dell\'indirizzo della proprietà'+
'                  const beneAcquisitoSelect = document.getElementById(\'beneAcquisitoSelect\');'+
'                  const indirizzoBeneSection = document.getElementById(\'indirizzoBeneSection\');'+
'                  const indirizzoBeneInput = document.getElementById(\'indirizzoBene\');'+
'              '+
'                  bienAcquisSelect.addEventListener(\'change\', function() {'+
'                      if (beneAcquisSelect.value === \'oui\') {'+
'                          indirizzoBeneSection.style.display = \'block\'; // Visualizza il campo indirizzo'+
'                      } else {'+
'                          indirizzoBeneSection.style.display = \'none\'; // Nascondi il campo dell\'indirizzo'+
'                          indirizzoBeneInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'                      }'+
'                  });'+
'              </script>'+
'			  '+
'			  <p class="champ">'+
'                  <label for="beneAcquisitoSelect">Bene acquisito</label>'+
'                  <select id="beneAcquisitoSelect" name="beneAcquisitoSelect" class="">'+
'                      <option value=""></option>'+
'                      <option value="no">No</option>'+
'                      <option value="si">Si</option>'+
'                  </select>'+
'              </p>'+
'              '+
'              <!-- Champ pour l\'adresse du bien caché par défaut -->'+
'              <p class="champ" id="indirizzoBeneSection" style="display: none;">'+
'                  <label for="indirizzoBene">struttura</label>'+
'                  <input id="indirizzoBene" name="indirizzoBene" size="32" value="" class="" placeholder="Inserisci l\'indirizzo del bene" />'+
'              </p>'+
'              '+
'              <script>'+
'                  // Funzione per mostrare o nascondere il campo dell\'indirizzo della proprietà'+
'                  const beneAcquisitoSelect = document.getElementById(\'beneAcquisitoSelect\');'+
'                  const indirizzoBeneSection = document.getElementById(\'indirizzoBeneSection\');'+
'                  const indirizzoBeneInput = document.getElementById(\'indirizzoBene\');'+
'              '+
'                  bienAcquisSelect.addEventListener(\'change\', function() {'+
'                      if (beneAcquisSelect.value === \'oui\') {'+
'                          indirizzoBeneSection.style.display = \'block\'; // Visualizza il campo indirizzo'+
'                      } else {'+
'                          indirizzoBeneSection.style.display = \'none\'; // Nascondi il campo dell\'indirizzo'+
'                          indirizzoBeneInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'                      }'+
'                  });'+
'              </script>'+
'			  '+
'			  <p class="champ">'+
'                  <label for="beneAcquisitoSelect">Bene acquisito</label>'+
'                  <select id="beneAcquisitoSelect" name="beneAcquisitoSelect" class="">'+
'                      <option value=""></option>'+
'                      <option value="no">No</option>'+
'                      <option value="si">Si</option>'+
'                  </select>'+
'              </p>'+
'              '+
'              <!-- Champ pour l\'adresse du bien caché par défaut -->'+
'              <p class="champ" id="indirizzoBeneSection" style="display: none;">'+
'                  <label for="indirizzoBene">struttura</label>'+
'                  <input id="indirizzoBene" name="indirizzoBene" size="32" value="" class="" placeholder="Inserisci l\'indirizzo del bene" />'+
'              </p>'+
'              '+
'              <script>'+
'                  // Funzione per mostrare o nascondere il campo dell\'indirizzo della proprietà'+
'                  const beneAcquisitoSelect = document.getElementById(\'beneAcquisitoSelect\');'+
'                  const indirizzoBeneSection = document.getElementById(\'indirizzoBeneSection\');'+
'                  const indirizzoBeneInput = document.getElementById(\'indirizzoBene\');'+
'              '+
'                  bienAcquisSelect.addEventListener(\'change\', function() {'+
'                      if (beneAcquisSelect.value === \'oui\') {'+
'                          indirizzoBeneSection.style.display = \'block\'; // Visualizza il campo indirizzo'+
'                      } else {'+
'                          indirizzoBeneSection.style.display = \'none\'; // Nascondi il campo dell\'indirizzo'+
'                          indirizzoBeneInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'                      }'+
'                  });'+
'              </script>'+
'    '+
'    <p class="champ">'+
'      <label for="proprietarioAutoSelect">proprietario di un\'automobile</label>'+
'      <select id="proprietarioAutoSelect" name="proprietarioAutoSelect" class="">'+
'          <option value=""></option>'+
'          <option value="no">No</option>'+
'          <option value="si">Si</option>'+
'      </select>'+
'  </p>'+
'  '+
'  <!-- Campo per l\'immatricolazione dell\'automobile nascosto di default -->'+
'  <p class="champ" id="immatricolazioneSection" style="display: none;">'+
'      <label for="immatricolazioneAuto">immatricolazione de l\'automobile</label>'+
'      <input id="immatricolazioneAuto" name="immatricolazioneAuto" size="32" value="" class="" placeholder="Immettere la targa dell\'auto" />'+
'  </p>'+
'  '+
'  <script>'+
'      // Funzione per mostrare o nascondere il campo di immatricolazione'+
'      const proprietarioAutoSelect = document.getElementById(\'proprietarioAutoSelect\');'+
'      const immatricolazioneSection = document.getElementById(\'immatricolazioneSection\');'+
'      const immatricolazioneInput = document.getElementById(\'immatricolazioneAuto\');'+
'  '+
'      proprietarioAutoSelect.addEventListener(\'change\', function() {'+
'          if (proprietarioAutoSelect.value === \'oui\') {'+
'              immatricolazioneSection.style.display = \'block\'; // Visualizza il campo di registrazione'+
'          } else {'+
'              immatricolazioneSection.style.display = \'none\'; // Nascondi il campo di registrazione'+
'              immatricolazioneInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'          }'+
'      });'+
'  </script>'+
''+
'  <p class="champ">'+
'      <label for="proprietarioAutoSelect">proprietario di un\'automobile</label>'+
'      <select id="proprietarioAutoSelect" name="proprietarioAutoSelect" class="">'+
'          <option value=""></option>'+
'          <option value="no">No</option>'+
'          <option value="si">Si</option>'+
'      </select>'+
'  </p>'+
'  '+
'  <!-- Campo per l\'immatricolazione dell\'automobile nascosto di default -->'+
'  <p class="champ" id="immatricolazioneSection" style="display: none;">'+
'      <label for="immatricolazioneAuto">Immatricolazione di auto</label>'+
'      <input id="immatricolazioneAuto" name="immatricolazioneAuto" size="32" value="" class="" placeholder="Immettere la targa dell\'auto" />'+
'  </p>'+
'  '+
'  <script>'+
'      // Funzione per mostrare o nascondere il campo di immatricolazione'+
'      const proprietarioAutoSelect = document.getElementById(\'proprietarioAutoSelect\');'+
'      const immatricolazioneSection = document.getElementById(\'immatricolazioneSection\');'+
'      const immatricolazioneInput = document.getElementById(\'immatricolazioneAuto\');'+
'  '+
'      proprietarioAutoSelect.addEventListener(\'change\', function() {'+
'          if (proprietarioAutoSelect.value === \'oui\') {'+
'              immatricolazioneSection.style.display = \'block\'; // Visualizza il campo di registrazione'+
'          } else {'+
'              immatricolazioneSection.style.display = \'none\'; // Nascondi il campo di registrazione'+
'              immatricolazioneInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'          }'+
'      });'+
'  </script>'+
'<p class="champ">'+
'  <label for="proprietarioMotoSelect">proprietario di moto</label>'+
'  <select id="proprietarioMotoSelect" name="proprietarioMotoSelect" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'</p>'+
''+
'<!-- Campo per la motorizzazione di immatricolazione nascosto in modo predefinito -->'+
'<p class="champ" id="immatricolazioneSection" style="display: none;">'+
'  <label for="immatricolazioneMoto">Immatricolazione della moto</label>'+
'  <input id="immatricolazioneMoto" name="immatricolazioneMoto" size="32" value="" class="" placeholder="Immettere la targa della moto" />'+
'</p>'+
''+
'<script>'+
'  // Funzione per mostrare o nascondere il campo di immatricolazione'+
'  const proprietarioMotoSelect = document.getElementById(\'proprietarioMotoSelect\');'+
'  const immatricolazioneSection = document.getElementById(\'immatricolazioneSection\');'+
'  const immatricolazioneInput = document.getElementById(\'immatricolazioneAuto\');'+
''+
'  proprietarioMotoSelect.addEventListener(\'change\', function() {'+
'      if (proprietarioMotoSelect.value === \'si\') {'+
'          immatricolazioneSection.style.display = \'block\'; // Visualizza il campo di immatricolazione'+
'      } else {'+
'          immatricolazioneSection.style.display = \'none\'; // Nasconde il campo di immatricolazione'+
'          immatricolazioneInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'      }'+
'  });'+
'</script>'+
''+
'<p class="champ">'+
'  <label for="proprietarioCicloSelect">proprietario di ciclomotore</label>'+
'  <select id="proprietarioCicloSelect" name="proprietarioCicloSelect" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'</p>'+
''+
'<!-- Campo per l\'immatricolazione del ciclomotore nascosto di default -->'+
'<p class="champ" id="immatricolazioneSection" style="display: none;">'+
'  <label for="immatricolazioneCyclo">Immatricolazione della moto</label>'+
'  <input id="immatricolazioneCyclo" name="immatricolazioneCyclo" size="32" value="" class="" placeholder="Immettere la targa del ciclomotore" />'+
'</p>'+
''+
'<script>'+
'  // Funzione per mostrare o nascondere il campo di immatricolazione'+
'  const proprietarioCicloSelect = document.getElementById(\'proprietarioMotoSelect\');'+
'  const immatricolazioneSection = document.getElementById(\'immatricolazioneSection\');'+
'  const immatricolazioneInput = document.getElementById(\'immatricolazioneAuto\');'+
''+
'  proprietarioMotoSelect.addEventListener(\'change\', function() {'+
'      if (proprietarioCicloSelect.value === \'oui\') {'+
'          immatricolazioneSection.style.display = \'block\'; // Visualizza il campo di immatricolazione'+
'      } else {'+
'          immatricolazioneSection.style.display = \'none\'; // Nasconde il campo di immatricolazione'+
'          immatricolazioneInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'      }'+
'  });'+
'</script>'+
''+
'<p class="champ">'+
'  <label for="proprietarioCampingcarSelect">proprietario di camper</label>'+
'  <select id="proprietarioCampingcarSelect" name="proprietarioCampingcarSelect" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'</p>'+
''+
'<!-- Campo per l\'immatricolazione del camper nascosto di default -->'+
'<p class="champ" id="immatricolazioneSection" style="display: none;">'+
'  <label for="immatricolazioneCampingcar">Immatricolazione del camper</label>'+
'  <input id="immatricolazioneCampingcar" name="immatricolazioneCampingcar" size="32" value="" class="" placeholder="Immettere il numero di targa del camper" />'+
'</p>'+
''+
'<script>'+
'  // Funzione per mostrare o nascondere il campo di immatricolazione'+
'  const proprietarioCampingcarSelect = document.getElementById(\'proprietarioCampingcarSelect\');'+
'  const immatricolazioneSection = document.getElementById(\'immatricolazioneSection\');'+
'  const immatricolazioneInput = document.getElementById(\'immatricolazioneCampingcar\');'+
''+
'  proprietarioMotoSelect.addEventListener(\'change\', function() {'+
'      if (proprietarioMotoSelect.value === \'oui\') {'+
'          immatricolazioneSection.style.display = \'block\'; // Visualizza il campo di immatricolazione'+
'      } else {'+
'          immatricolazioneSection.style.display = \'none\'; // Nasconde il campo di immatricolazione'+
'          immatricolazioneInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'      }'+
'  });'+
'</script>'+
''+
'<p class="champ">'+
'  <label for="proprietarioBiciSelect">proprietario di bici</label>'+
'  <select id="proprietarioBiciSelect" name="proprietarioBiciSelect" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'</p>'+
''+
''+
'<p class="champ">'+
'  <label for="proprietarioveicoloaziendaleSelect">proprietario di veicolo aziendale</label>'+
'  <select id="proprietarioveicoloaziendaleSelect" name="proprietarioveicoloaziendaleSelect" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'</p>'+
''+
'<!-- Champ pour l\'immatricolazione du veicolo aziendale caché par défaut -->'+
'<p class="champ" id="immatricolazioneSection" style="display: none;">'+
'  <label for="immatricolazioneveicoloaziendale">immatricolazione du veicolo aziendale</label>'+
'  <input id="immatricolazioneVeicoloaziendale" name="immatricolazioneVeicoloaziendale" size="32" value="" class="" placeholder="Immettere il numero di targa del veicolo aziendale" />'+
'</p>'+
''+
'<script>'+
'  // Funzione per mostrare o nascondere il campo di immatricolazione'+
'  const proprietarioVeicoloaziendaleSelect = document.getElementById(\'proprietarioVeicoloaziendaleSelect\');'+
'  const immatricolazioneSection = document.getElementById(\'immatricolazioneSection\');'+
'  const immatricolazioneInput = document.getElementById(\'immatricolazioneCampingcar\');'+
''+
'  proprietarioMotoSelect.addEventListener(\'change\', function() {'+
'      if (proprietarioVeicoloaziendaleSelect.value === \'oui\') {'+
'          immatricolazioneSection.style.display = \'block\'; // Visualizza il campo di immatricolazione'+
'      } else {'+
'          immatricolazioneSection.style.display = \'none\'; // Nasconde il campo di immatricolazione'+
'          immatricolazioneInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'      }'+
'  });'+
'</script>'+
''+
'<p class="champ">'+
'  <label for="investimentoSelect">investimento locativo</label>'+
'  <select id="investimentoSelect" name="investimentoSelect" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'</p>'+
''+
'<!-- Campo per l\'indirizzo del bene nascosto predefinito -->'+
'<p class="champ" id="indirizzoBeneSection" style="display: none;">'+
'  <label for="indirizzoBene">Indirizzo del bene</label>'+
'  <input id="indirizzoBene" name="indirizzoBene" size="32" value="" class="" placeholder="Inserisci l\'indirizzo del bene" />'+
'</p>'+
''+
'<script>'+
'  // Funzione per mostrare o nascondere il campo di immatricolazione'+
'  const proprietarioVeicoloaziendaleSelect = document.getElementById(\'proprietarioVeicoloaziendaleSelect\');'+
'  const immatricolazioneSection = document.getElementById(\'immatricolazioneSection\');'+
'  const immatricolazioneInput = document.getElementById(\'immatricolazioneCampingcar\');'+
''+
'  proprietarioMotoSelect.addEventListener(\'change\', function() {'+
'      if (proprietarioVeicoloaziendaleSelect.value === \'oui\') {'+
'          immatricolazioneSection.style.display = \'block\'; // Visualizza il campo di immatricolazione'+
'      } else {'+
'          immatricolazioneSection.style.display = \'none\'; // Nasconde il campo di immatricolazione'+
'          immatricolazioneInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'      }'+
'  });'+
'</script>'+
''+
''+
'<p class="champ">'+
'  <label for="investimentoSelect">investimento locativo</label>'+
'  <select id="investimentoSelect" name="investimentoSelect" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'</p>'+
''+
'<!-- Campo per l\'indirizzo del bene nascosto predefinito -->'+
'<p class="champ" id="indirizzoBeneSection" style="display: none;">'+
'  <label for="indirizzoBene">Indirizzo del bene</label>'+
'  <input id="indirizzoBene" name="indirizzoBene" size="32" value="" class="" placeholder="Inserisci l\'indirizzo del bene" />'+
'</p>'+
''+
'<script>'+
'  // Funzione per mostrare o nascondere il campo di immatricolazione'+
'  const proprietarioVeicoloaziendaleSelect = document.getElementById(\'proprietarioVeicoloaziendaleSelect\');'+
'  const immatricolazioneSection = document.getElementById(\'immatricolazioneSection\');'+
'  const immatricolazioneInput = document.getElementById(\'immatricolazioneCampingcar\');'+
''+
'  proprietarioMotoSelect.addEventListener(\'change\', function() {'+
'      if (proprietarioVeicoloaziendaleSelect.value === \'oui\') {'+
'          immatricolazioneSection.style.display = \'block\'; // Visualizza il campo di immatricolazione'+
'      } else {'+
'          immatricolazioneSection.style.display = \'none\'; // Nasconde il campo di immatricolazione'+
'          immatricolazioneInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'      }'+
'  });'+
'</script>'+
''+
'<p class="champ">'+
'  <label for="investimentoSelect">investimento locativo</label>'+
'  <select id="investimentoSelect" name="investimentoSelect" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'</p>'+
''+
'<!-- Campo per l\'indirizzo del bene nascosto predefinito -->'+
'<p class="champ" id="indirizzoBeneSection" style="display: none;">'+
'  <label for="indirizzoBene">Indirizzo del bene</label>'+
'  <input id="indirizzoBene" name="indirizzoBene" size="32" value="" class="" placeholder="Inserisci l\'indirizzo del bene" />'+
'</p>'+
''+
'<script>'+
'  // Funzione per mostrare o nascondere il campo di immatricolazione'+
'  const proprietarioVeicoloaziendaleSelect = document.getElementById(\'proprietarioVeicoloaziendaleSelect\');'+
'  const immatricolazioneSection = document.getElementById(\'immatricolazioneSection\');'+
'  const immatricolazioneInput = document.getElementById(\'immatricolazioneCampingcar\');'+
''+
'  proprietarioMotoSelect.addEventListener(\'change\', function() {'+
'      if (proprietarioVeicoloaziendaleSelect.value === \'oui\') {'+
'          immatricolazioneSection.style.display = \'block\'; // Visualizza il campo di immatricolazione'+
'      } else {'+
'          immatricolazioneSection.style.display = \'none\'; // Nasconde il campo di immatricolazione'+
'          immatricolazioneInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'      }'+
'  });'+
'</script>'+
''+
'<p class="champ">'+
'  <label for="investimentoSelect">investimento locativo</label>'+
'  <select id="investimentoSelect" name="investimentoSelect" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'</p>'+
''+
'<!-- Campo per l\'indirizzo del bene nascosto predefinito -->'+
'<p class="champ" id="indirizzoBeneSection" style="display: none;">'+
'  <label for="indirizzoBene">Indirizzo del bene</label>'+
'  <input id="indirizzoBene" name="indirizzoBene" size="32" value="" class="" placeholder="Inserisci l\'indirizzo del bene" />'+
'</p>'+
''+
'<script>'+
'  // Funzione per mostrare o nascondere il campo di immatricolazione'+
'  const proprietarioVeicoloaziendaleSelect = document.getElementById(\'proprietarioVeicoloaziendaleSelect\');'+
'  const immatricolazioneSection = document.getElementById(\'immatricolazioneSection\');'+
'  const immatricolazioneInput = document.getElementById(\'immatricolazioneCampingcar\');'+
''+
'  proprietarioMotoSelect.addEventListener(\'change\', function() {'+
'      if (proprietarioVeicoloaziendaleSelect.value === \'oui\') {'+
'          immatricolazioneSection.style.display = \'block\'; // Visualizza il campo di immatricolazione'+
'      } else {'+
'          immatricolazioneSection.style.display = \'none\'; // Nasconde il campo di immatricolazione'+
'          immatricolazioneInput.value = \'\'; // Svuota il campo se "no" è selezionato'+
'      }'+
'  });'+
'</script>'+
''+
'<p class="champ">'+
'  <label for="economiaCollaborativaSelect">economia collaborativa</label>'+
'  <select id="economiaCollaborativaSelect" name="economiaCollaborativaSelect" class="">'+
'      <option value=""></option>'+
'      <option value="no">No</option>'+
'      <option value="si">Si</option>'+
'  </select>'+
'</p>'+
''+
'<!-- Campi per le piattaforme nascosti di default -->'+
'<p class="champ" id="plateformesSection" style="display: none;">'+
'  <label for="airbnb">Airbnb</label>'+
'  <input id="airbnb" name="airbnb" size="32" value="" class="" placeholder="Inserisci le informazioni di Airbnb" />'+
''+
'  <label for="getaround">Getaround</label>'+
'  <input id="getaround" name="getaround" size="32" value="" class="" placeholder="Inserisci le informazioni Getaround" />'+
''+
'  <label for="blablacar">BlaBlaCar</label>'+
'  <input id="blablacar" name="blablacar" size="32" value="" class="" placeholder="Inserisci le informazioni BlaBlaCar" />'+
''+
'  <label for="weelngo">Weelngo</label>'+
'  <input id="weelngo" name="weelngo" size="32" value="" class="" placeholder="Inserisci le informazioni Weelngo" />'+
'</p>'+
''+
'<script>'+
'  // Funzione per mostrare o nascondere i campi delle piattaforme'+
'  const economiaCollaborativaSelect = document.getElementById(\'economiaCollaborativaSelect\');'+
'  const plateformesSection = document.getElementById(\'plateformesSection\');'+
''+
'  economiaCollaborativaSelect.addEventListener(\'change\', function() {'+
'      if (economiaCollaborativaSelect.value === \'oui\') {'+
'          plateformesSection.style.display = \'block\'; // Visualizza i campi delle piattaforme'+
'      } else {'+
'          plateformesSection.style.display = \'none\'; // Nascondi i campi delle piattaforme'+
'          // Svuota i campi se è selezionato "no"'+
'          document.getElementById(\'airbnb\').value = \'\';'+
'          document.getElementById(\'getaround\').value = \'\';'+
'          document.getElementById(\'blablacar\').value = \'\';'+
'          document.getElementById(\'weelngo\').value = \'\';'+
'      }'+
'  });'+
'</script>'+
''+
'                  '+
'</fieldset>'+
'            '+
'                  '+
'            '+
'                  '+
'                '+
'            '+
'                '+
'            '+
'            '+
'            '+
'            '+
'            <p class="submit">'+
'              <input type="submit" value="inviare" name="validator" />'+
'            </p>'+
'            </form><br />'+
'            <a href="richiedenti.html">verso pagina richiedenti</a>'+
'            <a href="index.html">Indietro alla home page</a>'+
''+
'          </main>'+
'    </main>'+
'   '+
'    <body>'+
'</html>';