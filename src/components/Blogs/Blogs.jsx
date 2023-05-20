import React from 'react';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            question: "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
            content: "An access token is a credential that grants users access to specific resources or services. It is typically short-lived and acts as a form of authentication for API requests. On the other hand, a refresh token is a long-lived credential used to obtain a new access token once the current one expires. Access tokens are commonly stored in client-side memory or browser storage, while refresh tokens should be securely stored, often as HTTP-only cookies, to prevent unauthorized access.",
        },
        {
            id: 2,
            question: "Compare SQL and NoSQL databases?",
            content: "SQL (Structured Query Language) databases are based on a relational model. They use tables with predefined schemas and support complex queries. SQL databases are suitable for structured and consistent data with relationships between tables.\n" +
                "\n" +
                "NoSQL (Not only SQL) databases, on the other hand, are non-relational and provide a flexible or schema-less approach to data storage. They are well-suited for handling large amounts of unstructured or semi-structured data and offer high scalability and performance.",
        },
        {
            id: 3,
            question: "What is Express.js? What is Nest.js?",
            content: "Answer to the third question...",
        },
        {
            id: 4,
            question: "What is MongoDB aggregate and how does it work?",
            content: "Answer to the fourth question...",
        },
    ];
    
    return (
        <div className="container mx-auto px-4 py-8 text-white">
            <h2 className="text-4xl font-bold text-center mb-8">Blogs</h2>
            <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">Q: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p className="text-justify">An access token is a credential that grants users access to specific resources or services. It is typically short-lived and acts as a form of authentication for API requests. On the other hand, a refresh token is a long-lived credential used to obtain a new access token once the current one expires. Access tokens are commonly stored in client-side memory or browser storage, while refresh tokens should be securely stored, often as HTTP-only cookies, to prevent unauthorized access.</p>
            </div>
            <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">Q: Compare SQL and NoSQL databases?</h3>
                <p className="text-justify mb-5">SQL (Structured Query Language) databases are based on a relational model. They use tables with predefined schemas and support complex queries. SQL databases are suitable for structured and consistent data with relationships between tables.</p>
                <p className="text-justify">NoSQL (Not only SQL) databases, on the other hand, are non-relational and provide a flexible or schema-less approach to data storage. They are well-suited for handling large amounts of unstructured or semi-structured data and offer high scalability and performance.</p>
            </div>
            <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">Q: What is Express.js? What is Nest.js?</h3>
                <p className="text-justify mb-5">Express.js is a minimalist web application framework for Node.js. It simplifies the creation of web servers and APIs by offering a straightforward and flexible set of features. Developers can build robust server-side applications using Express.js.</p>
                <p className="text-justify">Nest.js, on the other hand, is a progressive Node.js framework for building scalable and efficient server-side applications. It is built with TypeScript and incorporates concepts from both object-oriented and functional programming paradigms. Nest.js enhances productivity and maintainability through the use of decorators, modules, and a dependency injection system.</p>
            </div>
            <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">Q: What is MongoDB aggregate and how does it work?</h3>
                <p className="text-justify">MongoDB's aggregation framework is a powerful tool for data aggregation and analysis. It allows developers to perform complex operations on collections, such as filtering, grouping, sorting, and joining. Aggregation pipelines, consisting of multiple stages, are used to transform or analyze data in MongoDB. The framework provides flexible and efficient ways to process data within the database, enabling advanced data manipulation and analytics.</p>
            </div>
        </div>
    );
};

export default Blogs;
