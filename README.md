# DB Diagrams

## Current DB Diagram

```mermaid
    erDiagram
        GAMES {
            int GamePIN PK
            string gameStatus
            json questions
            jsonb players
        }
```

## Goal MVP DB Diagram

```mermaid
    erDiagram
        GAMES {
            int ID PK
            string creator
            date creationDate
            string status
        }
        QUESTIONS {
            int ID PK
            int GameID FK
            string QuestionsText
            string CorrectAnswer
        }
        ANSWERS {
            int ID PK
            int QuestionID FK
            string content
        }
        PLAYERS {
            int ID PK
            int GameID FK
            int Score
        }

        GAMES ||--o{ QUESTIONS : contains
        QUESTIONS ||--o{ ANSWERS : has
        GAMES ||--o{ PLAYERS : participated_by
```
