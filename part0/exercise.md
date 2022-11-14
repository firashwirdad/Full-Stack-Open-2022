## Exercise 0.4: New note

```mermaid
sequenceDiagram
    participant Viewscreen
    participant Browser
    participant Server
    Viewscreen->>Browser: Form submit button event clicked
    Note over Browser: The browser starts making a request to the server
    Browser-->>Server: Request HTTP POST .../new_note
    Browser->>Server: Send user input data
    Server->>Server: Status code 302
    Server-->>Browser: Response URL Redirect
    Server->>Browser: Ask new request
    Note over Browser: The browser makes a new request
    Browser-->>Server: Request HTTP GET .../notes
    Server->>Server: Status code 200
    Server->>Browser: HTML code
    Browser->>Browser: Reload page
    Note over Browser: The browser made 3 new requests
    Browser-->>Server: Request HTTP GET .../main.css
    Browser-->>Server: Request HTTP GET .../main.js
    Browser-->>Server: Request HTTP GET .../data.json
    Server->>Server: Status code 200
    Server->>Browser: main.css, main.js, data.json files
    Browser-->>Viewscreen: Render the notes to display
```

## Exercise 0.5: Single page app

```mermaid
sequenceDiagram
    participant Viewscreen
    participant Browser
    participant Server
    Viewscreen->>Browser: User goes to the new URL address
    Browser-->>Server: Request HTTP POST .../spa
    Server->>Server: Status code 200
    Server->>Browser: HTML files
    Browser-->>Server: Request HTTP GET .../main.css
    Browser-->>Server: Request HTTP GET .../spa.js
    Browser-->>Server: Request HTTP GET .../data.json
    Server->>Server: Status code 200
    Server->>Browser: main.css, main.js, data.json files
    Browser-->>Viewscreen: Displaying new page
```

## Exercise 0.6: New note

```mermaid
sequenceDiagram
    participant Viewscreen
    participant Browser
    participant Server
    Viewscreen->>Browser: Submit button triggered
    Note over Browser: The browser starts executing code in 'spa.js' which<br> contains a few instructions to:<br> <br> 1. Fetch the form-element page<br> 2. Register an event handler to handle form submission<br> 3. Calls the method that prevents new GET requests to the server
    Browser-->>Server: Request HTTP POST .../new_note_spa
    Browser->>Server: Send new note as JSON string
    Browser->>Viewscreen: Rerenders the note list
    Server->>Server: Data parsed
    
