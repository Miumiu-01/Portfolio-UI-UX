# Étape 1 : build de l'app Node
FROM node:20-alpine

# Dossier de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port du backend
EXPOSE 5000

# Lancer le serveur
CMD ["npm", "start"]
