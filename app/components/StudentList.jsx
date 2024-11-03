"use client";
import { useState, useEffect } from "react";
 
const Post = () => {
  const [posts, setPosts] = useState([]);
  const [edtitingId, setEditingId] = useState(null); // ID to track the ID of the post being edited
  
  const [editingFullName, setEditingFullName] = useState(""); // To store the student's full name or Post being editied
  const [editingDOB, setEditingDOB] = useState("");     // To store the student's DOB
  const [editingGPA, setEditingGPA] = useState("");      // To store the student's GPA
  const [error, setError] = useState(""); // To store the error message
 
  useEffect(() => {
    fetch("http://localhost:3300/students") // Fetching the posts from the backend
      .then((response) => response.json()) // Converting the response to JSON
      .then((response) => setPosts(response)); // Setting the posts state with the data from the response
  }, []); // Dependency array to re-run the effect when the posts state changes

  // Helper function for input validation
  const validateInput = (fullName, dob, gpa) => {
    // Full name validation: Only alphabets and spaces
    if (!/^[A-Za-z]+, [A-Za-z]+$/.test(fullName)) {
      return "Full name must be in Last name, First name format.";
    }

    // Date of birth validation: YYYY-MM-DD format and not a future date
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dobRegex.test(dob)) {
      return "Date of Birth must be in YYYY-MM-DD format.";
    }
    const date = new Date(dob);
    const today = new Date();
    if (date > today) {
      return "Date of Birth cannot be a future date.";
    }

    // GPA validation: Must be a number between 0.0 and 4.0
    const gpaNum = parseFloat(gpa);
    if (isNaN(gpaNum) || gpaNum < 0.0 || gpaNum > 4.0) {
      return "GPA must be a number between 0.0 and 4.0.";
    }

    return ""; // No validation errors
  };
 
  // This is how we post data to the server
  const addStudent = (fullName, dob, gpa) => {
    const errorMessage = validateInput(fullName, dob, gpa);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }
    // Function to add a new post
    fetch("http://localhost:3300/students", {
      // Sending a POST request to the backend to add a new post
      method: "POST", // Setting the request method as POST
      headers: { "Content-Type": "application/json" }, // Setting content type to JSON in the request headers
      body: JSON.stringify({ fullName, dob, gpa }), // Sending the fullName, dob, and gpa in the request body as JSON
    })
      .then((response) => {
        if (!response.ok) { //debugging...
            throw new Error("Failed to add student");
        }
        return response.json();    // Converts the response to JSON
    }) 
      .then((newPost) => setPosts((prevPosts) => [newPost, ...prevPosts]))
      .catch((error) => {
        console.log("Error adding student:", error);
      }); // Adds the new post to the state
  };
 
  const updatePost = (id, fullName, dob, gpa) => {
    const errorMessage = validateInput(fullName, dob, gpa);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }
    fetch(`http://localhost:3300/students/${id}`, {
      // Sending a PUT request to the backend to update a post)
      method: "PUT", // Setting the request method as PUT
      headers: { "Content-Type": "application/json" }, // Setting content type to JSON in the request headers
      body: JSON.stringify({ fullName, dob, gpa }), // Sending the post fullName in the request body as JSON
    }).then(() => {
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === id ? { ...post, id, fullName, dob, gpa } : post))
      );
    });
    // Resetting fields
    setEditingId(null);
    setEditingFullName("");
    setEditingDOB("");
    setEditingGPA("");
    setError("");
  };
  
  const deletePost = (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this student?");
      if (confirmDelete) {
        fetch(`http://localhost:3300/students/${id}`, {
      // Sending a DELETE request to the backend to delete a post
        method: "DELETE", // Setting the request method as DELETE
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete the student");
      }
      // Update the local state to remove the deleted post
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      // Alert the user after successful deletion
      window.alert("Student has been deleted");
    })
    .catch((error) => {
      console.error("Error deleting student:", error);
      window.alert("There was an error deleting the student.");
    });
  }
};  

// Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //Using FormData to extract input from fields
    const formData = new FormData(e.target);
    const fullName = formData.get("fullName").trim();    //This will need to update to take in a full name
    const dob = formData.get("DOB").trim();
    const gpa = formData.get("GPA").trim();

    //Validation for input

    
    if (!fullName || !dob || !gpa) {    //Should we allow incomplete submission?
      // Error handling if the fullName is empty
      setError("All fields must be filled out");
      return;
    }
    setError(""); // setting the error message state to empty
    addStudent(fullName, dob, gpa); // Calling the addStudent function to add a new student
    // Resetting the input fields
    e.target.reset();
  };

 
  
  return (
    <div className="container mx-auto p-4">
 
      {/* Handle Submit */}
      <form onSubmit={handleSubmit}
        className="flex flex-col  bg-slate-800 items-center my-4 gap-4 p-1 rounded-md border border-gray-900"
      >
        <div className="flex w-full h-15 mt-2 justify-between px-2">
            <h1 className="text-2xl font-bold text-blue-800">Students</h1>
            
            {/*Add student button*/}
            <button
              className="text-white hover:bg-blue-700 hover:border-blue-900 border-gray-600 border-b  bg-blue-500 py-1 px-2 rounded-lg"
              type="submit"
            >
              Add Student
            </button>
        </div>

        {/* Student Full Name */}
        <div className="flex w-full items-start ml-28 gap-4 ">
        <div className="w-7/12">
          <label className="block mb-1 text-gray-400">Student Full Name</label>
          <input
            className="border p-1 text-black w-full"
            type="text"
            placeholder="Last name, First name"
            name="fullName"
          />
        </div>

        <div className="flex flex-col w-3/12 gap-2 mb-4">
          
          {/* Birth Date section */}
          <div>
            <label className="block mb-1 text-gray-400">Birth Date</label>
            <input
              className="border p-1 text-black w-full"
              type="text"
              placeholder="YYYY-MM-DD"
              name="DOB"
            />
          </div>

          {/* GPA Section */}
          <div className="mb-4">
          <label className="block mb-1 text-gray-400">Student GPA</label>
                <input
                  className="border p-1 text-black w-full"
                  type="text"
                  placeholder="4.0"
                  name="GPA"
                />
            </div>
          </div>
          <div className="flex bg-orange-500 w-2/12"></div>
        </div>
      </form>
 
        { error && <p className="text-red-700 mt-2">{error}</p>}


      {/* Display Posts */}
      <ul className="mt-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border text-slate-700 bg-slate-400  border-slate-350 p-2 my-2 flex justify-between items-center rounded-lg"
          >
            {edtitingId === post.id ? ( // Check if the post is being edited, if yes display in Edit mode, else display in normal mode
                <div className="flex w-full items-center">
                    <div className="flex-grow-2 w-7/12">
                    <h3>{post.fullName}</h3>
                    <p>DOB: {post.dob}</p>
                    <p>GPA: {post.gpa}</p>
                      <input
                      className="border p-1 mr-2 w-5/6"
                      value={editingFullName}
                      onChange={(e) => setEditingFullName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col w-3/12 gap-1">
                      <input
                      className="border px-1 w-full"
                      value={editingDOB}
                      onChange={(e) => setEditingDOB(e.target.value)}
                      />
                      <input
                      className="border px-1 w-full"
                      value={editingGPA}
                      onChange={(e) => setEditingGPA(e.target.value)}
                      />
                    </div>

                    {/**Save button */}
                    <div className="flex w-2/12 items-center justify-center">
                      <button className="text-white hover:bg-blue-700 hover:border-blue-900 border-gray-600 border-b  bg-blue-500 py-1 px-2 rounded-lg"
                      onClick={() => updatePost(post.id, editingFullName, editingDOB, editingGPA)}
                      >Save</button>
                    </div>
                </div>
            ):( <div className="flex w-full items-center">


                  {/* Displays the post fullName   */}
                  <div className="flex-grow-2 w-7/12">
                    <span className="font-bold p-1">{post.fullName}</span>{" "}
                  </div>
                  <div className="flex flex-col w-3/12 gap-1">
                    <span className="px-1">{post.dob}</span>
                    <span className="px-1">{post.gpa}</span>                    
                  </div>
                  <div className="flex flex-col gap-1 w-2/12 items-center justify-center">
                    
                    {/* Edit Button */}
                    <button
                      className="text-white border-2 hover:bg-blue-700 hover:border-blue-900 border-gray-600 py-1 px-2 rounded-lg text-white px-2 rounded-full ml-2"
                      onClick={() => {
                        setEditingId(post.id); // Setting the editing ID
                        setEditingFullName(post.fullName); // Setting the editing fullName
                        setEditingDOB(post.dob);
                        setEditingGPA(post.gpa);
                      }}>Edit</button>

                    {/* Delete Button */}
                    <button
                      className="border-2 hover:border-rose-900 hover:text-rose-900 text-white px-2 ml-2 rounded-lg"
                      onClick={() => deletePost(post.id)}
                    >Delete</button>
                  </div>

                </div>)}
           
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default Post;
