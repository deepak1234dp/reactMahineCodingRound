import React, { useState, useCallback, useRef } from 'react';

function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const cacheRef = useRef({});
  // console.log(cacheRef);//pass current ref object pass.

  const handleSearch = async (value) => {
    if (!value) {
      setResults([]);
      return;
    }

    if (cacheRef.current[value]) {
      console.log('Using cached data for:', value);
      setResults(cacheRef.current[value]);
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${value}`);
      const data = await response.json();
      console.log(cacheRef.current)
      cacheRef.current[value] = data.items;


      setResults(data.items || []);





    } catch (error) {
      console.error('Search error:', error);
    }
  };

  const debouncedSearch = useCallback(debounce(handleSearch, 500), []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <div>
      <h2>Search GitHub Users</h2>
      <input
        type="text"
        value={query}
        placeholder="Type a username..."
        onChange={handleChange}
      />
      <ul>
        {results.map((user) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

///////////////////////////////////////////////////////////////////////


// import React, { useState, useRef, useCallback } from 'react';

// // Simple debounce function to delay the API call
// function debounce(func, delay) {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout); // Cancel previous call
//     timeout = setTimeout(() => func(...args), delay); // Delay new call
//   };
// }

// export default function SearchBox() {
//   // Store the text the user types
//   const [query, setQuery] = useState('');

//   // Store the search results from GitHub
//   const [results, setResults] = useState([]);

//   // Cache to avoid repeating the same API call
//   const cacheRef = useRef({});

//   // Function to call the GitHub API and get users
//   const searchUsers = async (text) => {
//     if (!text) {
//       setResults([]); // If empty input, clear results
//       return;
//     }

//     // If we already searched for this text, use cached results
//     if (cacheRef.current[text]) {
//       setResults(cacheRef.current[text]);
//       return;
//     }

//     // Fetch data from GitHub
//     const response = await fetch(`https://api.github.com/search/users?q=${text}`);
//     const data = await response.json();

//     // Save the result in cache and state
//     cacheRef.current[text] = data.items;
//     setResults(data.items || []);
//   };

//   // Create a debounced version of the search function
//   const debouncedSearch = useCallback(debounce(searchUsers, 500), []);

//   // When user types in the input
//   const handleChange = (event) => {
//     const value = event.target.value;
//     setQuery(value);           // Update input value
//     debouncedSearch(value);    // Trigger debounced search
//   };

//   return (
//     <div>
//       <h2>GitHub User Search</h2>
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         placeholder="Type a GitHub username..."
//       />

//       <ul>
//         {results.map((user) => (
//           <li key={user.id}>
//             <a href={user.html_url} target="_blank" rel="noreferrer">
//               {user.login}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }











// // useState() stores input and results.

// // useRef() keeps a cache so we don’t call the API again for the same search.

// // debounce() waits 500ms after typing to avoid too many API calls.

// // fetch() gets GitHub users based on what you type.