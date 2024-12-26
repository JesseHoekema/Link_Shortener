<script>
    let url = '';
    let shortLink = '';
  
    const shortenLink = async () => {
      const res = await fetch('/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
  
      if (res.ok) {
        const data = await res.json();
        shortLink = `${window.location.origin}/${data.short}`;
      }
    };
  </script>
  
  <main>
    <div class="container">
      <h1 class="title">Fast. Simple. Reliable.</h1>
      <p class="subtitle">Transform long URLs into short, shareable links instantly.</p>
  
      <form on:submit|preventDefault={shortenLink} class="form" id="iktsForm">
        <input
          type="url"
          placeholder="Paste your URL here..."
          bind:value={url}
          required
          id="input"
        />
        <button type="submit" id="iktsButton">Short</button>
      </form>
  
      {#if shortLink}
        <div class="result">
          <a href={shortLink} target="_blank" class="result">{shortLink}</a>
        </div>
      {/if}
    </div>
  </main>
  
  <style>
  
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    :global(body) {
        font-family: 'Poppins', sans-serif;
        background-color: #ffffff;
        color: #333333;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }

        .container {
            text-align: center;
            width: 100%;
            max-width: 600px;
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            color: #1f2937;
            font-weight: 700;
        }

        p {
            font-size: 1.125rem;
            color: #6b7280;
            margin-bottom: 2rem;
            width: 100%;
        }

        #input {
            width: 100%;
            padding: 12px;
            border-radius: 0.5rem;
            border: 1px solid #e5e7eb;
            margin-bottom: 1rem;
            font-size: 1rem;
            line-height: 1.5;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif; /* Apply Poppins font */
        }

        input:focus {
            border-color: #4f46e5; /* Purple border color on focus */
            outline: none;
        }

        button {
            width: 100%;
            padding: 12px;
            border-radius: 0.5rem;
            border: none;
            background-color: #4f46e5;
            color: #ffffff;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-weight: 400; /* Regular weight for button */
            font-family: 'Poppins', sans-serif; /* Apply Poppins font */
        }

        button:hover {
            background-color: #4338ca;
        }

        .result {
            font-size: 1.125rem;
            color: #4f46e5;
            margin-top: 1rem;
            font-weight: 600;
        }
  </style>
  