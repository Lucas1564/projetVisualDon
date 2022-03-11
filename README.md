# projetVisualDon
Projet VisualDon - Olympics Games - Lucas Cuennet et Eloi Coquoz

[Source] : (https://www.kaggle.com/vaibhavchopra2/olympic-games-beijing-2022?select=Medalists.csv)

### Contexte : d'où viennent les données, qui les a créées et dans quel contexte ?
Les données viennent du site [Kaggle](www.kaggle.com) et ont été créées par [VaibhavChopra](https://www.kaggle.com/vaibhavchopra2), un étudiant de l'université de Chitkara, en Inde. Ces données s'inscrivent dans le contexte actuel sportif. En effet, les Jeux Olympiques de Beijing 2022 ont eu lieu du 4 au 20 février 2022. Les données ont été ajoutées par [VaibhavChopra](https://www.kaggle.com/vaibhavchopra2), le 22 février 2022, soit 2 jours après la fin des Jeux Olympiques.

[VaibhavChopra](https://www.kaggle.com/vaibhavchopra2) a utilisé le site officiel des Jeux Olympiques pour la création de ces données.

----

### Description : Comment sont structurées les données ? Parler du format, des attributs et du type de données ?
Les données présentes se référent aux Jeux Olympiques de Pékin de 2022. Il y a trois jeux de données :
* Les athlètes médaillés, avec leur nom, leur origine, leur sport, leur discipline, et les médailles
* Les médailles par pays, avec le nombre de médailles d'or, d'argent, de bronze et le nombre total par pays
* Le calendrier, avec toutes les disciplines, les dates de cérémonies, de jour de compétition et de remise des médailles

Les différentes données mentionnées ci-dessus sont au format .CSV. Nous pouvons donc retrouver différentes colonnes pour chaque jeu de données différent :


Pour le jeu de données des athlètes médaillés, nous retrouvons les colonnes suivantes, au format suivant :
* Name (Athlete Name) -> String
* NOC (Country) -> String
* SPORTS (Sport type) -> String
* EVENT (Event name) -> String
* MEDAL (Medal) -> String


Pour le jeu de données des médailles par pays, nous retrouvons les colonnes suivantes, au format suivant :
* NOC (Countries participating) -> String
* Gold (Gold medal won) -> Integer
* Silver (Silver medal won) -> Integer
* Bronze (Bronze medal won) -> Integer
* Total (Total medal won) -> Integer


Pour le jeu de données du calendrier, nous retrouvons les colonnes suivantes, au format suivant :
* Ceremonies (event type) -> String
* 2 (2 Feb 2022) -> String
* 3 (3 Feb 2022) -> String
* 4 (4 Feb 2022) -> String
* 5 (5 Feb 2022) -> String
* 6 (6 Feb 2022) -> String
* 7 (7 Feb 2022) -> String
* 8 (8 Feb 2022) -> String
* 9 (9 Feb 2022) -> String
* 10 (10 Feb 2022) -> String

----

### But : qu'est-ce que vous voulez découvrir ? Des tendances ? Vous voulez explorer ou expliquer ?
Les Jeux Olympiques de Pékin 2022 ont été énormément médiatisés. En pleine crise du COVID, ces jeux ont quand même pu avoir lieu en gardant un suivi sanitaire de qualité. C'est donc grâce à cette lueur d'espoir (premier grand événement durant le COVID) que nous avons choisi de vouloir parler de ces Jeux Olympiques de Pékin 2022. De plus, les horaires des compétitions n'étaient pas propices au bon visionnage de chaque compétition en Suisse. Notre but est donc de pouvoir informer certains habitants des pays n'ayant pas pu profiter des bons horaires pour le visionnage de cette compétition. 

Pour la fédération sportive Suisse, ces Jeux Olympiques ont été un franc succès avec beaucoup de médailles. Ils ont même réussi un record de médailles dans le domaine du ski alpin. Ce projet pourra donc informer toutes les personnes souhaitant se renseigner sur les Jeux Olympiques de Pékin 2022. Nous pourrons donc transformer ces données brutes en des données bien plus visuelles et dynamiques pour les visiteurs de notre projet.

Énormément d'installations ont été faites artificiellement. Ceci a été la source de beaucoup de critiques. La neige était 100% artificielle et cela a peut-être pu changer le dénoumement de quelques médailles. Notre projet pourrait évoluer et nous pourrions donc ajouter des données d'autres Jeux Olympiques qui nous permettraient de comparer les résultats et de, peut-être, trouver des avantages ou désavantages de la neige artificielle pour certaines nations.

----

### Références : Qui d'autre dans le web ou dans la recherche a utilisé ces données ? Dans quel but ?
D'après les [statistiques de Kaggle](https://www.kaggle.com/vaibhavchopra2/olympic-games-beijing-2022/activity), et au jour d'aujourd'hui (le 4 mars 2022), ce jeu de données a généré 1633 vues et 322 téléchargements. Cependant il est compliqué d'estimer qui s'est servi de ce jeu de données et pour en faire quoi. Les Jeux Olympiques ont été beaucoup médiatisés et chacun aurait pu créer son propre jeu de données en fonction de résultats des Jeux Olympiques.
Il est donc compliqué pour nous de savoir si les journaux, les divers sites sportifs ou autres ont utilisé ces [données de Kaggle](https://www.kaggle.com/vaibhavchopra2/olympic-games-beijing-2022/activity), d'autres jeux de données ou s'ils ont réalisé leurs propres recherches.


Cependant nous pouvons affirmer que des sites/journaux utilisent déjà la possibilité de visualiser ces données sous forme plus digeste pour les visiteurs. Nous avons comme exemple les sites ci-dessous :
* [RTS Sport](https://www.rts.ch/sport/jo/beijing-2022/widgets/resultats)
* [L'équipe](https://www.lequipe.fr/jeux-olympiques-hiver/page-tableau-des-medailles/par-pays)
* [Olympics](https://olympics.com/beijing-2022/olympic-games/fr/resultats/tous-les-sports/compte-de-medailles.htm)

Nous pouvons donc remarquer que même le site officiel [Olympics](https://olympics.com/beijing-2022/olympic-games/fr/resultats/tous-les-sports/compte-de-medailles.htm) utilise des données similaires à celle de [Kaggle](https://www.kaggle.com/vaibhavchopra2/olympic-games-beijing-2022/activity). Ils ont pour but de pouvoir informer les visiteurs du site au niveau du tableau de médailles sur lequel nous pouvons ajouter des filtres. Ces données sont très textuelles et non visuelles, contrairement à ce que nous souhaiterions faire dans le cadre de notre projet.
