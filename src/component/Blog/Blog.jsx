import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h1>Question answer part</h1>
            <div>
                <h4>Question: a.When should you use context API? </h4>
                <p><b>Answer:</b> The Context API in React should be used when you need to manage global state that needs to be accessed and modified by multiple components across the component tree, to avoid prop drilling, for managing cross-cutting concerns, for implementing theme switching, authentication and user data, and language localization. Use it judiciously and avoid overuse to maintain code simplicity and maintainability.</p>
                <h4>Question: b.What is a custom hook?</h4>
                <p><b>Answer:</b> A custom hook in React is a reusable function that encapsulates and shares logic across multiple components. It follows a naming convention of using the "use" prefix and can abstract complex logic for data fetching, form handling, authentication, and more. Custom hooks promote code reuse and separation of concerns, improving code maintainability.</p>
                <h4>Question: c.What is useRef?</h4>
                <p><b>Answer:</b> useRef is a React hook for creating a mutable reference that can persist across re-renders. It's commonly used for storing mutable values, like DOM elements or other data, without triggering component re-renders. useRef is useful for managing focus, animations, and accessing DOM elements in functional components.</p>
                <h4>Question: d.What is useMemo?</h4>
                <p><b>Answer:</b> useMemo is a React hook for memoizing a value or computation to optimize performance. It returns a memoized value that is only recalculated when dependencies change. It's commonly used for expensive computations or data processing in functional components to improve performance.</p>
            </div>
        </div>
    );
};

export default Blog;