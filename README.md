# Taskboard App

Eine einfache CRUD-Webapplikation zur Verwaltung von Aufgaben im Rahmen eines DevOps-/Microservice-Projekts.

## Überblick

Die Anwendung besteht aus:
- einem Frontend mit HTML, CSS und JavaScript
- einem REST-basierten Microservice mit Spring Boot
- einer persistenten Datenhaltung mit PostgreSQL
- einer Containerisierung mit Docker
- einer Startmöglichkeit der gesamten App über Docker Compose
- einer GitHub-Actions-Pipeline für Build, Test und Container-Build

## Fachliches Szenario

Die Anwendung verwaltet Aufgaben. Benutzer können Aufgaben erstellen, anzeigen, bearbeiten und löschen.

Jede Aufgabe besitzt:
- `id`
- `title`
- `description`
- `status`
- `createdAt`

## REST-Schnittstelle

- `GET /api/tasks` -> alle Aufgaben abrufen
- `GET /api/tasks/{id}` -> einzelne Aufgabe abrufen
- `POST /api/tasks` -> neue Aufgabe anlegen
- `PUT /api/tasks/{id}` -> Aufgabe aktualisieren
- `DELETE /api/tasks/{id}` -> Aufgabe löschen

## Technologie-Stack

### Backend
- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- PostgreSQL
- Maven

### Frontend
- HTML
- CSS
- JavaScript

### DevOps
- Docker
- Docker Compose
- GitHub Actions

## Projektstruktur

```text
backend/
frontend/
docs/
.github/workflows/
docker-compose.yml
```

## Dokumentation für die Abgabe

- `docs/architecture.md` -> Architektur, Klassenmodell, Komponentendiagramm, Microservice-Konzept
- `docs/rest-api.md` -> REST-Schnittstelle
- `docs/requirements-coverage.md` -> Zuordnung der Umsetzung zur Aufgabenstellung

## Starten des Backends lokal

Für die vollständige lokale Ausführung wird Docker Compose empfohlen, da dabei auch die Datenbank automatisch gestartet wird.

## Docker

Docker-Image im Backend-Ordner bauen:

```bash
docker build -f backend/Dockerfile -t taskboard-backend ./backend
```

Container starten:

```bash
docker run -p 8080:8080 taskboard-backend
```

## Gesamte App mit einem Befehl starten

Über die Datei `docker-compose.yml` auf oberster Ebene kann die komplette Anwendung gestartet werden:

```bash
docker compose up --build
```

Die Container werden dabei in logischer Reihenfolge gestartet:
1. PostgreSQL-Datenbank
2. Backend-Microservice
3. Frontend

Die Reihenfolge wird über Health Checks und `depends_on` abgesichert:
- das Backend wartet auf einen erfolgreichen Health Check der Datenbank
- das Frontend wartet auf einen erfolgreichen Health Check des Backends

Danach ist erreichbar:
- Backend unter `http://localhost:8080`
- Frontend unter `http://localhost:8081`

## CI/CD

Die GitHub-Actions-Pipeline führt bei Push und Pull Request auf `main` folgende Schritte aus:
- Checkout
- Java-Setup
- Build
- Tests
- Docker-Build

## Hinweise für die Abgabe

Dieses Projekt erfüllt die Anforderungen an:
- CRUD-Webapplikation
- persistente Speicherung
- REST-Schnittstelle
- Microservice-Konzept
- Dockerisierung
- Start der Gesamtanwendung per Docker Compose
- Health-Check-basierte Startreihenfolge
- CI/CD-Grundlage
- Versionsverwaltung mit GitHub
