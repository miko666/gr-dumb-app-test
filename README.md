prerekvizity :
git clone
npm i
npm run test #spustenie testov

- pokial sa nespustaju cez daky image runner (co sa asi nebudu), treba mat nainstalovane a nastavene Android studio, resp. Android SDK s cim nasledne suvisi nastavenie korektnych hodnot v capabilities v ./wdio.android.conf.ts -> activity.Splash_screnn (zamerny preklep?:)

geneza vyberu jazyku a frameworku :

- rozhodoval som sa medzi TypeScriptom + WebdriverIO frameworkom a medzi Pythonom + Robot frameworkom. Z mojich skusenosti by bol Robot asi rozumnejsie riesenie, specialne pre takuto "fin app" aj kvoli vacsej podpore kniznic a Python je predsa len "pruznejsi" jazyk. Typescript mi ale pride viac moderny, specialne pre webove aplikacie. (aj ked chvilami som to lutoval, ked som zistil ze tato appka je "specialna")

testing :

- bol to taky mix Eploratory , BDD (a masochizm) pristupu, napriek tomu ze uz robim skoro 4 roky v banke, tak uvery niesu ani z daleka moja agenda. a kedze niesom ani z ekonomickej skoly, tak mi tu po dlhom case chybala daka specka/storka/CR/ochotny developer. z toho samozrejme prameni aj kvalita tych testov - nevedel som napr. ci a ako zaokruhlovat isiel som s presnymi hodnotami na stotiny - co vyplulo chybu napr. pri vypocte EMI.
- niesu tam validacie, hranicne hodnoty, unhappy scenare, error handling, reset button a tiez som s tazkym srdcom odignoroval ten "crazy radioButton"
- hodnoty som preto generoval tiez nahodne ./tests/helpers/helper.ts
- vyslo mi z tade niekolko chyb - ak predpokladam ze som dokazal spravne vygooglit tie vzorce, tak napr. total interest sa nezhodoval s mojimi vysledkami vzdy o jednotky/stotiny, v total payment nebolo zapocitane processing fee, emi sa v appke zaokruhluje na stotiny, v history tabulke sa mi zasa nezdalo ze by malo byt balance, ale total payment (..aj ked teraz ked premyslam nad UX, tak to asi dava zmysel -> kazdopadne nesedi to tak ci tak)

- ale velmi pekna appka - skoro som zas zacal fajcit:)
