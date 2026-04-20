# Taskboard App

Eine einfache CRUD-Webapplikation zur Verwaltung von Aufgaben im Rahmen eines DevOps-/Microservice-Projekts.


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
- H2 Database
- Maven

### Frontend
- HTML
- CSS
- JavaScript

### DevOps
- Docker
- GitHub Actions

## Projektstruktur

```text
backend/
frontend/
docs/
.github/workflows/
```

## Dokumentation für die Abgabe

- `docs/architecture.md` -> Architektur, Klassenmodell, Komponentendiagramm, Microservice-Konzept
- `docs/rest-api.md` -> REST-Schnittstelle
- `docs/requirements-coverage.md` -> Zuordnung der Umsetzung zur Aufgabenstellung

## Starten des Backends

```bash
cd backend
mvn spring-boot:run
```

Backend läuft dann unter:
`http://localhost:8080`

## Frontend starten

Die Datei `frontend/index.html` kann direkt im Browser geöffnet werden.

## Docker

Docker-Image im Backend-Ordner bauen:

```bash
cd backend
docker build -t taskboard-backend .
```

Container starten:

```bash
docker run -p 8080:8080 taskboard-backend
```

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
- CI/CD-Grundlage
- Versionsverwaltung mit GitHub
