# Étape 1 : construction (builder)
FROM node:20-slim AS builder

# Définir le dossier de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY package*.json ./

# Installer les dépendances (sans télécharger les paquets inutiles)
RUN npm install

# Copier le reste du projet
COPY . .

# Construire le projet pour la production
RUN npm run build

# Étape 2 : serveur final (image ultra-légère)
FROM node:20-alpine AS runner

WORKDIR /app

# Copier uniquement les fichiers nécessaires pour exécuter le build
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Installer uniquement les dépendances de production
RUN npm install

# Exposer le port utilisé par Next.js
EXPOSE 3000

# Lancer l'application
CMD ["npm", "start"]
