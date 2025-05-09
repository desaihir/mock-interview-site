// // To run this code you need to install the following dependencies:
// // npm install @google/genai mime
// // npm install -D @types/node

// import {
//     GoogleGenAI,
//   } from '@google/genai';
  
//   export async function chatSessionMain(prompt) {
//     const ai = new GoogleGenAI({
//       apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
//     });
//     const config = {
//       responseMimeType: 'text/plain',
//     };
//     const model = 'gemini-1.5-flash';
//     const contents = [
//       {
//         role: 'user',
//         parts: [
//           {
//             text: prompt
//           }
//         ],
//       },
//       {
//         role: 'model',
//         parts: [
//           {
//             text: `Here's a thinking process that could lead to the interview questions:
  
//   1.  **Understand the Core Request:**
//       *   **Role:** Frontend Software Engineer
//       *   **Key Tech:** React, TypeScript, Node.js, Redis, RabbitMQ
//       *   **Experience:** 2 years
//       *   **Output:** 5 interview questions with expected answers in JSON format.
  
//   2.  **Deconstruct the Tech Stack & Experience Level:**
  
//       *   **React (Frontend Core):**
//           *   What should a 2-year React dev know?
//               *   Component lifecycle (class/hooks).
//               *   State management (useState, useEffect, maybe context, basic Redux/Zustand understanding).
//               *   Props, prop drilling.
//               *   Performance (memo, useCallback, virtual DOM).
//               *   Fetching data (useEffect, async/await).
//               *   Error handling.
//               *   Basic testing concepts.
//       *   **TypeScript (Frontend Core):**
//           *   What should a 2-year TS dev know?
//               *   Basic types (string, number, boolean, array, object).
//               *   Interfaces vs. Types.
//               *   Generics (basic understanding).
//               *   Enums.
//               *   Union/Intersection types.
//               *   \`any\` vs \`unknown\`.
//               *   Benefits of TS.
//       *   **Node.js (Backend/Build/Tooling):**
//           *   For a *frontend* role with Node.js listed, it's likely for:
//               *   Build tools (Webpack, Vite - though not explicitly listed, often Node-based).
//               *   Server-Side Rendering (SSR) or Backend-for-Frontend (BFF) patterns.
//               *   API consumption knowledge (how Node.js servers might provide data).
//               *   Understanding of asynchronous operations (event loop, callbacks, promises, async/await).
//           *   A 2-year frontend dev might not be a Node.js *expert* but should understand its role in the ecosystem and basic async patterns.
//       *   **Redis (Caching/Session Store):**
//           *   Why use Redis? (Performance, caching, session management).
//           *   Basic Redis data types (strings, lists, hashes, sets).
//           *   Common use cases for a frontend dev interacting with a Redis-backed backend.
//           *   Probably not expecting deep operational knowledge.
//       *   **RabbitMQ (Message Queue):**
//           *   Why use a message queue? (Decoupling, asynchronous processing, load balancing).
//           *   Basic concepts (producer, consumer, queue, exchange).
//           *   How might a frontend action trigger something that goes through RabbitMQ? (e.g., background processing of an uploaded file, sending notifications).
//           *   Again, not expecting deep operational knowledge, but conceptual understanding.
//       *   **Experience Level (2 years):**
//           *   Not a junior, not a senior.
//           *   Should have practical experience and be able to explain *why* they do things, not just *what* they do.
//           *   Should understand common problems and solutions in their domain.
//           *   Should be able to debug common issues.
  
//   3.  **Brainstorm Question Categories:**
//       *   React fundamentals.
//       *   TypeScript benefits and usage.
//       *   Integration/interaction with backend services (Node.js, Redis, RabbitMQ).
//       *   Problem-solving/Debugging.
//       *   Performance/Optimization.
//       *   Best practices.
  
//   4.  **Draft Initial Questions (more than 5, then narrow down):**
  
//       *   *React:*
//           *   Explain \`useEffect\` hook.
//           *   How do you optimize React component rendering? (Too broad, refine)
//           *   Difference between controlled and uncontrolled components.
//           *   What is prop drilling and how to avoid it?
//           *   How would you handle state management in a medium-sized React app?
//       *   *TypeScript:*
//           *   Why use TypeScript?
//           *   Explain \`interface\` vs \`type\`.
//           *   What are generics? Give an example.
//       *   *Node.js:*
//           *   Explain the event loop in Node.js. (Maybe too deep for a frontend primary role)
//           *   How do you handle async operations in Node.js? (Good, relevant for frontend consuming Node APIs)
//       *   *Redis:*
//           *   When would you use Redis in an application?
//           *   What are some common Redis use cases?
//       *   *RabbitMQ:*
//           *   Why use a message queue like RabbitMQ?
//           *   Describe a scenario where RabbitMQ would be beneficial.
//       *   *Combined/Scenario-based:*
//           *   How would you implement a feature that requires real-time updates using React and potentially a backend system? (Could involve Node, maybe WebSockets, and indirectly RabbitMQ for backend processing).
//           *   Describe how TypeScript improves a React project.
  
//   5.  **Select and Refine the Best 5, Aiming for Coverage:**
  
//       *   **Q1: React Hooks & State (Core React)**
//           *   *Initial idea:* "Explain \`useEffect\`."
//           *   *Refinement:* Make it more practical. "Describe a common use case for the \`useEffect\` hook in a React component. What are its dependencies, and why are they important?" This covers understanding, practical application, and a key detail (dependencies).
//       *   **Q2: TypeScript & React Integration (Core TypeScript + React)**
//           *   *Initial idea:* "Why use TypeScript?"
//           *   *Refinement:* Combine with React. "How does TypeScript enhance developing React applications? Provide an example of how you'd type React component props." This links TS directly to their primary framework.
//       *   **Q3: Node.js & Asynchronous Operations (Backend Interaction)**
//           *   *Initial idea:* "Explain async/await in Node.js."
//           *   *Refinement:* Broaden slightly to cover error handling and context. "Imagine you're building a React component that fetches data from a Node.js API. Describe how you would handle the asynchronous request, including loading states and error handling, using async/await."
//       *   **Q4: Redis & Performance (Caching Concept)**
//           *   *Initial idea:* "When use Redis?"
//           *   *Refinement:* Make it a scenario. "Your React application frequently fetches a list of products that doesn't change often. How might Redis be used on the backend (potentially with Node.js) to improve the performance of this data retrieval, and how would that impact your frontend?" This connects Redis to a tangible frontend benefit.
//       *   **Q5: RabbitMQ & Decoupling (System Design Concept)**
//           *   *Initial idea:* "Why use RabbitMQ?"
//           *   *Refinement:* Scenario-based. "Suppose a user action in your React application (e.g., submitting a complex report request) triggers a long-running process on the backend. How could RabbitMQ be used in this scenario, and what benefits would it provide to the user experience and system architecture?" This tests understanding of asynchronous processing and its benefits.
  
//   6.  **Formulate Expected Answers:**
//       *   For each question, outline key points the candidate should hit.
//       *   Ensure the answers are appropriate for a 2-year experience level – practical, demonstrates understanding of concepts, but not necessarily deep architectural mastery.
//       *   Keep answers concise but informative.
  
//   7.  **Convert to JSON Format:**
//       *   Create a root array.
//       *   Each element in the array is an object with "question" and "expected_answer" keys.
//       *   Ensure JSON syntax is correct (quotes around keys and string values, commas, etc.).
  
//   8.  **Review and Self-Critique:**
//       *   Do the questions cover the key technologies? Yes.
//       *   Are they appropriate for a 2-year experience level? Yes.
//       *   Are the expected answers reasonable? Yes.
//       *   Is the JSON format correct? Yes.
//       *   Is there a good mix of conceptual and practical questions? Yes.
//       *   Could any question be clearer? (e.g., initial "Optimize React" was too vague).
//       *   Are there any overlaps that could be combined or diversified? The current set seems distinct enough.
  
//   This thought process moves from understanding the requirements to brainstorming, refining, and finally structuring the output, with a constant focus on the target candidate profile.`,
//           },
//           {
//             text: `\`\`\`json
//   [
//     {
//       "question": "Describe a common use case for the \`useEffect\` hook in a React component. What are its dependencies, and why are they important for preventing infinite loops or stale closures?",
//       "expected_answer": "A common use case for \`useEffect\` is fetching data when a component mounts. For example, fetching user details: \`useEffect(() => { async function fetchData() { const response = await fetch('/api/user/' + userId); const data = await response.json(); setUser(data); } fetchData(); }, [userId]);\`. The dependency array \`[userId]\` is crucial. If it's empty \`[]\`, the effect runs only once on mount. If \`userId\` changes, the effect re-runs to fetch new data. Without \`userId\` in the dependencies, if \`userId\` prop changed, the effect would still use the initial \`userId\` (stale closure). If the dependency array is omitted entirely, the effect runs after every render, potentially causing an infinite loop if the effect itself triggers a re-render (e.g., by setting state)."
//     },
//     {
//       "question": "How does TypeScript enhance developing React applications, particularly concerning component props and state? Provide a simple example of typing component props.",
//       "expected_answer": "TypeScript enhances React development by providing static type checking, which catches errors during development rather than at runtime. This improves code quality, maintainability, and refactoring confidence. For component props, it ensures that components receive the correct data types. For state, it ensures type consistency. Example: \`interface UserProfileProps { userId: number; name: string; isActive?: boolean; } const UserProfile: React.FC<UserProfileProps> = ({ userId, name, isActive = false }) => { return (<div><h1>{name} (ID: {userId})</h1><p>Status: {isActive ? 'Active' : 'Inactive'}</p></div>); };\` This ensures \`UserProfile\` always gets a \`userId\` (number) and \`name\` (string), and \`isActive\` is an optional boolean."
//     },
//     {
//       "question": "Imagine you're building a feature where a React component needs to fetch data from a Node.js API endpoint. Describe the steps involved in making this request, handling loading states, and managing potential errors using async/await and TypeScript.",
//       "expected_answer": "1. **State Management:** Define state variables in the React component for data, loading status, and error: \`const [data, setData] = useState<MyData[] | null>(null); const [isLoading, setIsLoading] = useState<boolean>(false); const [error, setError] = useState<string | null>(null);\` (assuming \`MyData\` is a defined TypeScript interface for the expected data structure). \\n2. **Async Function:** Create an asynchronous function, typically within \`useEffect\` for initial data fetch: \`useEffect(() => { const fetchData = async () => { setIsLoading(true); setError(null); try { const response = await fetch('/api/my-endpoint'); if (!response.ok) throw new Error('Network response was not ok'); const result: MyData[] = await response.json(); setData(result); } catch (err) { if (err instanceof Error) setError(err.message); else setError('An unknown error occurred'); } finally { setIsLoading(false); } }; fetchData(); }, []);\` \\n3. **Conditional Rendering:** In the JSX, render different UI based on these states: \`if (isLoading) return <p>Loading...</p>; if (error) return <p>Error: {error}</p>; if (!data) return <p>No data found.</p>; return (<ul>{data.map(item => <li key={item.id}>{item.name}</li>)}</ul>);\`"
//     },
//     {
//       "question": "Consider a scenario where a Node.js backend serves product information. This data doesn't change frequently. How could Redis be integrated to improve performance, and what impact would this have on requests from your React frontend?",
//       "expected_answer": "Redis can be used as a caching layer in the Node.js backend. When a request for product information comes: \\n1. **Node.js checks Redis first:** It attempts to retrieve the product data from Redis using a key (e.g., \`product:<productId>\`).\\n2. **Cache Hit:** If data is found in Redis (cache hit), Node.js returns it directly, avoiding a slower database query. This results in a much faster response time to the React frontend.\\n3. **Cache Miss:** If data is not in Redis (cache miss), Node.js queries the primary database, retrieves the data, stores it in Redis (with an appropriate expiration time, e.g., 1 hour), and then returns it to the client. \\n**Impact on React frontend:** The frontend code making the API call wouldn't necessarily change. However, users would experience significantly faster load times for product pages after the initial fetch (or when another user has already fetched it), as subsequent requests would be served from the Redis cache. This improves user experience and reduces load on the primary database."
//     },
//     {
//       "question": "Explain a situation where using RabbitMQ (or a similar message queue) would be beneficial in an application that has a React frontend and a Node.js backend. What problem does it solve?",
//       "expected_answer": "A beneficial situation is handling long-running, resource-intensive, or asynchronous tasks triggered by a user action in the React frontend. For example, if a user uploads a large video file that needs processing (transcoding, thumbnail generation) or requests a complex report generation. \\n**Problem Solved:** \\n1. **Decoupling:** RabbitMQ decouples the initial user request from the actual processing. The Node.js backend can immediately acknowledge the request to the React frontend (e.g., \\"Video upload received, processing started\\"), improving responsiveness. \\n2. **Asynchronous Processing:** The Node.js backend publishes a message to a RabbitMQ queue (e.g., \`video_processing_queue\`). Worker services (which could also be Node.js instances) subscribe to this queue, pick up tasks, and process them independently. \\n3. **Improved User Experience:** The user doesn't have to wait for the long task to complete. The frontend can show a progress indicator or notify the user later when the task is done (perhaps via WebSockets or polling). \\n4. **Scalability & Resilience:** Worker services can be scaled independently. If a worker fails, the message can be re-queued and processed by another worker, improving system resilience."
//     }
//   ]
//   \`\`\``,
//           },
//         ],
//       },
//       {
//         role: 'user',
//         parts: [
//           {
//             text: prompt
//           }
//         ],
//       },
//     ];
  
//     const result = ai.models.generateContent({
//       model,
//       config,
//       contents,
//     });

  
//   return result.response.text();
//   }  



// // ---------------------------GPT---------------------------- //

import { GoogleGenAI } from "@google/genai";

// export async function generateInterviewQuestions(prompt) {
//   const ai = new GoogleGenAI({
//     apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY, // Make sure this is in .env.local
//   });

//   const config = {
//     responseMimeType: "text/plain",
//   };

//   const model = "gemini-1.5-flash";

//   const contents = [
//     {
//       role: "user",
//       parts: [{ text: prompt }],
//     },
//   ];

//     const result = await ai.models.generateContent({
//       model,
//       config,
//       contents,
//     });

//     if (!result || typeof result.text !== "function") {
//       throw new Error("Unexpected Gemini API response structure");
//     }
    
//     const text = await result.text(); // NOT result.response.text()
//     console.log("Gemini raw result:", result);
//     console.log("Gemini text result:", text);
//     return text;
// }


// // ---------------------------PERPLEXITY---------------------------- //
export async function generateInterviewQuestions(prompt) {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });

  const config = {
    responseMimeType: "text/plain",
  };

  const model = "gemini-1.5-flash";

  const contents = [
    {
      role: "user",
      parts: [{ text: prompt }],
    },
  ];

  const result = await ai.models.generateContent({
    model,
    config,
    contents,
  });

  // Extract the text from the response
  let text;
  try {
    text = result.candidates[0].content.parts[0].text;
  } catch (err) {
    throw new Error("Unexpected Gemini API response structure: " + JSON.stringify(result));
  }

  // console.log("Gemini text result:", text);
  return text;
}
