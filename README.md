# Plan Comptable  
Une application web du plan comptable SYSCOHADA avec un backend Symfony et un frontend React.

## Présentation du projet  
Ce projet propose une application web interactive pour la gestion du plan comptable SYSCOHADA. Il s'appuie sur un backend avec Symfony et une interface utilisateur dynamique avec React pour une expérience fluide.

## Extraction des données  
Les données des comptes (numéros de comptes et libellés) utilisées dans ce projet ont été extraites grâce à un script Python. Ce script a permis de traduire des données brutes en HTML en un fichier JSON valide. Vous pouvez accéder au fichier HTML original ainsi qu'au fichier JSON via ce [lien Google Drive](https://drive.google.com/drive/folders/1v7eyWOvfvmBSD4yk0imFgxket9KYX6ZO?usp=sharing).

## Intégration en base de données  
Une fois les données JSON générées, elles ont été transférées et intégrées dans une base de données sqlite pour alimenter les fonctionnalités de l'application et disponible dans : 
```bash
backend/public/accounting_plan.db
```

## Fonctionnalités  
- Gestion des données du plan comptable SYSCOHADA
- Interface utilisateur intuitive propulsée par React
- Traitement des données et services API avec Symfony
- Extraction et conversion des données avec un script Python

## Bonus : Data Table maison  
Et parce que coder, c'est aussi se faire plaisir, je me suis lancé dans la création d'un **data table** entièrement fait maison, sans aucune dépendance, avec **React** et **TypeScript**. Oui, j'ai peut-être réinventé la roue, mais au moins elle tourne parfaitement (et sans bugs) ! 😎 Même si pour le responsive à ce niveau, il y a encore des progrès à faire... 😅

## En parlant de responsive...  
Le projet est open-source ! Si vous avez des idées pour améliorer le responsive (ou tout autre aspect), n'hésitez pas à participer ! Vous pouvez contribuer en créant une nouvelle branche pour vos modifications, et bien sûr, vos **pull requests** sont les bienvenues. Ensemble, faisons avancer ce projet ! 🚀
