export type Question = {
  Q: string
  A: string
}

const questions = [
  { Q: "What’s the difference between var, let, and const?", A: "var is function-scoped and can be redeclared; its declarations are hoisted and initialized to undefined. let is block-scoped, cannot be redeclared in the same scope, and is hoisted but not initialized (temporal dead zone). const is also block-scoped and cannot be reassigned (it must be initialized at declaration); note that const prevents reassignment of the binding, not mutation of an object referenced by the binding." },

  { Q: "What is hoisting?", A: "Hoisting is JavaScript's behavior of moving declarations (not initializations) to the top of their scope before execution. Function declarations are hoisted and initialized, var declarations are hoisted and initialized to undefined, while let/const are hoisted but remain uninitialized until their declaration is evaluated (temporal dead zone)." },

  { Q: "== vs ===?", A: "== compares values using type coercion when necessary (e.g., '5' == 5 is true), which can produce surprising results. === performs strict equality: it returns true only when both the type and the value are identical (e.g., '5' === 5 is false). Prefer === in most code for predictability." },

  { Q: "What is a closure?", A: "A closure is a function that retains access to variables from its outer (enclosing) lexical scope even after the outer function has finished execution. Closures are commonly used for data privacy (private variables), factory functions, and creating functions with preserved state." },

  { Q: "What is the event loop?", A: "The event loop is the mechanism that coordinates the call stack, callback (task) queue, microtask queue (Promises/queueMicrotask), and browser/Node APIs so asynchronous callbacks run when the stack is empty. It ensures non-blocking concurrency in single-threaded JavaScript by scheduling callback execution in the correct order." },

  { Q: "Sync vs async?", A: "Synchronous code runs sequentially and blocks the thread until it completes. Asynchronous code initiates operations that may complete later (e.g., I/O, timers) and uses callbacks, Promises, or async/await so the main thread can continue running while waiting for results." },

  { Q: "What is a Promise?", A: "A Promise is an object representing the eventual completion (fulfillment) or failure (rejection) of an asynchronous operation and its resulting value. Promises provide then/catch/finally to compose async flows and help avoid callback hell; they also interact with the microtask queue for ordering." },

  { Q: "Why use async/await?", A: "async/await is syntactic sugar over Promises that lets you write asynchronous code in a linear, readable style using try/catch for error handling. An async function returns a Promise; await pauses execution inside the async function until the awaited Promise settles." },

  { Q: "What is prototype inheritance?", A: "Prototype-based inheritance means objects inherit properties and methods from another object (their prototype). When a property is accessed, JavaScript looks up the prototype chain until it finds the property or reaches null; this differs from classical class-based inheritance but ES6 class syntax compiles to prototype-based behavior." },

  { Q: "What does 'this' refer to?", A: "'this' is determined by how a function is called: in a method call it's the receiver object; in a plain function call it's undefined in strict mode (global object in non-strict); in a constructor call (new) it's the new instance; arrow functions capture 'this' lexically from their enclosing scope." },

  { Q: "What is destructuring?", A: "Destructuring assignment extracts values from arrays or properties from objects into distinct variables using concise syntax. You can provide defaults, rename variables, and use nested patterns to pick only the parts you need." },

  { Q: "Spread vs rest operators?", A: "The same ... syntax works as spread (expanding elements, e.g., [...arr], {...obj}) and rest (collecting remaining elements/arguments, e.g., function(...args) or const [first, ...rest] = arr). Spread expands an iterable or object into elements/properties; rest bundles remaining items into an array/object." },

  { Q: "What is a pure function?", A: "A pure function returns the same output for the same inputs and has no observable side effects (doesn't modify external state, I/O, or mutate inputs). Pure functions are easier to test, reason about, and cache (memoize)." },

  { Q: "map vs filter vs reduce?", A: "map transforms each element and returns a new array of the same length. filter selects elements that match a predicate and returns a new array possibly shorter. reduce iterates and accumulates values into a single result (sum, object, transformed structure), giving maximum flexibility for folding data." },

  { Q: "How do you handle async errors?", A: "With Promises use .catch() to handle rejections; with async/await wrap await calls in try/catch blocks. For top-level Promise chains, attach a catch, and in frameworks (e.g., Express) pass errors to centralized error handlers to avoid uncaught rejections." },

  { Q: "Debounce vs throttle?", A: "Debounce delays a function call until a certain amount of time has passed since the last event — useful for search input. Throttle ensures a function runs at most once per defined interval — useful for scroll or resize handlers to limit frequency." },

  { Q: "null vs undefined?", A: "undefined means a variable has been declared but not assigned a value (or a missing property), typically indicating absence by default. null is an explicit assignment to indicate 'no value' and is often used intentionally in APIs and data structures." },

  { Q: "What is immutability?", A: "Immutability means not modifying existing data structures in place but returning new versions when state changes. It reduces side effects, simplifies reasoning about state changes, avoids shared-mutation bugs, and helps with features like time-travel debugging." },

  { Q: "Event bubbling vs capturing?", A: "Event capturing traverses from the document root down to the target (capture phase), while bubbling goes from the target up to the root (bubble phase). By default, most listeners listen during the bubbling phase; you can register listeners for capturing when needed." },

  { Q: "ES Modules vs CommonJS?", A: "ES Modules (ESM) use static import/export syntax, enable tree-shaking, and are the modern standard; CommonJS uses require/module.exports and is dynamic. ESM has different loading semantics and is recommended for modern projects, though Node supports both with certain interop caveats." },

  { Q: "Why use TypeScript?", A: "TypeScript adds static typing to JavaScript, enabling earlier error detection, improved IDE autocompletion/refactoring, and clearer API contracts. It helps maintain large codebases, documents intent via types, and reduces certain classes of runtime bugs." },

  { Q: "type vs interface?", A: "Both declare shapes: interface is intended for object shapes and can be extended/merged across declarations, while type is more general and can define unions, intersections, mapped types, and aliases. Use interface when modeling object contracts; use type for more advanced type compositions." },

  { Q: "What are generics?", A: "Generics are type parameters that let you write reusable, type-safe components or functions that work with multiple types (e.g., function identity<T>(arg: T): T). They provide compile-time guarantees while keeping code flexible." },

  { Q: "Union vs intersection types?", A: "A union (A | B) means a value can be either type A or B. An intersection (A & B) combines types such that a value must satisfy both A and B. Use unions for alternatives and intersections to compose multiple requirements." },

  { Q: "What is type narrowing?", A: "Type narrowing refines a broad or union type into a more specific type using runtime checks (typeof, instanceof, in, user-defined type guards), enabling the compiler to allow operations that are safe on the narrowed type." },

  { Q: "unknown vs any?", A: "any disables type checking and allows any operation, which removes safety. unknown is safer — you must perform type checks before using it, forcing explicit handling of uncertain types and preserving type safety." },

  { Q: "How does TS compile?", A: "TypeScript's compiler (tsc) strips type annotations and features not present in target JavaScript versions, emitting plain JS according to the configured target and module system; it can also produce declaration (.d.ts) files for library consumers." },

  { Q: "What are utility types?", A: "Built-in helpers like Partial<T> (makes properties optional), Readonly<T>, Pick<T, K>, Omit<T, K>, Record<K, T> and others transform existing types to simplify common operations and keep types DRY and expressive." },

  { Q: "What is an enum?", A: "An enum is a TypeScript construct that defines a set of named constants (numeric or string). Enums improve readability for finite sets of values, but many prefer union literal types (e.g., 'open' | 'closed') for simpler runtime behavior." },

  { Q: "What are .d.ts files for?", A: ".d.ts declaration files provide type information for JavaScript libraries or compiled TypeScript packages so the TypeScript compiler and IDEs can type-check and offer autocompletion when using those libraries." },

  { Q: "What is Node.js?", A: "Node.js is a JavaScript runtime built on Chrome's V8 engine that enables running JS on the server. It exposes non-blocking I/O APIs and platform features (filesystem, network) enabling backend services, CLIs, and tools using JS." },

  { Q: "CommonJS vs ES modules in Node?", A: "CommonJS (require/module.exports) is synchronous and historically used in Node. ES Modules (import/export) are the standardized module format with static structure enabling tree-shaking and modern semantics; Node supports both but interop between them requires care (file extensions, package config)." },

  { Q: "What is event-driven architecture in Node?", A: "Node's core uses an event-driven model where asynchronous events (I/O completion, timers) trigger callbacks or promises; the main thread schedules and runs these callbacks, enabling high concurrency with low thread count." },

  { Q: "How do you create a REST endpoint?", A: "With frameworks like Express: define routes (app.get('/users', handler)), use middleware for parsing/auth, validate input, implement controller/service layers to handle business logic, and return JSON responses with appropriate status codes." },

  { Q: "What is middleware?", A: "Middleware are functions that run between request arrival and the final route handler; they can parse bodies, authenticate, authorize, log, handle CORS, or modify requests/responses. They allow composable cross-cutting concerns." },

  { Q: "What is routing?", A: "Routing maps HTTP methods and URL patterns to handlers that implement application behavior. Good routing organizes endpoints logically and supports parameters, query parsing, and subrouters for modularity." },

  { Q: "How to parse JSON in Express?", A: "Use express.json() middleware (app.use(express.json())) which reads the request body and parses JSON into req.body, handling size limits and content-type checks." },

  { Q: "Common authentication methods?", A: "JWTs for stateless token-based auth, server-side sessions (cookies) for stateful auth, OAuth2/OpenID Connect for third-party delegation, and API keys for service-to-service access. Each has trade-offs in security and complexity." },

  { Q: "What is CORS?", A: "Cross-Origin Resource Sharing is a browser security mechanism that controls whether a webpage from one origin can make requests to another origin based on response headers (Access-Control-Allow-*). Proper CORS configuration prevents accidental data leaks while allowing intended cross-origin usage." },

  { Q: "What is bcrypt?", A: "bcrypt is a password-hashing function that applies a computationally expensive algorithm with salts to protect stored passwords against brute-force attacks. Use a well-configured bcrypt (work factor) and never store plaintext passwords." },

  { Q: "How do you validate input?", A: "Validate inputs both client- and server-side using libraries (Joi, Zod, class-validator) to check types, ranges, formats, and required fields. Validation prevents malformed data and reduces security risks like injection." },

  { Q: "How to handle async errors in Express?", A: "Wrap async route handlers to catch rejections (e.g., use a wrapper that calls next(err) on rejection), or use Express 5's async handler support; centralize error handling in an error-handling middleware to respond consistently." },

  { Q: "Process vs thread in Node?", A: "A process is an instance of the Node runtime with its own memory; a thread is an OS-level sequence of execution. Node runs JS on a single main thread but uses background threads (libuv thread pool) for blocking I/O; you can spawn additional processes or worker threads for parallelism." },

  { Q: "Cluster vs worker threads?", A: "Cluster creates multiple Node processes that can share server ports to utilize multiple CPU cores and isolate failures. Worker threads allow parallel execution in the same process with shared memory via transferable/SharedArrayBuffer — useful for CPU-bound work." },

  { Q: "How to upload files?", A: "Use middleware like multer to parse multipart/form-data, validate file types and sizes, store files securely (local, cloud storage with signed URLs), and sanitize filenames. Offload heavy storage to object stores (S3) when possible." },

  { Q: "What is dotenv?", A: "dotenv loads environment variables from a .env file into process.env for local development. Use environment variables for config and keep secrets out of the repository; in production, use secure secret stores or environment configuration." },

  { Q: "Why use logging libraries?", A: "Libraries like Winston or Pino provide structured, leveled logging, transports (console, files, remote), performance optimizations, and consistent formats for easier debugging, monitoring, and alerting compared to console.log." },

  { Q: "What are environment variables?", A: "Environment variables are external key-value configuration passed into processes (e.g., DB connection strings, API keys). They separate configuration from code and allow different settings per environment (dev/stage/prod)." },

  { Q: "What is rate limiting?", A: "Rate limiting restricts how many requests a client can make in a time window (per IP or per account) to prevent abuse, DoS, or brute-force attacks. Implement via middleware or API gateways with sensible limits and throttling strategies." },

  { Q: "How do you secure a backend?", A: "Use input validation and sanitization, parameterized queries to prevent injections, HTTPS/TLS, authentication and authorization controls, secure password storage, proper session handling, CORS and CSRF protections, logging and monitoring, and dependency scanning for vulnerabilities." },

  { Q: "What is pagination?", A: "Pagination breaks large result sets into pages using limit/offset or cursor-based approaches. Cursor-based pagination is more efficient/consistent for large or changing datasets; include metadata (total, next cursor) for client navigation." },

  { Q: "What is API versioning?", A: "API versioning (URI versioning like /v1/, header-based, or accept-version) lets you evolve APIs without breaking existing clients. Choose a strategy early and document changes; maintain old versions for a deprecation window." },

  { Q: "How to structure scalable Node apps?", A: "Organize code into clear layers (routes/controllers → services/business logic → repositories/models → utilities), keep modules small and focused, use configuration and DI for testability, and separate concerns (auth, logging, error handling)." },

  { Q: "What is dependency injection?", A: "Dependency injection supplies components with their dependencies (e.g., DB clients, services) via constructors or factories rather than creating them internally; this improves testability, decoupling, and swapping implementations." },

  { Q: "What is Swagger/OpenAPI?", A: "OpenAPI (formerly Swagger) is a standardized format for describing REST APIs; it enables automated documentation, client SDK generation, interactive explorers (Swagger UI), and contract validation between teams." },

  { Q: "What is React?", A: "React is a declarative JavaScript library for building user interfaces with reusable components. It manages a virtual DOM, updates efficiently on state/prop changes, and encourages composition and unidirectional data flow." },

  { Q: "Functional vs class components?", A: "Functional components are plain functions that return JSX and use hooks for state/effects; they are simpler and encourage composition. Class components are ES6 classes with lifecycle methods and internal state — they were the primary pattern before hooks but are still supported." },

  { Q: "What are hooks?", A: "Hooks are functions (useState, useEffect, etc.) that let functional components use React features like state, lifecycle, refs, and context. They promote code reuse through custom hooks and avoid complex class lifecycle logic." },

  { Q: "What is useState?", A: "useState is a hook that returns a state variable and a setter function; updating state schedules a re-render. State updates can be functional (prev => new) to avoid stale closures in async code." },

  { Q: "What is the virtual DOM?", A: "The virtual DOM is React's lightweight in-memory representation of the real DOM. React diffs virtual DOM trees to compute minimal changes and apply efficient updates to the real DOM, improving performance by avoiding costly full DOM manipulations." },

  { Q: "What is reconciliation?", A: "Reconciliation is React's algorithm for comparing previous and next virtual DOM trees, determining the smallest set of changes needed, and applying those changes to the real DOM. Keys and predictable markup improve the algorithm's accuracy." },

  { Q: "What is prop drilling?", A: "Prop drilling is passing props through intermediate components that don't need the data, just to reach deeper descendants. It creates coupling and verbosity; solutions include context, state management libraries, or component composition." },

  { Q: "What is the Context API?", A: "Context allows sharing data (theme, auth, locale) across the component tree without passing props at each level. Use it for low-frequency global values; avoid overusing context for highly changing state as it can cause unnecessary re-renders." },

  { Q: "What is React Router?", A: "React Router is a library for client-side routing in single-page applications; it maps URLs to components, supports nested routes, route parameters, lazy loading, and history manipulation for a native-feeling navigation experience." },

  { Q: "Component lifecycle phases?", A: "Lifecycle phases include mounting (constructor/render/componentDidMount/useEffect with empty deps), updating (state/props changes → re-render/useEffect with deps), and unmounting (cleanup effects/componentWillUnmount). Hooks provide equivalent lifecycle capabilities in functional components." },

  { Q: "React performance optimization?", A: "Optimize by avoiding unnecessary re-renders (memoization with React.memo/useMemo/useCallback), code-splitting (dynamic import) for lazy loading, virtualizing long lists (react-window), reducing prop object/array recreation, and minimizing expensive computations during render." },

  { Q: "What do React.memo, useMemo, useCallback do?", A: "React.memo prevents re-rendering of a pure component when props are shallowly equal. useMemo memoizes expensive computed values between renders. useCallback memoizes function references to avoid causing downstream re-renders when passed as props." },

  { Q: "How do you handle forms?", A: "Use controlled components (form inputs bound to state) for full control, or uncontrolled components with refs for simpler cases. For complex forms use libraries (Formik, React Hook Form) that manage validation, schema integration, and performance optimizations." },

  { Q: "Controlled vs uncontrolled components?", A: "Controlled components have their state controlled by React (value/onChange) enabling validation and controlled updates. Uncontrolled components rely on DOM state accessed via refs, which can be simpler but less flexible for validation and dynamic behavior." },

  { Q: "How do you fetch data in React?", A: "Fetch data in lifecycle-equivalent places (useEffect) and handle loading/error states. Use abort controllers to cancel inflight requests on unmount, memoize request params to avoid duplicate calls, and centralize API calls in a service layer." },

  { Q: "What is Redux?", A: "Redux is a predictable state container that centralizes application state in a single store, uses actions to describe state changes, and reducers to apply them. It encourages immutability, time-travel debugging, and middleware for side effects." },

  { Q: "What is a reducer?", A: "A reducer is a pure function (state, action) => newState that specifies how state updates in response to actions. Reducers should not mutate state directly but return new immutable state objects." },

  { Q: "What is Redux Thunk?", A: "Redux Thunk is middleware that lets action creators return functions (thunks) instead of plain actions; thunks receive dispatch/getState and can perform async operations (API calls) before dispatching real actions to reducers." },

  { Q: "What is full-stack data flow?", A: "Typical flow: UI dispatches an action or triggers an event → frontend calls backend API → backend validates/authenticates and performs business logic → backend reads/writes to DB → backend returns response → frontend updates UI/state based on response. Each layer should validate and handle errors." },

  { Q: "What is SSR?", A: "Server-Side Rendering renders the initial HTML of a page on the server and sends it to the client for faster first meaningful paint, improved SEO, and better perceived performance. Hydration then attaches client-side behavior to that markup." },

  { Q: "SQL vs NoSQL?", A: "SQL databases are relational, schema-based, and strong in multi-row transactions and joins; NoSQL databases (document, key-value, wide-column, graph) are schema-flexible, often horizontally scalable, and better for rapidly changing or denormalized data models. Choose based on consistency, query patterns, and scaling needs." },

  { Q: "What is a schema?", A: "A schema defines the structure of stored data: tables/columns and types in relational DBs, or expected document shapes in NoSQL. Schemas enforce constraints, improve data consistency, and guide query optimization." },

  { Q: "What is normalization?", A: "Normalization is organizing relational data to reduce redundancy and ensure integrity by dividing data into related tables and using keys/joins. Normal forms guide how to split data; sometimes denormalization is chosen for performance when read patterns demand it." },

  { Q: "Primary vs foreign keys?", A: "A primary key uniquely identifies a row in a table (often an integer or UUID). A foreign key references a primary key in another table to model relationships and enforce referential integrity." },

  { Q: "Types of joins?", A: "INNER JOIN returns rows with matching keys in both tables; LEFT JOIN returns all rows from the left table and matching or NULLs from the right; RIGHT JOIN is symmetric; FULL OUTER JOIN returns rows when there is a match in either table. Choice depends on desired result set semantics." },

  { Q: "What is an index?", A: "An index is a data structure (B-tree, hash, etc.) that speeds up lookups, sorts, and joins on specific columns. While indexes accelerate reads, they add storage overhead and slow down writes, so choose indexes based on query patterns." },

  { Q: "ACID properties?", A: "ACID stands for Atomicity (all-or-nothing transactions), Consistency (transactions move DB from one valid state to another), Isolation (concurrent transactions don't interfere), Durability (committed transactions persist despite failures). These guarantees are important for correctness in many systems." },

  { Q: "Fields in a user table?", A: "Typical fields: id (primary key, e.g., UUID), username, email (unique), password_hash (never plaintext), created_at, updated_at, last_login, and optional profile fields; enforce constraints and indexes on searchable fields." },

  { Q: "How does MongoDB store data?", A: "MongoDB stores data as BSON (binary JSON) documents in collections. Documents are flexible and can contain nested objects/arrays, which makes it easy to model hierarchical data without joins." },

  { Q: "What are collections and documents?", A: "Collections are sets of documents (analogous to tables); documents are individual records (analogous to rows) with flexible fields. Documents in a collection need not share the same structure." },

  { Q: "Embedded vs referenced docs?", A: "Embed related data inside a document for fast reads and locality when the nested data is frequently accessed with the parent. Use references (storing foreign IDs) when data is large, shared, or needs independent lifecycle/atomicity." },

  { Q: "CRUD in SQL?", A: "Basic operations: CREATE (INSERT) to add rows, READ (SELECT) to query data with filters/joins/aggregations, UPDATE to modify rows, DELETE to remove rows. Use parameterized queries or ORM APIs to prevent SQL injection." },

  { Q: "What are migrations?", A: "Migrations are versioned scripts that apply incremental changes to a database schema (add/alter tables, indexes, seed data). They enable consistent schema evolution across environments and can be rolled back if needed." },

  { Q: "Unit vs integration vs E2E tests?", A: "Unit tests verify small units (functions, classes) in isolation. Integration tests check how modules or services work together (e.g., API handler + DB). End-to-end tests simulate real user flows across the full stack (UI to DB) and validate system behavior." },

  { Q: "How to write a Jest test?", A: "Create test suites with describe/test or it blocks, arrange inputs, call the function/component, and assert outcomes using expect(matchers). Mock external dependencies as needed and include setup/teardown hooks (beforeAll/afterEach) for reproducible tests." },

  { Q: "What is mocking?", A: "Mocking replaces real dependencies with controllable stand-ins (stubs, spies, fake implementations) to isolate the unit under test, make tests deterministic, and verify interactions without invoking external systems." },

  { Q: "How to test React?", A: "Use React Testing Library to render components in a DOM-like environment and interact via user-centric queries; assert on visible output and behavior rather than implementation details. Combine with Jest for assertions and mocking." },

  { Q: "What is supertest?", A: "supertest is a library for testing HTTP servers by making requests to endpoints and asserting responses; it integrates with test runners to verify status codes, headers, payloads, and error handling without needing a running server instance." },

  { Q: "What is code coverage?", A: "Code coverage measures the percentage of source code executed during tests (statements, branches, functions, lines). It helps identify untested parts, but high coverage doesn't guarantee correct behavior—write meaningful assertions, not just tests for coverage numbers." },

  { Q: "Why is testing important?", A: "Testing catches regressions early, provides documentation of expected behavior, increases confidence for refactoring, and reduces production incidents. Combined testing types (unit/integration/E2E) give balanced safety across fast and slow feedback loops." },

  { Q: "What is Git?", A: "Git is a distributed version control system that tracks changes to files, supports branching and merging workflows, enables collaboration, and stores a history of commits for traceability and rollback." },

  { Q: "git merge vs git rebase?", A: "git merge combines branches by creating a merge commit that preserves branch history; git rebase rewrites commits onto a new base to create a linear history. Merge preserves context; rebase keeps history linear but can complicate shared branches if used incorrectly." },

  { Q: "What is CI/CD?", A: "Continuous Integration (CI) automatically builds and tests code when changes are pushed, catching integration problems early. Continuous Deployment/Delivery (CD) automates releasing code to environments; delivery requires manual approval, deployment automates the entire pipeline." },

  { Q: "Why do code reviews matter?", A: "Code reviews improve code quality, catch bugs, share knowledge across the team, enforce standards, and provide opportunities for mentorship. They also help maintain consistency and encourage discussion about design choices." },

  { Q: "What is clean code?", A: "Clean code is readable, well-named, modular, and well-tested. It follows single-responsibility principles, keeps functions small, documents non-obvious decisions, and uses consistent formatting and patterns to make maintenance and onboarding easier." }
];

export default questions