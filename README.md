<h1 align="center">🌐 Text Translator App</h1>

<p align="center">
  A fast, modern, and beautifully designed <strong>Text Translator Web Application</strong><br/>
  built using <strong>React + Vite + Tailwind CSS</strong> and powered by <strong>RapidAPI</strong>.
</p>

<hr/>

<h2>🔗 Live Project</h2>
<p>
  👉 <a href="https://text-translator-black.vercel.app" target="_blank">https://text-translator-black.vercel.app</a>
</p>

<h2>📦 Repository</h2>
<p>
  👉 <a href="https://github.com/KausHalJHa-04/TEXT-TRANSLATOR" target="_blank">GitHub Repository</a>
</p>

<hr/>

<h2>🚀 Features</h2>
<ul>
  <li>🌍 Translate text between multiple languages</li>
  <li>⚡ Built using Vite for ultra-fast performance</li>
  <li>🎨 Fully responsive UI created with Tailwind CSS</li>
  <li>🔐 Powered by RapidAPI Translation API</li>
  <li>📱 Smooth experience across all devices</li>
  <li>🧹 Clean and modern user interface</li>
</ul>

<hr/>

<h2>🛠️ Installation & Setup</h2>

<h3>1️⃣ Clone the Repository</h3>
<pre><code>git clone https://github.com/KausHalJHa-04/TEXT-TRANSLATOR.git
cd TEXT-TRANSLATOR
</code></pre>

<h3>2️⃣ Install Dependencies</h3>
<pre><code>npm install
</code></pre>

<h3>3️⃣ Add Environment Variables</h3>
<p>Create a <strong>.env</strong> file in the root directory and add:</p>

<pre><code>VITE_RAPID_API_KEY=your_rapidapi_key_here
VITE_RAPID_API_HOST=text-translator2.p.rapidapi.com
</code></pre>

<h3>4️⃣ Start Development Server</h3>
<pre><code>npm run dev
</code></pre>

<hr/>

<h2>🔌 API Integration Example</h2>

<pre><code>import axios from "axios";

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST
  },
  data: new URLSearchParams({
    source_language: 'en',
    target_language: 'hi',
    text: 'Hello World'
  })
};

axios.request(options)
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
</code></pre>

<hr/>

<h2>📁 Folder Structure</h2>

<pre><code>TEXT-TRANSLATOR/
│── public/
│── src/
│   │── assets/
│   │── App.jsx
│   │── App.css
│   │── index.css
│   │── main.jsx
│── index.html
│── vite.config.js
│── package.json
</code></pre>

<hr/>

<h2>🚀 Deployment (Vercel)</h2>
<ol>
  <li>Push your code to GitHub</li>
  <li>Open Vercel and click <strong>New Project</strong></li>
  <li>Import the repository</li>
  <li>Add environment variables from your <strong>.env</strong> file</li>
  <li>Click <strong>Deploy</strong> 🎉</li>
</ol>

<hr/>

<h2>🤝 Contributing</h2>
<p>Feel free to fork this repository and submit pull requests for improvements.</p>

<hr/>

<h2>📜 License</h2>
<p>This project is licensed under the <strong>MIT License</strong>.</p>
