var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'    <head>'+
'    <title></title>'+
'     <meta charset="utf-8" :>'+
'    </head>'+
'    <link rel="stylesheet" href="style.css">'+
'    <body>'+
'        <h1>Buona fortuna</h1><br />'+
'        <p>Congratulazioni. Se sei arrivato fin qui, è perché hai il coraggio di aver dichiarato la morte del tuo caro.</p>'+
'        <p>Ci restano alcune informazioni da ottenere affinché il funerale/funerale si svolga nel migliore dei modi, senza disagi e confusione prima, durante o dopo.</p><br />'+
'        <fieldset class="">'+
'            <legend>Informazioni personali</legend>'+
'            <p class="champ">'+
'              <label for="cognome">Cognome</label>'+
'              <input id="cognome" name="cognome" type="text" required />'+
'          </p>'+
'      '+
'          <p class="champ">'+
'              <label for="genere">Nome</label>'+
'              <input id="nome" name="nome" type="text" required />'+
'          </p>'+
'          '+
'          <p class="champ">'+
'              <label for="genere">Genere</label>'+
'              <select id="genere" name="genere" required>'+
'                  <option value="" disabled selected>Scegliere...</option>'+
'                  <option value="u">Uomo</option>'+
'                  <option value="d">Donna</option>'+
'                  <option value="bi">Bisesuale</option>'+
'                  <option value="trans">Transsessuale</option>'+
'                  <option value="altro">Altro</option>'+
'              </select>'+
'          </p>'+
'          <p class="champ">'+
'            <label for="data_nascita">data di nascita</label>'+
'            <select id="giorno_nascita" name="dtGo"></select> /'+
'            <select id="mese_nascita" name="dtMese"></select> /'+
'            <select id="anno_nascita" name="dtAnno"></select>'+
'        </p>'+
'        '+
'                                            <script>'+
'            document.addEventListener(\'DOMContentLoaded\', function() {'+
'                // Riempire il selettore dei giorni per la data di nascita'+
'                const giorniNascita = document.getElementById(\'giorno_nascita\');'+
'                for (let i = 1; i <= 31; i++) {'+
'                    const option = document.createElement(\'option\');'+
'                    option.value = i;'+
'                    option.textContent = i;'+
'                    giorniNascita.appendChild(option);'+
'                }'+
'        '+
'                // Riempire il selettore dei mesi per la data di nascita'+
'                const meseNascita = document.getElementById(\'mese_nascita\');'+
'                const meseNome = ['+
'                    \'Gennaio\', \'Febbraio\', \'Mazro\', \'Aprile\', \'Maggio\', \'Giugno\','+
'                    \'Luglio\', \'Agosto\', \'Settembre\', \'Ottobre\', \'Novembre\', \'Dicembre\''+
'                ];'+
'                for (let i = 0; i < meseNome.length; i++) {'+
'                    const option = document.createElement(\'option\');'+
'                    option.value = i + 1;'+
'                    option.textContent = meseNome[i];'+
'                    meseNascita.appendChild(option);'+
'                }'+
'        '+
'                // Compila il selettore degli anni per la data di nascita'+
'                const anneeNaissance = document.getElementById(\'anno_nascita\');'+
'                const anneeCourante = new Date().getFullYear();'+
'                for (let i = anneeCourante; i >= 1900; i--) {'+
'                    const option = document.createElement(\'option\');'+
'                    option.value = i;'+
'                    option.textContent = i;'+
'                    anneeNaissance.appendChild(option);'+
'                }'+
'            });'+
'        </script>'+
'        <p class="champ">'+
'          <label for="relationSelect">legame con il defunto/la defunta. e</label>'+
'          <select id="relationSelect" name="relationSelect" class="">'+
'              <option value=""></option>'+
'              <option value="bambini">figlio/a</option>'+
'              <option value="congiunto">congiunto</option>'+
'              <option value="congiunta">congiunto</option>'+
'              <option value="marito">marito</option>'+
'              <option value="moglie">moglie</option>'+
'              <option value="compagno">compagno</option>'+
'			  <option value="compagna">compagna</option>'+
'              <option value="crush">crush</option>'+
'              <option value="amico">amico</option>'+
'              <option value="amica">amica</option>'+
'              <option value="collega">collèga</option>'+
'              <option value="medico">medico</option>'+
'              <option value="praticante">praticante.ne</option>'+
'              <option value="padre">padre</option>'+
'              <option value="madre">madre</option>'+
'              <option value="cugino">cugino</option>'+
'              <option value="cugina">cugina</option>'+
'              <option value="zia">zia</option>'+
'              <option value="zio">zio</option>'+
'          </select>'+
'      </p>'+
'      '+
'      <!-- Contenitore per campi aggiuntivi basati sulla relazione -->'+
'      <div id="additionalFields" style="display: none;">'+
'          <p class="champ">'+
'              <label for="additionalInfo">Informazioni supplementari:</label>'+
'              <input id="additionalInfo" name="additionalInfo" size="32" value="" class="" placeholder="Informazioni Inserisci ulteriori informazioni" />'+
'          </p>'+
'      </div>'+
'      '+
'      <script>'+
'          const relationSelect = document.getElementById(\'relationSelect\');'+
'          const additionalFields = document.getElementById(\'additionalFields\');'+
'      '+
'          relationSelect.addEventListener(\'change\', function() {'+
'              // Mostra campi aggiuntivi per alcuni collegamenti'+
'              if (relationSelect.value === \'ami\' || relationSelect.value === \'collegue\' || relationSelect.value === \'medecin\') {'+
'                  additionalFields.style.display = \'block\'; // Mostra i campi aggiuntivi'+
'              } else {'+
'                  additionalFields.style.display = \'none\'; // Nascondi i campi aggiuntivi'+
'                  document.getElementById(\'additionalInfo\').value = \'\'; // Svuota i campi se nascosto'+
'              }'+
'          });'+
'      </script>'+
'      '+
''+
'      <p class="champ">'+
'        <label for="residenza1">Residenza principale</label>'+
'        <input id="residenza1" name="residenza1" value="" class="" placeholder="Inserisci l\'indirizzo della residenza principale" />'+
'    </p>'+
'    '+
'    <!-- Contenitore per indirizzi aggiuntivi -->'+
'    <div id="residenzasContainer"></div>'+
'    '+
'    <!-- Bouton pour ajouter une autre adresse -->'+
'    <button type="button" id="addResidenzaButton">Aggiungi un\'altra residenza</button>'+
'    '+
'    <script>'+
'        // Initialisation du compteur de résidences'+
'        let residenceCount = 1;'+
'    '+
'        // Fonction pour ajouter un champ d\'adresse supplémentaire'+
'        function addResidenceField() {'+
'            residenceCount++;'+
'            '+
'            // Créer une nouvelle div pour contenir l\'input d\'une nouvelle adresse'+
'            const newResidenceDiv = document.createElement(\'div\');'+
'            newResidenceDiv.className = "champ";'+
'    '+
'            // Créer le label'+
'            const newLabel = document.createElement(\'label\');'+
'            newLabel.setAttribute(\'for\', \'residence\' + residenceCount);'+
'            newLabel.textContent = \'Résidence \' + residenceCount;'+
'    '+
'            // Créer l\'input'+
'            const newInput = document.createElement(\'input\');'+
'            newInput.setAttribute(\'id\', \'residence\' + residenceCount);'+
'            newInput.setAttribute(\'name\', \'residence\' + residenceCount);'+
'            newInput.setAttribute(\'value\', \'\');'+
'            newInput.setAttribute(\'placeholder\', "Entrez l\'adresse de la résidence " + residenceCount);'+
'            newInput.className = \'\';'+
'    '+
'            // Ajouter le label et l\'input à la div'+
'            newResidenceDiv.appendChild(newLabel);'+
'            newResidenceDiv.appendChild(newInput);'+
'    '+
'            // Ajouter la nouvelle div au conteneur'+
'            document.getElementById(\'residencesContainer\').appendChild(newResidenceDiv);'+
'        }'+
'    '+
'        // Ajouter un écouteur d\'événement sur le bouton "Ajouter une autre résidence"'+
'        document.getElementById(\'addResidenceButton\').addEventListener(\'click\', addResidenceField);'+
'    </script>'+
'    '+
'    '+
'    '+
'    '+
'              <p class="champ">'+
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
'            <p class="champ">'+
'              <label for="tel">telefono</label>'+
'              <input id="tel" name="tel" value="" class="" />'+
'              <label for="whatswpp">WhatsApp</label>'+
'              <select id="whatsapp" name="whatsapp" class="">'+
'                  <option value=""></option>'+
'                  <option value="no">No</option>'+
'                  <option value="si">Si</option>'+
'              </select>'+
'              <label for="wechat">Wechat</label>'+
'              <select id="wechat" name="wechat" class="">'+
'                  <option value=""></option>'+
'                  <option value="no">No</option>'+
'                  <option value="si">Si</option>'+
'              </select>'+
'              <label for="signal">Signal</label>'+
'              <select id="signal" name="signal" class="">'+
'                  <option value=""></option>'+
'                  <option value="no">No</option>'+
'                  <option value="si">Si</option>'+
'              </select>'+
'              <label for="rebtel">Rebtel</label>'+
'              <select id="rebtel" name="rebtel" class="">'+
'                  <option value=""></option>'+
'                  <option value="no">No</option>'+
'                  <option value="si">Si</option>'+
'              </select>'+
'              <label for="viber">Viber</label>'+
'              <select id="viber" name="viber" class="">'+
'                  <option value=""></option>'+
'                  <option value="no">No</option>'+
'                  <option value="si">Si</option>'+
'              </select>'+
'          </p>'+
'		              <p class="champ">'+
'              <label for="tel">telefono</label>'+
'              <input id="tel" name="tel" value="" class="" />'+
'              <label for="whatswpp">WhatsApp</label>'+
'              <select id="whatsapp" name="whatsapp" class="">'+
'                  <option value=""></option>'+
'                  <option value="no">No</option>'+
'                  <option value="si">Si</option>'+
'              </select>'+
'              <label for="wechat">Wechat</label>'+
'              <select id="wechat" name="wechat" class="">'+
'                  <option value=""></option>'+
'                  <option value="no">No</option>'+
'                  <option value="si">Si</option>'+
'              </select>'+
'              <label for="signal">Signal</label>'+
'              <select id="signal" name="signal" class="">'+
'                  <option value=""></option>'+
'                  <option value="no">No</option>'+
'                  <option value="si">Si</option>'+
'              </select>'+
'              <label for="rebtel">Rebtel</label>'+
'              <select id="rebtel" name="rebtel" class="">'+
'                  <option value=""></option>'+
'                  <option value="no">No</option>'+
'                  <option value="si">Si</option>'+
'              </select>'+
'              <label for="viber">Viber</label>'+
'              <select id="viber" name="viber" class="">'+
'                  <option value=""></option>'+
'                  <option value="no">No</option>'+
'                  <option value="si">Si</option>'+
'              </select>'+
'          </p>'+
'		              <p class="champ">'+
'              <label for="tel">telefono</label>'+
'              <input id="tel" name="tel" value="" class="" />'+
'              <label for="whatswpp">WhatsApp</label>'+
'              <select id="whatsapp" name="whatsapp" class="">'+
'                  <option value=""></option>'+
'                  <option value="no">No</option>'+
'                  <option value="si">Si</option>'+
'              </select>'+
'              <label for="wechat">Wechat</label>'+
'              <select id="wechat" name="wechat" class="">'+
'                  <option value=""></option>'+
'                  <option value="no">No</option>'+
'                  <option value="si">Si</option>'+
'              </select>'+
'              <label for="signal">Signal</label>'+
'              <select id="signal" name="signal" class="">'+
'                  <option value=""></option>'+
'                  <option value="no">No</option>'+
'                  <option value="si">Si</option>'+
'              </select>'+
'              <label for="rebtel">Rebtel</label>'+
'              <select id="rebtel" name="rebtel" class="">'+
'                  <option value=""></option>'+
'                  <option value="no">No</option>'+
'                  <option value="si">Si</option>'+
'              </select>'+
'              <label for="viber">Viber</label>'+
'              <select id="viber" name="viber" class="">'+
'                  <option value=""></option>'+
'                  <option value="no">No</option>'+
'                  <option value="si">Si</option>'+
'              </select>'+
'          </p>'+
'          '+
'        <p class="champ">'+
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
'        <p class="champ">'+
'          <label for="dtJr">facebook</label>'+
'          <select id="facebookSelect" name="dtJr" class="">'+
'              <option value=""></option>'+
'              <option value="no">No</option>'+
'              <option value="si">Si</option>'+
'          </select>'+
'          <input id="facebookInput" name="facebook" value="" class="" style="display: none;" placeholder="Entrez l\'URL Facebook" />'+
'        </p>'+
'        '+
'        <p class="champ">'+
'          <label for="dtJr">Instagram</label>'+
'          <select id="instagramSelect" name="dtJr" class="">'+
'              <option value=""></option>'+
'              <option value="no">No</option>'+
'              <option value="si">Si</option>'+
'          </select>'+
'          <input id="instagramInput" name="instagram" value="" class="" style="display: none;" placeholder="Entrez l\'URL Instagram" />'+
'        </p>'+
'        '+
'        <p class="champ">'+
'          <label for="dtJr">X</label>'+
'          <select id="xSelect" name="dtJr" class="">'+
'              <option value=""></option>'+
'              <option value="no">No</option>'+
'              <option value="si">Si</option>'+
'          </select>'+
'          <input id="xInput" name="x" value="" class="" style="display: none;" placeholder="Entrez l\'URL X" />'+
'        </p>'+
'        '+
'        <p class="champ">'+
'          <label for="dtJr">Snapchat</label>'+
'          <select id="snapchatSelect" name="dtJr" class="">'+
'              <option value=""></option>'+
'              <option value="no">No</option>'+
'              <option value="si">Si</option>'+
'          </select>'+
'          <input id="snapchatInput" name="snapchat" value="" class="" style="display: none;" placeholder="Entrez l\'URL Snapchat" />'+
'        </p>'+
'        '+
'        <p class="champ">'+
'          <label for="dtJr">tik-tok</label>'+
'          <select id="tiktokSelect" name="dtJr" class="">'+
'              <option value=""></option>'+
'              <option value="no">No</option>'+
'              <option value="si">Si</option>'+
'          </select>'+
'          <input id="tiktokInput" name="tiktok" value="" class="" style="display: none;" placeholder="Entrez l\'URL TikTok" />'+
'        </p>'+
'        <p class="champ">'+
'          <label for="daySelect">data dell\'ultimo incontro con il defunto/la defunta. e</label>'+
'          <select id="daySelect" name="daySelect" class="">'+
'              <option value=""></option>'+
'              <!-- Génération dynamique des jours (1 à 31) via JavaScript -->'+
'          </select> /'+
'      '+
'          <select id="monthSelect" name="monthSelect" class="">'+
'              <option value=""></option>'+
'              <option value="1">Gennaio</option>'+
'              <option value="2">Febbraio</option>'+
'              <option value="3">Mazro</option>'+
'              <option value="4">Aprile</option>'+
'              <option value="5">Mai</option>'+
'              <option value="6">Giugno</option>'+
'              <option value="7">Luglio</option>'+
'              <option value="8">Agosto</option>'+
'              <option value="9">Settembre</option>'+
'              <option value="10">Ottobre</option>'+
'              <option value="11">Novembre</option>'+
'              <option value="12">Dicembre</option>'+
'          </select> /'+
'      '+
'          <select id="yearSelect" name="yearSelect" class="">'+
'              <option value=""></option>'+
'              <!-- Génération dynamique des années via JavaScript -->'+
'          </select>'+
'      </p>'+
'      '+
'      <script>'+
'          // Remplir les jours'+
'          const daySelect = document.getElementById(\'daySelect\');'+
'          for (let day = 1; day <= 31; day++) {'+
'              let option = document.createElement(\'option\');'+
'              option.value = day;'+
'              option.textContent = day;'+
'              daySelect.appendChild(option);'+
'          }'+
'      '+
'          // Remplir les années'+
'          const yearSelect = document.getElementById(\'yearSelect\');'+
'          const currentYear = new Date().getFullYear();'+
'          for (let year = currentYear; year >= 1900; year--) {'+
'              let option = document.createElement(\'option\');'+
'              option.value = year;'+
'              option.textContent = year;'+
'              yearSelect.appendChild(option);'+
'          }'+
'      '+
'          // Adapter les jours en fonction du mois et de l\'année'+
'          const monthSelect = document.getElementById(\'monthSelect\');'+
'          monthSelect.addEventListener(\'change\', updateDays);'+
'          yearSelect.addEventListener(\'change\', updateDays);'+
'      '+
'          function updateDays() {'+
'              const month = parseInt(monthSelect.value);'+
'              const year = parseInt(yearSelect.value);'+
'              let daysInMonth = 31;'+
'      '+
'              if (month === 2) { // Febbraio'+
'                  daysInMonth = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;'+
'              } else if ([4, 6, 9, 11].includes(month)) { // Mois avec 30 jours'+
'                  daysInMonth = 30;'+
'              }'+
'      '+
'              // Mettre à jour les jours en fonction du mois'+
'              daySelect.innerHTML = \'\'; // Vider l\'élément <select>'+
'              for (let day = 1; day <= daysInMonth; day++) {'+
'                  let option = document.createElement(\'option\');'+
'                  option.value = day;'+
'                  option.textContent = day;'+
'                  daySelect.appendChild(option);'+
'              }'+
'          }'+
'      </script>'+
'      '+
'              <p class="champ">'+
'                <label for="luogoultimoincontro">luogo ultimo incontro con il/la defunto. e</label>'+
'                <input id="luogoultimoincontro" name="luogoultimoincontro" value="" class="" />'+
'              </p>'+
'              <p class="champ">'+
'                <label for="dtJr">data dell\'ultimo contatto con il defunto/la defunta. e</label>'+
'            '+
'                <select id="dtJr" name="dtJr" class=""></select> /'+
'                <select id="dtMese" name="dtMese" class=""></select> /'+
'                <select id="dtAn" name="dtAn" class=""></select>'+
'            </p>'+
'            '+
'            <script>'+
'                // Remplir les jours'+
'                function populateDays(month, year) {'+
'                    const daySelect = document.getElementById(\'dtJr\');'+
'                    daySelect.innerHTML = ""; // Clear previous options'+
'                    let daysInMonth = new Date(year, month, 0).getDate();'+
'                    for (let i = 1; i <= daysInMonth; i++) {'+
'                        let option = document.createElement(\'option\');'+
'                        option.value = i;'+
'                        option.text = i;'+
'                        daySelect.appendChild(option);'+
'                    }'+
'                }'+
'            '+
'                // Remplir les mois'+
'                function populateMonths() {'+
'                    const monthSelect = document.getElementById(\'dtMois\');'+
'                    const months = [\'Gennaio\', \'Febbraio\', \'Mazro\', \'Aprile\', \'Mai\', \'Giugno\', \'Luglio\', \'Agosto\', \'Settembre\', \'Ottobre\', \'Novembre\', \'Dicembre\'];'+
'                    months.forEach((month, index) => {'+
'                        let option = document.createElement(\'option\');'+
'                        option.value = index + 1;'+
'                        option.text = month;'+
'                        monthSelect.appendChild(option);'+
'                    });'+
'                }'+
'            '+
'                // Remplir les années'+
'                function populateYears() {'+
'                    const yearSelect = document.getElementById(\'dtAn\');'+
'                    const currentYear = new Date().getFullYear();'+
'                    const startYear = 1900; // Adjust as needed'+
'                    for (let i = currentYear; i >= startYear; i--) {'+
'                        let option = document.createElement(\'option\');'+
'                        option.value = i;'+
'                        option.text = i;'+
'                        yearSelect.appendChild(option);'+
'                    }'+
'                }'+
'            '+
'                // Update days when month or year changes'+
'                document.getElementById(\'dtMese\').addEventListener(\'change\', () => {'+
'                    const month = document.getElementById(\'dtMese\').value;'+
'                    const year = document.getElementById(\'dtAn\').value || new Date().getFullYear();'+
'                    if (month) populateDays(month, year);'+
'                });'+
'            '+
'                document.getElementById(\'dtAn\').addEventListener(\'change\', () => {'+
'                    const year = document.getElementById(\'dtAn\').value;'+
'                    const month = document.getElementById(\'dtMese\').value || 1;'+
'                    populateDays(month, year);'+
'                });'+
'            '+
'                // Initial setup'+
'                populateMonths();'+
'                populateYears();'+
'            </script>'+
'            '+
'            <p class="champ">'+
'              <label for="canale">canale</label>'+
'              <select id="canale" name="canale" class=""></select>'+
'          </p>'+
'          '+
'          <script>'+
'              // Tableau des canaux'+
'              const canaux = ['+
'                  { value: "", text: "" },'+
'                  { value: "courrier", text: "Courrier" },'+
'                  { value: "sms", text: "SMS" },'+
'                  { value: "tel", text: "telefono" },'+
'                  { value: "whatsapp", text: "WhatsApp" },'+
'                  { value: "signal", text: "Signal" },'+
'                  { value: "rebtel", text: "Rebtel" },'+
'                  { value: "WeChat", text: "WeChat" },'+
'                  { value: "blog", text: "Blog" },'+
'                  { value: "tiktok", text: "TikTok" },'+
'                  { value: "viber", text: "Viber" },'+
'                  { value: "x", text: "X" },'+
'                  { value: "instagram", text: "Instagram" },'+
'                  { value: "youtube", text: "YouTube" }'+
'              ];'+
'          '+
'              // Remplir le sélecteur avec les canaux'+
'              const canalSelect = document.getElementById(\'canal\');'+
'              canaux.forEach(canal => {'+
'                  let option = document.createElement(\'option\');'+
'                  option.value = canal.value;'+
'                  option.text = canal.text;'+
'                  canalSelect.appendChild(option);'+
'              });'+
'          </script>'+
'          '+
'          <p class="champ">'+
'            <label for="ceremonie">tipo di cerimonia desiderato</label>'+
'            <select id="ceremonie" name="ceremonie" class=""></select>'+
'        '+
'            <label for="luogoCeremonia">luogo desiderato</label>'+
'            <input id="luogoCeremonia" name="luogoCeremonia" value="" class="" />'+
'        </p>'+
'        '+
'        <p class="champ">'+
'            <label for="funerale">tipo di funerale desiderato</label>'+
'            <select id="funerale" name="funerale" class=""></select>'+
'        '+
'            <label for="luocoFunerale">luogo desiderato</label>'+
'            <input id="luocoFunerale" name="luocoFunerale" value="" class="" />'+
'        </p>'+
'        '+
'        <script>'+
'            // Tableau des types de cérémonies'+
'            const ceremonies = ['+
'                { value: "", text: "" },'+
'                { value: "chiesa", text: "chiesa" },'+
'                { value: "municipio", text: "municipio" }'+
'            ];'+
'        '+
'            // Tableau des types d\'obsèques'+
'            const obseques = ['+
'                { value: "", text: "" },'+
'                { value: "funerale", text: "funerale" },'+
'                { value: "cremzione", text: "cremzione" }'+
'            ];'+
'        '+
'            // Remplir le sélecteur de cérémonies'+
'            const ceremonieSelect = document.getElementById(\'ceremonia\');'+
'            ceremonies.forEach(ceremonie => {'+
'                let option = document.createElement(\'option\');'+
'                option.value = ceremonie.value;'+
'                option.text = ceremonie.text;'+
'                ceremonieSelect.appendChild(option);'+
'            });'+
'        '+
'            // Remplir le sélecteur d\'obsèques'+
'            const obsequesSelect = document.getElementById(\'funerale\');'+
'            obseques.forEach(obseque => {'+
'                let option = document.createElement(\'option\');'+
'                option.value = obseque.value;'+
'                option.text = obseque.text;'+
'                obsequesSelect.appendChild(option);'+
'            });'+
'        </script>'+
'        <br />'+
'                <p class="champ">Persone non autorizzate a venire/partecipare al funerale</p><br /><br />'+
'                    <label for="cognome">Cognome</label>'+
'                    <input id="cognome" name="cognome" value="" class="" /><br /><br />'+
'                    <label for="nome">Nome</label>'+
'                    <input id="nome" name="nome" value="" class="" /><br /><br />'+
'                    <label for="tel">telefono</label>'+
'                    <input id="tel" name="tel" value="" class="" />'+
'                    '+
'                <label for="whatsapp">WhatsApp</label>'+
'                <select name="dtJr" class="">'+
'                  <option value=""></option>'+
'                                <option value="no" >No</option>'+
'                                <option value="si" >Si</option>'+
'                                '+
'                                </select>'+
'                                <label for="wechat">Wechat</label>'+
'                                <select name="dtJr" class="">'+
'                                  <option value=""></option>'+
'                                                <option value="no" >No</option>'+
'                                                <option value="si" >Si</option>'+
'                                                '+
'                                                </select>'+
'                                <label for="signal">Signal</label>'+
'                                <select name="dtJr" class="">'+
'                                  <option value=""></option>'+
'                                                <option value="no" >No</option>'+
'                                                <option value="si" >Si</option>'+
'                                                '+
'                                                </select>'+
'                                                <label for="rebtel">Rebtel</label>'+
'                                                <select name="dtJr" class="">'+
'                                                  <option value=""></option>'+
'                                                                <option value="no" >No</option>'+
'                                                                <option value="si" >Si</option>'+
'                                                                '+
'                                                                </select>'+
'                                                                <label for="viber">Viber</label>'+
'                                                                <select name="dtJr" class="">'+
'                                                                  <option value=""></option>'+
'                                                                                <option value="no" >No</option>'+
'                                                                                <option value="si" >Si</option>'+
'                                                                                '+
'                                                                                </select><br /><br />'+
'                    <label for="residenza">indirizzo di domicilio</label>'+
'                    <input id="residenza" name="residenza" value="" class="" /><br /><br />'+
'                    <label for="email">email</label>'+
'                    <input id="email" name="email" value="" class="" /><br /><br />'+
'                  </p>'+
'                  <p class="champ">'+
'                    <label for="dtJr">facebook</label>'+
'                    <select id="facebookSelect" name="dtJr" class="">'+
'                        <option value=""></option>'+
'                        <option value="no">No</option>'+
'                        <option value="si">Si</option>'+
'                    </select>'+
'                    <input id="facebookInput" name="facebook" value="" class="" style="display: none;" placeholder="Entrez l\'URL Facebook" />'+
'                  </p>'+
'                  '+
'                  <p class="champ">'+
'                    <label for="dtJr">Instagram</label>'+
'                    <select id="instagramSelect" name="dtJr" class="">'+
'                        <option value=""></option>'+
'                        <option value="no">No</option>'+
'                        <option value="si">Si</option>'+
'                    </select>'+
'                    <input id="instagramInput" name="instagram" value="" class="" style="display: none;" placeholder="Entrez l\'URL Instagram" />'+
'                  </p>'+
'                  '+
'                  <p class="champ">'+
'                    <label for="dtJr">X</label>'+
'                    <select id="xSelect" name="dtJr" class="">'+
'                        <option value=""></option>'+
'                        <option value="no">No</option>'+
'                        <option value="si">Si</option>'+
'                    </select>'+
'                    <input id="xInput" name="x" value="" class="" style="display: none;" placeholder="Entrez l\'URL X" />'+
'                  </p>'+
'                  '+
'                  <p class="champ">'+
'                    <label for="dtJr">Snapchat</label>'+
'                    <select id="snapchatSelect" name="dtJr" class="">'+
'                        <option value=""></option>'+
'                        <option value="no">No</option>'+
'                        <option value="si">Si</option>'+
'                    </select>'+
'                    <input id="snapchatInput" name="snapchat" value="" class="" style="display: none;" placeholder="Entrez l\'URL Snapchat" />'+
'                  </p>'+
'                  '+
'                  <p class="champ">'+
'                    <label for="dtJr">tik-tok</label>'+
'                    <select id="tiktokSelect" name="dtJr" class="">'+
'                        <option value=""></option>'+
'                        <option value="no">No</option>'+
'                        <option value="si">Si</option>'+
'                    </select>'+
'                    <input id="tiktokInput" name="tiktok" value="" class="" style="display: none;" placeholder="Entrez l\'URL TikTok" />'+
'                  </p><br />'+
'                  <p class="champ">Persone invitate al funerale<br /><br />'+
'                    <label for="cognome">Cognome</label>'+
'                    <input id="cognome" name="prenom" value="" class="" /><br /><br />'+
'                    <label for="nome">Nome</label>'+
'                    <input id="nome" name="nome" value="" class="" /><br /><br />'+
'                    <label for="tel">telefono</label>'+
'                    <input id="tel" name="tel" value="" class="" />'+
'                    '+
'                <label for="whatsapp">WhatsApp</label>'+
'                <select name="dtJr" class="">'+
'                  <option value=""></option>'+
'                                <option value="no" >No</option>'+
'                                <option value="si" >Si</option>'+
'                                '+
'                                </select>'+
'                                <label for="wechat">Wechat</label>'+
'                                <select name="dtJr" class="">'+
'                                  <option value=""></option>'+
'                                                <option value="no" >No</option>'+
'                                                <option value="si" >Si</option>'+
'                                                '+
'                                                </select>'+
'                                <label for="signal">Signal</label>'+
'                                <select name="dtJr" class="">'+
'                                  <option value=""></option>'+
'                                                <option value="no" >No</option>'+
'                                                <option value="si" >Si</option>'+
'                                                '+
'                                                </select>'+
'                                                <label for="rebtel">Rebtel</label>'+
'                                                <select name="dtJr" class="">'+
'                                                  <option value=""></option>'+
'                                                                <option value="no" >No</option>'+
'                                                                <option value="si" >Si</option>'+
'                                                                '+
'                                                                </select>'+
'                                                                <label for="viber">Viber</label>'+
'                                                                <select name="dtJr" class="">'+
'                                                                  <option value=""></option>'+
'                                                                                <option value="no" >No</option>'+
'                                                                                <option value="si" >Si</option>'+
'                                                                                '+
'                                                                                </select><br /><br />'+
'                    <label for="residenza">indirizzo di domicilio</label>'+
'                    <input id="residenza" name="residenza" value="" class="" /><br /><br />'+
'                    <label for="email">email</label>'+
'                    <input id="email" name="email" value="" class="" /><br /><br />'+
'                  </p>'+
'                  <p class="champ">'+
'                    <label for="dtJr">facebook</label>'+
'                    <select id="facebookSelect" name="dtJr" class="">'+
'                        <option value=""></option>'+
'                        <option value="no">No</option>'+
'                        <option value="si">Si</option>'+
'                    </select>'+
'                    <input id="facebookInput" name="facebook" value="" class="" style="display: none;" placeholder="Entrez l\'URL Facebook" />'+
'                  </p>'+
'                  '+
'                  <p class="champ">'+
'                    <label for="dtJr">Instagram</label>'+
'                    <select id="instagramSelect" name="dtJr" class="">'+
'                        <option value=""></option>'+
'                        <option value="no">No</option>'+
'                        <option value="si">Si</option>'+
'                    </select>'+
'                    <input id="instagramInput" name="instagram" value="" class="" style="display: none;" placeholder="Entrez l\'URL Instagram" />'+
'                  </p>'+
'                  '+
'                  <p class="champ">'+
'                    <label for="dtJr">X</label>'+
'                    <select id="xSelect" name="dtJr" class="">'+
'                        <option value=""></option>'+
'                        <option value="no">No</option>'+
'                        <option value="si">Si</option>'+
'                    </select>'+
'                    <input id="xInput" name="x" value="" class="" style="display: none;" placeholder="Entrez l\'URL X" />'+
'                  </p>'+
'                  '+
'                  <p class="champ">'+
'                    <label for="dtJr">Snapchat</label>'+
'                    <select id="snapchatSelect" name="dtJr" class="">'+
'                        <option value=""></option>'+
'                        <option value="no">No</option>'+
'                        <option value="si">Si</option>'+
'                    </select>'+
'                    <input id="snapchatInput" name="snapchat" value="" class="" style="display: none;" placeholder="Entrez l\'URL Snapchat" />'+
'                  </p>'+
'                  '+
'                  <p class="champ">'+
'                    <label for="dtJr">tik-tok</label>'+
'                    <select id="tiktokSelect" name="dtJr" class="">'+
'                        <option value=""></option>'+
'                        <option value="no">No</option>'+
'                        <option value="si">Si</option>'+
'                    </select>'+
'                    <input id="tiktokInput" name="tiktok" value="" class="" style="display: none;" placeholder="Entrez l\'URL TikTok" />'+
'                  </p><br />'+
'                  <p class="champ">'+
'                    <label for="Info1">messaggio da leggere durante la cerimonia funebre</label>'+
'                    <input id="Info1" name="Info1" size="32" value="" class="" />'+
'                </p>'+
'                '+
'                <!-- Conteneur pour les messages supplémentaires -->'+
'                <div id="messagesContainer"></div>'+
'                '+
'                <!-- Bouton pour ajouter un autre message -->'+
'                <button type="button" id="addMessageButton">Aggiungi un altro messaggio</button>'+
'                '+
'                <script>'+
'                    // Initialisation du compteur de messages'+
'                    let messageCount = 1;'+
'                '+
'                    // Fonction pour ajouter un champ de message supplémentaire'+
'                    function addMessageField() {'+
'                        messageCount++;'+
'                        '+
'                        // Créer une nouvelle div pour contenir le label et l\'input'+
'                        const newMessageDiv = document.createElement(\'div\');'+
'                        newMessageDiv.className = "champ";'+
'                '+
'                        // Créer le label'+
'                        const newLabel = document.createElement(\'label\');'+
'                        newLabel.setAttribute(\'for\', \'Info\' + messageCount);'+
'                        newLabel.textContent = \'Message \' + messageCount + \' à lire lors de la cérémonie d\\\'obsèques\';'+
'                '+
'                        // Créer l\'input'+
'                        const newInput = document.createElement(\'input\');'+
'                        newInput.setAttribute(\'id\', \'Info\' + messageCount);'+
'                        newInput.setAttribute(\'name\', \'Info\' + messageCount);'+
'                        newInput.setAttribute(\'size\', \'32\');'+
'                        newInput.setAttribute(\'value\', \'\');'+
'                        newInput.className = \'\';'+
'                '+
'                        // Ajouter le label et l\'input à la div'+
'                        newMessageDiv.appendChild(newLabel);'+
'                        newMessageDiv.appendChild(newInput);'+
'                '+
'                        // Ajouter la nouvelle div au conteneur'+
'                        document.getElementById(\'messagesContainer\').appendChild(newMessageDiv);'+
'                    }'+
'                '+
'                    // Ajouter un écouteur d\'événement sur le bouton "Ajouter un autre message"'+
'                    document.getElementById(\'addMessageButton\').addEventListener(\'click\', addMessageField);'+
'                </script>'+
'                '+
'                                 '+
'                                      '+
'              '+
''+
''+
''+
'        </fieldset>'+
''+
'        <p class="submit">'+
'            <input type="submit" value="inviare" name="validator" />'+
'          </p>'+
''+
''+
''+
''+
''+
''+
'<a href="modulo_defunti.html">ritorno modulo defunti</a>'+
'<a href="index.html">ritorno alla home page</a>'+
'    <main>'+
''+
'    </main>'+
'   '+
'    <body>'+
'</html>';