document.getElementById("blogForm").onsubmit = async function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    await fetch('http://localhost:3000/post-blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    // Reload blogs
    loadBlogs();
  };

  async function loadBlogs() {
    const response = await fetch('http://localhost:3000/get-blogs');
    const blogs = await response.json();
    document.getElementById('blogs').innerHTML = blogs.map(blog => 
      `<div class="blog-post">
        <h2>${blog.title}</h2>
        <p>${blog.content}</p>
      </div>`
    ).join('');
  }

  loadBlogs();  

  