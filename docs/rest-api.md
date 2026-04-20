# REST-API-Dokumentation

## Basis-URL

```text
http://localhost:8080/api/tasks
```

## 1. Alle Aufgaben abrufen

**GET** `/api/tasks`

### Antwort
- `200 OK`

### Beispielantwort
```json
[
  {
    "id": 1,
    "title": "Projektbericht schreiben",
    "description": "Einleitung und Architekturteil fertigstellen",
    "status": "OPEN",
    "createdAt": "2026-04-20T18:30:00"
  }
]
```

## 2. Einzelne Aufgabe abrufen

**GET** `/api/tasks/{id}`

### Antwort
- `200 OK`, falls vorhanden
- `404 Not Found`, falls keine Aufgabe mit der ID existiert

## 3. Neue Aufgabe anlegen

**POST** `/api/tasks`

### Request-Body
```json
{
  "title": "Dockerfile erstellen",
  "description": "Container für den Microservice bereitstellen",
  "status": "OPEN"
}
```

### Antwort
- `201 Created`
- `400 Bad Request` bei ungültigen Eingaben

## 4. Aufgabe aktualisieren

**PUT** `/api/tasks/{id}`

### Request-Body
```json
{
  "title": "Dockerfile überarbeiten",
  "description": "Multi-Stage-Build ergänzen",
  "status": "IN_PROGRESS"
}
```

### Antwort
- `200 OK`
- `404 Not Found`
- `400 Bad Request`

## 5. Aufgabe löschen

**DELETE** `/api/tasks/{id}`

### Antwort
- `204 No Content`
- `404 Not Found`
