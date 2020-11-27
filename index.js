document.addEventListener('DOMContentLoaded', function(){
    const container = document.querySelector('.main-container')
    const blogInput = document.querySelector('#blogs')
    const demoInput = document.querySelector('#video')
    const edInput = document.querySelector('#ed')
    const workInput = document.querySelector('#work')
    const buttons = document.querySelector('#buttons')

    blogInput.style.color = 'gray'

    buttons.addEventListener('click', (e) => {
        e.target.style.color = 'gray';
        if (e.target.id === 'video'){
            container.innerHTML = myVids
            blogInput.style.color = '#000000';
            edInput.style.color = '#000000';
            workInput.style.color = '#000000';
        } else if (e.target.id === 'blogs'){
            container.innerHTML = myBlogs
            edInput.style.color = '#000000';
            workInput.style.color = '#000000';
            demoInput.style.color = '#000000';
        } else if (e.target.id === 'ed'){
            container.innerHTML = education
            blogInput.style.color = '#000000';
            workInput.style.color = '#000000';
            demoInput.style.color = '#000000';
        } else if (e.target.id === 'work'){
            container.innerHTML = work
            blogInput.style.color = '#000000';
            edInput.style.color = '#000000';
            demoInput.style.color = '#000000';
        }
    })

    const work = `<div id='words'>
            <h3>Fullstack Junior Developer at Set Patrol</h3>
            <p>Building new website with custom landing pages and UX improvements, and backend development.</p>
            <h3>Fullstack Junior Developer at Socha</h3>
            <p>Implemented WebSocket's and Bootsraps on Ruby on Rails app</p>
            <p>Created PostgreSQL database</p>
            <h3>Production and Product Development Manager at Gina Group</h3>
            <p>Worked with buyers and factory owners in China and India to provide a high-quality product at the lowest price possible</p>
            <h3>Production Coordinator at Amazon Apparel</h3>
            <p>Curated apparel department inside of Amazons vendor central</p>
            <h3>Production Coordinator at Mr Noah</h3>
            <p>Engineered detailed spec sheets for over a million dollars worth of apparel</p>
            <h3>Product Development Assistant at Sequin</h3>
            <p>Developed millions of dollars worth of merchandise</p>
            <h3>Product Development Assistant at Alexis Bittar</h3>
            <p>Created internal organizing system for all keep samples</p>
            <h3>Product Development Assistant at Kate Spade</h3>
            <p>Created organizing system for all seasons and styles</p>
            <h3>Jewelry Designer Assistant at ILD</h3>
            <p>Assisted with jewelry creation</p>
        </div>`

    const education = `<div id='words'>
            <h3>Tufts University/School of the Museum of Fine Arts</h3>
            <p>Bachelors Degree in Art History and Fine Arts</p>
            <h3>Flatiron School</h3>
            <p>Full Stack Web Development, Ruby on Rails and JavaScript program</p>
            <h3>Fashion Institute of Technology</h3>
            <p>Fashion Merchandising Buisness</p>
        </div>`

    const myVids = `<div class="video">
    <h3>Flatsy Shops</h3>
        <iframe src="https://www.youtube.com/embed/tzsZxJwcoKI" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br>
        <a href='https://github.com/Liz00000000000/etsy_clone_front_end' target="_blank">React Front End</a>
        <a href='https://github.com/Liz00000000000/etsy_clone_back_end' target="_blank">Rails Back End</a>
    </div>

    <div class="video">
    <h3>Clueless Trivia</h3>
        <a href='https://cluelesstrivia.netlify.app/' target="_blank"><img src="https://i.gifer.com/Ag6K.gif" width="560" height="315" /></a>
        <br>
        <a href='https://cluelesstrivia.netlify.app/' target="_blank">Demo</a>
        <a href='https://github.com/Liz00000000000/Trivia/tree/cluelessbranch' target="_blank">React Code</a>
    </div>
    
    <div class="video">
    <h3>So Not Facebook</h3>
    <iframe src="https://www.youtube.com/embed/euEMBbeC62U" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <br>
    <a href='https://github.com/Liz00000000000/facebookclone_front_end' target="_blank">React Front End</a>
    <a href='https://github.com/Liz00000000000/facebookclone_real_backend' target="_blank">Rails Back End</a>
    </div>
    
    <div class="video">
        <h3>Powerball Trivia Game</h3>
        <a href='https://tenquestiontrivia.netlify.app/' target="_blank"><img src="./Images/Trivia.png" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
        <br>
        <a href='https://tenquestiontrivia.netlify.app/' target="_blank">Demo</a>
        <a hr
        ef='https://github.com/Liz00000000000/Trivia' target="_blank">React Code</a>
    </div>
    <div class="video">
        <h3>90s Style Messenger</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pPGcKVKeSeU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br>
        <a href='https://github.com/Liz00000000000/aol_front_end' target="_blank">React Front End</a>
        <a href='https://github.com/Liz00000000000/aol_backend' target="_blank">Rails Back End</a>
    </div>

    <div class="video">
        <h3>Psychic Reader Game</h3>
        <a href='https://psychicreading.netlify.app/' target="_blank"><img src="https://i.pinimg.com/564x/83/d5/f5/83d5f5a151ed5c3dce3e2d4b5af3a93f.jpg" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
        <br>
        <a href='https://psychicreading.netlify.app/' target="_blank">Demo</a>
        <a href='https://github.com/Liz00000000000/furtune_teller_game' target="_blank">React Code</a>
    </div>

    <div class="video">
    <h3>Flatiron Experience Board Game</h3>
        <iframe src="https://www.youtube.com/embed/DdPL-dB-62A" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br>
        <a href='https://github.com/chefvivica/flatiron_school_experience_front_end-' target="_blank">Vanilla JavaScript Front End</a>
        <a href='https://github.com/chefvivica/flatiron_school_experience-api' target="_blank">Rails Back End</a>
    </div>

    <div class="video">
        <h3>Recipe Share</h3>
        <iframe src="https://www.youtube.com/embed/GsoBDg6MdR8" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br>
        <a href='https://github.com/Liz00000000000/instaRecipe' target="_black">Rails Full Stack</a>
    </div>
    
    <div class="video">
        <h3>Yoga Midnight: Portfolio Site</h3>
        <a href='https://yogamidnight.netlify.app/' target="_blank"><img src="./Images/Matt.png" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
        <br>
        <a href='https://yogamidnight.netlify.app/' target="_black">Website</a>
        <a href='https://github.com/Liz00000000000/yogamidnight' target="_blank">React Code</a>
    </div>

    <div class="video">
    <h3>Covid Quest: A Game Inspired By Quaratine</h3>
        <iframe src="https://www.youtube.com/embed/-kHoIrHSYFo" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br>
        <a href='https://github.com/Liz00000000000/' target="_black">Ruby Terminal</a>
    </div>`

    const myBlogs = `<div class="blog">
        <h3>How To Build A Password Generator</h3>
        <a href="https://elizabeth-michael-karen.medium.com/how-to-build-a-random-password-generator-c049e28909a8" target="_blank"><img src="https://qph.fs.quoracdn.net/main-qimg-1a9dcce2c509f1488442050b81b895ac" alt='password'  width="560" height="315"/></a>
        </div>
    
        <div class="blog">
        <h3>The Island Algorithm Explained</h3>
        <a href="https://medium.com/@elizabeth.michael.karen/the-island-algorithm-explained-60ab6bef682b?sk=9a5350c50a98eb9e7426918b5dfe0227" target="_blank"><img src="https://media1.tenor.com/images/6e8bef91a303b37079ae1c5ed2d0057c/tenor.gif?itemid=5702034" alt='island'  width="560" height="315"/></a>
        </div>

        <div class="blog">
        <h3>Spiral Traverse a 2D Array</h3>
        <a href="https://elizabeth-michael-karen.medium.com/spiral-traverse-a-2d-array-3bc83d775080" target="_blank"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0f4fd342-0aee-43dd-ba32-503a2d20abf1/dduf2o4-13575044-158a-4b10-8619-10979982d77a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGY0ZmQzNDItMGFlZS00M2RkLWJhMzItNTAzYTJkMjBhYmYxXC9kZHVmMm80LTEzNTc1MDQ0LTE1OGEtNGIxMC04NjE5LTEwOTc5OTgyZDc3YS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.chz6hQ7nL0to-h5FYB1Ysxdu_JeBzphDK6zVqQaEBFA" alt="traverse_array" width="560" height="315"/></a>
        </div>

        <div class="blog">
        <h3>How to implement WebSockets</h3>
        <a href="https://medium.com/@elizabeth.michael.karen/how-to-implement-websockets-50923f7251cf" target="_blank"><img src="https://thumbs.gfycat.com/AccurateUncommonCrow-size_restricted.gif" alt='hackers'  width="560" height="315"/></a>
        </div>

        <div class="blog">
        <h3>Linked Lists Explained</h3>
        <a href="https://medium.com/@elizabeth.michael.karen/linked-lists-explained-bd2e2edbde97?sk=94a0f607a97d52faee5dca708f6aaba9" target="_blank"><img src="https://media1.giphy.com/media/2yvMb9LKQBaBW8wYGF/giphy.gif" alt='list'  width="560" height="315"/></a>
        </div>

        <div class='blog'>
        <h3>Max Profits Algorithm Explained</h3>
        <a href='https://elizabeth-michael-karen.medium.com/max-profits-algorithm-7bd33fc8a866' target="_blank"><img src='https://miro.medium.com/max/996/1*c58wd6ajTtIppGtQ4g9Fvg.gif' alt='stocks' width="560" height="315"></a>
        </div>

        <div class="blog">
        <h3>How To Build Fun Trivia Game</h3>
        <a href="https://elizabeth-michael-karen.medium.com/how-to-build-a-fun-trivia-app-in-react-bec656669b1c" target="_blank"><img src="https://media4.giphy.com/media/l378pEUbmKVUvD4oE/giphy.gif" alt='wheel' width="560" height="315"/></a>
        </div>

        <div class="blog">
        <h3>The Significance of Hex Codes</h3>
        <a href="https://medium.com/@elizabeth.michael.karen/the-significance-of-hex-codes-252ef28ad8a7?source=friends_link&sk=3b4cd1331b491829d3880b914e06a745" target="_blank"><img src="https://miro.medium.com/max/2000/1*FgNQuA_jSkLmql0WxNxGSA.gif" alt='hex'  width="560" height="315"/></a>
        </div>

        <div class='blog'>
            <h3>Bubble Sort Explained</h3>
            <a href='https://medium.com/@elizabeth.michael.karen/bubble-sort-explained-692630956b2b' target="_blank"><img src='https://media1.tenor.com/images/c0e2fc335af3285e6baa0a629fa3f05c/tenor.gif?itemid=5449916' alt='bubbles' width="560" height="315"/></a>
        </div>

        <div class='blog'>
        <h3>How to Fetch (bonus Post and Patch)</h3>
        <a href='https://elizabeth-michael-karen.medium.com/how-to-fetch-bonus-post-and-patch-254ac64f7451' target='_blank'><img src="https://media4.giphy.com/media/5G98t8QjqBLK8/200.gif" alt="fetch" width="560" height="315"/></a>
        </div>

        <div class='blog'>
        <h3>React for Dummies</h3>
        <a href='https://elizabeth-michael-karen.medium.com/react-for-dummies-40f62f1cb874' target='_blank'><img src='https://media3.giphy.com/media/l0HlIHAGwsQRwyeXK/giphy.gif' alt='teacher' width="560" height="315"></a>
        </div>

        <div class="blog">
            <h3>Binary Search Explained</h3> 
            <a href='https://medium.com/@elizabeth.michael.karen/binary-search-explained-b3c33d679dec' target="_blank"><img src="https://images.ctfassets.net/j0hmm71qn9y2/6z0UVKYPcE1BNY04iKxUEy/06b098484e982633b7f15969da85fa1c/Typeform-Blog-Gifs-Inline05.gif?w=640" width="560" height="315"></a>
        </div>

        <div class='blog'>
        <h3>Fibonacci Sequence Explained</h3>
        <a href="https://medium.com/@elizabeth.michael.karen/the-fibonacci-sequence-explained-f1ba0191dcf0?sk=5cc2e3d3ce0a9bc9f930059f0257eccb" target="_blank"><img src='https://49.media.tumblr.com/tumblr_m8fvvcmL1l1rchtzko1_500.gif' alt='fib' width="560" height="315"/></a>
        </div>

        <div class="blog">
            <h3>Case Statements in Ruby</h3> 
            <a href='https://medium.com/@elizabeth.michael.karen/case-statements-in-ruby-1034cb9a4414' target="_blank"><img src="https://media2.giphy.com/media/KnOVBRqItfXGg/giphy.gif" width="560" height="315"></a>
        </div>

        <div class="blog">
        <h3>How I passed every code challenge on the first try!</h3>
        <a href='https://medium.com/@elizabeth.michael.karen/i-passed-every-coding-challenge-at-flatiron-school-on-the-first-try-heres-how-b11dfc19e6ad' target="_blank"><img src="https://miro.medium.com/max/1000/1*0uJ7juSeQnjsUC4UcmQJcA.gif" width="560" height="315"></a>
        </div>

        <div class='blog'>
        <h3>The Future of Wearable Tech</h3>
        <a href="https://medium.com/@elizabeth.michael.karen/the-future-of-wearable-tech-is-fitbit-only-the-beginning-9cc9fce0b31d?sk=f3caf8dbb8472daf9bbcb67968a35c7" target="_blank"><img src="https://i.gifer.com/U0b.gif" width="560" height="315"></a>
        </div>

        <div class="blog">
            <h3>Replacing While loops</h3>
            <a href='https://medium.com/@elizabeth.michael.karen/replacing-while-loops-in-ruby-909994622723' target="_blank"><img src="https://media1.giphy.com/media/tKIt3zenrB7CgdRlI2/giphy.gif" width="560" height="315"></a>
        </div>
        <div class="blog">
            <h3>Splice, Slice, and Split</h3> 
            <a href='https://medium.com/@elizabeth.michael.karen/splice-slice-and-split-in-javascript-acbda1a09e75' target="_blank"><img src="https://www.pajiba.com/assets_c/2018/09/sliceposter%202%20%281%29-thumb-700x618-201648.jpg" width="560" height="315"></a>
        </div>`

 })
