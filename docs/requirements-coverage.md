# Abdeckung der Aufgabenstellung

## 1. Szenario für eine Webapplikation
Erfüllt durch die Anwendung **TaskBoard** zur Verwaltung von Aufgaben.

## 2. CRUD-Funktionalität
Erfüllt durch:
- Create: `POST /api/tasks`
- Read: `GET /api/tasks`, `GET /api/tasks/{id}`
- Update: `PUT /api/tasks/{id}`
- Delete: `DELETE /api/tasks/{id}`

## 3. Webbasierte Benutzerschnittstelle
Erfüllt durch das Frontend im Ordner `frontend/` mit HTML, CSS und JavaScript.

## 4. Persistenter Speicher
Erfüllt durch die H2-Datenbank mit dateibasierter Speicherung.

## 5. Modellierung der Anwendung
Erfüllt durch die Architektur- und Entwurfsdokumentation in `docs/architecture.md` mit Klassenmodell und Komponentendiagramm.

## 6. Konzept für einen Microservice
Erfüllt durch den `task-service` als fachlich abgegrenzter Microservice innerhalb des Bounded Contexts Aufgabenverwaltung.

## 7. Technologie-Stack
Erfüllt und dokumentiert in `README.md` und `docs/architecture.md`.

## 8. Definition einer REST-Schnittstelle
Erfüllt und dokumentiert in `docs/rest-api.md`.

## 9. Umsetzung der REST-Schnittstelle
Erfüllt durch den Spring-Boot-Microservice im Ordner `backend/`.

## 10. Testen und Qualitätssicherung
Erfüllt durch:
- automatisierte Integrationstests
- Eingabevalidierung
- GitHub-Actions-Pipeline

## 11. Versionsverwaltung
Erfüllt durch das GitHub-Repository.

## 12. Docker / Ausführungsumgebung
Erfüllt durch das Dockerfile im Ordner `backend/`.

## 13. CI/CD-Pipeline
Erfüllt in Form einer CI-Pipeline mit Build, Test und Docker-Build über GitHub Actions. Eine produktive automatische Auslieferung ist als nächster Ausbauschritt vorgesehen.
