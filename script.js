function showSection(section) {
  const content = document.getElementById("content");

  if (section === "projects") {
    content.innerHTML = `
      <h2>Projects</h2>
      <p>Project 1 - Description</p>
      <p>Project 2 - Description</p>
    `;
  } 
  else if (section === "skills") {
    content.innerHTML = `
      <h2>Skills</h2>
      <p>HTML, CSS, JavaScript, React</p>
    `;
  } 
  else if (section === "contact") {
    content.innerHTML = `
      <h2>Contact</h2>
      <p>Email: your@email.com</p>
    `;
  } 
  else {
    content.innerHTML = `
      <h2>About Me</h2>
      <p>I am a passionate developer creating modern web experiences.</p>
    `;
  }
}
