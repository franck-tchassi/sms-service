#Choisir une image de base
FROM node:18-alpine

#le dossier de travail
WORKDIR /app

#Copier les fichiers de dépendances
COPY package.json package-lock.json */

#install les dépendance
RUN npm install

#copy tous le code source
COPY ..

#Construire l'application next
RUN npm run build

#exposer le port 300
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]