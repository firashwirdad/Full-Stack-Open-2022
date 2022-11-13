## Exercise 0.4: New note

```mermaid
sequenceDiagram
    participant Viewscreen
    participant Browser
    participant Server
    Viewscreen->>Browser: Form submit button event clicked
    Browser-->>Server: Request HTTP POST .../new_note
    Browser->>Server: Send user input data
    Server->>Server: Status code 302
    Server-->>Browser: Response URL Redirect
    Server->>Browser: Ask new request
    Browser->>Browser: Reload page
    Browser-->>Server: Request HTTP GET .../notes
    Server->>Server: Status code 200
    Note left of Browser: 3 more  HTTP requests after page reloaded
    Server->>Viewscreen: HTML code
    Browser-->>Server: Request HTTP GET .../main.css
    Server->>Viewscreen: main.css code
    Browser-->>Server: Request HTTP GET .../main.js
    Server->>Viewscreen: main.js code
    Browser-->>Server: Request HTTP GET .../data.json
    Server->>Viewscreen: data.json code
```

## Exercise 0.5: Single page app
