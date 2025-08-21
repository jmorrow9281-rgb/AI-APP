export const mockChats = [
  {
    id: '1',
    title: 'Build a React Todo App',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    model: 'E1',
    messages: [
      {
        id: '1',
        content: 'I want to build a React todo application with modern features',
        sender: 'user',
        timestamp: new Date(Date.now() - 1000 * 60 * 30)
      },
      {
        id: '2',
        content: "I'll help you build a modern React todo application! Let's create something with these features:\n\n**Core Features:**\n- Add, edit, delete todos\n- Mark as complete/incomplete\n- Filter by status (All, Active, Completed)\n- Persistence with localStorage\n\n**Modern Enhancements:**\n- Drag & drop reordering\n- Categories/tags\n- Due dates\n- Priority levels\n- Dark mode\n- Responsive design\n\nShall I start by creating the basic structure with React hooks and styled components?",
        sender: 'ai',
        timestamp: new Date(Date.now() - 1000 * 60 * 29),
        model: 'E1'
      },
      {
        id: '3',
        content: 'Yes, let\'s start with the basic structure. I\'d like to use TypeScript as well.',
        sender: 'user',
        timestamp: new Date(Date.now() - 1000 * 60 * 25)
      },
      {
        id: '4',
        content: "Perfect! TypeScript will give us excellent type safety. Here's the project structure I'll create:\n\n```\nsrc/\n├── components/\n│   ├── TodoApp.tsx\n│   ├── TodoList.tsx\n│   ├── TodoItem.tsx\n│   ├── AddTodo.tsx\n│   └── FilterTabs.tsx\n├── types/\n│   └── todo.ts\n├── hooks/\n│   └── useTodos.ts\n└── utils/\n    └── storage.ts\n```\n\nLet me start by creating the TypeScript interfaces and the main components...",
        sender: 'ai',
        timestamp: new Date(Date.now() - 1000 * 60 * 24),
        model: 'E1'
      }
    ]
  },
  {
    id: '2',
    title: 'API Design Best Practices',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    model: 'E1',
    messages: [
      {
        id: '5',
        content: 'What are some best practices for designing RESTful APIs in 2025?',
        sender: 'user',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2)
      },
      {
        id: '6',
        content: "Here are the essential REST API best practices for 2025:\n\n**1. Resource-Based URLs**\n- Use nouns, not verbs: `/users`, not `/getUsers`\n- Hierarchical structure: `/users/123/posts`\n\n**2. HTTP Methods**\n- GET: Retrieve data\n- POST: Create new resources\n- PUT: Update entire resources\n- PATCH: Partial updates\n- DELETE: Remove resources\n\n**3. Status Codes**\n- 200: Success\n- 201: Created\n- 400: Bad Request\n- 401: Unauthorized\n- 404: Not Found\n- 500: Internal Server Error\n\n**4. Modern Additions**\n- OpenAPI 3.1 specification\n- GraphQL hybrid approaches\n- Rate limiting with 429 status\n- HATEOAS for discoverability\n- JSON:API or HAL for hypermedia\n\nWould you like me to elaborate on any specific aspect?",
        sender: 'ai',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2 + 60),
        model: 'E1'
      }
    ]
  },
  {
    id: '3',
    title: 'Database Schema Design',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    model: 'E1.1',
    messages: [
      {
        id: '7',
        content: 'Help me design a database schema for an e-commerce application',
        sender: 'user',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24)
      },
      {
        id: '8',
        content: "I'll help you design a comprehensive e-commerce database schema. Here's a well-structured approach:\n\n**Core Tables:**\n\n1. **Users**\n   - id (Primary Key)\n   - email (Unique)\n   - password_hash\n   - first_name, last_name\n   - phone, created_at, updated_at\n\n2. **Categories**\n   - id (Primary Key)\n   - name, description\n   - parent_id (Self-referencing for subcategories)\n   - slug, is_active\n\n3. **Products**\n   - id (Primary Key)\n   - name, description\n   - price, compare_price\n   - sku (Unique)\n   - category_id (Foreign Key)\n   - inventory_count\n   - is_active, created_at\n\n4. **Orders**\n   - id (Primary Key)\n   - user_id (Foreign Key)\n   - status (pending, paid, shipped, delivered)\n   - total_amount\n   - shipping_address\n   - created_at, updated_at\n\nWould you like me to continue with the relationship tables and advanced features?",
        sender: 'ai',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 + 120),
        model: 'E1.1'
      }
    ]
  }
];

export const modelOptions = [
  { id: 'E1', name: 'E1', description: 'Advanced AI Assistant' },
  { id: 'E1.1', name: 'E1.1', description: 'Enhanced AI Assistant' }
];